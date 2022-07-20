import React,{memo} from 'react'
import { OldSearchWrapper } from './style'

 function OldSearch(props) {
    const { oldSearchList } = props
    return (
        <OldSearchWrapper>
            <div className="header">
                <div className="header-left">历史搜索</div>
                <i className="header-right iconfont icon-shanchu"></i>
            </div>
            <div className="old-search-body">
                {oldSearchList.map((item, index) => (
                    <div
                        key={index}
                        className="old-search-item"
                    >{item}</div>
                ))}
                <i className="iconfont icon-xiangshang old-search-item"></i>
               
            </div>
        </OldSearchWrapper>
    )
}
export default memo(OldSearch)