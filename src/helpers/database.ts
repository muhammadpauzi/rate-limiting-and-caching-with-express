import * as fs from 'fs';
import { join } from 'path';

class Database {
    private dirPath: string = './data';
    private fileData: string = 'database.json';

    private dataPath: string = join(this.dirPath, this.fileData);

    constructor() {
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

    private getJSON() {
        try {
            const data = fs.readFileSync(this.dataPath, { encoding: 'utf-8' });
            return JSON.parse(data);
        } catch (error) {
            console.log(error);
        }
    }

    public getData(key: string) {
        return this.getJSON()[key] || [];
    }
}

export { Database };