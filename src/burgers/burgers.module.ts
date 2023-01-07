import { Module } from '@nestjs/common';
import { BurgersController } from './burgers.controller';
import { BurgersService } from './burgers.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Burger } from "./entities/burger.entity";

@Module({
  controllers: [BurgersController],
  providers: [BurgersService],
  imports: [TypeOrmModule.forFeature([Burger])]
})
export class BurgersModule {}

