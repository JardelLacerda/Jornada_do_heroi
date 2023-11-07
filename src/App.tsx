import { HomePage, HistoricPage } from "./pages"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const App = () => {

  const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
      path: "/historic",
      element: <HistoricPage/>
    },
    {
      errorElement: <>2</>
    }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
