import React, { useEffect, useState } from 'react'
import { useNavigate, Outlet, useParams, Link } from 'react-router-dom'
import { getIdeaRequest } from "@/api/request";
import { IdeaDetailWrapper } from "./style";
import Swiper from 'swiper'
import IdeaDetailFooter from "./IdeaDetailFooter";
import { connect } from 'react-redux'
import { actionCreators } from '@/pages/Home/Idea/store/index'
import { actionCreators as actionCreators2} from './store/index'

function IdeaDetail(props) {
  const { ideaList} = props
  const { getIdeaDetailDataDispatch } = props
  const result = new URLSearchParams(location.search);
  const id = result.get('id');
  let isGuZhang;
  // ideaDetailId=id;
  // console.log("id:",id);

  // const [sliderSwiper, setSliderSwiper] = useState(null)
  useEffect(() => {
    getIdeaDetailDataDispatch(true,id);
  }, [])
  useEffect(() => { 
    let swiper;
    if (!swiper) {
      swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }, [ideaList])
  // useEffect(()=>{
  //    console.log("idealist:",ideaList[id]);
  // },[ideaList,id])
  return (
    <IdeaDetailWrapper>
      {ideaList.filter((item) => item.id == id).map((item) =>
        <div key={item.id} >
          <div className='idea-detail-header'>
            <span className="idea-detail-header-left">
              <Link to={{
                pathname: '/home/idea',
              }} >
                <i className='fa fa-angle-left'></i>
              </Link>
              <img src={item.userimg} alt="userimg" className='userimg' />
              <span className='username'>{item.username}</span>
            </span>
            <span className="idea-detail-header-right">
              <p className='concern'>+ 关注</p>
              <i className='fa-ellipsis-v fa'></i>
            </span>
          </div>
          <div className="swiper-container img-swiper">
            <div className="swiper-wrapper">
              {item.imgs.map((imgs) => (<div className="swiper-slide" key={imgs.imgId}>
                <img src={imgs.img} width="100%" />
              </div>))}
            </div>
            {/* <span className='img-index'>{imgData.imgId}/{imgData.length}</span> */}
            <div className="swiper-pagination "></div>
          </div>
          <p className='content'>{item.content}</p>
        </div>
      )}
      <IdeaDetailFooter ideaList={ideaList} id={id}/>
    </IdeaDetailWrapper>

  )

}
const mapStateToProps = (state) => {
  return {
   
    ideaList: state.idea.ideaList,
    // enterGuzhang:state.ideaDetail.enterGuzhang,
    // ideaDetailId:state.ideaDetail.ideaDetailId,
   
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getIdeaDetailDataDispatch(isGuzhang,id) {
      dispatch(actionCreators.getIdeaList())
      // dispatch(actionCreators2.getIdeaDetailEnterGuzhang(isGuzhang))
      // dispatch(actionCreators2.getIdeaDetailId(id))
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IdeaDetail)