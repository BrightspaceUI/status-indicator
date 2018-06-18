# d2l-status-indicator
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/status-indicator)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component for D2L status indicator.

![screenshot of status-indicator component](/default-indicator.png)

For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

`d2l-status-indicator` can be installed from [Bower][bower-url]:
```shell
bower install d2l-status-indicator
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-status-indicator.html`:
```html
<head>
  <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="../d2l-status-indicator/d2l-status-indicator.html">
</head>
```

A `<d2l-status-indicator>` custom element can now be used in your application by specifying one of the following states: `default`, `success`, `alert`, or `none` as well as the text to display within the indicator.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-status-indicator.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
	  d2l-status-indicator {
		  margin-bottom: 10px;
	  }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-status-indicator state="default" text="Due Today"></d2l-status-indicator>
<d2l-status-indicator state="success" text="complete"></d2l-status-indicator>
<d2l-status-indicator state="alert" text="overdue"></d2l-status-indicator>
<d2l-status-indicator state="none" text="closed"></d2l-status-indicator>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-status-indicator
[bower-image]: https://badge.fury.io/bo/d2l-status-indicator.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/status-indicator
[ci-image]: https://travis-ci.org/BrightspaceUI/status-indicator.svg?branch=master
