import React from 'react'
import { ColDef } from 'ag-grid-community';
import {IconType} from "react-icons"

export type routeType = {
    name: string;
    path: string;
    page: React.LazyExoticComponent<React.FC | React.FC>;
    icon: IconType
}

export type storeRowDataType = {
    seqNo: number; // auto generate id
    id: string; // auto generate id
    label: string;
    city: string;
    state: string;
}

export type skuRowDataType = {
    id: string, // auto generate id
    label: string,
    class: string,
    department: string,
    price: number,
    cost: number
}

export type skuColType = ColDef<skuRowDataType>
export type storeColType = ColDef<storeRowDataType>


