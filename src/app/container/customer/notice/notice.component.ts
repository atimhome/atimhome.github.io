import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { accordionAnimation } from '../../../animations';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  animations: [
    trigger('accordion', accordionAnimation)
  ]
})
export class NoticeComponent implements OnInit {
  isShow: boolean;
  width: number;
  notices: Array<any> = [
    {id: '1', msg: '已聯絡GGYY客戶'},
    {id: '2', msg: '優質客戶待聯絡'},
    {id: '3', msg: '大款客戶付款失敗'},
    {id: '4', msg: '已聯絡GGYY客戶'},
    {id: '5', msg: '優質客戶待聯絡'},
    {id: '6', msg: '大款客戶付款失敗'},
    {id: '7', msg: '已聯絡GGYY客戶'},
    {id: '8', msg: '優質客戶待聯絡'},
    {id: '9', msg: '大款客戶付款失敗'},
    {id: '10', msg: '已聯絡GGYY客戶'},
    {id: '11', msg: '優質客戶待聯絡'},
    {id: '12', msg: '大款客戶付款失敗'},

  ];

  constructor() { }

  ngOnInit() {
    this.isShow = true;
    this.width = 100;
  }

  removeNotice(notice): void {
    const index = this.notices.indexOf(notice);

    if (index >= 0) {
      this.notices.splice(index, 1);
    }
  }

  get show(): boolean {
    const count = this.notices ? this.notices.length : 0;
    return count > 0 && this.isShow;
  }

  set show(value: boolean) {
    this.isShow = value;
  }

  size(value: boolean): void {
    this.width = value ? 83 : 100;
  }

}
