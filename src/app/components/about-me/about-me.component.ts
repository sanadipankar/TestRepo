import { Component,OnInit } from '@angular/core';
import { About } from '../../models/About';

@Component({
    selector:'app-about',
    templateUrl:'./about.component.html',
    styleUrls:['./about.component.css']
    
})

export class AboutComponent implements OnInit{

  //Properties
  about: About;
  showExtended:boolean = true;
  //services:About.services[];
  
    
    //methods

    /*constructors are mostly used to eject dependencies*/
   constructor(){
        
        /*Assign types to function parameters and return values*/
       
}   

ngOnInit(){
    this.about = {
        name:'Nilanjana Dutta',
        dob:'September 27,1992',
        age : 25,
        address : {
      street:'Phase 1,Rajiv Gandhi Infotech Park,Hinjewadi,',
      city:'City -Pune,',
      state:'Maharashtra - ',
      pin:'411057,',
      country:'India'
    },

    email:"nilanjanadutta.sit@gmail.com",
    phone:"+91-9739333232",
    website:"www.nilanjana-dutta.com",
    servicename:'My Service 2',
    services:
        {
        heading:'Making Money',
        bodypart:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.'
        },
        hide:true/*,
      {
        heading:'Making Money',
        bodypart:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.'
      },
      {
        heading:'Earning Money',
        bodypart:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.'
      },
      {
        heading:'Fully functional easy to use website',
        bodypart:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.'
      },
      {
        heading:'Making Life easier and faster',
        bodypart:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably have not heard of them accusamus labore sustainable VHS.'
      }
    ]*/

    
  }

  
  
}
  
/*toggleHide(about: About){
  about.hide = !about.hide;
}*/
}

