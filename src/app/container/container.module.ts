import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatTreeModule,
  MatSidenavModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatCardModule,
  MatChipsModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { SnackBarComponent} from './data-list/snack-bar.component';
import { FileUploadModule } from 'ng2-file-upload';
import { CustomerComponent } from './customer/customer.component';
import { SimpleInfoComponent } from './customer/simple-info/simple-info.component';
import { SidenavComponent } from './customer/sidenav/sidenav.component';
import { NoticeComponent } from './customer/notice/notice.component';
import { MouseWheelDirective } from '../directives/mousewheel.directive';

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatTreeModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    MatChipsModule,
    RouterModule,
    FileUploadModule
  ],
  exports: [
    RouterModule,
    TreeComponent,
    DataListComponent,
    CustomerComponent
  ],
  entryComponents: [SnackBarComponent , SimpleInfoComponent],
  declarations: [
    TreeComponent,
    DataListComponent,
    SnackBarComponent,
    CustomerComponent,
    SimpleInfoComponent,
    SidenavComponent,
    NoticeComponent,
    MouseWheelDirective
  ]
})
export class ContainerModule {}
