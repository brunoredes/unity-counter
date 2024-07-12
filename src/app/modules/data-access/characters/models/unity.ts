export type Unity = {
  [cost: number]: Character[];
};

export type Unities = {
  [key: number]: {
    name: string;
    traits: string[];
    photo: string;
  }[];
};

export type Character = { name: string; traits: string[]; photo: string };
