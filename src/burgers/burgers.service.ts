import { Injectable } from '@nestjs/common';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { BurgersInterface } from './interfaces/burgers.interfaces';
import { InjectRepository } from "@nestjs/typeorm";
import { Burger } from "./entities/burger.entity";
import { Repository } from "typeorm";

@Injectable()
export class BurgersService {
  constructor(@InjectRepository(Burger) private burgerRepository: Repository<Burger>) {
  }
  create(createBurgerDto: CreateBurgerDto){
    return this.burgerRepository.save(createBurgerDto);
  }
  find(id: number){
    return this.burgerRepository.findOne({where:{id:id}})
  }
  findAll(){
    return this.burgerRepository.find()
  }
  update(changedBurgerDto: CreateBurgerDto, id: number){
    //let burgerToChange = this.burgerRepository.findOne({where:{id:id}});
    this.burgerRepository.update(id,changedBurgerDto);
    return changedBurgerDto
    //let updated = Object.assign(burgerToChange, changedBurgerDto);
    //return this.burgerRepository.save(updated);
  }
  delete(id: number){
    return this.burgerRepository.delete({id:id})
  }
}

