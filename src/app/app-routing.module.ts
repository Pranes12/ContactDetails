import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './contact-details/add-contact/add-contact.component';
import { EditContactComponent } from './contact-details/edit-contact/edit-contact.component';
import { LoginComponent } from './login/login.component';
import { ContactListComponent } from './contact-details/contact-list/contact-list.component';

const routes: Routes = [
  { path: 'add-contact', component: AddContactComponent },
  { path: 'list', component: ContactListComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
