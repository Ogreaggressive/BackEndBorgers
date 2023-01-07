import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Burger {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre_hamburguesa: string;
  @Column()
  tipo_carne: string;
  @Column()
  carne: number;
  @Column()
  lechuga: boolean;
  @Column()
  cebolla: boolean;
  @Column()
  aros_cebolla: boolean;
  @Column()
  tomate: boolean;
  @Column()
  tocino: boolean;
  @Column()
  huevo: boolean;
  @Column()
  jamon: boolean;
  @Column()
  jalapeño: boolean;
  @Column()
  pepinillo: boolean;
  @Column()
  queso_cheddar: boolean;
  @Column()
  champinones: boolean;
  @Column()
  nachos: boolean;
  @Column()
  salsa: string; //ketchup, mostaza, jack daniel, bluecheese, guacamole, buffalo
}