//Fuzzy interface to API responses.
export interface CharactersResponse {
    name:             string;
    alternate_names:  string[];
    species:          string;
    gender:           Gender;
    house:            House;
    dateOfBirth:      string;
    yearOfBirth:      number | string;
    wizard:           boolean;
    ancestry:         string;
    eyeColour:        string;
    hairColour:       string;
    wand:             Wand;
    patronus:         string;
    hogwartsStudent:  boolean;
    hogwartsStaff:    boolean;
    actor:            string;
    alternate_actors: string[];
    alive:            boolean;
    image:            string;
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export enum House {
    Empty = "",
    Gryffindor = "Gryffindor",
    Huffleluff = "Huffleluff",
    Hufflepuff = "Hufflepuff",
    Ravenclaw = "Ravenclaw",
    Slytherin = "Slytherin",
    Slythetin = "Slythetin",
}

export interface Wand {
    wood:   Wood;
    core:   Core;
    length: number | string;
}

export enum Core {
    DragonHeartstring = "dragon heartstring",
    Empty = "",
    PhoenixFeather = "phoenix feather",
    UnicornHair = "unicorn hair",
    UnicornTailHair = "unicorn tail-hair",
}

export enum Wood {
    Ash = "ash",
    Cherry = "cherry",
    Empty = "",
    Hawthorn = "hawthorn",
    Holly = "holly",
    Vine = "vine",
    Willow = "willow",
    Yew = "yew",
}

//Interface created to obtain only the attributes requested in the challenge.
export interface Character {
    name: string;
    patronus: string;
    age: number;
    image: string;
}
