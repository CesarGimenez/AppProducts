import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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

}
