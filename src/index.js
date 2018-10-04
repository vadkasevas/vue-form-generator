import component from "./formGenerator.vue";
import * as schema from "./utils/schema.js";
import validators from "./utils/validators.js";
import abstractField from "./fields/abstractField.js";

const install = (Vue, options = {}) => {
	if (options.fields) {
		options.fields.forEach((field) => {
			if (typeof field.name !== "undefined") {
				Vue.component(field.name, field);
			}
		});
	}
	Vue.component("VueFormGenerator", component);
};

export default {
	component,
	schema,
	validators,
	abstractField,
	install
};
