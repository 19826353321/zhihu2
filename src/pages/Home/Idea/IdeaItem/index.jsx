import React, { memo,useEffect } from 'react'
import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import propTypes from 'prop-types'
import Masonry from 'react-masonry-css'
import Scroll from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'
// import { memo } from "react";



 function IdeaItem({ ideaList }) {

  return <Wrapper >
    <Scroll className="list" onScroll={forceCheck}>
      <div className=' idea-item'>
        <ul>
          {ideaList.map(item => (

            <li key={item.id} >
              <Link to={{
                pathname: '/ideadetail',
                search: `id=${item.id}`
              }} >
                <img className='img' src={item.imgs[0].img} alt="" />
                <div className='idea-body'>
                  <p>{item.content}</p>
                  <div className='ideaitem-footer flex'>
                    <span className='flex'>
                      <img src={item.userimg} alt="" className='user-img' />
                      <span className='username'>{item.username}</span>
                    </span>
                    <span>
                      <i className='iconfont icon-guzhang'></i>
                      <span className='guzhangnumber'>{item.guzhangnumber ? item.guzhangnumber : ""}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Scroll>
  </Wrapper >
}
export default memo(IdeaItem)
IdeaItem.propTypes = {
  ideaList: propTypes.array.isRequired
}
