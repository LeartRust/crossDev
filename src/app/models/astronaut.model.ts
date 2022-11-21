export interface Astronaut {
  message: string;
  people:  Person[];
  number:  number;
}

export interface Person {
  name:  string;
  craft: string;
}