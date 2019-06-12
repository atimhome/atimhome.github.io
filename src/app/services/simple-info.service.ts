import { Injectable , Injector , InjectionToken} from '@angular/core';
import { CustomerRow} from './customer.service';
import { ComponentPortal , PortalInjector } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

export const INFO_DATA = new InjectionToken<{}>('InfoData');

@Injectable({
  providedIn: 'root'
})
export class SimpleInfoService {
  private toggle: CustomerRow;
  overlayRef: OverlayRef;

  constructor(private injector: Injector) {}

  private Same(data: CustomerRow): boolean {
    return JSON.stringify(this.toggle) === JSON.stringify(data);
  }

  public CreateInfo(overlay: Overlay): void {
    this.overlayRef = overlay.create({
      positionStrategy: overlay
        .position()
        .global()
        .left()
        .bottom()
    });
  }

  public ShowInfo(component: any , data: CustomerRow): void {
    this.toggle = data;
    this.overlayRef.attach(
      new ComponentPortal(
        component,
        null,
        new PortalInjector(
          this.injector,
          new WeakMap<any, any>([
            [INFO_DATA, data]
          ])
        )
      )
    );
  }

  public HideInfo(): void {
    this.overlayRef.detach();
    this.toggle = null;
  }

  public CanShowInfo(row: CustomerRow): boolean {
    const close: boolean = this.overlayRef && this.overlayRef.hasAttached() &&　this.Same(row);
    return !close;
  }

  public ToggleInfo(component: any , row: CustomerRow): void {
    if (!row) {
      return;
    }

    const show: boolean = this.CanShowInfo(row);
    this.HideInfo();

    if (show) {
      this.ShowInfo(
        component,
        row
      );
    }

  }
}
