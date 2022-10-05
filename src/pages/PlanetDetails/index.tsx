import React, { FC, useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import PlanetDetailsTemplate, { PlanetDetailsProps } from '../../templates/PlanetDetails'

export type params = {
  id: string
}

const PlanetDetailsPage: FC<RouteComponentProps> = () => {
  const [planet, setPlanet] = useState()
  const { id } = useParams<params>()

  useEffect(() => {
    axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/' + id)
      .then((result) => setPlanet(result.data))
      .catch((error) => console.log(error))
  }, [id])

  const templateProps: PlanetDetailsProps = useMemo(
    () => ({
      planet,
    }),
    [planet]
  )

  return <PlanetDetailsTemplate {...templateProps} />
}

export default PlanetDetailsPage
