import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HeroService} from '../../hero.service';
import {Product} from '../entity/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  products: Product[];
  formControls = {
    name: [null],
    price: [null],
    image: [null],
    description: [null]
  };

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private heroService: HeroService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(this.formControls);
    this.products = this.heroService.listProduct();
  }

  doSave() {
    this.heroService.saveProduct(new Product(this.formGroup.get('name').value, this.formGroup.get('price').value,
      this.formGroup.get('image').value, this.formGroup.get('description').value));
  }
}
