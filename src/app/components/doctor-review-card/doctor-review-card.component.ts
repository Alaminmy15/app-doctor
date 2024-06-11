import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonText, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonSearchbar, IonCardContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-doctor-review-card',
  templateUrl: './doctor-review-card.component.html',
  styleUrls: ['./doctor-review-card.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonSearchbar, IonIcon, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonText, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent],

})
export class DoctorReviewCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
