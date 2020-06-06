import { AppService } from './app.service';
import { Test } from '@nestjs/testing';
import { FizzBuzz } from './FizzBuzz';

describe('appService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppService, FizzBuzz],
    }).compile();
    appService = await module.get<AppService>(AppService);
  });

  const fizzNumber = 3;
  const buzzNumber = 4;

  it('Given a list of numbers with no match in Fizz or Buzz, return a list of numbers', () => {
    expect(
      appService.generateFizzBuzzList([1, 7], fizzNumber, buzzNumber),
    ).toStrictEqual([1, 7]);
  });
  it('Given a list of numbers with match in Fizz, return the same list of numbers replacing the matchs with Fizz', () => {
    expect(
      appService.generateFizzBuzzList([1, 3], fizzNumber, buzzNumber),
    ).toStrictEqual([1, 'Fizz']);
  });
  it('Given a list of numbers with match in Buzz, return the same list of numbers replacing the matchs with Buzz', () => {
    expect(
      appService.generateFizzBuzzList([1, 4], fizzNumber, buzzNumber),
    ).toStrictEqual([1, 'Buzz']);
  });
  it('Given a list of numbers with match in FizzBuzz, return the same list of numbers replacing the matchs with FizzBuzz', () => {
    expect(
      appService.generateFizzBuzzList([2, 12], fizzNumber, buzzNumber),
    ).toStrictEqual([2, 'FizzBuzz']);
  });
});
