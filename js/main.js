import { getMenuDataStore } from "./getMenuDataStore.js";
import { words } from './words.js';
import { globalData } from "./globalData.js";
import { main } from "https://iqrmenu.github.io/mainScript/IQRMenuMain.js"; //в продакшен открыть 
//import { main } from "./IQRMenuMain.js"; //в тестовой открыть
main(getMenuDataStore, words, globalData);