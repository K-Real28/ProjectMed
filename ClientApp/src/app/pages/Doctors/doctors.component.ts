import {Component, NgModule, OnInit} from '@angular/core';
import {CityDto, Client, DoctorDto, IDoctorDto} from '../../services/Client';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'doc',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  public doctors: Array<DoctorDto> = new Array<DoctorDto>();

  ngOnInit() {
    this.getDoctors();
  }

  private baseUrl = 'api/doctors/'

  constructor(public httpClient: HttpClient) {
  }

  getDoctors() {
    this.httpClient.get<DoctorDto[]>(this.baseUrl + 'GetDoctors').subscribe(result => {
      this.doctors = result;
    }, error => console.error(error));
  }

  deleteDoctors(id: any) {
    if (confirm("Вы уверены, что хотите удалить запись?")) {
      this.httpClient.delete(this.baseUrl + 'DeleteDoctorById/' + id).subscribe(result => {
        location.reload();
      }, error => console.error(error));
    }
  }
}
interface Doctor {
  id: Int32Array;
  fullName: string;
  shortInfo: string;
  costOfVisit: Int32Array;
  phoneNumber: Int32Array;
  expOfSpec: Int32Array;
}
