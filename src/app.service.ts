import { Injectable } from '@nestjs/common';
import { FizzBuzz } from './FizzBuzz';

@Injectable()
export class AppService {
  constructor(private FizzBuzz: FizzBuzz) {}
  generateFizzBuzzList(numbers: number[]): (number | string)[] {
    return numbers.map(number => this.FizzBuzz.getFizzBuzz(number));
  }
}
