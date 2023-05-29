import { Component } from '@angular/core';
import {DoctorDto, PolyclinicDto} from "../../services/Client";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'create-polyclinic',
  templateUrl: './create-polyclinic.component.html',
  styleUrls: ['./create-polyclinic.component.css']
})
export class CreatePolyclinicComponent {

  public request: PolyclinicDto = new PolyclinicDto();

  constructor(public httpClient: HttpClient) {
  }
  create() {
    this.httpClient.post('api/polyclinics/CreatePolyclinic', this.request).subscribe(response => {
    }, error => {});
    location.reload();
  }
}
