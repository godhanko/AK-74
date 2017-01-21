import { ExercisePage } from '../pages/exercise/exercise';
import { FoodPage } from '../pages/food/food';
import { RecordPage } from '../pages/record/record';
import { SetupPage } from '../pages/setup/setup';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecordExercisePage } from '../pages/record-exercise/record-exercise';
import { RecordFoodPage } from '../pages/record-food/record-food';
import { RunningPage } from '../pages/running/running';
import { CounterComponent } from '../components/counter/counter';
import { TimeComponent } from '../components/time/time';
import { CalLoseComponent } from '../components/cal-lose/cal-lose';
import { PointComponent } from '../components/point/point';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExercisePage,
    FoodPage,
    RecordPage,
    SetupPage,
    RecordExercisePage,
    RecordFoodPage,
    RunningPage,
    CounterComponent,
    TimeComponent,
    CalLoseComponent,
    PointComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExercisePage,
    FoodPage,
    RecordPage,
    SetupPage,
    RecordExercisePage,
    RecordFoodPage,
    RunningPage,
    CounterComponent,
    TimeComponent,
    CalLoseComponent,
    PointComponent
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
