import styled from 'styled-components'
import style from '@/assets/global-style'

export const Wrapper = styled.div`
.footer{
    width: 100%;
    height: 2.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top:0.1rem;
    display: flex;
    border-top: 1px solid black;
    padding: 0.1rem 0;  
    .comment{      
        background-color: ${style["search-bgcolor"]};
        margin:0.25rem 0.25rem;
        font-size: 0.7rem;
        flex:1;
        padding-left: 1rem;
        height: 2rem;
        line-height: 2rem;
        border-radius:1rem;       
    }
    .font-items{
        display: flex;
    .font-item{
        padding: 0 0.75rem;
        i{
            font-size: 1.2rem;
        }
        .active-blue{
            color:${style["theme-color"]};
        }
        .font-number{
            font-size: 0.1rem;
        }
    }   
    }
}
`