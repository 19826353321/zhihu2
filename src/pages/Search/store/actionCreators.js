import {
    getOldSearchRequest,
    getSearchFindRequest,
    getHotSearchVedioRequest,
    getHotSearchGameRequest,
    getSearchItemRequest
} from "@/api/request"
import * as actionTypes from './constants'

export const changeOldSearchList = (data) => ({
    type: actionTypes.CHANGE_OLD_SEARCH_LIST,
    data: data
})
export const getOldSearchList = () => {

    return (dispatch) => {
        getOldSearchRequest()
            .then(data => {
                // console.log("data:", data, data.data);
                const action = changeOldSearchList(data);
                dispatch(action)
            })
    }
}
export const changeSearchFindList = (data) => ({
    type: actionTypes.CHANGE_SEARCH_FIND_LIST,
    data: data
})
export const getSearchFindList = () => {

    return (dispatch) => {
        getSearchFindRequest()
            .then(data => {
                // console.log("data:", data, data.data);
                const action = changeSearchFindList(data);
                dispatch(action)
            })
    }
}
export const changeHotSearchVedioList = (data) => ({
    type: actionTypes.CHANGE_HOT_SEARCH_VEDIO_LIST,
    data: data
})
export const getHotSearchVedioList = () => {

    return (dispatch) => {
        getHotSearchVedioRequest()
            .then(data => {
                // console.log("data:", data, data.data);
                const action = changeHotSearchVedioList(data);
                dispatch(action)
            })
    }
}
export const changeHotSearchGameList = (data) => ({
    type: actionTypes.CHANGE_HOT_SEARCH_GAME_LIST,
    data: data
})
export const getHotSearchGameList = () => {

    return (dispatch) => {
        getHotSearchGameRequest()
            .then(data => {
                // console.log("getHotSearchGameRequest:", data, data.data);
                const action = changeHotSearchGameList(data);
                dispatch(action)
            })
    }
}
export const changeSearchItemList = (data) => ({
    type: actionTypes.CHANGE_SEARCH_ITEM_LIST,
    data: data
})
export const getSearchItemList = () => {

    return (dispatch) => {
        getSearchItemRequest()
            .then(data => {
                // console.log("getHotSearchGameRequest:", data, data.data);
                const action = changeSearchItemList(data);
                dispatch(action)
            })
    }
}



