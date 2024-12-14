import { defineStore } from 'pinia';

export const useToggleStore = defineStore('toggleStore', {
    state: () => ({
        isToggled: false, // Make sure this property exists
        content:{} ,
    }),
    actions: {
        toggle(content) {
            this.isToggled = !this.isToggled;
            this.content = content ;
            console.log('Toggled:', this.isToggled , 'content:' , this.content);
        },
    },
});
