import React, { FC } from 'react'

import { Icons } from '../../components/Icon/types'

import * as SC from './styled'

export type HomeTemplateProps = {
  className?: string
  title?: string
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { title } = props

  return (
    <SC.Content>
      <SC.Title>{title}</SC.Title>
      <SC.IconContainer icon={Icons.youtube} />
    </SC.Content>
  )
}

export default HomeTemplate
