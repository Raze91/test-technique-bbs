import styled from 'styled-components'

export const Title = styled.h1``

export const Text = styled.p`
  font-size: 16px;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;

  a {
    align-self: flex-start;
  }
`

export const Article = styled.article`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ArticleImg = styled.img`
  width: 350px;
`

export const MoonList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 100px;
  flex-wrap: wrap;
  width: 100%;
  overflow: scroll;
  border: 1px solid black;
  padding: 0 5px;

  li {
    margin: 0 15px;
  }
`
