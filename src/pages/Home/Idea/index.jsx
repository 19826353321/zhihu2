import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import IdeaItem from "./IdeaItem";

function Idea(props) {
  const { ideaList } = props
  const { getIdeaDataDispatch } = props
  useEffect(() => {
    getIdeaDataDispatch();
  }, [])
  return (
    <IdeaItem ideaList={ideaList} />
  )
}
const mapStateToProps = (state) => {
  return {
    ideaList: state.idea.ideaList,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getIdeaDataDispatch() {
      dispatch(actionCreators.getIdeaList())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Idea)
