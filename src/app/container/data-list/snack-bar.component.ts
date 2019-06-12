import { Component, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar-component',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {
  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) private snackBarData: any) {}

  get data() {
    return this.snackBarData.data;
  }
  closeSnackBar() {
    this.snackBar.dismiss();
  }
}
