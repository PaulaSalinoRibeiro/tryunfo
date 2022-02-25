import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      hasTrunfo: false,
      search: '',
      selected: '',
      isDisable: false,

    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validatedForm = this.validatedForm.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleTrunfo = this.handleTrunfo.bind(this);
  }

  handleTrunfo() {
    this.setState((prevState) => ({ isDisable: !prevState.isDisable }));
  }

  handleSelected({ target: { value } }) {
    this.setState({ selected: value === 'todas' ? '' : value });
  }

  handleSearch({ target }) {
    this.setState({ search: target.value });
  }

  handleRemoveCard(card) {
    const { savedCards } = this.state;
    this.setState({ savedCards: savedCards.filter((cards) => cards !== card) });
    this.setState((prev) => (
      { hasTrunfo: prev.savedCards.some(({ cardTrunfo }) => cardTrunfo) }
    ));
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validatedForm());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const card = this.state;
    this.setState((prev) => ({ savedCards: [...prev.savedCards, card] }));
    this.setState(
      { cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
        cardTrunfo: false },
    );
    this.setState((prev) => (
      { hasTrunfo: prev.savedCards.some(({ cardTrunfo }) => cardTrunfo) }
    ));
  }

  validatedForm() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const sumMax = 210;
    const max = 90;
    const Attr1 = Number(cardAttr1);
    const Attr2 = Number(cardAttr2);
    const Attr3 = Number(cardAttr3);
    if (cardName
        && cardDescription
        && cardImage
        && ((Attr1 + Attr2 + Attr3) <= sumMax)
        && (Attr1 >= 0 && Attr1 <= max)
        && (Attr2 >= 0 && Attr2 <= max)
        && (Attr3 >= 0 && Attr3 <= max)) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { state: {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      savedCards,
      hasTrunfo,
      search,
      selected,
      isDisable,
    } } = this;

    return (
      <div className="container">
        <div className="input-search">
          <h1 className="title">Tryunfo</h1>
          <label htmlFor="search">
            Carta:
            <input
              type="text"
              id="search"
              className="search"
              data-testid="name-filter"
              placeholder="Pesquise aqui"
              disabled={ isDisable }
              onChange={ this.handleSearch }
            />
          </label>
          <label htmlFor="selected">
            Raridade:
            <select
              id="selected"
              className="selected"
              data-testid="rare-filter"
              disabled={ isDisable }
              onChange={ this.handleSelected }
            >
              <option>todas</option>
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo:
            <input
              id="trunfo"
              className="trunfo"
              data-testid="trunfo-filter"
              onChange={ this.handleTrunfo }
              type="checkbox"
            />
          </label>
        </div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div className="form-filter">
          {
            savedCards
              .filter((card) => (isDisable
                ? card.cardTrunfo
                : card))
              .filter((card) => (selected !== ''
                ? card.cardRare === selected
                : card.cardRare.includes(selected)))
              .filter((card) => card.cardName.includes(search))
              .map((card) => (
                <section
                  className="cards-saved"
                  key={ card }
                >
                  <Card
                    cardName={ card.cardName }
                    cardDescription={ card.cardDescription }
                    cardImage={ card.cardImage }
                    cardAttr1={ card.cardAttr1 }
                    cardAttr2={ card.cardAttr2 }
                    cardAttr3={ card.cardAttr3 }
                    cardRare={ card.cardRare }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <button
                    type="button"
                    className="btn-delete"
                    data-testid="delete-button"
                    onClick={ () => this.handleRemoveCard(card) }
                  >
                    Excluir
                  </button>
                </section>))
          }
        </div>
      </div>
    );
  }
}

export default App;
