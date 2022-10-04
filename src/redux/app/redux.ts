import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store'
import { THEMES } from '../../constants'

import { actionTypes } from './types'

type AppState = {
  isInit: boolean
  theme: string
  planets: any[]
}

//
// Initial state
//

const initialState: AppState = {
  isInit: false,
  theme: THEMES.DEFAULT,
  planets: [],
}

//
// Slice (Actions & Reducers)
//

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    init: () => undefined,
    setPlanets: (state, action: actionTypes.setPlanets) => {
      const { planets } = action.payload
      state.planets = planets
    },
    setIsInit: (state, action: actionTypes.setIsInit) => {
      const { isInit } = action.payload
      state.isInit = isInit
    },
    setTheme: (state, { payload }: actionTypes.setTheme) => {
      const { theme } = payload
      state.theme = theme
    },
  },
})

export const { reducer, actions } = slice

//
// Selectors
//

const root = (state: RootState) => state[slice.name]
const isInit = (state: RootState) => root(state).isInit
const theme = (state: RootState) => root(state).theme
const planets = (state: RootState) => root(state).planets

export const selectors = {
  isInit,
  theme,
  planets,
}
