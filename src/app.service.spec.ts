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
    appService.setFizzBuzzConfig(3, 5);
  });

  it('Given a list of numbers with no match in Fizz or Buzz, return a list of numbers', () => {
    appService.setFizzBuzzConfig(3, 4);
    expect(appService.generateFizzBuzzList([1, 7])).toStrictEqual([1, 7]);
  });
  it('Given a list of numbers with match in Fizz, return the same list of numbers replacing the matchs with Fizz', () => {
    appService.setFizzBuzzConfig(3, 4);
    expect(appService.generateFizzBuzzList([1, 3])).toStrictEqual([1, 'Fizz']);
  });
  it('Given a list of numbers with match in Buzz, return the same list of numbers replacing the matchs with Buzz', () => {
    appService.setFizzBuzzConfig(3, 4);
    expect(appService.generateFizzBuzzList([1, 4])).toStrictEqual([1, 'Buzz']);
  });
  it('Given a list of numbers with match in FizzBuzz, return the same list of numbers replacing the matchs with FizzBuzz', () => {
    appService.setFizzBuzzConfig(3, 4);
    expect(appService.generateFizzBuzzList([2, 12])).toStrictEqual([
      2,
      'FizzBuzz',
    ]);
  });
});
