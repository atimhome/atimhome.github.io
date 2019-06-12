import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger } from '@angular/animations';
import { slideInOutAnimation } from '../../../animations';
import { MatTableDataSource } from '@angular/material';
import { CustomerService, CustomerRow } from '../../../services/customer.service';
import { SimpleInfoService } from '../../../services/simple-info.service';
import { Overlay } from '@angular/cdk/overlay';
import { SimpleInfoComponent } from '../simple-info/simple-info.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('slideInOut', slideInOutAnimation),
  ]
})
export class SidenavComponent implements OnInit , OnDestroy {
  customersDataSource: MatTableDataSource<CustomerRow>;
  moveRightBack: boolean;
  subscription: Subscription;
  constructor(
    private customerService: CustomerService,
    private simpleInfoService: SimpleInfoService,
    private overlay: Overlay,
  ) {
    this.customersDataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.subscription = this.customerService.GetChecked().subscribe(
      (data: CustomerRow[]) => {
        this.customersDataSource.data = data;
      }
    );
    this.moveRightBack = false;
    this.simpleInfoService.CreateInfo(this.overlay);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  MoveRightBack() {
    this.moveRightBack = true;
    setTimeout(() => {
      this.moveRightBack = false;
    }, 600);

  }

  Clear(): void {
    this.customerService.Clear();
  }

  CanShowInfo(row: CustomerRow) {
    return this.simpleInfoService.CanShowInfo(row);
  }

  DisplayInfo(row: CustomerRow) {
    this.simpleInfoService.ToggleInfo(SimpleInfoComponent, row);
  }

  Remove(row: CustomerRow): void {
    this.customerService.Uncheck(row);
  }
}
