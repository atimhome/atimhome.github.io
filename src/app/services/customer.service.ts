import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable} from 'rxjs';

export interface ICustomerElement {
  id: string;
  name: string;
  account: string;
  status: number;
  from: number;
  country: number;
  sale: string;
  reason: string;
  updateTime: string;
}

export class CustomerRow implements ICustomerElement {
  cheched: boolean;
  id: string;
  name: string;
  account: string;
  status: number;
  from: number;
  country: number;
  sale: string;
  reason: string;
  updateTime: string;
}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private customerData: CustomerRow[];
  private activeCustomer: BehaviorSubject<CustomerRow[]> = new BehaviorSubject(this.customerData);

  private customerCheckedData: CustomerRow[];
  private checkedCustomer: BehaviorSubject<CustomerRow[]> = new BehaviorSubject(this.customerCheckedData);


  constructor() {
    this.customerData = [
      { cheched: false , id: '0', name: 'Tr', account: '000018', status: 6, from: 1,
      country: 7, sale: '010168', reason: 'for test', updateTime: '2018/09/18 14:07' },
      { cheched: false , id: '1', name: 'Ta', account: '000001', status: 1, from: 1,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '2', name: 'Tb', account: '000002', status: 4, from: 2,
      country: 2, sale: '010168', reason: 'for test', updateTime: '2018/09/20 13:07' },
      { cheched: false , id: '3', name: 'Tc', account: '000003', status: 1, from: 1,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '4', name: 'Td', account: '000004', status: 1, from: 2,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '5', name: 'Te', account: '000005', status: 2, from: 1,
      country: 4, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '6', name: 'Tf', account: '000006', status: 1, from: 1,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '7', name: 'Tg', account: '000007', status: 5, from: 3,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/21 14:07' },
      { cheched: false , id: '8', name: 'Th', account: '000008', status: 1, from: 1,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '9', name: 'Ti', account: '000009', status: 1, from: 1,
      country: 3, sale: '010168', reason: 'for test', updateTime: '2018/09/18 14:07' },
      { cheched: false , id: '10', name: 'Tj', account: '000010', status: 4, from: 1,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 13:07' },
      { cheched: false , id: '11', name: 'Tk', account: '000011', status: 1, from: 3,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '12', name: 'Tl', account: '000012', status: 1, from: 1,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '13', name: 'Tm', account: '000013', status: 3, from: 1,
      country: 5, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '14', name: 'Tn', account: '000014', status: 1, from: 1,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '15', name: 'To', account: '000015', status: 2, from: 3,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' },
      { cheched: false , id: '16', name: 'Tp', account: '000016', status: 1, from: 1,
      country: 6, sale: '010168', reason: 'for test', updateTime: '2018/09/19 14:07' },
      { cheched: false , id: '17', name: 'Tq', account: '000017', status: 4, from: 2,
      country: 1, sale: '010168', reason: 'for test', updateTime: '2018/09/20 14:07' }
    ];

    this.UpdateAll();
  }

  private UpdateAll(): void {
    this.activeCustomer.next(this.customerData);
    this.UpdateChecked();
    // console.log(this.customerData);
  }

  private UpdateChecked(): void {
    this.customerCheckedData = this.customerData.filter(function (item) {
      return item.cheched === true;
    });

    this.checkedCustomer.next(this.customerCheckedData);
  }

  private FindIndex(id: string): number {
    return this.customerData.findIndex((item) => item.id === id);
  }

  Find(id: string): CustomerRow {
    const index = this.FindIndex(id);
    return this.customerData[index];
  }

  Get(): Observable<CustomerRow[]> {
    return this.activeCustomer.asObservable();
  }

  GetChecked(): Observable<CustomerRow[]> {
    return this.checkedCustomer.asObservable();
  }

  Add(): void {
    this.customerData.push({ cheched: false , id: this.customerData.length.toString(), name: 'T', account: '000001', status: 1, from: 1,
    country: 1, sale: this.customerData.length.toString(), reason: 'for test', updateTime:  new Date().toISOString()});
    this.UpdateAll();
  }

  Remove(id: string): void {
    const i: number = this.FindIndex(id);
    this.customerData.splice(i, 1);
    this.UpdateAll();
  }

  Clear(): void {
    this.customerData.forEach (
      (item: CustomerRow, index: number, array: CustomerRow[]) => item.cheched = false
    );
    this.UpdateAll();
  }

  Toggle(data: CustomerRow): void {
    const i: number = this.FindIndex(data.id);
    this.customerData[i].cheched = !this.customerData[i].cheched;
    this.UpdateAll();
  }

  Check(data: CustomerRow): void {
    const i: number = this.FindIndex(data.id);
    this.customerData[i].cheched = true;
    this.UpdateAll();
  }

  Uncheck(data: CustomerRow): void {
    const i: number = this.FindIndex(data.id);
    this.customerData[i].cheched = false;
    this.UpdateAll();
  }
}
