// interface vs abstract class:
// interface - contract between diff classes, use when very diff objects that we want to work together (loose coupling)
// abstract classes = contract between diff classes, use when trying to build up a definition of an object (strong coupling)

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// make Sorter an abstract class
export abstract class Sorter {
  // don't need to have these declared within the Sorter class, but will promise that when we eventually inherit from Sorter, child class will implement/have the following:
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
