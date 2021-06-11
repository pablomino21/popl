import React, {useEffect} from "react"
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../styles/landing.sass'
import home_trustwallet_app from '../assets/images/home_trustwallet_app.png'
import home_cards from '../assets/images/home_cards.png'
import home_dex from '../assets/images/home_dex.png'
import home_security from '../assets/images/home_security.png'
import dapp_preview from '../assets/images/dapp_preview.png'

export default () => {
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => {
      history.push('/get-started')
    }, 2000);
  }, [])

  return (
    <div>
      <div className="background- my-container">
        <div className="land-cover c-width text-lg-left mx-auto pt-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="text-white display-4 font-weight-bold">The most trusted & secure crypto wallet</h1>
              <p className="text-white-75 lead mb-4">Buy, store, collect NFTs, exchange & earn crypto. Join 10 million+ people using Trust Wallet.</p>
              <Button variant="secondary" className="mt-2 mb-5 cta" onClick={e => history.push('/get-started')}>Get Started</Button>
            </div>
            <div className="col-12 col-md-6">
              <img src={home_trustwallet_app} className="hero-image mx-auto d-block img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="c-width mx-auto mt-4">
        {/* <hr /> */}
        <div className="container mt-5">
          <div className="row align-items-center justify-content-center justify-content-md-between">
            <div className="col-12 text-center mt-4 mt-md-0 order-md-2">
              <h3 className="display-lg-4 font-weight-bold mb-4">You Deserve Easy Access to Cryptocurrencies</h3>
              <p className="text-gray-700">Trust Wallet is for you if you want to</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center justify-content-md-between pt-4 pb-4 text-center">
            <div className="col-12 col-lg-6">
              <div className="list-group-item d-flex">
                <span className="mr-4">
                  <i className="check"></i>
                </span>
                Buy Bitcoin in under five minutes
              </div>
              <div className="list-group-item d-flex">
                <span className="mr-4">
                  <i className="check"></i>
                </span>
                Easily earn interest on the crypto in your wallet
              </div>
              <div className="list-group-item d-flex">
                <span className="mr-4">
                  <i className="check"></i>
                </span>
                See your collectibles. Art &amp; NFTs in one place
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="list-group-item d-flex">
                <span className="mr-4">
                  <i className="check"></i>
                </span>
                  Exchange your crypto without leaving the app
              </div>
              <div className="list-group-item d-flex">
                <span className="mr-4">
                  <i className="check"></i>
                </span>
                  Track charts and prices within the app
              </div>
              <div className="list-group-item d-flex">
                <span className="mr-4">
                  <i className="check"></i>
                </span>
                  Keep your crypto safe from hackers &amp; scammers
              </div>
            </div>
            <a href="/download-page" className="btn btn-primary mt-5 mx-auto downloadapp-native">
            Download Now
            </a>
          </div>
        </div>

        <section className="pt-8">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 text-center text-md-left mb-6 mb-md-10 order-sm-first order-md-2">
                <h3 className="display-lg-4 font-weight-bold">Buy Crypto With a Card</h3>
                <p className="lead text-gray-700">Get your first $50 of Bitcoin, Ethereum, Binance Coin and many other cryptocurrencies.</p>
                <a href="/download-page" className="btn btn-primary downloadapp-native">
                  Download Now
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img loading="lazy" className="img-fluid mx-auto d-block" src={home_cards} />
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 text-center text-md-left mb-6 mb-md-10">
                <h3 className="display-lg-4 font-weight-bold">Exchange Instantly</h3>
                <p className="lead text-gray-700">No forms, no selfies. Trade crypto anytime with ease.</p>
                <a href="/download-page" className="btn btn-primary downloadapp-native">
                  Download Now
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img loading="lazy" className="img-fluid  mx-auto d-block" src={home_dex} />
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-12 col-md-6 col-lg-5 order-sm-2 text-center text-md-left mb-6 mb-md-10 order-md-2">
                <h3 className="display-lg-4 font-weight-bold">Private &amp; Secure</h3>
                <p className="lead text-gray-700">Only you can access your wallet. We don’t collect any personal data.</p>
                <a href="/download-page" className="btn btn-primary downloadapp-native">
                  Download Now
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-7">
                <img loading="lazy" className="img-fluid mx-auto d-block" src={home_security} />
              </div>
            </div>
            <div className="row align-items-center justify-content-center justify-content-md-between">
            <div className="col-12 col-md-6 col-lg-5 text-center text-md-left mb-6 mb-md-10">
              <h3 className="display-lg-4 font-weight-bold">Browser for DApps</h3>
              <p className="lead text-gray-700">Use your favourite decentralized apps &amp; find new ones, without leaving your wallet.</p>
              <a href="/download-page" className="btn btn-primary downloadapp-native">
                Download Now
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <img loading="lazy" className="img-fluid mx-auto d-block" src={dapp_preview} />
            </div>
          </div>
          </div>
        </section>
        
      </div>
    </div>
  )
}