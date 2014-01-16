jquery-adcHighlighter v1.0.0
=====================

Easily highlight terms on an HTML document

## Basic Usage

```html
<p id="intro">The Adclick Group has over 60 professionals, working in Portugal and Brasil, who follow the values that move us forward: passion, creativity, relevance and sustainability.</p>

<style>.highlight { background-color: yellow; }</style>
<script>
$(function() {
    $("#intro").adcHighlight({ text: 'Adclick' });
});
</script>
```

## Options

The following options are available:
- **text**  text pattern to highlight
- **cssClass**  css class to use on the span wrapper
- **caseSensitive** self explanatory, I hope

## Advanced Usage (with options)

```html
<p>The two standard gender symbols denoting Male &#9794; and Female &#9792; are derived from astrological symbols, denoting the classical planets Mars and Venus, respectively.</p>

<style>
    .highlight-male { color: #909fc5; }
    .highlight-female { color: #c5909a; }
</style>
<script>
$(function() {
    $("p").adcHighlight({ text: 'Female', caseSensitive: true, cssClass: 'highlight-female' });
    $("p").adcHighlight({ text: 'Male', caseSensitive: true, cssClass: 'highlight-male' });
});
</script>

```


## Thanks

This plugin is based by "highlight v4" by [Johann Burkard](http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html).
