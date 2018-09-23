import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponentComponent},
  { path: 'bigComponent', loadChildren: './big-module/big-module.module#BigModuleModule'},
  { path: 'about', loadChildren: './about-module/about-module.module#AboutModuleModule'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
