class Sorter {
  // collection: number[]; // field definition

  // constructor(collection: number[]) {
  //   this.collection = collection; // assignment
  // }

  // equivalent to above code
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if collection is an array of numbers, do this:
        // use type guard - checks if array
        if (this.collection instanceof Array) {
          // collection === number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const leftSide = this.collection[j];
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
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
