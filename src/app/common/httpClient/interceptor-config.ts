/** 拦截器配置 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoopInterceptor } from './interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];