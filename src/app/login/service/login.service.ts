import { HttpClientService } from './../../common/httpClient/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(private http: HttpClientService) {}

    // 获取图形验证码
    getCaptcha(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Agent/Accounts/GetCaptcha', callBack, errorBack);
    }

    // 发送短信验证码
    sendSmsCode(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Agent/Accounts/SendSmsCode', callBack, errorBack);
    }

    // 登录
    login(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Agent/Accounts/Login', callBack, errorBack);
    }

    // 检查手机号是否被注册
    CheckMobilePhone(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Agent/Accounts/CheckMobilePhone', callBack, errorBack);
    }

}

// 15083508310