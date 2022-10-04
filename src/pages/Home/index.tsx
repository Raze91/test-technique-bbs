import React, { useMemo, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'
import { actions } from '../../redux/index'

const DashboardPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true')
      .then((result) => {
        dispatch(actions.app.setPlanets({ planets: result.data.bodies }))
      })
      .catch((error) => console.error(error))
  }, [])

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
