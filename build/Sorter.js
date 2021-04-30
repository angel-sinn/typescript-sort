"use strict";
// interface vs abstract class:
// interface - contract between diff classes, use when very diff objects that we want to work together (loose coupling)
// abstract classes = contract between diff classes, use when trying to build up a definition of an object (strong coupling)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// make Sorter an abstract class
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
