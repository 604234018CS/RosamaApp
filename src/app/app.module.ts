import { Flashlight } from '@ionic-native/flashlight';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { ScannerPage } from './../pages/scanner/scanner';
import { SMS } from '@ionic-native/sms/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,LoginPage,ScannerPage,FlashlightPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,LoginPage,ScannerPage,FlashlightPage
  ],
  providers: [
    StatusBar,
    SplashScreen, SMS,BarcodeScanner,Flashlight,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
