import styled from 'styled-components'
import style from '@/assets/global-style'
export const FooterWrapper = styled.div`
    width: 100%;
    height: 2.5rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 0.5rem;
        &.active {
            color: ${style["theme-color"]};
        }
        i{
            font-size: 1.25rem;
        }
    }
` 