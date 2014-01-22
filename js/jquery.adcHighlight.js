/**
 * jQuery adcHighlight Plugin v1.0.0
 * https://github.com/adclick/jquery-adcHighlighter
 *
 * Copyright 2014 Adclick Lda
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var adc_highlight_last_css_class = "highlight";

(function($) {
    /**
     * Apply highlighting to the given 'text'
     *
     * @param options (required) 'text': the text to highlight; (optional) 'cssClass' css class to use, (optional) 'caseSensitive' case sensitive search
     * @returns Modified object
     */
    $.fn.adcHighlight = function(options) {
        var settings = $.extend({
            text: "",
            cssClass: "highlight",
            caseSensitive: false
        }, options);

        adc_highlight_last_css_class = settings.cssClass;

        function innerHighlight(node, pat, cssClass, caseSensitive) {
            var skip = 0;

            if (false === caseSensitive)
            {
                pat = pat.toUpperCase();
            }

            if (node.nodeType == 3) {
                var pos;
                if (true === caseSensitive)
                {
                    pos = node.data.indexOf(pat);
                } else {
                    pos = node.data.toUpperCase().indexOf(pat);
                }

                if (pos >= 0) {
                    var spannode = document.createElement('span');
                    spannode.className = cssClass;
                    var middlebit = node.splitText(pos);
                    var endbit = middlebit.splitText(pat.length);
                    var middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    skip = 1;
                }
            }
            else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; ++i) {
                    i += innerHighlight(node.childNodes[i], pat, cssClass, caseSensitive);
                }
            }
            return skip;
        }

        return this.length && settings.text && settings.text.length ? this.each(function() {
            innerHighlight(this, settings.text, settings.cssClass, settings.caseSensitive);
        }) : this;

    };

    /**
     * Removes adcHighlight
     *
     * @param options optional 'cssClass'. If not given, plugin will use the last used highlight class
     * @returns Modified object
     */
    $.fn.adcRemoveHighlight = function(options) {
        var settings = $.extend({
            cssClass: adc_highlight_last_css_class,
        }, options);

        var span_to_find = "span." + settings.cssClass;

        return this.find(span_to_find).each(function() {
            this.parentNode.firstChild.nodeName;
            with (this.parentNode) {
                replaceChild(this.firstChild, this);
                normalize();
            }
        }).end();
    };

}(jQuery));
