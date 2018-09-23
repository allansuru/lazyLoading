import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutModuleRoutingModule } from './about-module-routing.module';
import { AboutComponentComponent } from './about-component/about-component.component';

@NgModule({
  imports: [
    CommonModule,
    AboutModuleRoutingModule
  ],
  declarations: [ AboutComponentComponent ]
})
export class AboutModuleModule { }
