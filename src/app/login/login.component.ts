import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CoolLocalStorage } from './../common/coolStorage/cool-local-storage';
import { LoginService } from './service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    close = false;
    MobilePhone = '15083508310';

    constructor(
        public router: Router,
        private localStorage: CoolLocalStorage,
        private service: LoginService
    ) { }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit() {
        if (this.MobilePhone.length > 0) {
            this.close = true;
        }
    }

    /**
     * 清除已输入的手机号
     */
    clear() {
        this.MobilePhone = '';
        this.close = false;
    }

    // 判断是否输入手机号显示隐藏清空按钮
    TelChange(e) {
        if (e.length === 0) {
            this.close = false;
        } else {
            this.close = true;
        }
    }

    /**
     * 验证手机并跳转
     */
    VerifyTel() {
        // 正则匹配输入正确的手机号
        const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!myreg.test(this.MobilePhone)) {
            alert('请输入正确的手机号！');
        } else {
            this.service.CheckMobilePhone({ MobilePhone: this.MobilePhone }, res => {
                // 判断该手机号是否被注册并跳转至相应界面
                if (res.IsRegisted === true) {
                    // 存入本地文件
                    this.localStorage.setObject('MobilePhone', this.MobilePhone);
                    // 跳转登陆界面
                    this.router.navigate(['message']);
                } else {
                    // 存入本地文件
                    this.localStorage.setObject('MobilePhone', this.MobilePhone);
                    // 跳转注册界面
                    this.router.navigate(['registe']);
                }
            }, err => {

            })
        }
    }

    // getCity() {

    //     this.httpClient
    //         .get('https://flm-resource.oss-cn-shanghai.aliyuncs.com/Dictionary/ChineseDistricts.json')
    //         .subscribe(res => {
    //             this.localStorage.setObject('city', res);
    //             this.router.navigate(['workspace']);
    //         });

    // }

}