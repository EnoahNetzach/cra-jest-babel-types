import { getId } from '../merchants'

describe('merchants', () => {
  it('returns an id', async () => {
    expect(await getId()).toBe(42)
  })
})
