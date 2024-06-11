import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonText, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonSearchbar, IonCardContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-general-doctor-details',
  templateUrl: './general-doctor-details.component.html',
  styleUrls: ['./general-doctor-details.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonSearchbar, IonIcon, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonAvatar, IonText, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent],

})
export class GeneralDoctorDetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
