import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Radio,
  Button,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';

class ItemRetroDialog extends React.Component {
  componentWillMount() {
    this.setState({ item: this.props.item });
  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Item da Retro</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="planodeacao"
            label="Plano de Acao"
            type="text"
            variant="outlined"
            value={this.state.item.data.PlanoDeAcao}
            onChange={e => {
              this.setState({
                item: { ...this.state.item, data: { ...this.state.item.data, PlanoDeAcao: e.target.value } }
              });
            }}
            fullWidth
          />
          <TextField
            margin="normal"
            id="responsavel"
            label="Responsável"
            type="text"
            variant="outlined"
            value={this.state.item.data.Responsavel}
            onChange={e => {
              this.setState({
                item: { ...this.state.item, data: { ...this.state.item.data, Responsavel: e.target.value } }
              });
            }}
          />
          <RadioGroup
            aria-label="Status"
            name="status"
            value={this.state.item.data.Status}
            onChange={e => {
              this.setState({
                item: { ...this.state.item, data: { ...this.state.item.data, Status: e.target.value } }
              });
            }}
          >
            <FormControlLabel value="Pendente" control={<Radio />} label="Pendente" />
            <FormControlLabel value="Andamento" control={<Radio />} label="Andamento" />
            <FormControlLabel value="Concluído" control={<Radio />} label="Concluído" />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.onSave(this.state.item)} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ItemRetroDialog;
