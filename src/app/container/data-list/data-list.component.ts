import { Component, OnInit, OnDestroy , ViewChild , AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { SnackBarComponent } from './snack-bar.component';
import { ExcelService } from '../../services/excel.service';
import { CustomerService, CustomerRow } from '../../services/customer.service';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';
import { Subscription} from 'rxjs';

export class IPageIndexElement {
  FirstIndex: number;
  LastIndex: number;
}

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit , OnDestroy, AfterViewInit {
  constructor(
    private matPaginatorIntl: MatPaginatorIntl,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private excelService: ExcelService,
    private customerService: CustomerService
  ) {
    this.customersDataSource = new MatTableDataSource();
  }

  background: any;
  customersDataSource: MatTableDataSource<CustomerRow>;
  totalCount: number;
  selection = new SelectionModel<CustomerRow>(true, []);
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  firstIndex: number;
  lastIndex: number;
  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.background = this.route.snapshot.data.background;

    this.subscription = this.customerService.Get().subscribe((data: CustomerRow[]) => {
      this.customersDataSource.data = data;
      this.refreshSelection(data);
    });

    this.totalCount = this.customersDataSource.data.length;

    // 設定顯示筆數資訊文字
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        this.firstIndex = 0;
        this.lastIndex = 0;
        return `第 0 筆、共 ${length} 筆`;
      }

      const index: IPageIndexElement = this.getCurrentIndex(page, pageSize, length);
      this.firstIndex = index.FirstIndex;
      this.lastIndex = index.LastIndex;
      return `第 ${this.firstIndex} - ${this.lastIndex} 筆、共 ${length} 筆`;
    };

    // 設定其他顯示資訊文字
    this.matPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
    this.matPaginatorIntl.nextPageLabel = '下一頁';
    this.matPaginatorIntl.previousPageLabel = '上一頁';



    this.uploader = new FileUploader({
      url: '/uploadFile',
      method: 'POST',
      itemAlias: 'uploadedfile',
      autoUpload: false
    });

    this.hasBaseDropZoneOver = false;
    this.uploader.onAfterAddingFile = (fileItem) => {
      fileItem.withCredentials = false;
      const fileExtension = fileItem._file.name.split('.').pop().toUpperCase();
      if (fileExtension !== 'XLSX') {
        console.log(fileExtension);
        return;
      }
      this.excelService.importExcelFile(fileItem._file);
    };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.customersDataSource.paginator = this.paginator;
    this.customersDataSource.sort = this.sort;
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  pageChange($event): void {
    const index: IPageIndexElement = this.getCurrentIndex($event.pageIndex, $event.pageSize, $event.length);
    this.firstIndex = index.FirstIndex;
    this.lastIndex = index.LastIndex;
  }

  private getCurrentIndex(page: number, pageSize: number, length: number): IPageIndexElement {
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    const indexElement: IPageIndexElement = { FirstIndex: startIndex + 1, LastIndex: endIndex };
    return indexElement;
  }

  private refreshSelection(data: CustomerRow[]): void {
    data.forEach(
      (item: CustomerRow, index: number, array: CustomerRow[]) => this.checkDataSource(item)
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    for (let i = this.firstIndex - 1; i < this.lastIndex; i++) {
      if (this.selection.isSelected(this.customersDataSource.data[i]) === false) {
        return false;
      }
    }
    return true;
  }

  isSomeSelected(): boolean {
    for (let i = this.firstIndex - 1; i < this.lastIndex; i++) {
      if (this.selection.isSelected(this.customersDataSource.data[i]) === true) {
        return true;
      }
    }
    return false;
  }

  checkDataSource(row: CustomerRow) {
    const datarow = this.customerService.Find(row.id);
    if (datarow.cheched) {
      this.selection.select(row);
    } else {
      this.selection.deselect(row);
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    const toCancel: boolean = this.isAllSelected();

    for (let i = this.firstIndex - 1; i < this.lastIndex; i++) {
      const row = this.customersDataSource.data[i];
      if (toCancel) {
        this.selection.deselect(row);
        this.customerService.Uncheck(row);
      } else {
        this.selection.select(row);
        this.customerService.Check(row);
      }
    }
  }

  openSnackBar(item: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 3000,
      data: { data: item },
      panelClass: ['slider']
    });
  }

  toggle(row: CustomerRow): void {
    this.customerService.Toggle(row);
  }
}
