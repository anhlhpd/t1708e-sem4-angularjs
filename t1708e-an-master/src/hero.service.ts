import { Injectable } from '@angular/core';
import {Hero} from './app/entity/hero';
import {Product} from './app/entity/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  // root: Được phép truy cập ở tất cả các file trong project
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[];
  private products: Product[];

  constructor(private http: HttpClient) { } // dependency injection

  save(hero: Hero) {
    this.heroes.push(hero);
  }

  list() {
    return this.heroes;
  }

  saveLive(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(
      `https:localhost:8080/api/v1/heroes`,
      hero,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  listLive(): Observable<Hero[]> {
    return this.http.get <Hero[]> (
      `http://localhose:8080/api/v1/heroes`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  saveProduct(product: Product): {
    this.products.push(product);
  }

  listProduct(): {
    return this.products;
  }
}
