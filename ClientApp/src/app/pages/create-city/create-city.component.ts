import {Component, OnInit} from '@angular/core';
import {CityDto} from "../../services/Client";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit{
  public cities: Array<CityDto> = new Array<CityDto>();
  public  city: CityDto = new CityDto();
  tableMode: boolean = true;
  labelText: string;
  constructor(public httpClient: HttpClient) {
  }
  private apiUrl = 'api/cities/';

  saveLabel(label: string) {
    const url = `${this.apiUrl}/labels`;
    const data = { label }; }

    ngOnInit() {
    this.getCities();
  }

  private baseUrl = 'api/cities/'

  loadCities() {
    this.getCities()
      .subscribe((data: CityDto[]) => this.cities = data);
  }
  getCities() {
    this.httpClient.get<CityDto[]>(this.baseUrl + 'GetCities').subscribe(result => {
      this.cities = result;
    }, error => console.error(error));
  }

  createCity(city: CityDto) {
    return this.httpClient.post(this.baseUrl, city)
  }
  saveLabel() {
    this.httpClient.saveLabel(this.labelText).subscribe(
      response => {
        console.log('Метка успешно сохранена в базе данных.');
        // Дополнительные действия после успешного сохранения
      },
      error => {
        console.error('Ошибка при сохранении метки:', error);
        // Обработка ошибки
      }
    );}
  cancel() {
    this.city = new CityDto();
    this.tableMode = true;
  }
}
