import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';

import {CommonModule} from '@angular/common';
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
import {EditPolyclinicComponent} from "./pages/edit-polyclinic/edit-polyclinic.component";
import {EditSpecializationComponent} from "./pages/edit-specialization/edit-specialization.component";
import {EditCityComponent} from "./pages/edit-city/edit-city.component";
import {EditDoctorComponent} from "./pages/edit-doctor/edit-doctor.component";
import {AuthButtonDirective} from "./pages/auth-button.directive";
import {ZubnoiComponent} from "./pages/pageOfSpecialization/zubnoi/zubnoi.component";
import {TravmatologComponent} from "./pages/pageOfSpecialization/travmatolog/travmatolog.component";
import {TerapevtComponent} from "./pages/pageOfSpecialization/terapevt/terapevt.component";
import {PsyhologComponent} from "./pages/pageOfSpecialization/psyholog/psyholog.component";
import {OkulistComponent} from "./pages/pageOfSpecialization/okulist/okulist.component";
import {HirurgComponent} from "./pages/pageOfSpecialization/hirurg/hirurg.component";

const routes: Routes = [{ path: 'main', component: MainComponent },
{ path: 'cities', component: CitiesComponent },
{ path: 'doc', component: DoctorsComponent, canActivate: [AuthorizeGuard] },
{ path: 'spec', component: SpecializationsComponent , canActivate: [AuthorizeGuard]},
{ path: 'hospital', component: PolyclinicsComponent, canActivate: [AuthorizeGuard] },
  { path: 'create-city', component: CreateCityComponent, canActivate: [AuthorizeGuard]},
  { path: 'create-polyclinic', component: CreatePolyclinicComponent, canActivate: [AuthorizeGuard]},
  { path: 'create-specialization', component: CreateSpecializationComponent, canActivate: [AuthorizeGuard]},
  { path: 'create-doctor', component: CreateDoctorComponent, canActivate: [AuthorizeGuard]},
  { path: 'edit-polyclinic/:id', component: EditPolyclinicComponent, canActivate: [AuthorizeGuard]},
  { path: 'edit-doctor/:id', component: EditDoctorComponent, canActivate: [AuthorizeGuard]},
  { path: 'edit-city/:id', component: EditCityComponent, canActivate: [AuthorizeGuard]},
  { path: 'edit-specialization/:id', component: EditSpecializationComponent, canActivate: [AuthorizeGuard]},
  { path: 'appAuthButton', component: AuthButtonDirective, canActivate: [AuthorizeGuard]},
  { path: 'zubnoi', component: ZubnoiComponent},
  { path: 'travmatolog', component: TravmatologComponent},
  { path: 'terapevt', component: TerapevtComponent},
  { path: 'psyholog', component: PsyhologComponent},
  { path: 'okulist', component: OkulistComponent},
  { path: 'hirurg', component: HirurgComponent},

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
    EditCityComponent,
    EditDoctorComponent,
    EditPolyclinicComponent,
    EditSpecializationComponent,
    DoctorsComponent,
    SpecializationsComponent,
    PolyclinicsComponent,
    AuthButtonDirective,
    ZubnoiComponent,
    TravmatologComponent,
    TerapevtComponent,
    PsyhologComponent,
    OkulistComponent,
    HirurgComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    CommonModule,
    RouterModule.forRoot(routes), RouterOutlet, RouterLink, RouterLinkActive,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }, Client
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
