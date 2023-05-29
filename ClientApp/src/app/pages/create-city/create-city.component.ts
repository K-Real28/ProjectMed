import {Component, OnInit} from '@angular/core';
import {CityDto, DoctorDto, SpecializationDto} from "../../services/Client";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent  {
  public request: CityDto = new CityDto();

  constructor(public httpClient: HttpClient) {
  }
  create() {
    this.httpClient.post('api/cities/CreateCity', this.request).subscribe(response => {
    }, error => {});
    location.reload();
  }
}
