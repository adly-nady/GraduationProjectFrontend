// stores/itemStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemStore = defineStore('itemStore', () => {
    const items = ref([
        {
            id: 1,
            reportType: 'تقرير شهري',
            code: 'A001',
            quantity: 100,
            storekeeper: 'طه',
            date: '2023-10-01',
        },
        {
            id: 2,
            reportType: 'تقرير سنوي',
            code: 'B002',
            quantity: 200,
            storekeeper: 'عدلي',
            date: '2023-09-15',
        },
        {
            id: 3,
            reportType: 'تقرير ربع سنوي',
            code: 'C003',
            quantity: 150,
            storekeeper: 'ريمون',
            date: '2023-08-20',
        },
        {
            id: 4,
            reportType: 'تقرير ربع سنوي',
            code: 'C003',
            quantity: 150,
            storekeeper: 'نيرا',
            date: '2023-08-20',
        },
        {
            id: 5,
            reportType: 'تقرير ربع سنوي',
            code: 'C003',
            quantity: 150,
            storekeeper: 'يارا',
            date: '2023-08-20',
        },
        {
            id: 6,
            reportType: 'تقرير ربع سنوي',
            code: 'C003',
            quantity: 150,
            storekeeper: 'كاترين',
            date: '2023-08-20',
        },
        {
            id: 7,
            reportType: 'تقرير ربع سنوي',
            code: 'C003',
            quantity: 150,
            storekeeper: 'كارما',
            date: '2023-08-20',
        },
       
    ]);
    
    const selectedItem = ref(null);
    function addItem(item) {
        items.value.push(item);
    }

    function updateItem(index, item) {
        items.value[index] = item;
    }

    function deleteItem(index) {
        items.value.splice(index, 1);
    }
    function setSelectedItem(item){
        selectedItem.value = item;
    }

    function duplicateItem(index) {
        const itemToDuplicate = items.value[index];
        const newItem = { ...itemToDuplicate }; // Create a copy of the item
        addItem(newItem); // Add the new item to the store
    }
    return { items, addItem,duplicateItem,updateItem, deleteItem ,selectedItem , setSelectedItem};
});