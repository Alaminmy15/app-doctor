import { Component, OnInit } from '@angular/core';
import { DoctorDetailsService } from '../../doctor-details.service';
import { CommonModule } from '@angular/common';
import { IonRow, IonCard, IonIcon, IonText, IonCardTitle, IonCardSubtitle, IonCardContent, IonAvatar, IonButton } from "@ionic/angular/standalone";


@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonAvatar, IonCardContent, IonCardSubtitle, IonCardTitle, IonText, IonIcon, IonCard, IonRow]

})
export class DoctorsDetailsComponent  implements OnInit {

  public doctors: { name: string; specialty: string; avatar: string; date: string; time: string; }[] = [];

  constructor(private _doctorsDetails: DoctorDetailsService) { }

  ngOnInit() {
    this.doctors = this._doctorsDetails.getDoctors();
  }

}
