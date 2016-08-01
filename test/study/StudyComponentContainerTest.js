import expect from 'expect'
import { mapDispatchToProps } from '../../src/study/StudyActions'

describe('StudyComponentContainer', () => {
  afterEach(function () {
    expect.restoreSpies()
  })

  it('mapDispatchToProps sets createNewCard to dispatch createNewCard action', () => {
    let dispatchSpy = expect.createSpy()
    let loginActionSpy = expect.spyOn(actions, 'login')

    mapDispatchToProps(dispatchSpy).createNewCard()

    expect(loginActionSpy).toHaveBeenCalled()
    expect(dispatchSpy).toHaveBeenCalledWith(actions.createNewCard())
  })
})
