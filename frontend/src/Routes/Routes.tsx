import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "pages/Home";
import { ShoppingCart } from "pages/ShoppingCart";
import { Navbar } from "ui/components/Navbar";


export function Routes() {
  return (
      <BrowserRouter>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/ShoppingCart" exact component={ShoppingCart} />
          </Switch>
      </BrowserRouter>
  );
}
