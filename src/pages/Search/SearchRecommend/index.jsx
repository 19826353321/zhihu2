import React,{memo} from 'react'
import { SearchRecommendWrapper } from './style'
import { Tabs } from 'antd-mobile'
import { AppstoreOutline } from 'antd-mobile-icons'
import style from '@/assets/global-style'


function SearchRecommend(props) {
    const {
        HotsearchVedioList,
        HotsearchGameList,
    } = props;
    // console.log(HotsearchGameList,"HotsearchGameList");
    const renderHotsearchCommend = (HotsearchVedioList) => {
        return (HotsearchVedioList.map(item => (
            <div className='flex hot-search-vedio-box' key={item.rankId}>
                <div className='hot-search-vedio-item 
                hot-search-vedio-rank'>{item.rankId}</div>
                <img src={item.img} alt="" className='hot-search-vedio-item' />
                <div className='hot-search-vedio-item hot-search-vedio-content'>
                    <div className='hot-search-vedio-name'>{item.name}</div>
                    <div className='hot-search-vedio-footer'>
                        <div className="hot-search-vedio-score">{item.score?item.score:"暂无评分"}</div>
                        <div>知乎评分</div>
                    </div>
                </div>
            </div>

        )))
    }
   
    return (
        <SearchRecommendWrapper>
            <Tabs 
            activeLineMode='fixed'
                style={{
                    "--content-padding": 0,
                    "--active-line-height": "0.1rem",
                    "--fixed-active-line-width": "0.7rem",
                    '--title-font-size': '0.7rem',
                    "--active-title-color": `${style["color-light"]}`,
                    "--active-line-color": `${style["theme-color"]}`,
                    "color": `${style["search-color"]}`,
                }}>
                <Tabs.Tab title='热搜影视' key='hotSearchVedio'>
                    {renderHotsearchCommend(HotsearchVedioList)}
                </Tabs.Tab>
                <Tabs.Tab title='热搜游戏' key='hotSearchGame'>
                    {renderHotsearchCommend(HotsearchGameList)}
                </Tabs.Tab>
            </Tabs>

        </SearchRecommendWrapper>
    )
}
export default memo(SearchRecommend)