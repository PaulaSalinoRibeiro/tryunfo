import React, { Component } from 'react';
import '../css/Form.css';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome da carta:
          <input
            type="text"
            data-testid="name-input"
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Descrição da carta:
          <textarea
            id="description"
            data-testid="description-input"
            name="description"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1:
          <input
            type="number"
            id="attr1"
            data-testid="attr1-input"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input
            type="number"
            id="attr2"
            data-testid="attr2-input"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input
            type="number"
            id="attr3"
            data-testid="attr3-input"
            name="attr3"
          />
        </label>
        <label htmlFor="card-img">
          Imagem:
          <input
            type="text"
            id="card-img"
            data-testid="image-input"
            name="img"
          />
        </label>
        <label htmlFor="card-type">
          Raridade:
          <select
            data-testid="rare-input"
            name="type"
            id="card-type"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            id="trunfo"
            data-testid="trunfo-input"
            name="trunfo"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
