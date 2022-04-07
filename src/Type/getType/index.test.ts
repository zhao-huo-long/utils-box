import getType from './index'

test('getType', () => {
  expect(getType(0)).toBe('number')
  expect(getType(new Date())).toBe('date')
  expect(getType('')).toBe('string')
  expect(getType([])).toBe('array')
  expect(getType({})).toBe('object')
  expect(getType(null)).toBe('null')
  expect(getType(false)).toBe('boolean')
  expect(getType(undefined)).toBe('undefined')
  expect(getType(0)).toBe('number')
  expect(getType(()=>{})).toBe('function')
  expect(getType(new Set())).toBe('set')
  expect(getType(new WeakSet())).toBe('weakset')
  expect(getType(new Map())).toBe('map')
  expect(getType(new WeakMap())).toBe('weakmap')
  expect(getType(new RegExp(''))).toBe('regexp')
});

