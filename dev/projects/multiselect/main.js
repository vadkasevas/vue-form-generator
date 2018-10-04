import Vue from "vue";

import VueFormGenerator from "@";
import { fieldVueMultiSelect } from "@/utils/fieldsLoader.js";
Vue.use(VueFormGenerator, {
	fields: [fieldVueMultiSelect]
});

import VueHighlightJS from "vue-highlightjs";
Vue.use(VueHighlightJS);

import App from "./app.vue";

new Vue({
	render: (h) => h(App)
}).$mount("#app");
