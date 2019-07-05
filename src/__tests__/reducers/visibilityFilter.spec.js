import visibilityFilter from '../../reducers/visibilityFilter'
import { VisibilityFilter } from '../../actions'

describe('visibilityFilter.js', () => {
  describe('default action', () => {
    it('should return show all if action is undefined', () => {
      expect(visibilityFilter(undefined, {})).toEqual(VisibilityFilter.SHOW_ALL)
    })

    it('should return completed if state is one', () => {
      expect(visibilityFilter(VisibilityFilter.SHOW_COMPLETED, {})).toEqual(VisibilityFilter.SHOW_COMPLETED)
    })
  })

  describe('set visibility filter', () => {
    it('should set type', () => {
      expect(visibilityFilter(undefined, {
        type: 'SET_VISIBILITY_FILTER',
        filter: VisibilityFilter.SHOW_ACTIVE
      })).toEqual(VisibilityFilter.SHOW_ACTIVE)
    })
  })
})