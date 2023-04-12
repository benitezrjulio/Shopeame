import { Component } from '@angular/core';
import { article } from 'src/app/shared/interface/interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent {
  article: article = {
    id:0,
    name:"",
    price: 0,
    description: "",
    stars: 0,
    image: "",
  };
constructor(private service: ProductService){

}

  post(){
this.service.createProduct(this.article).subscribe()
confirm("Porducto modificado")
location.reload()
  }

}

