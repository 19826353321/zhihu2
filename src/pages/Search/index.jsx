import React, {
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import { actionCreators } from './store/index'
import { connect } from 'react-redux'

import SearchInput from './SearchInput'
import OldSearch from './OldSearch';
import SearchFind from './SearchFind'
import SearchRecommend from './SearchRecommend'
import SearchItem from "./SearchItem";
import {
  SearchWrapper,
  SearchShowWrapper
} from './style'

function Search(props) {
  const {
    oldSearchList,
    searchFindList,
    HotsearchVedioList,
    HotsearchGameList,
    searchItemList
  } = props
  const {
    getOldSearchDataDispatch,
    getSearchFindDataDispatch,
    getHotSearchVedioDataDispatch,
    getHotSearchGameDataDispatch,
    getSearchItemDataDispatch
  } = props

  const navigate = useNavigate();
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true)
    getOldSearchDataDispatch()
    getSearchFindDataDispatch()
    getHotSearchVedioDataDispatch()
    getHotSearchGameDataDispatch()
    getSearchItemDataDispatch()
  }, [])

  const searchBack = () => {
    setShow(false);
  }
  const handleQuery = (q) => {
    setQuery(q)
  }
  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExit={() => {
        navigate(-1)
      }}>
      <SearchWrapper>
        <SearchInput
          back={searchBack}
          newQuery={query}
          handleQuery={handleQuery}
        />
        <SearchShowWrapper isNone={query ? false : true}>
          <SearchItem query={query} searchItemList={searchItemList} />
        </SearchShowWrapper>
        <SearchShowWrapper isNone={query ? true : false}>
          <OldSearch oldSearchList={oldSearchList} />
          <SearchFind searchFindList={searchFindList} />
          <SearchRecommend
            HotsearchVedioList={HotsearchVedioList}
            HotsearchGameList={HotsearchGameList}
          />
        </SearchShowWrapper>
      </SearchWrapper>
    </CSSTransition>
  )
}
const mapStateToProps = (state) => {
  return {
    oldSearchList: state.search.oldSearchList,
    searchFindList: state.search.searchFindList,
    HotsearchVedioList: state.search.HotsearchVedioList,
    HotsearchGameList: state.search.HotsearchGameList,
    searchItemList: state.search.searchItemList,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getOldSearchDataDispatch() {
      dispatch(actionCreators.getOldSearchList())
    },
    getSearchFindDataDispatch() {
      dispatch(actionCreators.getSearchFindList())
    },
    getHotSearchVedioDataDispatch() {
      dispatch(actionCreators.getHotSearchVedioList())
    },
    getHotSearchGameDataDispatch() {
      dispatch(actionCreators.getHotSearchGameList())
    },
    getSearchItemDataDispatch() {
      dispatch(actionCreators.getSearchItemList())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
