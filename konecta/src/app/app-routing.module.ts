import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent} from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';


const routes: Routes = [
    {
      path: '',
      component: LayoutComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }