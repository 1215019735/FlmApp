import { HttpClientService } from './../../../../common/httpClient/http';
import { Injectable } from '@angular/core';

@Injectable({
        providedIn: 'root'
    })
export class HouseIndexService {

    constructor(private http: HttpClientService) { }

    queryProjects(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Host/Projects/QueryProjects', callBack, errorBack);
    }

    queryAvailableRegions(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Host/Regions/QueryAvailableRegions', callBack, errorBack);
    }

    createProject(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Host/Projects/CreateProject', callBack, errorBack);
    }
    updateProject(reqdata, callBack, errorBack?) {

        this.http.post(reqdata, 'Host/Projects/UpdateProject', callBack, errorBack);
    }


}