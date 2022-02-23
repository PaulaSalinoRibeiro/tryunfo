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

    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validatedForm = this.validatedForm.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checked' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validatedForm());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
  }

  validatedForm() {
    /* const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3
    } = this.state; */
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
