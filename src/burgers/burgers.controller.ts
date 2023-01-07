import { Body, Controller, Get, Post, Param, Delete, Put } from "@nestjs/common";
import { CreateBurgerDto } from "./dto/create-burger.dto";
import { BurgersService } from "./burgers.service";

@Controller('burgers') // path
export class BurgersController {
  constructor(private burgersService: BurgersService) {
  }
  @Get()
  findAll(){
    return this.burgersService.findAll();
  }
  @Post()
  create(@Body() createBurgerDto: CreateBurgerDto){
    return this.burgersService.create(createBurgerDto);
  }
  @Get(':id') // PATH OPCIONAL
  find(@Param('id') id:number){
    return this.burgersService.find(id);
  }
  @Put(':id') // PATH OPCIONAL
  update(@Body() changedBurgerDto: CreateBurgerDto, @Param('id') id:number){
    return this.burgersService.update(changedBurgerDto, id);
  }
  @Delete(':id') // PATH OPCIONAL
  delete(@Param('id') id:number){
    return this.burgersService.delete(id);
  }
}

//ENDPOINT
//GET  PREFIJO DE PATH OPCIONAL + PATH OPCIONAL


