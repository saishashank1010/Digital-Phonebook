import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModelComponent } from './contact-model/contact-model.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';



const routes: Routes = [
   {path:'', redirectTo:'/contact', pathMatch:'full'},
   {path: 'contact', component:ContactListComponent},
   {path: 'contactModel', component:ContactModelComponent},
   {path: 'editContact/:id', component:EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

