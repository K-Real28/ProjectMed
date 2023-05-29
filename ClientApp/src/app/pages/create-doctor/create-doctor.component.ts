import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DoctorDto, SpecializationDto} from "../../services/Client";

@Component({
  selector: 'create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  public request: DoctorDto = new DoctorDto();

  public specializations: Array<SpecializationDto> = new Array<SpecializationDto>();

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getSpecializations();
  }

  create() {
    this.httpClient.post('api/doctors/CreateDoctor', this.request).subscribe(response => {
    }, error => {});
    location.reload();
  }

  getSpecializations() {
    this.httpClient.get<SpecializationDto[]>('api/specializations/GetSpecializations').subscribe(response => {
      this.specializations = response;
    }, error => {});
  }

}
