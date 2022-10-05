import { PayloadAction } from '@reduxjs/toolkit'

export type setIsInit = PayloadAction<{ isInit: true }>

export type setTheme = PayloadAction<{ theme: string }>

export type setPlanets = PayloadAction<{ planets: any[] }>

export type setPlanet = PayloadAction<{ planet: any }>
