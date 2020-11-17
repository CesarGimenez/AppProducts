import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  company : any = [];
  user = "Cesar";

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
  }
