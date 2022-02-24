import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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

    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validatedForm = this.validatedForm.bind(this);
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
        cardRare: 'normal' },
    );
  }

  validatedForm() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;
    const sumMax = 210;
    const max = 90;
    const Attr1 = parseInt(cardAttr1, 10);
    const Attr2 = parseInt(cardAttr2, 10);
    const Attr3 = parseInt(cardAttr3, 10);
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
    } } = this;

    return (
      <div>
        <h1>Tryunfo</h1>
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
      </div>
    );
  }
}
//
export default App;
