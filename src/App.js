import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AssetTrackerContract from './AssetTracker.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScannedAsset from './ScannedAsset';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props.match);
    this.state = {
      scannedAsset: ['ExampleAsset', 'Desc', 'Name'],
      id: '',
    };
  }
/*
  componentDidMount() {
    console.log('get scanned asset');
    var Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'));
    var address = '0x321f4042c2e56a7eee9c6064559d8cecb0eb1a8a';
    var contract = web3.eth.contract(AssetTrackerContract.abi);
    var contractInstance = contract.at(address);

    console.log('listen to ContractAddress:' + contractInstance.address);

    var result = contractInstance.getAssetByUUID.call("c87468a1-382f-49a5-b4b1-0c9c8b9e7230" ,function(err, result) {
      this.setState({
        scannedAsset: result,
      });
    }.bind(this)
  );

    this.setState({
      scannedAsset: ['New Stuff', 'Desc', 'Name2'],
    })
  }
*/
  render() {
    return (
      <Router>
        <div className="container">
          {this.state.scannedAsset[0]}
          <h1>Ich bin die ShowAssetDAPP</h1>
          <Route path='/:id' exact component={ScannedAsset}/>
        </div>
      </Router>
    );
  } // render
}

const ids = ({ match }) => {
  return <h1>ScannedAsset: {match.params.id}</h1>
}

export default App;

/*

  connectToBlockchain = () => {
    var Web3 = require('web3');

    const web3 = new Web3(
    new Web3.providers.HttpProvider('https://rinkeby.infura.io/')
    );

    var address = '0x321f4042c2e56a7eee9c6064559d8cecb0eb1a8a';

    var contract = web3.eth.contract(AssetTrackerContract.abi);
    var contractInstance = contract.at(address);

    console.log(contractInstance.address);

   contractInstance.getAssetByUUID.call("c87468a1-382f-49a5-b4b1-0c9c8b9e7230" ,function(err, result) {
     console.log(result);
     return result;
   });

   this.setState({scannedAsset: [],});

   return (
     <div>
       <p>{this.state.scannedAsset.length}</p>
     </div>
   );

  };

 */
