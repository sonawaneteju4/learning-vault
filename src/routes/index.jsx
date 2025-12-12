import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import TopicLayout from '../layouts/TopicLayout';
import TopicContent from '../pages/TopicContent';
import ComponentDemo from '../pages/ComponentDemo';

// In the future, we can add lazy loading for other pages like:
// const SomePage = lazy(() => import('../pages/SomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'demo',
        element: <ComponentDemo />,
      },
      {
        path: 'learn/:topic',
        element: <TopicLayout />,
        children: [
          {
            index: true,
             // Redirect or show a default "notes" view if available, 
             // relying on TopicContent to load 'notes.md' by default logic or explicit slug
            element: <TopicContent /> 
          },
          {
            path: ':slug',
            element: <TopicContent />
          }
        ]
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

export default router;
