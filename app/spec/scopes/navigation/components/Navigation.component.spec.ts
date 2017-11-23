import Vue from "vue";
import VueRouter from "vue-router";
import { expect } from "chai"
import { mountApp } from "specTools"

import Navigation from 'scopes/navigation/components/Navigation.vue'

describe('Navigation.vue', () => {
    it('Navigation element exists.', () => {
        var vm = mountApp({
            template: "<navigation />",
            components: { "navigation": Navigation }
        });
        expect(vm.$el).to.not.be.null;

    })
});

describe('Navigation.vue', () => {
    it('Default local navigation is not empty.', () => {
        var vm = mountApp({
            template: "<navigation />",
            components: { "navigation": Navigation }
        });
        expect(vm.$el.querySelector(".menu > ul > li")).to.not.be.null;

    })
});
