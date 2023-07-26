import Plugin from '@swup/plugin';

export default class PluginName extends Plugin {
	name = 'PluginName';

	/* Version requirements */
	requires = { swup: '>=4' };

	/* Default options */
	defaults = {};

	/**
	 * Executed each time an instance of this plugin is created.
	 * Can be used for things that don't rely on access to the swup instance.
	 */
	constructor(options = {}) {
		super();

		/* Merge default options and user options */
		this.options = { ...this.defaults, options };
	}

	/**
	 * Executed when swup is initialized with this plugin.
	 * You can use this.swup here to access the swup instance.
	 */
	mount() {
		/* this.swup.hooks.on('link:click', this.handleLinkClick); */
	}

	/**
	 * Executed when a swup instance with this plugin is disabled.
	 * You can use this.swup here to access the swup instance.
	 * Make sure to undo any DOM changes and remove event listeners here.
	 */
	unmount() {
		/* this.swup.hooks.off('link:click', this.handleLinkClick) */
	}
}
