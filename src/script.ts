import { TableProps } from "./entities/types";
import { tableEasy, tableHard, tableMedium } from "./tables/index.js";
import Table from "./entities/table.js";

const inserEasy = document.querySelector(".insert-easy");
const inserMedium = document.querySelector(".insert-medium");
const inserHard = document.querySelector(".insert-hard");
const resolve = document.querySelector(".resolve");
const clear = document.querySelector(".clear");

const table = new Table(tableEasy);

inserEasy?.addEventListener("click", () => table.insert(tableEasy));
inserMedium?.addEventListener("click", () => table.insert(tableMedium));
inserHard?.addEventListener("click", () => table.insert(tableHard));
resolve?.addEventListener("click", () => table.solve());
clear?.addEventListener("click", () => table.clear());
