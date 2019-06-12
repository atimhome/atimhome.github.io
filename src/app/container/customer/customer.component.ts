import { Component, OnInit , ViewChild , OnDestroy} from '@angular/core';
import { ExcelService } from '../../services/excel.service';
import { CustomerService, CustomerRow } from '../../services/customer.service';
import { trigger } from '@angular/animations';
import { flipAnimation, verticalAnimation } from '../../animations';
import { ActivatedRoute } from '@angular/router';
import { NoticeComponent } from './notice/notice.component';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  animations: [
    trigger('flip', flipAnimation),
    trigger('vertical', verticalAnimation)
  ]
})

export class CustomerComponent implements OnInit , OnDestroy {
  customersDataSource: MatTableDataSource<CustomerRow>;
  subscription: Subscription;
  background: string;
  showSlider: boolean;
  rotate: boolean;
  @ViewChild(NoticeComponent) noticeComponent: NoticeComponent;

  constructor(
    private customerService: CustomerService,
    private excelService: ExcelService,
    private route: ActivatedRoute
  ) {
    this.customersDataSource = new MatTableDataSource();
   }

  exportMenus = [
    { path: '/', label: '拋出', event: () => { } },
    { path: '/', label: 'Excel拋出', event: () => { } },
    { path: '/', label: '匯出至Excel', event: () => { this.ToExcel(); } }
  ];

  ngOnInit() {
    this.subscription = this.customerService.GetChecked().subscribe(
      (data: CustomerRow[]) => {
        this.customersDataSource.data = data;
      }
    );
    this.background = this.route.snapshot.data.background;
    this.showSlider = false;
    this.rotate = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ToExcel(): void {
    this.customerService.Get().subscribe((data: CustomerRow[]) => {
      this.excelService.exportAsExcelFile(data, 'customer');
    }).unsubscribe();
  }

  Add(): void {
    this.customerService.Add();
  }

  scrollUp(): void {
    console.log('scrollUp');
    this.noticeComponent.show = true;
  }

  scrollDown(): void {
    console.log('scrollDown');
    this.noticeComponent.show = false;
  }

  toggle(): void {
    this.rotate = !this.rotate;
    this.noticeComponent.size(this.rotate);
  }
}
