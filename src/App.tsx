import React, { useState, useEffect } from 'react';

import './App.scss';
import { Switch, Route} from 'react-router-dom';
import { getProduct } from './helpers/api';
import { IProduct } from './interfase/interfase';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { PhoneCatalog } from './pages/PhoneCatalog/PhoneCatalog';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { Favorites } from './components/Favorites/Favorites';
import { Basket } from './pages/Basket/Basket';
import { PhoneDetailsPage } from './pages/PhoneDetailsPage/PhoneDetailsPage';

const App = () => {
  const [items, setItems] = useState<IProduct[]>([]);

  const phones = items.filter(phone => (phone.type === "phone"));
  const tablets = items.filter(tablet => (tablet.type === "tablet"))

  useEffect(() => {
    getProduct().then(setItems)
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route path="/tablets">
            <TabletsPage tablets={tablets} />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/phones">
          <PhoneCatalog phones={phones} />
          </ Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path={`/phones/:phoneName?`}>
            <PhoneDetailsPage items={items}/>
          </Route>
          <Route path="/" exact>
            <HomePage items={items} />
          </Route>
          <h1>Sorry, page not found</h1>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
