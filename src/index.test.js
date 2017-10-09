import test from 'ava';
import fontWeight from '.';

test('exports a function', t => {
  t.is(typeof fontWeight, 'function');
});

test('returns weight without regarding spaces, casing, etc.', t => {
  const tests = [
    {
      data: 'hairline',
      expected: 100
    },
    {
      data: 'hair-line',
      expected: 100
    },
    {
      data: 'thin',
      expected: 100
    },
    {
      data: 'extralight',
      expected: 200
    },
    {
      data: 'EXTra liGHt',
      expected: 200
    },
    {
      data: 'dEMi__ --- bOLD?!😉',
      expected: 600
    },
    {
      data: 'black',
      expected: 900
    },
    {
      data: 'heavy',
      expected: 900
    }
  ];

  tests.forEach(({ data, expected }) => {
    t.is(fontWeight(data), expected);
  });
});
