// tooling
const marked = require('marked');
const parser = require('reshape-parser')

// match inline elements
const inlineElementMatch = /^(abbr|acronym|b|bdo|big|button|cite|dfn|em|h1|h2|h3|h4|h5|h6|i|input|kbd|p|q|samp|select|small|span|strong|sub|sup|textarea|time|var)$/i;

// match markdown elements
const defaults = {
	attrs: ['markdown', 'md'],
	elements: ['markdown', 'md']
};

// plugin
module.exports = ({ attrs = defaults.attrs, elements = defaults.elements, md = {} } = {}) => {
	return (ast, reshape) => {
		walk({
			content: ast
		}, (node) => {
			if (node.type === 'tag') {
				// is markdown element
				const isMarkdownElement = elements.includes(node.name.toLowerCase());

				// has markdown attribute
				const hasMarkdownAttribute = node.attrs && attrs.some(
					(attr) => attr in node.attrs
				);

				if (isMarkdownElement || hasMarkdownAttribute) {
					// remove md attribute
					if (hasMarkdownAttribute) {
						attrs.some(
							(attr) => {
								delete node.attrs[attr]
							}
						);
					}

					// is inline element
					const isInlineElement = inlineElementMatch.test(node.name);

					// parsed markdown node
					const markedNode = parser(
						marked(
							reshape.generator(
								node.content
							)(),
							md
						).trim()
					);

					// has wrapping <p> element
					const hasWrappingParagraph = markedNode[0].type === 'tag' && markedNode[0].name === 'p';

					if (isMarkdownElement) {
						// replace node with parsed markdown node
						node.parent.content.splice(
							node.parent.content.indexOf(node),
							1,
							markedNode[0]
						);
					} else {
						// replace content with conditionally <p> stripped markdown node
						node.content = isInlineElement && hasWrappingParagraph ? markedNode[0].content : markedNode;
					}
				}
			}
		});

		return ast;
	};
};

// walk node
function walk(node, fn) {
	// run callback
	fn(node);

	// content
	const content = node.content;

	// for each content element
	if (Array.isArray(content)) {
		const length = content.length;

		for (let index = -1; ++index < length;) {
			content[index].parent = node;

			walk(content[index], fn);
		}
	}
}
