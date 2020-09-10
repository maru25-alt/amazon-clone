import React from 'react'
import '../css/home.css'
import Product from '../components/Product'


export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
            </div>

            <div className="home__row">
                {/* product */}
                <Product 
                   id="12331"
                    title="Maxboost Screen Protector for Apple iPhone Xs & iPhone X & iPhone 11 Pro (3 Packs, Clear) 0.25mm Tempered Glass Screen Protector with Advanced Clarity [3D Touch] Work w/Most Case 99% Touch Accurate" 
                    price={11.85} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71zW4NXBIXL._AC_SL1500_.jpg" 
                    rating={5}/>
                <Product 
                   id="12332"
                    title="Kasa Smart Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz WiFi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack (HS200), White" 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71dXf56rv0L._AC_SL1500_.jpg" 
                    rating={4}/>
                    

            </div>
            <div className="home__row">
                  <Product 
                      id="12327"
                    title=" Power Theory iPhone X/iPhone Xs Glass Screen Protector [2-Pack] with Easy Install Kit [Premium Tempered Glass] " 
                    price={11.85} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81wdDf6o-QL._AC_SL1500_.jpg" 
                    rating={2}/>
                    <Product 
                     id="12326"
                    title="Kasa Smart Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz WiFi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack (HS200), White" 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91fAg%2ByOSpL._AC_SL1500_.jpg" 
                    rating={4}/>
                    <Product 
                     id="12325"
                    title=" 49.2FT LED Strip Lights, QZYL Lights Strip Music Sync, App Control with Remote, 5050 RGB LED Light Strip Color Changing 24-Key Remote, Sensitive Built-in Mic, LED Lights Rope Lights for Home TV Party" 
                    price={13.76} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81lmAL14poL._AC_SL1500_.jpg" 
                    rating={3}/>
            </div>
            <div className="home__row">
                {/* product */}
                <Product
                    id="12329"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
            </div>

            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12322"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
               
                <Product
                    id="12323"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product 
                 id="12324"
                    title=" Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020" 
                    price={228.87 } 
                    image="https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SL1500_.jpg" 
                    rating={5}/>
               
            </div>

        </div>
    )
}
