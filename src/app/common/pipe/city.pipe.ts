import { CoolLocalStorage } from './../coolStorage/cool-local-storage';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'citypipe'
})
export class CityPipe implements PipeTransform {

    constructor(
        private localStorage: CoolLocalStorage,
    ) { }

    //通过城市字典表 将城市代号转化成城市名
    transform(str: any) {

        if (str < 100000) {
            return "未知城市";
        }

        str = str.toString();

        let _str = str;
        let _s = _str.substring(0, 2) + '0000';
        let city = this.localStorage.getObject('city');

        //多个解析
        if (str.indexOf('/') != -1) {

            let strs = '';

            str.split('/').forEach(element => {

                let __str = element;
                let __s = __str.substring(0, 2) + '0000';

                if (__str.substring(0, 2)) {
                    strs += city['86'][__s] + city[__s][__str] + ' / '
                }

            });

            return strs.substr(0, strs.length - 2);

        } else {

            return city['86'][_s] + city[_s][_str];
        }




    }

}
