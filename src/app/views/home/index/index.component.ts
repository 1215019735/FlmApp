import { Component, OnInit } from '@angular/core';

import { HouseIndexService } from './service/index.service';

@Component({
    selector: 'home-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
    public city = <any>{};

    constructor(
        private service: HouseIndexService,
    ) { }

    ngOnInit() { }

    // 获取楼盘列表
    queryProjects() {

        const req = {
            PageIndex: 1,
            PageSize: 10
        };

        this.service.queryProjects(req, res => {
            console.log(res);
        });
    }

}
