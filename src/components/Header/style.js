import styled from 'styled-components'
export const HeaderWrapper = styled.div`
.header{
  position: relative;
  text-align: center;
  margin: 0.5rem 0;
  .header-words{
    display: flex;
    justify-content: center;
    .header-word{
      margin: 0 1rem;
    }
  }
  .fa{
    position: absolute;
    right:0;
    top:0;
  }
    .fa-search{
      right:2.3rem;
    }
    .fa-bell-o{
      right:0.5rem;
    }
}
a{
  font-size: 1rem;
}
`