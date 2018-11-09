/**
`d2l-status-indicator`
Polymer-based web component for a D2L status indicator
@demo demo/index.html
*/

import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-colors/d2l-colors.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-status-indicator">
	<template strip-whitespace="">
		<style>
			:host {
				border-color: var(--d2l-color-celestine);
				border-radius: 0.6rem;
				border-style: solid;
				border-width: 1px;
				color: var(--d2l-color-celestine);
				cursor: default;
				display: inline-block;
				font-size: 0.6rem;
				font-weight: bold;
				line-height: 1;
				overflow: hidden;
				padding: 2px 10px 2px 10px;
				text-transform: uppercase;
				text-overflow: ellipsis;
				vertical-align: middle;
				white-space: nowrap;
			}

			:host([hidden]) {
				display: none;
			}
			:host([state="success"]) {
				border-color: var(--d2l-color-olivine-minus-1);
				color: var(--d2l-color-olivine-minus-1);
			}
			:host([state="alert"]) {
				border-color: var(--d2l-color-cinnabar);
				color: var(--d2l-color-cinnabar);
			}
			:host([state="none"]),
			:host([state="null"]) {
				border-color: var(--d2l-color-ferrite);
				color: var(--d2l-color-ferrite);
			}
		</style>
		[[text]]
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-status-indicator',
	properties: {
		/**
		 * State of status indicator to display. Valid values are: 'default', 'success', 'alert', and 'none'.
		 */
		state: {
			type: String,
			value: 'default',
			reflectToAttribute: true
		},
		/**
		 * Text for status indicator.
		 */
		text: {
			type: String,
			value: null
		}
	}
});
