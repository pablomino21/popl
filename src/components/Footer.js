import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/trust_logotype.svg"

export default () => (
  <footer className="py-5 py-md-5 bg-white">
    <data className="u-url" href="/"></data>
    <div className="container">
      <div className="row text-center text-md-left">
        <div className="col-12 col-md-4 col-lg-3">
          <a href="/">
            <img src={logo} className="footer-brand-image logotype-dark img-fluid mb-4 logo" />
          </a>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <h4 className="font-weight-bold text-uppercase text-gray-700">Trust Wallet</h4>
          <ul className="list-unstyled text-gray-700 mb-6 mb-md-8 mb-lg-0">
            <li className="mb-3">
              <a href="/assets" className="text-reset">Assets</a>
            </li>
            <li className="mb-3">
              <a href="/dapp" className="text-reset">DApp Browser</a>
            </li>
            <li className="mb-3">
              <a href="/stablecoins" className="text-reset">Stablecoins</a>
            </li>
            <li className="mb-3">
              <a href="/beta" className="text-reset">Beta</a>
            </li>
            <li className="mb-3">
              <a href="/collectibles-wallet" className="text-reset">NFTs</a>
            </li>
            <li className="mb-3">
              <a href="/developer" className="text-reset">Developers</a>
            </li>
            <li className="mb-3">
              <a href="https://apps.apple.com/app/apple-store/id1288339409?pt=1324988&amp;ct=website&amp;mt=8" rel="noopener" target="_blank" className="text-reset">Crypto Wallet for iOS</a>
            </li>
            <li className="mb-3">
              <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&amp;referrer=utm_source%3Dwebsite" rel="noopener" target="_blank" className="text-reset">Crypto Wallet for Android</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <h4 className="font-weight-bold text-uppercase text-gray-700">Information</h4>
          <ul className="list-unstyled text-gray-700 mb-0">
            <li className="mb-3">
              <a href="https://community.trustwallet.com" target="_blank" className="text-reset">Community</a>
            </li>
            <li className="mb-3">
              <a href="https://community.trustwallet.com/c/helpcenter" target="_blank" className="text-reset">Help Center</a>
            </li>
            <li className="mb-3">
              <a href="/blog" rel="noopener" className="text-reset">DApp Journey</a>
            </li>
            <li className="mb-3">
              <a href="/press" className="text-reset">Press Kit</a>
            </li>
            <li className="mb-3">
              <a href="/submit-dapp" className="text-reset">Submit DApp</a>
            </li>
            <li className="mb-3">
              <Link to="/legal" className="text-reset">Terms Of Service</Link>
            </li>
            <li className="mb-3">
              <Link to="/legal" className="text-reset">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
          <h4 className="font-weight-bold text-uppercase text-gray-700">Use Crypto</h4>
          <ul className="list-unstyled text-gray-700 mb-6 mb-md-8 mb-lg-0">
            <li className="mb-3">
              <a href="/buy-bitcoin" className="text-reset">Buy Bitcoin with a credit card</a>
            </li>
            <li className="mb-3">
              <a href="/buy-ethereum" className="text-reset">Buy Ethereum</a>
            </li>
            <li className="mb-3">
              <a href="/buy-bnb" className="text-reset">Buy BNB</a>
            </li>
            <li className="mb-3">
              <a href="/buy-litecoin" className="text-reset">Buy Litecoin</a>
            </li>
            <li className="mb-3">
              <a href="/buy-tron" className="text-reset">Buy TRON</a>
            </li>
            <li className="mb-3">
              <a href="/buy-xrp" className="text-reset">Buy XRP</a>
            </li>
            <li className="mb-3">
              <a href="/buy-bitcoincash" className="text-reset">Buy Bitcoin Cash</a>
            </li>
            <hr />
            <li className="mb-3">
              <a href="/earn-bitcoin" className="text-reset">Earn Bitcoin</a>
            </li>
            <li className="mb-3">
              <a href="/earn-ethereum" className="text-reset">Earn Ethereum</a>
            </li>
            <li className="mb-3">
              <a href="/earn-binance-coin" className="text-reset">Earn Binance Coin</a>
            </li>
            <li className="mb-3">
              <a href="/earn-cake" className="text-reset">Earn Cake</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <h4 className="font-weight-bold text-uppercase text-gray-700">Assets</h4>
          <ul className="list-unstyled text-gray-700 mb-6 mb-md-8 mb-lg-0">
            <li className="mb-3"><a href="/bitcoin-wallet" className="text-gray-700">Bitcoin (BTC)</a>
            </li><li className="mb-3"><a href="/ethereum-wallet" className="text-gray-700">Ethereum (ETH)</a>
            </li><li className="mb-3"><a href="/binance-coin-wallet" className="text-gray-700">Binance Coin (BNB)</a>
            </li><li className="mb-3"><a href="/litecoin-wallet" className="text-gray-700">Litecoin (LTC)</a>
            </li><li className="mb-3"><a href="/xrp-wallet" className="text-gray-700">Ripple (XRP)</a>
            </li><li className="mb-3"><a href="/polkadot-wallet" className="text-gray-700">Polkadot (DOT)</a>
            </li><li className="mb-3"><a href="/stellar-wallet" className="text-gray-700">Stellar (XLM)</a>
            </li><li className="mb-3"><a href="/dogecoin-wallet" className="text-gray-700">Dogecoin (DOGE)</a>
            </li><li className="mb-3"><a href="/smart-chain-wallet" className="text-gray-700">Smartchain (BNB)</a>
            </li><li className="mb-3"><a href="/dash-wallet" className="text-gray-700">Dash (DASH)</a>
            </li><li className="mb-3"><a href="/tron-wallet" className="text-gray-700">TRON (TRX)</a>
            </li><li className="mb-3"><a href="/tezos-wallet" className="text-gray-700">Tezos (XTZ)</a>
            </li><li className="mb-3"><a href="/cosmos-wallet" className="text-gray-700">Cosmos (ATOM)</a>
            </li><li className="mb-3"><a href="/kava-wallet" className="text-gray-700">Kava (KAVA)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)