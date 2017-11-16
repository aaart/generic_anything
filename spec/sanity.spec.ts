import Navigation from './../app/components/general/Navigation'
import { expect } from "chai"

describe('Navigation.vue', () => {
  it('should render correct contents', () => {
    const constructor = Navigation;
    const vm = new constructor();
    expect(vm.menuOpened).to.be.false;
  })
})