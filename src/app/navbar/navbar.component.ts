import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { User } from './user';
import { Router , NavigationEnd} from '@angular/router';
import { MatTabGroup , MatTab , MatTabHeader} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() background: string;
  @ViewChild(MatTabGroup) matTabGroup: MatTabGroup;
  hideInkBar: boolean;
  tabs = [
    { path: '/tree/', label: '未受理' },
    { path: '/customer', label: '潛在' },
    { path: '/customer/datalist', label: '直客' },
    { path: '/', label: '代理' },
    { path: '/', label: '無效' },
    { path: '/customer', label: '複合' }
  ];

  salesMenus = [
    { path: '/tree', label: '用戶管理' },
    { path: '/', label: '解凍帳戶' },
    { path: '/', label: '離職審核' }
  ];
  userMenus = [
    { path: '/', label: '個人資訊' },
    { path: '/', label: '密碼變更' },
    { path: '/', label: '帳戶管理' },
    { path: '/', label: '登出' }
  ];

  user: User = { name: 'Hao W', email: 'hao@phoenix-5.com' };

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd
          && this.tabs.findIndex(x => x.path === event.url) < 0) {
            this.matTabGroup._tabHeader._inkBar.hide();
        }
      });
   }

  ngOnInit() {
    this.matTabGroup._handleClick = this.tabClick.bind(this);
    this.showContent(this.tabs[0].path);
  }

  tabClick(tab: MatTab, tabHeader: MatTabHeader, idx: number) {
    tabHeader._inkBar.show();
    this.showContent(this.tabs[idx].path);
    return MatTabGroup.prototype._handleClick.apply(this.matTabGroup, arguments);
  }

  showContent(path: string): void {
    this.router.navigate([path]);
  }
}


