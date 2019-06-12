import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  background = 'primary';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'account',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/account.svg'));

    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Alert',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Alert.svg'));

    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Copy',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Copy.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Delete.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Detail',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Detail.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Export',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Export.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Lock',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Lock.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Manage',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Manage.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Menu',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Menu.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'More',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/More.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Move',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Move.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Notice',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Notice.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Receipt',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Receipt.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Recovery',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Recovery.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Reset',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Reset.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Root',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Root.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Search',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Search.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Top',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Top.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Unlock',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Unlock.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'User',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/User.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'View',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/View.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'UnView',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Unview.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Warning',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Warning.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Create',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Create.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Sliders',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Sliders.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Eraser',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Eraser.svg'));
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'Edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/Edit.svg'));
  }
}
