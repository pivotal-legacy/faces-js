const CREATE_CARD = 'CREATE_CARD'

function createCard() {
  return {
    type:CREATE_CARD
  }
}

export function createNewCard() {
  return function (dispatch) {
    return dispatch(createCard())
  }
}
