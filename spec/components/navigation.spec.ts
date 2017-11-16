import { expect } from "chai"

import Navigation from './../../app/components/general/Navigation'

describe('Navigation.vue', () => {
  it('should have default values.', () => {
    const vm = new Navigation();
    expect(vm.menuOpened).to.be.false;
  })
});

describe("Navigation.vue", () => {
  it("should toggle menu opened attribute.", () => {
    const vm = new Navigation();
    vm.toggleMenu();
    expect(vm.menuOpened).to.be.true;
  })
});

describe("Navigation.vue", () => {
  it("should reset menu opened attribute.", () => {
    const vm = new Navigation();
    vm.toggleMenu();
    vm.toggleMenu();
    expect(vm.menuOpened).to.be.false;
  })
});

