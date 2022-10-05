import React, { useMemo, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'
import { actions } from '../../redux/index'
import { useTypedSelector } from '../../redux/store'

const DashboardPage: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  const planets = useTypedSelector((state) => state.app.planets)

  useEffect(() => {
    if (planets.length === 0) {
      axios
        .get('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true')
        .then((result) => {
          dispatch(actions.app.setPlanets({ planets: result.data.bodies }))
        })
        .catch((error) => console.error(error))
    }
  }, [planets])

  const templateProps: HomeTemplateProps = useMemo(
    () => ({
      // title: t('hello', { name: 'Name' }),
      title: 'Test Technique Sami',
    }),
    []
  )

  return <HomeTemplate {...templateProps} />
}

export default DashboardPage
