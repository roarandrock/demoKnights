import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {TimemachinePage} from '../pages/timemachine/timemachine';
import {MedievalPage} from '../pages/medieval/medieval';
import {FuturePage} from '../pages/future/future';
import {HelpPage} from '../pages/help/help';
import {TesttimePage} from '../pages/testtime/testtime';

@NgModule({
  declarations: [
    MyApp,
    TimemachinePage,
    MedievalPage,
    FuturePage,
    HelpPage,
    TesttimePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimemachinePage,
    MedievalPage,
    FuturePage,
    HelpPage,
    TesttimePage
  ],
  providers: []
})
export class AppModule {}
