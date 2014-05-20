# Knockout Toggle Binding

> Knockout binding to toggle boolean view model properties.

## Install with [Bower](http://bower.io/)

```
bower install knockout-toggle
```

Then add `knockout.toggle.js` to your project.

## How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then use it like so:

```html
<button data-bind="toggle: myProp">Toggle the thing</button>
<span data-bind="visible: myProp">It's ON</span>
```