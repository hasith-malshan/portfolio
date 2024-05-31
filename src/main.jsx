import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './app.scss';
import {
  Route,
  HashRouter as Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import Test from './Test.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/contacts/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/projects/:type',
    element: <Projects />,
  },
  {
    path: '/contacts',
    element: <Contact />,
  },
  {
    basename: '/portfolio',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/projects/:type" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Router> */}
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
