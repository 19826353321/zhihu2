import * as actionTypes from './constants'
const defaultState = {
    // enterGuzhang: false,

}
export default (state = defaultState, action) => {
    switch (action.type) {
        // case actionTypes.CHANGE_IDEA_DETAIL_ENTER_GUZHANG:
        //     return {
        //         ...state,
        //         enterGuzhang: action.data
        //     }
        // case actionTypes.CHANGE_IDEA_DETAIL_GUZHANG_NUMBER:
        //     return {
        //         ...state,

        //     }
        // case actionTypes.CHANGE_IDEA_DETAIL_ID:
        //     return {
        //         ...state,
        //         IdeaDetailId: action.data

        //     }
        default:
            return state
    }
    // return defaultState
}