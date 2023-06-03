import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { Client } from './services/Client';
import { MainComponent } from './pages/main.component';
import { CitiesComponent } from './pages/Cities/cities.component';
import { DoctorsComponent } from './pages/Doctors/doctors.component';
import { SpecializationsComponent } from './pages/Specializations/specializations.component';
import { PolyclinicsComponent } from './pages/Polyclinics/polyclinics.component';
import {CreateCityComponent} from "./pages/create-city/create-city.component";
import {CreatePolyclinicComponent} from "./pages/create-polyclinic/create-polyclinic.component";
import {CreateSpecializationComponent} from "./pages/create-specialization/create-specialization.component";
import {CreateDoctorComponent} from "./pages/create-doctor/create-doctor.component";
import {PutPolyclinicComponent} from "./pages/put-polyclinic/put-polyclinic.component";
import {PutSpecializationComponent} from "./pages/put-specialization/put-specialization.component";
import {PutCityComponent} from "./pages/put-city/put-city.component";
import {PutDoctorComponent} from "./pages/put-doctor/put-doctor.component";
import {AuthButtonDirective} from "./pages/auth-button.directive";

const routes: Routes = [{ path: 'main', component: MainComponent },
{ path: 'cities', component: CitiesComponent },
{ path: 'doc', component: DoctorsComponent, canActivate: [AuthorizeGuard] },
{ path: 'spec', component: SpecializationsComponent , canActivate: [AuthorizeGuard]},
{ path: 'hospital', component: PolyclinicsComponent, canActivate: [AuthorizeGuard] },
  { path: 'create-city', component: CreateCityComponent, canActivate: [AuthorizeGuard]},
  { path: 'create-polyclinic', component: CreatePolyclinicComponent, canActivate: [AuthorizeGuard]},
  { path: 'create-specialization', component: CreateSpecializationComponent, canActivate: [AuthorizeGuard]},
  { path: 'create-doctor', component: CreateDoctorComponent, canActivate: [AuthorizeGuard]},
  { path: 'put-polyclinic', component: PutPolyclinicComponent, canActivate: [AuthorizeGuard]},
  { path: 'put-doctor', component: PutDoctorComponent, canActivate: [AuthorizeGuard]},
  { path: 'put-city', component: PutCityComponent, canActivate: [AuthorizeGuard]},
  { path: 'put-specialization', component: PutSpecializationComponent, canActivate: [AuthorizeGuard]},
  { path: 'appAuthButton', component: AuthButtonDirective, canActivate: [AuthorizeGuard]},
{ path: '**', redirectTo: '/main' }];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MainComponent,
    CitiesComponent,
    CreateCityComponent,
    CreatePolyclinicComponent,
    CreateSpecializationComponent,
    CreateDoctorComponent,
    PutCityComponent,
    PutDoctorComponent,
    PutPolyclinicComponent,
    PutSpecializationComponent,
    DoctorsComponent,
    SpecializationsComponent,
    PolyclinicsComponent,
    AuthButtonDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot(routes), RouterOutlet, RouterLink, RouterLinkActive,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }, Client
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
