import React, { FC, useState } from 'react'
import { Card, CardContent, TextField } from '@material-ui/core'

import { PLANET_IMAGES } from '../../constants/images'
import { useTypedSelector } from '../../redux/store'

import * as SC from './styled'

export type HomeTemplateProps = {
  className?: string
  title?: string
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { title } = props
  const [search, setSearch] = useState('')

  const planets = useTypedSelector((state) => state.app.planets)
  const images = PLANET_IMAGES

  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleSearch(e: { target: { value: string } }) {
    const value = e.target.value
    setSearch(value)
  }

  return (
    <SC.Content>
      <SC.Title>{title}</SC.Title>

      <SC.FilterForm>
        <TextField variant="outlined" value={search} onChange={handleSearch} />
      </SC.FilterForm>

      <SC.PlanetCtnr>
        {filteredPlanets?.map((item, key) => (
          <Card key={key}>
            <CardContent>
              <img src={images.filter((image) => image.name === item.name)[0]?.src} />
              <SC.Text>{item.name}</SC.Text>
            </CardContent>
          </Card>
        ))}
      </SC.PlanetCtnr>
    </SC.Content>
  )
}

export default HomeTemplate
