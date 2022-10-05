import React, { FC, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
} from '@material-ui/core'

import { PLANET_IMAGES } from '../../constants/images'
import { useTypedSelector } from '../../redux/store'
import { Icons } from '../../components/Icon/types'

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

      <Box p={'10px 20px'}>
        <TextField
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearch}
          InputProps={{
            endAdornment: <SC.IconContainer icon={Icons.search} />,
          }}
        />
      </Box>

      <SC.PlanetCtnr>
        {filteredPlanets?.map((item, key) => (
          <Card key={key}>
            <CardMedia
              component="img"
              image={images.filter((image) => image.name === item.name)[0]?.src}
              alt={item.name}
            />
            <CardContent>
              <SC.Text>{item.name}</SC.Text>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                href={'/' + item.id}
              >
                Voir plus
              </Button>
            </CardActions>
          </Card>
        ))}
      </SC.PlanetCtnr>
    </SC.Content>
  )
}

export default HomeTemplate
