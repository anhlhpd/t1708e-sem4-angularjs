// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Gender} from '../entity/gender';
import {Hero} from '../entity/hero';

// @ts-ignore
@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  heroes = [
    new Hero('Iron man', 'https://images-na.ssl-images-amazon.com/images/I/61d6m8%2BIjTL._SX425_.jpg'),
    new Hero('Iron man', 'https://images-na.ssl-images-amazon.com/images/I/61d6m8%2BIjTL._SX425_.jpg'),
    new Hero('Iron man', 'https://images-na.ssl-images-amazon.com/images/I/61d6m8%2BIjTL._SX425_.jpg'),
  ];

  name: string;
  image: string;

  constructor() {
  }

  ngOnInit() {
    this.name = '';
    this.image = '';
  }

  doSomething() {
    console.log(this.name + ', ' + this.image);
    this.heroes.push(new Hero(this.name, this.image));
    this.name = '';
    this.image = '';
  }
}
