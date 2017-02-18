# Reshape Markdown [<img src="https://jonathantneal.github.io/reshape-md/logo.svg" alt="Reshape" width="90" height="90" align="right">][Reshape]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[Reshape Markdown] lets you easily use [Markdown] in HTML.

```html
<!-- before -->
<h1 md>Reshape **Markdown**</h1>
<div md>It knows *when* to work.</div>
<p md>It knows *how* to work.</p>
<md>It just [works](https://github.com/jonathantneal/reshape-md).</md>

<!-- after -->
<h1>Reshape <strong>Markdown</strong></h1>
<div><p>It knows <em>when</em> to work.</p></div>
<p>It knows <em>how</em> to work.</p>
<p>It just <a href="https://github.com/jonathantneal/reshape-md">works</a>.</p>
```

## Usage

Add [Reshape] and [Reshape Markdown] to your build tool:

```bash
npm install reshape reshape-md --save-dev
```

Use [Reshape Markdown] as a plugin:

```js
reshape({
	plugins: [
		plugin(/* options */)
	]
}).process(YOUR_HTML);
```

## Options

#### elements

Type: `Array`  
Default: `[ "markdown", "md" ]`

The list of elements which will be replaced with rendered Markdown.

#### attrs

Type: `Array`  
Default: `[ "markdown", "md" ]`

The list of attributes on elements which will be replaced with rendered Markdown.

#### md

Type: `Object`  
Default: `{}`

The hash of options applied to [marked], the tool used to parse [Markdown].

[npm-url]: https://www.npmjs.com/package/reshape-md
[npm-img]: https://img.shields.io/npm/v/reshape-md.svg
[cli-url]: https://travis-ci.org/jonathantneal/reshape-md
[cli-img]: https://img.shields.io/travis/jonathantneal/reshape-md.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/reshape-md.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/reshape/reshape
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[Reshape Markdown]: https://github.com/jonathantneal/reshape-md
[Reshape]: https://github.com/reshape/reshape
[Markdown]: https://daringfireball.net/projects/markdown/syntax
[marked]: https://github.com/chjj/marked
