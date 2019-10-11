export class Hero {
  id: number;
  name: string;
  image: string;
  history: string;
  status: string;
  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }
}
