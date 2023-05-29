import { Component } from '@angular/core';
import {PolyclinicDto, SpecializationDto} from "../../services/Client";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'create-specialization',
  templateUrl: './create-specialization.component.html',
  styleUrls: ['./create-specialization.component.css']
})
export class CreateSpecializationComponent {
  public request: SpecializationDto = new SpecializationDto();

  constructor(public httpClient: HttpClient) {
  }
  create() {
    this.httpClient.post('api/specializations/CreateSpecialization', this.request).subscribe(response => {
    }, error => {});
    location.reload();
  }
}
