import styled from 'styled-components'
import style from '@/assets/global-style'

export const OldSearchWrapper = styled.div`
    font-size: ${style["font-size-m"]};
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:0.5rem 0;
        .header-left{
            font-weight: 700;
        }
    }
    .old-search-body{
        display: flex;
        flex-wrap:wrap;
        .old-search-item{
            margin:0 0.2rem 0.5rem 0;
            padding: 0.3rem 0.5rem;
            border-radius:1rem;
            background-color:${style["search-bgcolor"]};
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;        
        }
    }
`