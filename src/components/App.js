import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// IMPORT COMPONENTS
import Main from './Main.js';
import Quiz from './Quiz.js';
import Result from './Result.js';
import { CheckUserExist } from '../helper/helper';


// REACT ROUTES 
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist> <Quiz /> </CheckUserExist>
  },
  {
    path : '/result',
    element :<CheckUserExist> <Result /> </CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
