import styled from 'styled-components'
import style from '@/assets/global-style'

export const SearchBox = styled.div`
    display:flex;
    align-items: center;
    margin-top:0.5rem;
    font-size: ${style["font-size-m"]};
    .search-box{
        flex:1;
        display: flex;
        justify-content: space-between;
        border-radius: 1.5rem;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        background-color: ${style["search-bgcolor"]};
        color:${style["search-color"]} ;
       >input{
            flex:1;
            border:0;
            padding: 0 0.5rem;
            background-color: ${style["search-bgcolor"]};
            font-size: ${style["font-size-l"]};
       }      
    }
    .back{
        margin-left: 1rem;
    }

`