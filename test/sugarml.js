module.exports = {
    source: `main
	h1(md) Reshape **Markdown**
	div(md) It knows *when* to work.
	p(md) It knows *how* to work.
	md.
		It just [works](https://github.com/jonathantneal/posthtml-md).`,
    expect: '<main>' +
	'<h1>Reshape <strong>Markdown</strong></h1>' +
	'<div><p>It knows <em>when</em> to work.</p></div>' +
	'<p>It knows <em>how</em> to work.</p>' +
	'<p>It just <a href="https://github.com/jonathantneal/posthtml-md">works</a>.</p>' +
'</main>'
};
