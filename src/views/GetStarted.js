import React, {useState} from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import ico1 from '../assets/images/ico1.png'
import ico2 from '../assets/images/ico2.png'
import ico3 from '../assets/images/ico3.png'
import {Link} from 'react-router-dom';

export default () => {
  const history = useHistory()
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>
      <div className="c-width mx-auto">
        <Carousel controls={false} indicators={true} interval={2000} activeIndex={index} onSelect={handleSelect} className="carou">
          <Carousel.Item>
          
            <img src={ico1} className="carimage" />
            <div className="carouinfo">
            <h3 className="text-white-75">Private and secure</h3>
          <p className="mt-1 text-white-75">Private keys never leave your account.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          
            <img src={ico2} className="carimage"/>
            <div className="carouinfo">
            <h3 className="text-white-75">All assets in one place</h3>
          <p className="mt-1 text-white-75">Manage your resources transparently</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          
            <img src={ico3} className="carimage"/>
            <div className="carouinfo">
            <h3 className="text-white-75">Swap your assets</h3>
          <p className="mt-1 text-white-75">Exchange your assets anonymously</p>
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="buttons_route">
        <Button className="mt-2 cto" onClick={e => history.push('/register-wallet')}>I already have a wallet</Button>
        <Link className="mt-4 text-white-75" to="/register-wallet">Create a new wallet</Link>
        </div>
      </div>
    </div>
  )
}