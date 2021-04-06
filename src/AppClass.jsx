import React from 'react';

class AppClass extends React.Component {

    // o state, trata-se de um objeto
    state = {
      nome : 'Image4ever',
      num1 : '',
      num2 : '',
      resultado : ''
    }

    somar = () => {
      this.setState({resultado: parseInt(this.state.num1) + parseInt(this.state.num2)})
    }

    // o método render pertence a superclasse, estamos aqui apenas implementando, sabendo que o próprio React irá chamá-lo.
    render(){
      return (
        <div>
          <label>Nome:</label>
          <input  type="text" value={this.state.nome} 
                  onChange={(e) => this.setState({nome: e.target.value}) } />
          Olá Mundo! Estou em um componente de classe. Ass. {this.state.nome}
          <p />
          <label>Número 1:</label>
          <input  type="text" value={this.state.num1} 
                  onChange={(e) => this.setState({num1: e.target.value}) }/>
          <label>Número 2:</label>
          <input  type="text" value={this.state.num2} 
                  onChange={(e) => this.setState({num2: e.target.value}) }/>
          <button
            onClick={this.somar}  >
              Somar
          </button>

          <label>Resultado é: {this.state.resultado}</label>

        </div>
      );
    }
}

export default AppClass;
