"use strict";
var Sorter = /** @class */ (function () {
    // collection: number[]; // field definition
    // constructor(collection: number[]) {
    //   this.collection = collection; // assignment
    // }
    // equivalent to above code
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if collection is an array of numbers, do this:
                // use type guard - checks if array
                if (this.collection instanceof Array) {
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftSide = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftSide;
                    }
                }
                // if collection is a string, do this logic instead:
                // use type guard - checks if string
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
