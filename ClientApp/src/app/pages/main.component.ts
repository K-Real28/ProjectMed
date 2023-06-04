import { Component, OnInit } from '@angular/core';
import {/*Cities,*/ Client, SpecializationDto} from "../services/Client";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements  OnInit {

  public specializations: Array<SpecializationDto> = new Array<SpecializationDto>();

  ngOnInit() {
    this.getSpecializations();
  }

  private baseUrl = 'api/specializations/'

  constructor(public httpClient: HttpClient) {
  }

  getSpecializations() {
    this.httpClient.get<SpecializationDto[]>(this.baseUrl + 'GetSpecializations').subscribe(result => {
      this.specializations = result;
    }, error => console.error(error));
  }

}


