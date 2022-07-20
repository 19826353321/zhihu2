import styled from 'styled-components'
import style from '@/assets/global-style'

export const SearchFindWrapper = styled.div`

    .header{

        .header-left{
            
            font-size: ${style["font-size-l"]};
            font-weight:${style["weight-light"]}; 
            color: ${style["color-light"]};
        }
        .header-right{
           
            &:hover>.icon-weibiaoti--{
                @keyframes changerotate{
                
                0%{
                /* background: red; */
                transform:rotate(0deg);
                -webkit-transform: rotate(0deg);
                /* -webkit-transform:rotate(0deg) */
                
                }
                100%{
                    /* background: green; */
                    transform:rotate(300deg);
                    -webkit-transform: rotate(300deg);
                }
            }
                animation: changerotate 1.4s ease .1s;
                animation-fill-mode:both;
                /* animation-iteration-count:infinite; */
            }
            .icon-weibiaoti--{               
                margin: 0 0.3rem;
                /* animation-iteration-count:5; */
               
               
                
            }
        }
       
    }
    
    .flex-item{
        display:flex;
        align-items: center;
        justify-content: space-between;
        /* justify-items:space-between; */
            .flex-item-text{
                font-size: ${style["font-size-l"]};
                color: ${style["color-light"]};
                margin:0.3rem 0;
            }
            .flex-item-after{
                font-size: 0.4rem;
                border-radius:0.1rem; 
                padding: 0 0.05rem;          
                background-color: red;
                color:#ffffff;
                
            }
    
    }
   
`