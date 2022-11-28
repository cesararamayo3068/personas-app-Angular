import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { HttpClientModule }  from '@angular/common/http';
import { PersonaService } from './personas/persona.service';
import { FormComponent } from './personas/form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes} from '@angular/router';

const routes:Routes = [
  {path:'', redirectTo: '/personas', pathMatch:'full'},
  {path:'personas',component:PersonasComponent},
  {path:'personas/form',component:FormComponent},
  {path:'personas/form/:id',component:FormComponent},



]


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
