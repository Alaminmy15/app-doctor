import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonText, IonAvatar, IonIcon, IonSearchbar, IonRow, IonCol } from '@ionic/angular/standalone';
import { DoctorReviewCardComponent } from '../components/doctor-review-card/doctor-review-card.component';
import {GeneralDoctorDetailsComponent} from '../components/general-doctor-card/general-doctor-details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [GeneralDoctorDetailsComponent, DoctorReviewCardComponent, IonCol, IonRow, IonSearchbar, IonIcon, IonAvatar, IonText, IonLabel,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
