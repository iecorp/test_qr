import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanRsPage } from './scan-rs';

@NgModule({
  declarations: [
    ScanRsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanRsPage),
  ],
})
export class ScanRsPageModule {}
