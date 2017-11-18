import { injectable } from "inversify"

export default interface Pet {
    MakeNoise(): void;
}