import styled from 'styled-components'
export const Wrapper = styled.div`
.idea-item{
    background-color: #f6f6f6;
    padding-left: 0.5rem;     
    ul {    
        display:flex;
        flex-wrap:wrap;
        align-content:flex-start;
        /* flex-flow:row wrap; */
        /* height: 50rem;      */
        li{
            /* float: left; */
            width:8.6rem;          
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            background-color: #fff;
            border-radius: 0.1rem;
            height: 100%;
            .img{
                width: 100%;
                margin-bottom: 0.1rem;               
            }
            .idea-body{
                padding: 0 0.7rem;
                p{      
                    display: -webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient:vertical;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    margin:0.7rem 0;  
                    font-size: 0.65rem;
                }    
                .ideaitem-footer{
                    font-size: 0.16rem;
                    justify-content: space-between;
                    .user-img{
                        width: 0.8rem;
                        height:0.8rem;
                        margin-right:0.3rem;
                        border-radius:50%;
                    }
                    i{
                        margin-right: 0.05rem;
                    }
                    .guzhangnumber{
                        margin-right: 0.1rem;
                    }
                }                   
            }
        }
    }
}
.flex{
    display: flex;
   
}
`