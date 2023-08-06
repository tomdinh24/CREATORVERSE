import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import "./Styles/style.css";




const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCreators />
  },
  {
    path: "/ViewCreator/:name",
    element: <ViewCreator/>
  },
  {
    path: "/EditCreator/:name",
    element: <EditCreator/>
  },
  {
    path: "/AddCreator",
    element: <AddCreator/>
  }
])


function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;