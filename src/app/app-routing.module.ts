import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import {ListUsersComponent} from "./users/list-users/list-users.component";


const routes: Routes = [
  {path: 'create', component: AddUserComponent},
  {path: 'update/:id', component: EditUserComponent},
  {path: 'delete/:id', component: DeleteUserComponent},
  {path: 'view/:id', component: ViewUserComponent},
  {path: 'list', component: ListUsersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
