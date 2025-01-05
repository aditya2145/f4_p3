import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import PostDetails from './components/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/item/:id',
      element: <PostDetails />
    }
  ]);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
