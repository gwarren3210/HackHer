import React, { useEffect, useState } from "react";
import Logo from './components/logo'
import './styles/App.css';


const App = () => {

  /*
  * Added a conditional render! We don't want to show Connect to Wallet if we're already connected :).
  */
  return (
    <div className="App">

      {/* <button onClick={changeAmount} > Mint</button> */}
      <div className="container">
        <div className="nav-container">
          {currentAccount === "" ? (
            renderNotConnectedContainer2()
          ) : (
              <button onClick={disconnect} id="nav-btn" className="cta-button connect-wallet-button">
                {`Address: ${currentAccount.slice(0, 5)}....${currentAccount.slice(38)}`}
              </button>
            )}
        </div>
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
            Each unique. Each beautiful. Discover your NFT today.
          </p>
          <p className="sub-sub-text">(Please Connect to the Rinkeby Testnet)</p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
              <form onSubmit={formMint}>
                <input
                  placeholder="Amount to Mint"
                  type="number"
                  value={amount}
                  onChange={changeAmount}
                  className="input-num"
                />
                <input
                  type="submit"
                  value="Mint"
                  className="cta-button connect-wallet-button"
                />
              </form>
            )}
        </div>
        <div className="footer-container">
          <Logo link={TWITTER_LINK} logo={twitterLogo} name="Twitter" />
          <Logo link={ETHERSCAN_LINK} logo={etherscanLogo} name="Etherscan" />
          <Logo link={OPENSEA_LINK} logo={openseaLogo} name="Opensea" />
        </div>
      </div>
    </div>
  );
};

export default App;