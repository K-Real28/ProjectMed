import { HttpClient } from '@angular/common/http';
import {Component, NgModule, OnInit} from '@angular/core';
import {DoctorDto, PolyclinicDto} from "../../services/Client";


@Component({

  selector: 'hospital',
  templateUrl: './polyclinics.component.html',
  styleUrls: ['./polyclinics.component.css'],
})
export class PolyclinicsComponent implements OnInit {
  public polyclinics: Array<PolyclinicDto> = new Array<PolyclinicDto>();

  ngOnInit() {
    this.getPolyclinics();
  }
  private baseUrl = 'api/polyclinics/'

  constructor(public httpClient: HttpClient) {
  }
  getPolyclinics() {
    this.httpClient.get<PolyclinicDto[]>(this.baseUrl + 'GetPolyclinics').subscribe(result => {
      this.polyclinics = result;
    }, error => console.error(error));
  }
  deletePolyclinics(id: any) {
    if (confirm("Вы уверены, что хотите удалить запись?")) {
      this.httpClient.delete(this.baseUrl + 'DeletePolyclinicById/' + id).subscribe(result => {
        location.reload();
      }, error => console.error(error));
    }
  }
  title = 'angularapp';
}

interface Polyclinic {
  id: Int32Array;
  address: string;
  phoneNumber: Int32Array;
  name: string;
  photo: string;
}
