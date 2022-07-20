import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'

export default function Footer(props) {
    const { pathname } = useLocation()
    let pathRes = pathname.split('/')
    let pathname2 = "/" + pathRes[1];
    if (isPathPartlyExisted(pathname2)) return
    return (
        <FooterWrapper>
            <Link to="/home" className={classnames({ active: pathname2 == '/home' || pathname2 == '/' })}>
                <i className="fa fa-home"></i>
                <span>首页</span>
            </Link>
            <Link to="/attention" className={classnames({ active: pathname2 == '/attention' })}>
                <i className="icon-guanzhu1 iconfont"></i>
                <span>关注</span>
            </Link>
            <Link to="/vip" className={classnames({ active: pathname2 == '/vip' })}>
                <i className="iconfont icon-vip"></i>
                <span>会员</span>
            </Link>
            <Link to="/mine" className={classnames({ active: pathname2 == '/mine' })}>
                <i className="fa fa-user"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
