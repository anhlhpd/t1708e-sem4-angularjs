// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HeroService} from '../../hero.service';
import {Hero} from '../entity/hero';

// @ts-ignore
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  formControls = {
    name: [null],
    description : [null]
  }

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private heroService: HeroService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(this.formControls);
  }

  doSave(){
    this.heroService.save(new Hero(this.formGroup.get('name').value, this.formGroup.get('description').value));
    window.alert('Hello world ' + this.formGroup.get('name').value());
  }

}
