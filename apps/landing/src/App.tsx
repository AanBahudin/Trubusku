import { RouterProvider } from 'react-router'
import landingRouter from '@/routes/LandingRoute'

const App = () => {
  return (
    <>
       <RouterProvider router={landingRouter} />
    </>
  )
}

export default App