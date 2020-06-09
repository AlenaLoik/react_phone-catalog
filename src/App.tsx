import React, { useState, useEffect } from 'react';

import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { getProduct } from './helpers/api';
import { IProduct, IMyContext } from './interfase/interfase';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { PhoneCatalog } from './pages/PhoneCatalog/PhoneCatalog';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { Favorites } from './pages/Favorites/Favorites';
import { Basket } from './pages/Basket/Basket';
import {OrderPage } from './pages/Basket/OrderPage/OrderPage';
import { PhoneDetailsPage } from './pages/PhoneDetailsPage/PhoneDetailsPage';

export const MyContext = React.createContext<IMyContext>({} as IMyContext)

const App = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  const [basket, setBasket] = useState<IProduct[]>([]);
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  const phones = items.filter(phone => (phone.type === "phone"));
  const tablets = items.filter(tablet => (tablet.type === "tablet"));

  useEffect(() => {
    getProduct().then(setItems)
  }, []);

  return (
    <MyContext.Provider value={{
      items: items,
      basket: basket,
      setBasket: setBasket,
      favorites: favorites,
      setFavorites: setFavorites,
    }}>
    <div className="App">
      <Header favoritesCount={favorites.length} basketCount={basket.length} />
      <main className="main">
        <Switch>
          <Route path="/tablets" exact>
            <TabletsPage tablets={tablets} />
          </Route>
          <Route path="/favorites" exact>
            <Favorites/>
          </Route>
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Route path="/order" exact>
            <OrderPage />
          </Route>
          <Route path="/phones"  exact>
          <PhoneCatalog phones={phones} />
          </ Route>
          {items.map(item => {
                let url = '/';
                switch (item.type) {
                  case 'phone':
                    url = '/phones/';
                    break;
                  case 'tablet':
                    url = '/tablets/';
                    break;
                  default:
                    url = '/accessories/';
                }
                return (
                  <Route
                    key={item.id}
                    path={`${url}${item.id}`} >
                    <PhoneDetailsPage items={items} item={item}/>
                  </Route>
                )
              })}
          <Route path="/" exact>
            <HomePage items={items} />
          </Route>
          <h1>Sorry, page not found</h1>
        </Switch>
      </main>
      <Footer />
    </div>
   </MyContext.Provider>
  );
}

export default App;
