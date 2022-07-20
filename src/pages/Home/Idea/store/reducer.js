import * as actionTypes from './constants'
const defaultState = {
    ideaList: [],
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_IDEA_LIST:
            return {
                ...state,
                ideaList: action.data
            }
        default:
            return state
    }
}