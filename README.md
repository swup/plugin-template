[comment]: CLI-remove-start

# Swup Plugin Template

Best-practice template for creating custom [swup](https://swup.js.org/) plugins.

The easiest way to create a plugin from this template is using swup's interactive command-line
interface [@swup/cli](https://github.com/swup/cli). It will clone the repo and correctly populate
the package info and readme with the provided name. Read on below for manual instructions.

```sh
# Install CLI
npm install -g @swup/cli

# Create a new plugin from the template
swup create MyCustomPlugin
```

## Instructions

1. Clone this repository.
2. Update the package name in `package.json`. Make sure to follow the format `swup-[plugin name]-plugin`.
3. Update the description, repository url and author in `package.json`.
4. Add functionality to your plugin in `src/index.js`. It must be a class extending `@swup/plugin`. Make sure to update the class name as well as the `name` property in PascalCase:
`swup-name-plugin` → `SwupNamePlugin`
5. Update this readme and document the features of your plugin. Make sure to replace each `SwupNamePlugin` placeholder with the actual name of your plugin in PascalCase.
6. Run `npm run build` to build a transpiled dist version of the plugin. The build command is run before publishing to npm automatically.
7. Publish your plugin to npm using `npm publish`. This assumes you have an npm account and are logged in via their CLI.

## Tips

- Check out existing plugins before creating a new one.
- The swup instance is automatically assigned to the plugin instance and can be accessed at `this.swup` in the `mount`/`unmount` methods.
- If you think your new plugin has broad appeal and should live in the `@swup` org as an official plugin, get in touch at gmarcuk@gmail.com.

---

[comment]: CLI-remove-end

# Swup [Plugin Name] Plugin

A [swup](https://swup.js.org/) plugin for [purpose].

[Describe the basic functionality of this plugin]

## Installation

Install the plugin from npm and import it into your bundle.

```bash
npm install swup-[plugin-name]-plugin
```

```js
import Swup[PluginName]Plugin from 'swup-[plugin-name]-plugin';
```

Or include the minified production file from a CDN:

```html
<script src="https://unpkg.com/swup-[plugin-name]-plugin@latest"></script>
```

## Usage

To run this plugin, include an instance in the swup options.

```javascript
const swup = new Swup({
  plugins: [new Swup[PluginName]Plugin()]
});
```
