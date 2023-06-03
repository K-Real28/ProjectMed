import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {CityDto} from "../../services/Client";

@Component({
  selector: 'put-city',
  templateUrl: './put-city.component.html',
  styleUrls: ['./put-city.component.css']
})
export class PutCityComponent {

  // constructor(public httpClient: HttpClient) {}
  //   private apiUrl = 'api/cities/UpdateCityById';
  //
  // dataService (dataService: any): Observable<any> {
  //     const url = `${this.apiUrl}${dataService.id}`;
  //     return this.httpClient.put(url, dataService);
  //   }
  //
  //   updateCity()
  //   {
  //     const updateCity = {"api/cities/UpdateCityById"};
  //     this.dataService.updateCity(updateCity).subscribe(
  //       response => {
  //         console.log('Данные успешно обновлены');
  //         // Дополнительные действия после успешного обновления
  //       },
  //       error => {
  //         console.error('Ошибка при обновлении данных', error);
  //         // Обработка ошибки
  //       }
  //     );
  //   }
}
