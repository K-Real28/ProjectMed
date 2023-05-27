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

const routes: Routes = [{ path: 'main', component: MainComponent },
{ path: 'cities', component: CitiesComponent, canActivate: [AuthorizeGuard] },
{ path: 'doc', component: DoctorsComponent, canActivate: [AuthorizeGuard] },
{ path: 'spec', component: SpecializationsComponent , canActivate: [AuthorizeGuard]},
{ path: 'hospital', component: PolyclinicsComponent, canActivate: [AuthorizeGuard] },
{ path: '**', redirectTo: '/' }];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MainComponent,
    CitiesComponent,
    DoctorsComponent,
    SpecializationsComponent,
    PolyclinicsComponent,
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
