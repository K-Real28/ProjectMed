import { Component, NgModule } from '@angular/core';
import {CityDto} from "../../services/Client";
import {HttpClient} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'edit-polyclinic',
  templateUrl: './edit-polyclinic.component.html',
  styleUrls: ['./edit-polyclinic.component.css']
})
export class EditPolyclinicComponent {
  public cities: Array<CityDto> = new Array<CityDto>();
  public test: CityDto = new CityDto();

  constructor(public httpClient: HttpClient) {}

  ngOnInit() {
    this.getCities();
  }

  private baseUrl = 'api/cities/'

  getCities() {
    this.httpClient.get<CityDto[]>(this.baseUrl + 'GetCities').subscribe(result => {
      this.cities = result;
    }, error => console.error(error));
  }
}
