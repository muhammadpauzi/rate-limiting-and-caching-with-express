"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
class Database {
    constructor() {
        this.dirPath = './data';
        this.fileData = 'database.json';
        this.dataPath = (0, path_1.join)(this.dirPath, this.fileData);
        // is folder data exists
        if (!fs.existsSync(this.dirPath)) {
            fs.mkdirSync(this.dirPath);
        }
        // is file contacts.json exists
        if (!fs.existsSync(this.dataPath)) {
            fs.writeFileSync(this.dataPath, '[]');
        }
        // is file contacts.json is empty
        if (fs.readFileSync(this.dataPath).toString() == '') {
            fs.writeFileSync(this.dataPath, '[]');
        }
    }
    getJSON() {
        try {
            const data = fs.readFileSync(this.dataPath, { encoding: 'utf-8' });
            return JSON.parse(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    getData(key) {
        return this.getJSON()[key] || [];
    }
}
exports.Database = Database;
