import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  name : String = '';
  product: String = '';
  message: String = '';
  company : any = [];
  constructor(private productsService: ProductsService) { }
  

  ngOnInit(): void {
    this.productsService.getCompany().subscribe(
      res => {
        console.log(res),
        this.company = res;
        
      },
      err => console.error(err)
      );
  }
  
  Send(){
    const urlopen = "https://api.whatsapp.com/send?phone="+ this.company[0].numphone +"&text=" + this.company[0].title + "%0A* ¿Cuál es tu nombre? *%0A"
    + this.name + "%0A* Indica el producto de interes *%0A" + this.product + "%0A* Dejanos tu mensaje*%0A " + this.message ;
    
    window.open(urlopen);
  }
}
