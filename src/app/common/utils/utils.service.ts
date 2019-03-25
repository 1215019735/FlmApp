import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    /**
    * [判断是否为空]
    * @Author   zhanggongze
    * @DateTime 2017-04-18
    * @search    {[any]}    str [任意类型]
    * return   {Boolean}       [返回布尔值]
    */
    isNull(str) {
        if (str != null && str != '' && typeof (str) != "undefined") {
            return false;
        } else {
            return true;
        }
    };

    /**
     * [nubChinese 将数字转中文字]
     * @Author   zhanggongze
     * @DateTime 2017-05-06
     * param    {[nub]}    nub [要转化的数字]
     */
    nubChinese(nub) {
        var chNub = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        return chNub[nub];
    }
    /**
    *时间格式化 
    * ps:<b>现在时间：{{nowDate | datez:"yyyy-MM-dd hh:mm"}}</b>
     */
    formate(value: any, fmt: any): any {

        value = new Date(value);

        let o = {
            "M+": value.getMonth() + 1, //月份 
            "d+": value.getDate(), //日 
            "h+": value.getHours(), //小时 
            "m+": value.getMinutes(), //分 
            "s+": value.getSeconds(), //秒 
            "q+": Math.floor((value.getMonth() + 3) / 3), //季度 
            "S": value.getMilliseconds() //毫秒 
        };

        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (value.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

        return fmt;
    }
    /**
     * 
     * @param array 数组
     * @param dx 删除指定下表
     */
    arrayRemove(array, dx) {
        if (isNaN(dx) || dx > array.length) { return false; }
        for (var i = 0, n = 0; i < array.length; i++) {
            if (array[i] != array[dx]) {
                array[n++] = array[i]
            }
        }
        array.length -= 1
    }
    
    /**
     * json 合并
     * @param jsonbject1 
     * @param jsonbject2 
     */
    jsonExtend(jsonbject1, jsonbject2) {
        var resultJsonObject = {};
        for (var attr in jsonbject1) {
            resultJsonObject[attr] = jsonbject1[attr];
        }
        for (var attr in jsonbject2) {
            resultJsonObject[attr] = jsonbject2[attr];
        }
        return resultJsonObject;
    }


/**
 * 根据数据对象的某个属性排序   this.agentItems.sort(this.utils.sortBycompare('Index'));
 * @param property 某个属性
 */
    sortBycompare(property){
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        }
    }


}