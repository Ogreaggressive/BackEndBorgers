import { Component, OnInit } from '@angular/core';
import { BurgersInterface } from 'src/app/interfaces/burgers';
import { BurgerService } from 'src/app/services/burger.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-burger-form',
  templateUrl: './burger-form.component.html',
  styleUrls: ['./burger-form.component.css']
})
export class BurgerFormComponent implements OnInit {

  burger: BurgersInterface = {
    nombre_hamburguesa: '',
    tipo_carne: '',
    carne: 0,
    lechuga: false,
    cebolla: false,
    aros_cebolla: true,
    tomate: false,
    tocino: true,
    huevo: false,
    jamon: false,
    jalapeño: false,
    pepinillo: false,
    queso_cheddar: false,
    champinones: false,
    nachos: false,
    salsa: ''
  };
  edit: boolean = false;

  constructor(
    private burgerService: BurgerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.burgerService.getBurger(params.id)
        .subscribe({
          res = {
            console.log(res);
            this.burger = res;
            this.edit = true;
          },
          err => console.log(err)
          }
        )
    }
  }

  submitBurger() {
    this.burgerService.createBurger(this.burger)
      .subscribe({
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
    }
      )
  }

  updateBurger() {
    delete this.burger.createdAt;
    this.burgerService.updateBurger(this.burger._id, this.burger)
      .subscribe(
        {
        res => {
          console.log(res);
          this.router.navigate(['/burger'])
        },
        err => console.log(err)
    }
      )
  }

}

