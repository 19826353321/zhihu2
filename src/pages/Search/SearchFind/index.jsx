import React, { memo, useState, useEffect } from 'react'
import { SearchFindWrapper } from './style'
import {
    FlexBetweenWrapper,
    FlexWrapper,
    FlexWrapWrapper,
    FlexItem2Wrapper
} from '@/components/commonstyles.js'
import { debounce } from '@/api/utils';

function SearchFind(props) {
    const { searchFindList } = props
    const [data, setData] = useState([])
    // const [isRotate, setIsRotate] = useState(false)
    useEffect(() => {
        setData([0, 1, 2, 3, 4, 5, 6, 7])
    }, [])
    const changedata = () => {
        let len = searchFindList.length;
        let arr = [];
        arr.push(Math.floor(Math.random() * len))
        while (arr.length < 8) {
            let cur = Math.floor(Math.random() * len)
            if (arr.indexOf(cur) === -1) {
                arr.push(cur);
            }
        }
        setData(arr);
    }
    // const debounceChangeData = () => debounce(changedata, 1000) 

    return (
        <SearchFindWrapper>
            <FlexBetweenWrapper className="header">
                <div className='header-left'>搜索发现</div>
                <FlexWrapper onClick={
                    debounce(
                        changedata
                        , 2000)
                }
                    className="header-right">
                    {/* <p style="font-size: 18px;">行内样式</p> */}
                    {/* {isRotate
                        ? <i className='iconfont icon-weibiaoti--'
                            style="transform:rotate(360deg)"></i> 
                            : <i className='iconfont icon-weibiaoti--'></i>}
                    {isRotate ? 1 : 0} */}
                    <i className='iconfont icon-weibiaoti--'></i>
                    <div >换一换</div>
                </FlexWrapper>
            </FlexBetweenWrapper>
            <FlexWrapWrapper>
                {/* {data.map(item=><div>{item}</div>)} */}
                {searchFindList
                    .filter((item, index) => index == data[0]
                        || index == data[1]
                        || index == data[2]
                        || index == data[3]
                        || index == data[4]
                        || index == data[5]
                        || index == data[6]
                        || index == data[7]
                    )
                    .map((item, index) => (
                        <FlexItem2Wrapper
                            key={index}
                            className="flex-item"
                        >
                            <div className='flex-item-text overflow-ellipsis'
                            >{item.text}</div>
                            {item.isHot ?
                                <div className='flex-item-after'>热</div>
                                : <div className='flex-item-after'></div>}

                        </FlexItem2Wrapper>
                    ))}
            </FlexWrapWrapper>
           
            
        </SearchFindWrapper>
    )
}
export default memo(SearchFind)
