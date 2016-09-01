export class Challenge {
  constructor(
    public id: number,
    public content: string,
    public level: number
  ) {
  }

  public nextLevel() {
    if (this.level == 9) {
      return 9;
    } else {
      return this.level + 1;
    }
  }

  public previousLevel() {
    if (this.level == 1) {
      return 1;
    } else {
      return this.level - 1;
    }
  }
}
