import nestedQuery from '../../src/queries/nested-query'
import {expect} from 'chai'

describe('nestedQuery', () => {

  it('should created a nested query', () => {
    let result = nestedQuery('obj1', 'term', 'color', 'blue')
    expect(result).to.eql({
      nested: {
        path: 'obj1',
        query: {
          term: {
            'obj1.color': 'blue'
          }
        }
      }
    })
  })

})
