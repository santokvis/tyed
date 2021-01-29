import { Component, OnInit } from '@angular/core';
import {PhpServiceService} from '../php-service.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  //data: any;

  constructor(private phpServiceService: PhpServiceService) { }


  ngOnInit(): void {
  // this.invoiceDetails();
  }
  // testPhp():void {
  //this.phpServiceService.get().subscribe(data => console.log(data));
     // }

        //invoiceDetails():void {
       // this.phpServiceService.invoiceDetails().subscribe(data => console.log(data));
          //  }

}




