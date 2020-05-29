import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WorkoutService } from './workout.service';
import { AppHttpInterceptor } from './AppHttpInterceptor ';
import * as _ from 'lodash';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    exports: [
        ReactiveFormsModule
    ],

  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      //HttpClient,
      ReactiveFormsModule,
      BrowserModule,
      FormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatInputModule,
      MatFormFieldModule,
      MatSidenavModule,
      NgxSpinnerModule 
      //RouterModule.forRoot([{ path: "home", component: HomeComponent }]),
      //RouterModule.forRoot([{ path: "home/employee", component: EmployeeComponent }]),
      //RouterModule.forRoot([{ path: "home/updateEmployee/:id", component: UpdateEmployeeComponent }]),
      //RouterModule.forRoot([{ path: "", component: LoginComponent }]),
  ],
    providers: [
        WorkoutService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptor,
            multi: true
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
