import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { UserRegistraionComponent } from './user-registraion/user-registraion.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { CrudappComponent } from './crudapp/crudapp.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'template-driven', component: TemplateDrivenFormComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'reactive-form', component: ReactiveformComponent },
  { path: 'register', component: UserRegistraionComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) },
  { path: 'todo', component: TodoAppComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'crudapp', component: CrudappComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
