import React from 'react';
import Retro from './Retro/Retro';
import Eventos from './Eventos/Eventos';
import Diagnostico from './Diagnostico/Diagnostico';
import { BasePage } from './BasePage';
import Ritos from './Ritos/Ritos';

const pages = ['Retrospectiva', 'Próximos Eventos', 'Diagnóstico', 'Ritos'];

class Slideshow extends React.Component {
  state = {
    page: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        page: this.state.page + 1
      });
    }, 30 * 1000);
  }
  render() {
    return (
      <div>
        <BasePage PageName={pages[this.state.page % 4]} InnerComponent={this.getPage()} />
      </div>
    );
  }

  getPage() {
    switch (pages[this.state.page % 4]) {
      case 'Retrospectiva':
        return <Retro />;
      case 'Próximos Eventos':
        return <Eventos />;
      case 'Diagnóstico':
        return <Diagnostico />;
      case 'Ritos':
        return <Ritos />;

      default:
        return;
    }
  }
}

export default Slideshow;
