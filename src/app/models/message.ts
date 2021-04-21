export class Message {
  constructor(
    public text: string = '',
    public readonly created: number = Date.now()) {
  }

  public toString(): string {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}
