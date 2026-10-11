import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routing from './Routing.jsx'
//  const router=createBrowserRouter([
//   { 
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"/about",
//         element:<About/>
//       }
//     ]
//   }
//  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <RouterProvider router={router}/> */}
   <Routing/>
  </StrictMode>,
)
