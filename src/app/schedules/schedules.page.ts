import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SwiperComponent } from './swiper/swiper.component';
import { DoctorsDetailsComponent } from '../components/doctors-details-cards/doctors-details.component';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
  standalone: true,
  imports: [DoctorsDetailsComponent, SwiperComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SchedulesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
