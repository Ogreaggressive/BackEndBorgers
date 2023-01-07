import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';

import { BurgersInterface } from '../../interfaces/burgers'

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  constructor(private burgerService: BurgerService) { }

  burgers: BurgersInterface[];

  ngOnInit() {
    this.getBurgers();
  }

  getBurgers(): void {
    this.burgerService.getBurgers()
      .subscribe(
        {
        res => this.burgers = res,
        err => console.log(err)
    }
      )
  }

  deleteBurger(id: string): void {
    this.burgerService.deleteBurger(id)
      .subscribe(
        {
        res => {
          console.log(res);
          this.getBurgers();
        },
        err => console.log(err)
    }
      )
  }

}

