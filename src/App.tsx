import React, { useState, useEffect } from 'react';

import './App.scss';
import { Switch, Route, useLocation} from 'react-router-dom';
import { getProduct } from './helpers/api';
import { IProduct, IMyContext } from './interfase/interfase';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { PhoneCatalog } from './pages/PhoneCatalog/PhoneCatalog';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { Favorites } from './pages/Favorites/Favorites';
import { Basket } from './pages/Basket/Basket';
import { PhoneDetailsPage } from './pages/PhoneDetailsPage/PhoneDetailsPage';

export const MyContext = React.createContext<IMyContext>({} as IMyContext)

const App = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  const [basket, setBasket] = useState<IProduct[]>([]);
  const [favorites, setFavorites] = useState<IProduct[]>([]);
  const location = useLocation();

  const phones = items.filter(phone => (phone.type === "phone"));
  const tablets = items.filter(tablet => (tablet.type === "tablet"));
  const searchParams = new URLSearchParams(location.search);
  const itemId: string = searchParams.get('itemId') || "";

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
          <Route path="/tablets">
            <TabletsPage tablets={tablets} />
          </Route>
          <Route path="/favorites">
            <Favorites/>
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/phones">
          <PhoneCatalog phones={phones} />
          </ Route>
          <Route path={`/products/${itemId}`}>
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
   </MyContext.Provider>
  );
}

export default App;
