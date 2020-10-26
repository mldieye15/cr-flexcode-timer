//  Import des modules dont on a besoin
import React, { Component } from 'react';
import Item from './Item';

//  tableau déifini pour parcourir une liste
const lists = [
  {'id': 1, 'nom': 'SECK', 'prenoms': 'Aladji', 'age':28, 'profession': 'Menuisier'},
  {'id': 2, 'nom': 'DIOP', 'prenoms': 'Pathé', 'age':35, 'profession': 'Architect'},
  {'id': 3, 'nom': 'MENDY', 'prenoms': 'George', 'age':25, 'profession': 'Commecrçant'},
  {'id': 4, 'nom': 'NDIAYE', 'prenoms': 'Ousmane', 'age':17, 'profession': 'Ekéve'},
  {'id': 5, 'nom': 'BA', 'prenoms': 'AAhmadladji', 'age':23, 'profession': 'Etudiant'},
];

//  Créer le composant
class App extends Component {
  //  M2thode pour parcourir la liste
  renderListe(){
    return lists.map(item => {
      return (
        <Item key={item.id} nom={item.nom} prenoms={item.prenoms} age={item.age} profession={item.profession} />
      )
    })
  }

  render(){
    return (
      <div>
        <p>Je suiis le compsant App!</p>
        {this.renderListe()}
      </div>

    )
  }
}

//  exporter le composant
export default App;
