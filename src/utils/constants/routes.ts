import {lazy} from 'react';
import { routeType } from '../../types';
import { MdOutlineStore } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { LuShapes } from "react-icons/lu";

const Planning = lazy(() => import("../../pages/planning/Planning"))
const Sku = lazy(() => import("../../pages/sku/Sku"))
const Store = lazy(() => import("../../pages/store/Store"))

const routeList:routeType[] = [
    {name: "Store", path: "/", page: Store , icon: MdOutlineStore},
    {name: "Sku", path: "/sku", page: Sku, icon: LuShapes},
    {name: "Planning", path: "/planning", page: Planning, icon: AiOutlineBarChart },
]

export {routeList}