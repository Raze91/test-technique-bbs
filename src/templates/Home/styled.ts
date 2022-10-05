import styled from 'styled-components'

import Icon from '../../components/Icon'

export const Content = styled.main`
  flex-grow: 1;
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-grow: initial;
  }
`

export const Title = styled.h1`
  ${(props) => ({ ...props.theme.typography.h3 })}
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  margin: 0rem 0 0.5rem 0;
  padding: 10px 20px;
`

export const Text = styled.p`
  ${(props) => ({ ...props.theme.typography.smallRegular })}
  color: ${(props) => props.theme.palette.colors.chambray};
  margin: 0rem 0 1rem 0;
`

export const PlanetCtnr = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
  gap: 25px;

  img {
    width: 200px;
  }
`

export const IconContainer = styled(Icon)`
  max-width: 30px;
`
