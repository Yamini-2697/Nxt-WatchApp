import styled from 'styled-components'

export const TrendingContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  min-height: 100vh;
  flex-grow: 1;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  margin: 0px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const Flex = styled.div`
  display: flex;
`

export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ebebeb')};
`