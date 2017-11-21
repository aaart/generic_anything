import Vue from "vue";
import { Provide } from 'vue-inversify-decorator'
import { container } from "inversify.config"
import { Component } from 'vue-property-decorator';

@Component({}) @Provide(container) class VueApp extends Vue {};

export default VueApp;