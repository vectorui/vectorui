// VectorUI.js 0.0.0-alpha0
//
// Copyright 2015 Karl-Heinz Ruskowski
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function (root, factory) {
    // AMD support
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return factory(root);
        });

    } else { factory(root); }

} (this, function(window) {

 var Vui = (function() {
    Vui.version = '0.0.0-alpha0';

    function Vui() {
        return new Plane();
    }

    Vui.toString = function() {
        return 'VectorUI v' + this.version;
    };

    function Plane() {
        return {};
    }

    return Vui;

 })();

 window.Vui = Vui;
 return Vui;

}));
