import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'; //image upload
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildrenaccComponent } from './childrenacc/childrenacc.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildrenaccComponent,
    FileUploadComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule, //import firebase database
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AppRoutingModule,

    //For router navigation
    RouterModule.forRoot([
      {
      path: '',
        component: LoginComponent,
      },
      {
      path:'fileupload',
        component: FileUploadComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        //For router with single page
        children:[
          {
            path: 'admin',
            component: AdminComponent
          },
          {
            path: 'childrenacc',
            component: ChildrenaccComponent
          },
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
