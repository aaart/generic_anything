import { expect } from "chai"

import NavigationViewModel from './../../app/components/general/Navigation'

describe('Navigation.vue', () => {
  it('should have default values.', () => {
    const vm = new NavigationViewModel();
    expect(vm.menuOpened).to.be.false;
  })
});

describe("Navigation.vue", () => {
  it("should toggle menu opened attribute.", () => {
    const vm = new NavigationViewModel();
    vm.toggleMenu();
    expect(vm.menuOpened).to.be.true;
  })
});

describe("Navigation.vue", () => {
  it("should reset menu opened attribute.", () => {
    const vm = new NavigationViewModel();
    vm.toggleMenu();
    vm.toggleMenu();
    expect(vm.menuOpened).to.be.false;
  })
});

