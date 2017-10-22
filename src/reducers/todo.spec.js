import reducer from './todo'

describe('Todo reducer', () => {
  test('returns a state object', () => {
    const result = reduecer(undefined, { type: 'ANYTHING' })

    expect(result).toBeDefined()
  })
})
