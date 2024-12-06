// types/warehouse.ts
export interface WarehouseItem {
    id: string;
    name: string;
    code: string;
    quantity: number;
    price: number;
    keeper: string;
    date: string;
}

export interface SearchParams {
    name?: string;
    searchBy?: string;
}