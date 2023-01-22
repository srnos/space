import React, { useState } from 'react';
import Web3 from 'web3';



function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

  //const getData = () => {
  //const options = {method: 'GET', headers: {accept: 'application/json'}};
  
  //fetch('api', options)
    //.then(response => response.json())
    //.then(response => console.log(response))
    //.catch(err => console.error(err));
  
  //}
  
  
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
  
  const onConnect = async() => {
    try {
      const currentProvider = detectCurrentProvider();
      if(currentProvider) {
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount  =await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  const onDisconnect = () => {
    setIsConnected(false);
  }


    
  return (
    <div className="app">
      <center>
      <div className="app-header">
        <br></br><br></br>
      </div>
      <div className="app-wrapper">
        {!isConnected && (
          <div>
            <button className="app-button" onClick={onConnect}>
            Connect
            </button>
          </div>
        )}
      </div>
      {isConnected && (
        <div className="app-wrapper">
          <div className="app-details">
            <div id="game"></div>
            <div className="app-balance">
              <span><h2>Balance: </h2></span>
              {ethBalance}
            </div>
          </div>
          <div>
            <button className="app-button" onClick={onDisconnect}>
            Disconnect
            </button>
          </div>
          <div>
          </div><br></br>
          <div>
          <a href="https://etherscan.io/"><button className="app-button">Mint contract</button></a><br></br>
          <a href="https://opensea.io/spacejetsNFT"><button className="app-button">Opensea</button></a><br></br><br></br><br></br><br></br>
            <h3>Escape the matrix, coming when sold out...</h3>
            Example below
          </div>
          <div>
          <canvas></canvas>
          <script type="module" src="game.js"></script>
          </div>
          </div>
      )}</center>
    </div>
  );
}

export default App;