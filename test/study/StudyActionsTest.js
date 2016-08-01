import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as studyActions from '../../src/study/StudyActions'

const CREATE_CARD = 'CREATE_CARD'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('StudyActions', () => {
  it('dispatches CREATE_CARD action on createNewCard', () => {
    const store = mockStore([])
    
    const createCardAction = [
      {type: CREATE_CARD}
    ]

    return store.dispatch(studyActions.createNewCard())
      .then(() => {
        expect(store.getActions()).toEqual(createCardAction)
      })
  })
})
