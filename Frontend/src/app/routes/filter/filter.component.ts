import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CovidData } from '../../models/data.model';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private dataService:DataService) { }

  public covidData : CovidData [];
  public country:string; //per memorizzare la stringa dell’input
  

  getEntries(){ //mi prendo i dati
    this.dataService.getData().subscribe( (response : any) => {
      this.covidData = response;
    })
  }
  ngOnInit() {
    this.getEntries()
  }


}
