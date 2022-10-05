import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import PlanetDetailsTemplate from '../../templates/PlanetDetails'
import { actions } from '../../redux/index'
import { useTypedSelector } from '../../redux/store'
import { Planet } from '../../redux/app/redux'

type params = {
  id: string
}

const PlanetDetailsPage: FC<RouteComponentProps> = () => {
  const { id } = useParams<params>()
  const dispatch = useDispatch()
  const planet: Planet | null = useTypedSelector((state) => state.app.planet)

  useEffect(() => {
    if (planet === null || planet?.id !== id) {
      axios
        .get('https://api.le-systeme-solaire.net/rest/bodies/' + id)
        .then((result) => dispatch(actions.app.setPlanet({ planet: result.data })))
        .catch((error) => console.log(error))
    }
  }, [planet, id])

  return <PlanetDetailsTemplate />
}

export default PlanetDetailsPage
