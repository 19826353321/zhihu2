import * as actionTypes from './constants'
const defaultState = {
    oldSearchList: [],
    searchFindList: [],
    HotsearchVedioList: [],
    HotsearchGameList: [],
    searchItemList: [],

}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_OLD_SEARCH_LIST:
            return {
                ...state,
                oldSearchList: action.data
            }
        case actionTypes.CHANGE_SEARCH_FIND_LIST:
            return {
                ...state,
                searchFindList: action.data
            }
        case actionTypes.CHANGE_HOT_SEARCH_VEDIO_LIST:
            return {
                ...state,
                HotsearchVedioList: action.data
            }
        case actionTypes.CHANGE_HOT_SEARCH_GAME_LIST:
            return {
                ...state,
                HotsearchGameList: action.data
            }
        case actionTypes.CHANGE_SEARCH_ITEM_LIST:
            return {
                ...state,
                searchItemList: action.data
            }


        default:
            return state
    }

}