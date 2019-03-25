import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HttpClientService } from './../common/httpClient/http';
import { CoolSessionStorage } from './../common/coolStorage/cool-session-storage';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  // public isLoading:boolean = false;

  public PostName;
  public isCollapsed: boolean = false;
  public logFont: String = '房乐美平台管理';

  user = {};

  constructor(
    private http: HttpClientService,
    private sessionStorage: CoolSessionStorage,
    public router: Router,
  ) { }

  ngOnInit() {
    this.user = this.sessionStorage.getObject('token');
    this.http.post({}, 'Agent/Regions/QueryAvailableRegions', res => {
      
    }, () => {

    });
  }

  signout() {
    this.sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
