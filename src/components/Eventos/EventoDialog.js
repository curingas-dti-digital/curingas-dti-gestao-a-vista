import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';

class EventoDialog extends React.Component {
  componentWillMount() {
    this.setState({ evento: this.props.evento });
  }

  handleFile(e) {}

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Evento</DialogTitle>
        <DialogContent>
          <input type="file" onChange={this.handleFile} />
          <TextField
            margin="normal"
            id="responsavel"
            label="Responsável"
            type="text"
            variant="outlined"
            value={this.state.evento.data.Responsavel}
            onChange={e => {
              this.setState({
                item: {
                  ...this.state.evento,
                  data: { ...this.state.evento.data, Responsavel: e.target.value }
                }
              });
            }}
          />
          <TextField
            margin="normal"
            id="descricao"
            label="Descrição"
            type="text"
            variant="outlined"
            value={this.state.evento.data.Descricao}
            onChange={e => {
              this.setState({
                item: {
                  ...this.state.evento,
                  data: { ...this.state.evento.data, Descricao: e.target.value }
                }
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <IconButton
            size="small"
            onClick={() => {
              EventoStore.excluirEvento(evento);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <Button onClick={() => this.props.onSave(this.state.evento)} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EventoDialog;
