import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  standalone: true,
  imports: [CommonModule,IonLabel, IonIcon, IonButton, IonContent, IonTitle, IonHeader, IonToolbar],

})
export class SwiperComponent  implements OnInit {

  items = ['Default schedule', 'Upcoming schedule', 'Prior schedule'];

  constructor() { }

  ngOnInit() {}

}
