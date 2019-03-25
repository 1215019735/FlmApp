import { CoolSessionStorage } from './../coolStorage/cool-session-storage';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/** 拦截器 */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    constructor(
        private sessionStorage: CoolSessionStorage,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //添加认证信息
        const token = this.sessionStorage.getObject('token') || {};
        const authReq = req.clone({ "setHeaders": { "Authorization": 'Bearer ' + token['AccessToken'] } });

        return next.handle(authReq);

    }

}