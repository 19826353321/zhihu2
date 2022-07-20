import React from 'react'
import { useEffect, useState } from 'react'
import { SearchWrapper } from '../style'
import { SearchItemWrapper } from './style'

export default function SearchItem(props) {
    const { query, searchItemList } = props
    const [regExp, setRegExp] = useState()
    const renderSearchItemList=(searchItemList)=>{
        return (searchItemList
            .filter((item, index) => {
                return true == new RegExp('^.*' + query + '.*$').test(item)
            })
            .map((item, index) => (
                <div className="search-item flex" key={index}>
                    <i className='iconfont icon-sousuo'></i>
                    <div>{item}</div>
                </div>)))
    }
    return (
        <SearchItemWrapper>
            {/* {searchItemList
                .filter((item, index) => {
                    return true == new RegExp('^.*' + query + '.*$').test(item)

                })
                .map((item, index) => (
                    <div className="search-item flex" key={index}>
                        <i className='iconfont icon-sousuo'></i>
                        <div>{item}</div>
                    </div>))}*/}
                    {renderSearchItemList(searchItemList)} 
        </SearchItemWrapper>
    )
}
