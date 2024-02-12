import React from 'react';
import {
  BrowserRouter,
  Link,
  Route as ReactRoute,
  Routes as RoutesReactDom,
} from 'react-router-dom';
import PagesLayout from 'src/PagesLayout';
import pages from 'src/pages';
import LoaderProvider from 'src/LoaderProvider';
import Rozhovor from 'src/pages/special/rozhovor';
import Layout from 'src/Layout';

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <RoutesReactDom>
          {pages.map(({ id, route }) => (
            <ReactRoute
              key={id}
              element={<PagesLayout pages={pages} />}
              path={route}
            />
          ))}
          <ReactRoute
            element={
              <Layout
                header={<Link to="/">&#x293A;&nbsp;Späť</Link>}
                body={<Rozhovor />}
              />
            }
            path="/rozhovor-robo"
          />
        </RoutesReactDom>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;
