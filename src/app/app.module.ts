import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserRegistraionComponent } from './user-registraion/user-registraion.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ValidateEqualModule } from 'ng-validate-equal';
import { LogoutComponent } from './logout/logout.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { CrudappComponent } from './crudapp/crudapp.component';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    UserRegistraionComponent,
    UserLoginComponent,
    LogoutComponent,
    ReactiveformComponent,
    TodoAppComponent,
    CrudappComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ValidateEqualModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
