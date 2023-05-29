import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {PolyclinicDto, SpecializationDto} from "../../services/Client";

@Component({

  selector: 'spec',
  templateUrl: './specializations.component.html',
  styleUrls: ['./specializations.component.css'],
})
export class SpecializationsComponent implements OnInit {
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

  deleteSpecializations(id: any) {
    if (confirm("Вы уверены, что хотите удалить запись?")) {
      this.httpClient.delete(this.baseUrl + 'DeleteSpecializationById/' + id).subscribe(result => {
        location.reload();
      }, error => console.error(error));
    }
  }
  title = 'angularapp';
}
interface Specialization {
  id: Int32Array;
  name: string;
}
