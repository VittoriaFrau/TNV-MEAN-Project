import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './routes/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { FilterComponent } from './routes/filter/filter.component';
import { CountryPipe } from './pipes/country.pipe';
import { WelcomeComponent } from './routes/welcome/welcome.component';
import { FilterByTwoComponent } from './routes/filter-by-two/filter-by-two.component';
import { ContinentclassificationPipe } from './pipes/continentclassification.pipe';
import { SortComponent } from './routes/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    UpperCasePipe,
    LoadingScreenComponent,
    FilterComponent,
    CountryPipe,
    WelcomeComponent,
    FilterByTwoComponent,
    ContinentclassificationPipe,
    SortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
