import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BurgersModule } from './burgers/burgers.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    BurgersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'nico123',
      database: 'nicolas_schema',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
