import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { useState } from 'react';
import AppDataStore from './utils/AppDataStore';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import AdminPage from './components/AdminPage';
import Payment, { DefaultComponent, PreviousPayments, Profile } from './components/Payment';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminPage/>,
    children: [
      {
        path: "/admin/payment",
        element: <Payment/>,
        children: [
          {
            path: "/admin/payment",
            element: <DefaultComponent/>
          },
          {
            path: "/admin/payment/previous",
            element: <PreviousPayments/>
          }
        ]
      },
      {
        path: "/admin/profile",
        element: <Profile/>
      }
    ]
  }
]);

const App = () => {

  return (
    <Provider store={AppDataStore}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  )
};

export default App;