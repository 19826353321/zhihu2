import React, { useEffect, useState } from 'react'
import { useLocation, NavLink, Link } from 'react-router-dom'
import { HeaderWrapper } from "./style";
import { isPathPartlyExisted } from '../../utils'
import style from '@/assets/global-style'

export default function Header() {
  const { pathname } = useLocation()
  if (isPathPartlyExisted(pathname)) return
  return (
    <HeaderWrapper>
      <div className='header'>
        <span className="header-words">
          <NavLink to={{ pathname: '/home/idea' }} className='header-word '
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? `0.15rem solid ${style["theme-color"]}` : "",
                fontSize: isActive ? "0.8rem" : "0.75rem",
                fontWeight: isActive ? "700" : "400",
              }
            }}>
            想法
          </NavLink>
          <NavLink to={{ pathname: '/home/recommend' }} className='header-word '
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? `0.15rem solid ${style["theme-color"]}` : "",
                fontSize: isActive ? "0.8rem" : "0.75rem",
                fontWeight: isActive ? "700" : "400",
              }
            }}>
            推荐
          </NavLink>
          <NavLink to={{ pathname: '/home/topSearch' }} className='header-word '
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? `0.15rem solid ${style["theme-color"]}` : "",
                fontSize: isActive ? "0.8rem" : "0.75rem",
                fontWeight: isActive ? "700" : "400",
              }
            }}>
            热榜</NavLink>
        </span>
        <span className="header-icons">
          <Link to={{ pathname: "/search" }} className='fa fa-search '></Link>
          <Link to={{ pathname: "/information" }} className='fa fa-bell-o'></Link>
        </span>
      </div>
    </HeaderWrapper >
  )
}