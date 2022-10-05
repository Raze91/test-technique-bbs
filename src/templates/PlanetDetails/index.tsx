import { Button } from '@material-ui/core'
import React, { FC } from 'react'

import { PLANET_IMAGES } from '../../constants/images'

import * as SC from './styled'

type PlanetDetails = {
  name: string
  moons: any[]
  englishName: string
  discoveredBy: string
  discoveryDate: string
}

export type PlanetDetailsProps = {
  planet?: PlanetDetails
}

const PlanetDetailsTemplate: FC<PlanetDetailsProps> = (props) => {
  const { planet } = props

  console.log(planet)

  return (
    <SC.Content>
      <Button variant={'contained'} size="large" color="primary" href="/">
        Retour
      </Button>
      <SC.Article>
        <SC.ArticleImg
          src={PLANET_IMAGES.filter((image) => image.name === planet?.name)[0]?.src}
          alt={planet?.name}
        />
        <SC.Title>{planet?.name}</SC.Title>
        <SC.Text>Nom anglais : {planet?.englishName}</SC.Text>
        <SC.Text>
          {planet?.name} est une planête possédant {planet?.moons?.length} lunes :
        </SC.Text>

        <SC.MoonList>
          {planet?.moons.map((item, key) => (
            <li key={key}>
              <p>{item.moon}</p>
            </li>
          ))}
        </SC.MoonList>

        {planet?.discoveryDate && planet?.discoveryDate && (
          <SC.Text>
            Elle a été découverte le {planet?.discoveryDate} par {planet?.discoveredBy}.
          </SC.Text>
        )}
      </SC.Article>
    </SC.Content>
  )
}

export default PlanetDetailsTemplate
