import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'

export const PlanetApp = () => {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
