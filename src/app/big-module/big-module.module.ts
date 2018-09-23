import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigModuleRoutingModule } from './big-module-routing.module';
import { BigFeatureComponent } from './big-feature-component/big-feature-component.component';

@NgModule({
  imports: [
    CommonModule,
    BigModuleRoutingModule
  ],
  declarations: [BigFeatureComponent]
})
export class BigModuleModule { }
