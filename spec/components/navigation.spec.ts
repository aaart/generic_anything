import Navigation from './../../app/components/general/Navigation'
import { expect } from "chai"

describe('Navigation.vue', () => {
  it('should have default values', () => {
    const vm = new Navigation();
    expect(vm.menuOpened).to.be.false;
  })
})