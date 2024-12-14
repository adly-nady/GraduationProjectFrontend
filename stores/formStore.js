// stores/formStore.js
import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', {
    state: () => ({
        forms: {}, // Object to hold forms with their configurations and values
        
    }),
    actions: {
        // Initialize a new form
        initializeForm(formKey, inputsConfig) {
            console.log('Initializing form with key:', formKey);
            console.log('Inputs config:', inputsConfig);
            this.forms[formKey] = {
                inputs: inputsConfig,
                values: inputsConfig.reduce((acc, input) => {
                    if (input.name) {
                        acc[input.name] = ''; // Only process valid names
                    }
                    return acc;
                }, {}),
            };
        },
        // Update value for a specific form
        updateFormValue(formKey, inputName, value) {
            if (this.forms[formKey]) {
                this.forms[formKey].values[inputName] = value;
            }
        },
    },
});
