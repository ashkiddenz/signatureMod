import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatureListComponent } from './signature-list/signature-list.component';

const routes: Routes = [
  {path:'signatures',component:SignatureListComponent,children:[
    {path:'',component:SignatureListComponent},
    {path:':id',component:SignatureListComponent}
  ]},
  {path:'',redirectTo:'/signatures',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
