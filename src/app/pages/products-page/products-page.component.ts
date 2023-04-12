import { Component, OnInit, inject, Input } from '@angular/core';
import { article } from 'src/app/shared/interface/interface';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  http = inject(HttpClient);
  products: article[] = [];
  producto: any = '';
  editingId: number | null = null;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.http
      .get<article[]>('http://localhost:3000/products')

      .subscribe((data) => (this.products = data));
  }
  @Input() article!: article;

  buscador() {
    this.http
      .get<article[]>('http://localhost:3000/products')
      .subscribe((data) => {
        this.products = data.filter((item: any) =>
          item.name.toLowerCase().includes(this.producto.toLowerCase())
        );
      });
    // this.products = this.productList.filter((item: any) =>
    //   item.name.toLowerCase().includes(this.find.toLowerCase())
    // );
    console.log(this.producto.name);
  }

  delete(id: number) {
    this.service.deleteProduct(id).subscribe();
    confirm('¿Quieres elimar el producto?');
    location.reload();
  }
}
