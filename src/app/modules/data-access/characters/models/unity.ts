export type Unity = {
  [cost: number]: Character[];
};

export type Unities = Unity[];

export type Character = { name: string; traits: string[]; photo: string, timesBought: number };
