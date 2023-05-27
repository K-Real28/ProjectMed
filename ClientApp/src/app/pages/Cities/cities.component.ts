import {HttpClient, HttpParams} from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import {CityDto, Client} from '../../services/Client';

@Component({

  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})


export class CitiesComponent implements OnInit{
  public cities: Array<CityDto> = new Array<CityDto>();

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getCities();
  }

  private baseUrl = 'api/cities/'

  getCities() {
    this.httpClient.get<CityDto[]>(this.baseUrl + 'GetCities').subscribe(result => {
      this.cities = result;
    }, error => console.error(error));
  }

  // getCity() {
  //   this.httpClient.get('api/cities/GetCity').subscribe(result => {
  //    console.log(result);
  //   }, error => console.error(error));
  // }

  createCity(city: City) {
    return this.httpClient.post(this.baseUrl, city)
  }
  updateCity(id: number, city: City) {
    const urlParams = new HttpParams().set(
      'id',
      id.toString()
    )
    return this.httpClient.put(this.baseUrl, city, {
      params: urlParams,
    })
  }
  deleteCity(id: any) {
    if(confirm("Вы уверены, что хотите удалить запись?")) {
      this.httpClient.delete(this.baseUrl + 'DeleteCityById/' + id).subscribe(result => {
        location.reload();
      }, error => console.error(error));
    }
  }
  title = 'angularapp';
}

interface City {
  id: Int32Array;
  name: string;
}
