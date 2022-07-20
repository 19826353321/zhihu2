// import { getIdeaRequest } from "@/api/request"
import * as actionTypes from './constants'
export const changeIdeaDetailEnterGuzhang = (data) => ({
    type: actionTypes.CHANGE_IDEA_DETAIL_ENTER_GUZHANG,
    data: data
})
// export const changeIdeaDetailGuzhang = (data) => ({
//     type: actionTypes.CHANGE_IDEA_DETAIL_GUZHANG_NUMBER,
//     data: data
// })
// export const changeIdeaDetailId = (data) => ({
//     type: actionTypes.CHANGE_IDEA_DETAIL_ID,
//     data: data
// })
// api请求一定放在action中
// export const getIdeaDetailEnterGuzhang = (isGuzhang) => {

//     return (dispatch) => {
//         const action = changeIdeaDetailEnterGuzhang(isGuzhang);
//         dispatch(action)

//     }
// }
// export const getIdeaDetailId= (id) => {

//     return (dispatch) => {
//         const action = changeIdeaDetailId(id);
//         dispatch(action)

//     }
// }

