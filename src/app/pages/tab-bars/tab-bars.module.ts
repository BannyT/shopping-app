import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBarsPageRoutingModule } from './tab-bars-routing.module';

import { TabBarsPage } from './tab-bars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBarsPageRoutingModule
  ],
  declarations: [TabBarsPage]
})
export class TabBarsPageModule {}
