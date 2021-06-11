import './App.css';
import './styles/app.sass'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomeLayout from './layouts/HomeLayout'
import pagesLayout from './layouts/pagesLayout'

import Home from './views/Home'
import GetStarted from './views/GetStarted'
import Legal from './views/Legal'
import RegisterWallet from './views/RegisterWallet'
import Private from './views/Private'
import Hardware from './views/Hardware'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* LANDING */}
          <RouteWrapper exact path="/" component={Home} layout={HomeLayout} />
          <RouteWrapper exact path="/get-started" component={GetStarted} layout={pagesLayout} />
          <RouteWrapper exact path="/legal" component={Legal} layout={pagesLayout} />
          <RouteWrapper exact path="/register-wallet" component={RegisterWallet} layout={pagesLayout} />
          <RouteWrapper exact path="/private" component={Private} layout={pagesLayout} />
          <RouteWrapper exact path="/hardware" component={Hardware} layout={pagesLayout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  )
}

export default App;
