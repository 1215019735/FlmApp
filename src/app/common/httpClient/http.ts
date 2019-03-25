import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class HttpClientService {

    //API地址前缀
    public baseUrl = environment.Api;
    //默认请求头
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private router: Router,
        private http: HttpClient,
    ) { }

    /**
     * post请求
     * @param reqdata 请求参数
     * @param url 请求地址
     * @param callBack 成功回调
     * @param errorBack 异常回调
     */
    post(reqdata, url, callBack, errorBack) {

        this._post(reqdata, url).subscribe(res => {
            if (callBack) {
                callBack(res['Result'])
            }
        }, error => {
            if (errorBack) {
                errorBack(error)
            } else {
                this._error(error);
            }
        });
    }


    /**
     * get 请求
     * @param url 请求地址
     * @param callBack 成功回调
     * @param errorBack 异常回调
     */
    get(url, callBack, errorBack) {

        this._get(url).subscribe(res => {
            if (callBack) {
                callBack(res)
            }
        }, error => {
            if (errorBack) {
                errorBack(error)
            } else {
                this._error(error);
            }
        });
    }

    /**
     * post请求 （自定义头可用该方法）
     * @param reqdata 请求参数
     * @param url 请求地址
     * @param headers 请求头
     */
    _post(reqdata, url, headers?) {

        let _url = this.baseUrl + url;

        //自定义请求头
        if (headers) {
            this._setHeader(headers);
        }

        return this.http.post(_url, reqdata, this.httpOptions)
            .pipe(
                //网络异常 再次发送请求（会连发三次）
                // retry(3),
                catchError(this.handleError)
            );
    }


    /**
     * get请求
     * @param url 请求地址
     */
    _get(url) {

        let _url = this.baseUrl + url;

        return this.http.get(_url)
            .pipe(
                //网络异常 再次发送请求（会连发三次）
                // retry(1),
                catchError(this.handleError)
            );
    }


    /**
     * 默认异常处理
     * @param err 异常对象体
     */
    _error(err) {

        let msg = err.error.Message || '网络异常';

        alert(msg);

        //认证异常
        if (err.status == '401') {
            this.router.navigate(['login']);
        }

    }

    /**
     * 自定义请求头
     * @param headers 请求头
     */
    _setHeader(headers) {

        for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
                const element = headers[key];
                this.httpOptions.headers = this.httpOptions.headers.set(key, element);
            }
        }
    }

    // 异常拦截
    private handleError(error: HttpErrorResponse) {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
            `Status code ${error.status}, ` +
            `ActionRequestID was: ${error.error.ActionRequestID}, ` +
            `Message was: ${error.error.Message}`);
        // return an observable with a user-facing error message
        return throwError(error);
    };
}