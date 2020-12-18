import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Luan',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Luan&profession=developer');
  });

  it('should create a valid query string even when an array is provided', () => {
    const obj = {
      name: 'Luan',
      profession: 'developer',
      abilities: ['JS', 'React'],
    };

    expect(queryString(obj)).toBe(
      'name=Luan&profession=developer&abilities=JS,React',
    );
  });

  it('should throw an error when a nested object is passed', () => {
    const obj = {
      name: 'Luan',
      profession: 'developer',
      abilities: {
        first: 'JS',
        second: 'C#',
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to an object', () => {
    const qs = 'name=Luan&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Luan',
      profession: 'developer',
    });
  });

  it('should convert a query string to an object with just one key', () => {
    const qs = 'name=Luan';

    expect(parse(qs)).toEqual({
      name: 'Luan',
    });
  });

  it('should convert a query string separated by commas to an object', () => {
    const qs = 'hobbies=drawing,painting,surfing';

    expect(parse(qs)).toEqual({
      hobbies: ['drawing', 'painting', 'surfing'],
    });
  });
});
