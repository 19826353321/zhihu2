import React, { useEffect, useState ,memo} from 'react'
import { Wrapper } from './style';
 function IdeaDetailFooter({ ideaList ,id}) {
    const [guzhangNumber, setGuzhangNumber] = useState(0)
    const [isGuzhang, setIsGuzhang] = useState(false)
    const [shoucangNumber, setShoucangNumber] = useState(0)
    const [isShoucang, setIsShoucang] = useState(false)
    const [shareNumber, setShareNumber] = useState(0)
    const [isShare, setIsShare] = useState(false)
    const [commentNumber, setCommentNumber] = useState(0)
    const [isComment, setIsComment] = useState(false)
    useEffect(() => {
        if (ideaList[id]) {
            let data = ideaList[id]
            let { guzhangnumber, shoucangnumber, sharenumber, commentnumber } = data
            setGuzhangNumber(guzhangnumber)
            setShoucangNumber(shoucangnumber)
            setShareNumber(sharenumber)
            setCommentNumber(commentnumber)
        }
    }, [ideaList])
    const ChangeGuzhangNumber = () => {
        console.log(isGuzhang);
        if (!isGuzhang) {
            let num = guzhangNumber
            setGuzhangNumber(num + 1)
            setIsGuzhang(true)
        }
        if (isGuzhang) {
            let num = guzhangNumber
            setGuzhangNumber(num - 1)
            setIsGuzhang(false)
        }
    }
    const ChangeShoucangNumber = () => {
        console.log(isShoucang);
        if (!isShoucang) {
            let num = shoucangNumber
            setShoucangNumber(num + 1)
            setIsShoucang(true)
        }
        if (isShoucang) {
            let num = shoucangNumber

            setShoucangNumber(num - 1)
            setIsShoucang(false)
        }
    }

    return (
        <Wrapper>
            <div className="footer">
                <div className="comment">说点什么~</div>
                <div className="font-items">
                    <div className="font-item">
                        {isGuzhang ? <i className="iconfont icon-guzhang active-blue" onClick={ChangeGuzhangNumber}></i>
                            : <i className="iconfont icon-guzhang" onClick={ChangeGuzhangNumber}></i>}
                        <div className="font-number" >{guzhangNumber ? guzhangNumber : "鼓掌"}
                        </div>
                    </div>
                    <div className="font-item">
                        {isShoucang ? <i className="iconfont icon-shoucang active-blue" onClick={ChangeShoucangNumber}></i>
                            : <i className="iconfont icon-shoucang" onClick={ChangeShoucangNumber}></i>}
                        <div className="font-number" >{shoucangNumber ? shoucangNumber : "收藏"}
                        </div>
                    </div>
                    <div className="font-item">
                        <i className="iconfont icon-loop-full"></i>
                        <div className="font-number">{shareNumber ? shareNumber : "转发"}</div>
                    </div>
                    <div className="font-item">
                        <i className="iconfont icon-pinglun"></i>
                        <div className="font-number">{commentNumber ? commentNumber : "评论"}</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default memo(IdeaDetailFooter)
