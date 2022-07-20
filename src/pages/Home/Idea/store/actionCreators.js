import { getIdeaRequest } from "@/api/request"
import * as actionTypes from './constants'

export const changeIdeaList = (data) => ({
    type: actionTypes.CHANGE_IDEA_LIST,
    data: data
})
// api请求一定放在action中
export const getIdeaList = () => {
    return (dispatch) => {
        getIdeaRequest()
            .then(data => {
                const action = changeIdeaList(data);
                dispatch(action)
            })
    }
}
