import styled from 'styled-components'
import style from '@/assets/global-style'

export const SearchRecommendWrapper = styled.div`
    .hot-search-vedio-box{
        height: 3rem;
        margin: 0.5rem 0;
        &:nth-child(1)>.hot-search-vedio-rank{
            color:red;
        }
        &:nth-child(2)>.hot-search-vedio-rank{
            color:#e29336;
        }
        &:nth-child(3)>.hot-search-vedio-rank{
            color:#f4bb69;
        }
        >img{
            height: 100%;
            border-radius:0.3rem;
        }
        .hot-search-vedio-item{
            margin: 0 0.3rem;
        }
        .hot-search-vedio-rank{
            width: 0.5rem;
        }
        .hot-search-vedio-content{
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            .hot-search-vedio-name{
                margin-bottom:0.5rem ;
                color:${style["color-light"]};
                font-weight:${style["weight-light"]} ;
            }
            .hot-search-vedio-footer{
                display:flex;
                align-items: center;
                font-size: ${style["font-size-s"]};
                color: ${style["search-color"]};
                .hot-search-vedio-score{
                    margin-right: 0.5rem;
                    /* color: red; */
                }
            }
        }
    }
`