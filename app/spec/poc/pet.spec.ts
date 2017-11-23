import { expect } from "chai"
import { mountApp } from "specTools"

import PoCPage from 'pages/pocPage/PoCPage.vue'

describe('PoCPage.vue', () => {
    it('Container default bindings.', () => {
        var vm = mountApp({
            template: "<pocpage />",
            components: { "pocpage": PoCPage }
        });
        expect(vm.$el.textContent).be.equal("Meow!");

    })
});
