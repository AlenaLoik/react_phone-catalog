import React from 'react';

import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { PhoneCatalog } from './pages/PhoneCatalog/PhoneCatalog';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';

const App = () => (
  <div className="App">
    <Header />
    <main className="main">
      <Switch>
        <Route path="/accessories">
          <AccessoriesPage />
        </Route>
        <Route path="/tablets">
          <TabletsPage />
        </Route>
          <Route
            path="/phones/:personName?"
            component={PhoneCatalog}
          />
        <Route path="/" exact>
          <HomePage />
        </Route>
        <h1>Not found</h1>
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
