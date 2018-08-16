import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login';
import {ConversationPage} from '../pages/conversation/conversation';
import {UserService} from '../services/user';
import {SearchPipe} from '../pipes/search';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from "../services/auth";
import {ProfilePage} from "../pages/profile/profile";

export const firebaseConfig = {
  apiKey: "AIzaSyDYxTJ4pBXhTDOpigoXFLhEYU-Y9byHJ64",
  authDomain: "facebook-auth-cb759.firebaseapp.com",
  databaseURL: "https://facebook-auth-cb759.firebaseio.com",
  projectId: "facebook-auth-cb759",
  storageBucket: "facebook-auth-cb759.appspot.com",
  messagingSenderId: "816690000973"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ConversationPage,
    SearchPipe,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ConversationPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService
  ]
})
export class AppModule {}