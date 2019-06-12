import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() { }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public importExcelFile(datas: File) {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      try {
        const data = this.result,
          workbook: XLSX.WorkBook = XLSX.read(data, {
            type: 'binary'
          }); // 以二進制流方式讀取得到整份excel表格對象
        let persons: any[] = []; // 存儲獲取到的數據

        // 表格的表格範圍，可用於判斷表頭是否數量是否正確
        // let fromTo = '';
        // 遍歷每張表讀取
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // fromTo = workbook.Sheets[sheet]['!ref'];
            // console.log(fromTo);
            persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break; // 如果只取第一張表，就取消註釋這行
          }
        }

        console.log(persons);
      } catch (e) {
        console.log('文檔類型不正確');
        return;
      }
    };

    // 以二進制方式打開文檔
    fileReader.readAsBinaryString(datas);
  }
}
