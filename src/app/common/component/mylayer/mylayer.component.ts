import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mylayer',
  templateUrl: './mylayer.component.html',
  styleUrls: ['./mylayer.component.scss'],
})
export class MyLayerComponent implements OnInit {
  // 加载中默认隐藏
  public loadShow: boolean = false;
  public loadItem = '';

  // 弹窗参数
  public alert = {
    // 弹窗默认隐藏
    alertShow: false,
    // 弹窗默认标题为空
    alertTit: '',
    // 弹窗默认内容为空
    alertCont: '',
    // 弹窗内容默认对齐
    alertAlign: ''
  };

  // 对话框参数
  public confirm = {
    // 对话框默认隐藏
    confirmShow: false,
    // 对话框默认标题为空
    confirmTit: '',
    // 对话框默认内容为空
    confirmCont: '',
    // 对话框内容默认对齐
    confirmAlign: ''
  };

  constructor() { }

  ngOnInit() { }

  // 回调函数
  alertCallback = function () { }

  /**
   * 
   * @param reqdata 弹窗内容
   * @param title 弹窗标题
   * @param callback 弹窗回调函数
   * @param align 弹窗内容默认居中
   */
  alertShow(reqdata, title = '', callback, align = 'center') {
    // 弹窗显示
    this.alert.alertShow = true;
    // 传入的参数赋值给相应的变量
    this.alert.alertCont = reqdata;
    this.alert.alertTit = title;
    this.alert.alertAlign = align;
    // 回调函数
    this.alertCallback = callback;
  }

  // 确认
  alertEnter() {
    // 弹窗隐藏
    this.alert.alertShow = false;
    // 触发回调函数
    this.alertCallback();
  }

  // 确认后的回调函数
  confirmCallbackEnter = function () { };

  // 取消后的回调函数
  confirmCallbackCancel = function () { };

  /**
   * 
   * @param reqdata 对话框内容
   * @param title 对话框标题
   * @param callbackEnter 对话框确认回调函数
   * @param callbackCancel 对话框取消回调函数
   * @param align 对话框内容默认居中
   */
  confirmShow(reqdata, title = '', callbackEnter, callbackCancel, align = 'center') {
    // 对话框显示
    this.confirm.confirmShow = true;
    // 传入的参数赋值给相应的变量
    this.confirm.confirmCont = reqdata;
    this.confirm.confirmTit = title;
    this.confirm.confirmAlign = align;
    // 回调函数
    this.confirmCallbackEnter = callbackEnter;
    this.confirmCallbackCancel = callbackCancel;
  }

  // 确认
  confirmEnter() {
    // 对话框隐藏
    this.confirm.confirmShow = false;
    // 触发回调函数
    this.confirmCallbackEnter();
  }

  // 取消
  confirmCancel() {
    // 对话框隐藏
    this.confirm.confirmShow = false;
    // 触发回调函数
    this.confirmCallbackCancel();
  }

  //加载中回调函数
  loadCallback = function () { };

  // 加载中显示
  Load(callback, item = '加载中') {
    this.loadShow = true;
    this.loadItem = item;
    this.loadCallback = callback;
    setTimeout(() => {
      this.loadCallback();
    }, 1500);
  }
}
