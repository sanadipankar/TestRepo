import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Cv} from '../../models/Cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  cvs:Cv[];
  showExtended:boolean = false;
  enableAdd:boolean = true;
  loaded: boolean = false;//is done while using http,making an httprequest and getting the calls back 
  data: any;
  currentStyles = {};
  constructor(private dataService : DataService) { }

  ngOnInit() {
        
      /*this.cvs = this.dataService.getCvs();*/
      this.dataService.getCvs().subscribe(cvs => {
          this.cvs = cvs;
          this.loaded = true;
      });
       
       /*this.loaded = true;*/
       
       this.setCurrentStyles();
       this.dataService.getData().subscribe(data => {
            console.log(data);
       });
  }

  addCv(cv:Cv){
    this.cvs.push(cv);
  }

  


  setCurrentStyles(){
    this.currentStyles = {
      'padding-top':this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

  fireEvent(e){
    console.log(e.type);
  }
}
