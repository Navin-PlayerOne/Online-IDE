define("ace/theme/kr_theme.css",["require","exports","module"], function(require, exports, module){module.exports = ".ace-kr-theme .ace_gutter {\n  background: #1c1917;\n  color: #FCFFE0\n}\n\n.ace-kr-theme .ace_print-margin {\n  width: 1px;\n  background: #1c1917\n}\n\n.ace-kr-theme {\n  background-color: #0B0A09;\n  color: #FCFFE0\n}\n\n.ace-kr-theme .ace_cursor {\n  color: #FF9900\n}\n\n.ace-kr-theme .ace_marker-layer .ace_selection {\n  background: rgba(170, 0, 255, 0.45)\n}\n\n.ace-kr-theme.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #0B0A09;\n}\n\n.ace-kr-theme .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-kr-theme .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(255, 177, 111, 0.32)\n}\n\n.ace-kr-theme .ace_marker-layer .ace_active-line {\n  background: #38403D\n}\n\n.ace-kr-theme .ace_gutter-active-line {\n  background-color : #38403D\n}\n\n.ace-kr-theme .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(170, 0, 255, 0.45)\n}\n\n.ace-kr-theme .ace_invisible {\n  color: rgba(255, 177, 111, 0.32)\n}\n\n.ace-kr-theme .ace_keyword,\n.ace-kr-theme .ace_meta {\n  color: #949C8B\n}\n\n.ace-kr-theme .ace_constant,\n.ace-kr-theme .ace_constant.ace_character,\n.ace-kr-theme .ace_constant.ace_character.ace_escape,\n.ace-kr-theme .ace_constant.ace_other {\n  color: rgba(210, 117, 24, 0.76)\n}\n\n.ace-kr-theme .ace_invalid {\n  color: #F8F8F8;\n  background-color: #A41300\n}\n\n.ace-kr-theme .ace_support {\n  color: #9FC28A\n}\n\n.ace-kr-theme .ace_support.ace_constant {\n  color: #C27E66\n}\n\n.ace-kr-theme .ace_fold {\n  background-color: #949C8B;\n  border-color: #FCFFE0\n}\n\n.ace-kr-theme .ace_support.ace_function {\n  color: #85873A\n}\n\n.ace-kr-theme .ace_storage {\n  color: #FFEE80\n}\n\n.ace-kr-theme .ace_string {\n  color: rgba(164, 161, 181, 0.8)\n}\n\n.ace-kr-theme .ace_string.ace_regexp {\n  color: rgba(125, 255, 192, 0.65)\n}\n\n.ace-kr-theme .ace_comment {\n  font-style: italic;\n  color: #706D5B\n}\n\n.ace-kr-theme .ace_variable {\n  color: #D1A796\n}\n\n.ace-kr-theme .ace_list,\n.ace-kr-theme .ace_markup.ace_list {\n  background-color: #0F0040\n}\n\n.ace-kr-theme .ace_variable.ace_language {\n  color: #FF80E1\n}\n\n.ace-kr-theme .ace_meta.ace_tag {\n  color: #BABD9C\n}\n\n.ace-kr-theme .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-kr-theme .ace_indent-guide-active {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC\") right repeat-y;\n}\n";

});

define("ace/theme/kr_theme",["require","exports","module","ace/theme/kr_theme.css","ace/lib/dom"], function(require, exports, module){exports.isDark = true;
exports.cssClass = "ace-kr-theme";
exports.cssText = require("./kr_theme.css");
var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);

});                (function() {
                    window.require(["ace/theme/kr_theme"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            