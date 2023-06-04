import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CitiesComponent} from "../Cities/cities.component";
import {CityDto} from "../../services/Client";

@Component({
  selector: 'edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent   {

  // CityDetails: CityDto = {
  //   id: '',
  //   name: ''
  // };

  constructor(private route: ActivatedRoute, private citiesComponent: CitiesComponent, private router: Router) {
  }

  /*ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.citiesComponent.getCity(id)
            .subscribe({
              next: (response: CityDto) => {
                this.CityDetails = response;
              }
            });
        }
      }
    })
  }

  updateCity(){
    this.citiesComponent.updateCity(this.CityDetails.id, this.CityDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['city']);
        }
      });
  }*/
}


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

