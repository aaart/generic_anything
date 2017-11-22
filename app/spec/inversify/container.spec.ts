import { expect } from "chai"

import Pet from "src/poc/Pet"
import Cat from "src/poc/Cat"
import Dog from "src/poc/Dog"

import { container } from "inversify.config";
import SERVICE_IDENTIFIER from "ServiceIdentifier"

describe('container', () => {
    it('Container defaults', () => {
        var pet = container.get<Pet>(SERVICE_IDENTIFIER.PET);
        expect(pet.MySound).to.equal("Meow!");
    })
});

describe('container', () => {
    it('Container rebinding', () => {
        container.rebind<Pet>(SERVICE_IDENTIFIER.PET).to(Dog);
        var pet = container.get<Pet>(SERVICE_IDENTIFIER.PET);
        expect(pet.MySound).to.equal("Woff!");
    })
});