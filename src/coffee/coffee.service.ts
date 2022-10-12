import { Injectable, NotFoundException } from '@nestjs/common';
import { CoffeeDto } from './entity/coffee.entities';

@Injectable()
export class CoffeeService {
  coffees: CoffeeDto[] = [
    {
      id: 1,
      name: 'Coffee 1',
      flavours: ['vanilla', 'chocolate'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee with id: ${id} not found!`);
    }
    return coffee;
  }

  create(createCoffeeDTO: any) {
    this.coffees.push(createCoffeeDTO);
  }

  update(updateCoffeeDTO: any, id: string) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
