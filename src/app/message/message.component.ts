import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClientService } from './../common/httpClient/http';
import { CoolLocalStorage } from './../common/coolStorage/cool-local-storage';
import { CoolSessionStorage } from './../common/coolStorage/cool-session-storage';
import { LoginService } from '../login/service/login.service';
import { Verify } from '../registe/registe';
import { MyLayerComponent } from '../common/component/mylayer/mylayer.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  // 引入子组件MyLayerComponent
  @ViewChild('myLayer')
  myLayer: MyLayerComponent;

  // 图形验证框显示隐藏
  public picShow = false;
  // 发送提示显示隐藏
  public smsShow = false;
  // 初始化图形验证码
  public Base64Code = '';
  // 请求锁
  reqKey = true;
  /**
   * 短信请求包
   */
  smsReq = {
    SessionID: '',
    MobilePhone: '',
    Captcha: ''
  };
  // 用户信息
  public loginReq = {
    MobilePhone: '',
    PhoneCode: '',
    ClientID: 'FLM.Admin.WebClient'
  };
  // 发送短信验证码
  public DJS: Verify = {
    verify: '获取验证码',
    times: 60,
    open: true,
    color: false
  };
  // Token赋值
  public Token = {};

  constructor(
    public router: Router,
    private sessionStorage: CoolSessionStorage,
    private localStorage: CoolLocalStorage,
    private http: HttpClientService,
    private service: LoginService,
  ) { }

  ngOnInit() {
    // 接收本地信息并判断是否存在，如不存在则跳转回手机号页面
    this.smsReq.MobilePhone = this.loginReq.MobilePhone = this.localStorage.getObject<string>('MobilePhone');
    if (this.loginReq.MobilePhone === null) {
      this.router.navigate(['']);
    }
  }

  /**
   * 倒计时方法
   */
  downTime() {
    // this本地化
    const vm = this;
    // 显示提示
    setTimeout(() => {
      vm.smsShow = true;
    }, 1000);
    // 开启请求锁
    vm.reqKey = false;
    // 发送验证码至手机号
    const timer = setInterval(() => {
      // 禁止点击样式
      vm.DJS.color = true;
      // 每秒倒计时
      vm.DJS.times = vm.DJS.times - 1;
      // 拼接
      vm.DJS.verify = vm.DJS.times + '秒后重新发送';
      // 10秒过后提示隐藏
      if (vm.DJS.times <= 50) {
        vm.smsShow = false;
      }
      // 60秒到达后初始化定时器
      if (vm.DJS.times === 0) {
        // 清除定时器
        clearInterval(timer);
        // 还原样式
        vm.DJS.color = false;
        // 解除请求锁
        vm.reqKey = true;
        // 初始化信息
        vm.DJS.verify = '重新发送';
        // 初始化秒数
        vm.DJS.times = 60;
      }
    }, 1000);
  }

  /**
   * 显示弹出图形验证码
   */
  showVerify() {
    // 防止重复触发点击事件
    if (this.DJS.verify === '获取验证码' || this.DJS.verify === '重新发送') {
      this.myLayer.Load(data => {
        this.picShow = true;
        this.getVerify();
      })
    } else {
      this.picShow = false;
    }
  }

  /**
   * 获取图形验证码
   */
  getVerify() {
    this.service.getCaptcha({}, res => {
      this.smsReq.SessionID = res.SessionID;
      // 将Base64位的编码转化为图片路径
      this.Base64Code = 'data:image/gif;base64,' + res.Base64Code.replace(/\\n/g, '\n');
      this.myLayer.loadShow = false;
    });
  }

  /**
   * 验证图形码并发送短信
   */
  checkVerify() {
    this.http.post(this.smsReq, 'Agent/Accounts/SendSmsCode', res => {
      this.reqKey = true;
      // 倒计时
      this.downTime();
      // 关闭弹窗
      this.picShow = false;
      // 清除图形验证码
      this.Base64Code = '';
    }, err => {
      this.reqKey = true;
      // 报错信息
      this.myLayer.alertShow(err.error.Message, '', () => { });
    });
  }

  /**
   * 登陆
   */
  loginOn() {
    this.reqKey = false;
    this.http.post(this.loginReq, 'Agent/Accounts/Login', res => {
      this.reqKey = true;
      // 删除登录本地文件
      this.localStorage.removeItem('MobilePhone');
      // 保存本地文件
      this.sessionStorage.setObject('token', res.Token);
      // 登陆成功跳转到主页
      this.router.navigate(['workspace']);
    }, err => {
      this.reqKey = true;
      // 错误信息
      this.myLayer.alertShow(err.error.Message, '', () => { });
    });
  }
  // tslint:disable-next-line: eofline
}