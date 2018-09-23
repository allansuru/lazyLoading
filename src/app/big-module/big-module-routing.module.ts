import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigFeatureComponent } from './big-feature-component/big-feature-component.component';

const routes: Routes = [
  { path: '', component: BigFeatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigModuleRoutingModule { }


// ng generate module big-module --routing -- gerei o modulo e o routing!
