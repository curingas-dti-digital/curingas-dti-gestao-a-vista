import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Theme from './Theme';
import Slideshow from './components/Slideshow';
import { BasePage } from './components/BasePage';
import Eventos from './components/Eventos/Eventos';
import Diagnostico from './components/Diagnostico/Diagnostico';
import Retro from './components/Retro/Retro';
import history from 'history/createBrowserHistory';
import Ritos from './components/Ritos/Ritos';

class App extends React.Component {
  render() {
    const eventos = () => <BasePage PageName="Próximos Eventos" InnerComponent={<Eventos />} />;
    const retro = () => <BasePage PageName="Retro" InnerComponent={<Retro />} />;
    const diagnostico = () => <BasePage PageName="Diagnóstico" InnerComponent={<Diagnostico />} />;
    const ritos = () => <BasePage PageName="Ritos" InnerComponent={<Ritos />} />;
    return (
      <MuiThemeProvider theme={Theme}>
        <Router history={history()} basename={process.env.PUBLIC_URL}>
          <Route path="/eventos" component={eventos} />
          <Route path="/retro" component={retro} />
          <Route path="/diagnostico" component={diagnostico} />
          <Route path="/ritos" component={ritos} />
          <Route exact path="/" component={Slideshow} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
