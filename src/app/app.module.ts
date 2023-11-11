import { SwiperComponent } from './components/swiper/swiper.component';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './shared/directive/swiper.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { NewActiveModalComponent } from './components/newActiveModal/newActiveModal.component';
import { PolicyModalComponent } from './components/policyModal/policyModal.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { DonateModalComponent } from './components/donateModal/donateModal.component';
import { EmailModalComponent } from './components/emailModal/emailModal.component';

register();

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    SwiperDirective,
    HomeComponent,
    NewActiveModalComponent,
    PolicyModalComponent,
    DonateModalComponent,
    EmailModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  exports:[CommonModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
