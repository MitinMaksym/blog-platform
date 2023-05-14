import { lazy } from 'react'

export const AboutPageAsync = lazy(
  // @ts-ignore
  // TODO: Get rid of this test
  () => new Promise((res) => setTimeout(() => res(import('./AboutPage')), 1500))
)
