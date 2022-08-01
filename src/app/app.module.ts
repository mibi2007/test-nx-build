import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SvgModule } from './presentation/assets/svgs/svg/svg.component';
import { SignInComponent } from './presentation/pages/sign-in/sign-in.component';
import { AppInputComponent } from './presentation/share-components/app-input/app-input.component';


@NgModule({
  declarations: [
    // Components
    AppComponent,
    SignInComponent,
    AppInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 50,
      "space": -10,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#06A5FF",
      "innerStrokeColor": "#F1F5F9",
      "innerStrokeWidth": 10,
      "titleFontSize": '36',
      'subtitleFontSize': '24',
      "animateTitle": true,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "lazy": true
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SvgModule,
  ],
  exports: [MaterialModule, SvgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
