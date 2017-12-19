import {Pipe } from '@angular/core';
@Pipe({
    name: 'KeyObject'
})
export class KeyObject {
    transform(value, args: string[]): any {
        let keys = [];
        for (let key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    }
}