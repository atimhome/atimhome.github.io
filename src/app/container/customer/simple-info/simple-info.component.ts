import { Component, Inject} from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInAnimation } from '../../../animations';
import { SimpleInfoService , INFO_DATA} from '../../../services/simple-info.service';
import { CustomerRow} from '../../../services/customer.service';

@Component({
  selector: 'app-simple-info',
  templateUrl: './simple-info.component.html',
  styleUrls: ['./simple-info.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        useAnimation(fadeInAnimation)
      ])
    ])
  ]
})

export class SimpleInfoComponent {
   constructor(
    private simpleInfoService: SimpleInfoService,
    @Inject(INFO_DATA) public data: CustomerRow
  ) {}

  close(): void {
    this.simpleInfoService.HideInfo();
  }
}
