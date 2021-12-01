export interface CharactersResponse {
    name:             string;
    alternate_names:  string[];
    species:          Species;
    gender:           Gender;
    house:            House;
    dateOfBirth:      DateOfBirth;
    yearOfBirth:      number | string;
    wizard:           boolean;
    ancestry:         Ancestry;
    eyeColour:        EyeColour;
    hairColour:       HairColour;
    wand:             Wand;
    patronus:         Patronus;
    hogwartsStudent:  boolean;
    hogwartsStaff:    boolean;
    actor:            string;
    alternate_actors: string[];
    alive:            boolean;
    image:            string;
}

export enum Ancestry {
    Empty = "",
    HalfBlood = "half-blood",
    Muggleborn = "muggleborn",
    PureBlood = "pure-blood",
}

export enum DateOfBirth {
    Empty = "",
    The01031980 = "01-03-1980",
    The05061980 = "05-06-1980",
    The11081981 = "11-08-1981",
    The13021981 = "13-02-1981",
    The19091979 = "19-09-1979",
    The30071980 = "30-07-1980",
    The31071980 = "31-07-1980",
}

export enum EyeColour {
    Black = "black",
    Blue = "blue",
    Brown = "brown",
    Empty = "",
    Green = "green",
    Grey = "grey",
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export enum HairColour {
    Black = "black",
    Blond = "blond",
    Blonde = "blonde",
    Brown = "brown",
    Empty = "",
    Red = "red",
    Sandy = "sandy",
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

export enum Patronus {
    Boar = "boar",
    Empty = "",
    Hare = "hare",
    Horse = "horse",
    JackRussellTerrier = "Jack Russell terrier",
    Otter = "otter",
    Stag = "stag",
    Swan = "swan",
}

export enum Species {
    Human = "human",
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

//interface created to obtain only the attributes requested in the challenge
export interface Character {
    name: string;
    patronus: string;
    age: number;
    image: string;
}
