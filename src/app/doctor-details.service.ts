import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailsService {

  constructor() { }

  getDoctors() {
    return [
      {
        name: 'Dr. Joseph Brostito',
        specialty: 'Dental Specialist',
        avatar: 'assets/doctor (1).jpeg',
        date: 'Sunday, 12 June',
        time: '11:00 - 12:00 AM'
      },
      {
        name: 'Dr. Bessie Coleman',
        specialty: 'Dental Specialist',
        avatar: 'assets/doctor1 (1).jpeg',
        date: 'Sunday, 12 June',
        time: '11:00 - 12:00 AM'
      },
      {
        name: 'Dr. Babe Didrikson',
        specialty: 'Dental Specialist',
        avatar: 'assets/doctor (1).jpeg',
        date: 'Sunday, 12 June',
        time: '11:00 - 12:00 AM'
      },
      {
        name: 'Dr. Alamin Rollie',
        specialty: 'Dental Specialist',
        avatar: 'assets/doctor1 (1).jpeg',
        date: 'Sunday, 12 June',
        time: '11:00 - 12:00 AM'
      }];
  }

}
