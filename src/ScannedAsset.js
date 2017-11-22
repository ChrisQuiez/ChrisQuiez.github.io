import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AssetTrackerContract from './AssetTracker.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class ScannedAsset extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scannedAsset: ['ExampleAsset', 'Desc', 'Name'],
      id: this.props.match.params.id,
    };
  }

  componentDidMount() {
    console.log('get scanned asset');
    var Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'));
    var address = '0x321f4042c2e56a7eee9c6064559d8cecb0eb1a8a';
    var contract = web3.eth.contract(AssetTrackerContract.abi);
    var contractInstance = contract.at(address);

    console.log('listen to ContractAddress:' + contractInstance.address);

    var result = contractInstance.getAssetByUUID.call(this.state.id ,function(err, result) {
      this.setState({
        scannedAsset: result,
      });
    }.bind(this)
  );

  }

render(){
  return(
    <div>
      <h1>{this.state.scannedAsset[0]}</h1>
      <h2>{this.state.scannedAsset[1]}</h2>
      <p>{this.state.scannedAsset[2]}</p>
    </div>

  );
}

}

export default ScannedAsset;
