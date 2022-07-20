// 模块化 路由模块基本上就是数据模块
import { combineReducers } from "redux";
// store中央
// 地方
import { reducer as ideaReducer } from '@/pages/Home/Idea/store/index'//as取名
// import { reducer as ideaDetailReducer } from '@/pages/IdeaDetail/store/index'//as取名
import { reducer as searchReducer } from '@/pages/Search/store/index'//as取名
// import { reducer as InformationReducer } from '@/pages/Search/store/index'//as取名
// import {reducer as playerReducer} from '@/pages/Player/store/index'
export default combineReducers({
    // recommend:recommendReducer,
    // player:playerReducer
    idea:ideaReducer,
    // ideaDetail:ideaDetailReducer,
    search:searchReducer,
    // information:InformationReducer
})
