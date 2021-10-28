import React, {Component} from 'react';
import Compteur from '../components/counter';
import Header from '../components/header';


class Compteurs extends Component {
constructor(props) {
  super(props);
  this.state = {counters: [0, 0, 0, 0], total : 0};
}

handlePlusAppIner = (count, i) => {
console.log("modificado por contador no " + i, "valeur : " + count);
//modifier le tableau des compteurs
let counters = this.state.counters;
counters[i] = count;

//faire la somme des valeurs du tableau de compteurs
let total = counters.reduce ((accumulateurs,valeurCounrante) => accumulateurs + valeurCounrante, 0 );

//maj du state
this.setState({counters,total});
};

render(){
  const valeur = 12;
  return (
    <>
    <Header total={this.state.total}/>
    {
      this.state.counters.map( (counter,i) => {
        return <Compteur key={i} handlePlusApp={(value) => this.handlePlusAppIner(value, i)}/>

      })
    }
    </>
  );
}
}

export default Compteurs;
