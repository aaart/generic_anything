import { expect } from "chai"
import { mountApp } from "specTools"

import PoCPage from 'src/components/routed/PoCPage.vue'

describe('PoCPage.vue', () => {
    it('Container default bindings.', () => {
        var vm = mountApp({
            template: "<pocpage />",
            components: { "pocpage": PoCPage }
        });
        expect(vm.$el.textContent).be.equal("Meow!");

    })
});
