import { Dollar } from '../src/dollar'

it('$5 x 2 = $10', () => {
  const five = new Dollar(5)
  five.times(2)
  expect(five.amount).toBe(10)
})
