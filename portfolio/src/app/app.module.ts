import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDEComponent } from './componentes/acerca-de/acerca-de.component';
import { SocialComponent } from './componentes/social/social.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { ProyectofComponent } from './componentes/proyectof/proyectof.component';


@NgModule({
  declarations: [
    AppComponent,
    HysComponent,
    LogoAPComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    BannerComponent,
    AcercaDEComponent,
    SocialComponent,
    ProyectoComponent,
    ProyectofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
