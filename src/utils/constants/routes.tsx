import {lazy} from 'react';
import { routeType } from '../../types';

const Planning = lazy(() => import("../../pages/planning/Planning"))
const Sku = lazy(() => import("../../pages/sku/Sku"))
const Store = lazy(() => import("../../pages/store/Store"))

const routeList:routeType[] = [
    {name: "Store", path: "/", page: Store},
    {name: "SKU", path: "/sku", page: Sku},
    {name: "Planning", path: "/planning", page: Planning}
]

export {routeList}