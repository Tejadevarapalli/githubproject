import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
import {FireauthService} from './fireauth.service';
import { UploadComponent } from './home/upload/upload.component';
import { MymodelsComponent } from './mymodels/mymodels.component';
// import { PopupModule} from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UploadComponent,
    MymodelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FileUploadModule,
    HttpClientModule,
    AngularFireAuthModule,
    // PopupModule.forRoot(),
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
