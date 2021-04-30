export class NumbersCollection {
  constructor(public data: number[]) {}

  // set up accessor to get length of array without calling method
  get length(): number {
    return this.data.length;
  }

  // different methods for customization
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
