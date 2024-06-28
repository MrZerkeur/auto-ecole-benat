"use client"
import "../styles/contact.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp19 } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import MyMap from "../Components/MyMap";

const ShowDiv1o = () => {
    return (
        <>
            <div className="exetreme-div div1">
            <div><p className="ony">103, rue nationale 33240<br /> Saint André de Cubzac</p></div>
            <div><p className="thry">Nous sommes disponible par téléphone au :</p></div>
            <div><p className="twy">05 57 43 34 20</p></div>
            <div><p className="thry">Nous vous recontacterons dès que possible.</p></div>
            </div>
        </>
    )
}

const ShowDiv2o = () => {
    return (
        <>
            <div className="exetreme-div div2">
            <div><p className="ony">21 route de bourg<br /> 33710 Pugnac</p></div>
            <div><p className="thry">Nous sommes disponible par téléphone au :</p></div>
            <div><p className="twy">06 87 83 69 09</p></div>
            <div><p className="thry">Nous vous recontacterons dès que possible.</p></div></div>
        </>
    )
}


const DualDivs = () => {
    const [showDiv1, setShowDiv1] = useState(true);
  
    const handleSwitch = () => {
      setShowDiv1(!showDiv1);
    };
  

        const [Size, setSize] = useState(false);
      
        const handleSize = () => {
            setSize(!Size);
        };

    return (
      <div className="parent-container">
        <div className={`onit ${Size ? 'height-30' : 'height-70'}`}>
            <div><FontAwesomeIcon onClick={handleSwitch} icon={faArrowLeft} color="#fff" size="2x"  className="cursor-pointer"/> </div>
            {showDiv1 && <ShowDiv1o />}
            {!showDiv1 && <ShowDiv2o />}
            <div><FontAwesomeIcon onClick={handleSwitch} icon={faArrowRight} color="#fff" size="2x" className="cursor-pointer"/> </div>
            {/* <button onClick={handleSwitch} className="switch-color">Switch</button> */}
            

            
        </div>
        <div className={`down-onit ${Size ? 'height-70' : 'height-30'}`}>
           
            <div className="down-onit-reg">
            <div className="down-onit-app cursor-pointer" onClick={handleSize}>
                <div>
                    <p>VOIR SUR LA CARTE <FontAwesomeIcon  icon={faArrowUp} color="#FFD953" /> </p>
                </div>
            </div>
                {showDiv1 && <MyMap number={1} />}
                {!showDiv1 && <MyMap number={2} />}
            </div> 
        </div> 
      </div>
    );
};


export default function contact(){
    return (
        <>
            <div className="layer-1-5">
                <div className="first-1-5">
                    <div className="flex flex-col gap-2">
                        <div className="first-1-5-reg">
                            <div>

                            <h1>RENCONTRONS-NOUS!</h1>
                            </div>
                            <div>
                                <img src="/img/lamp.png" />
                            </div>
                        </div>
                        <div className="flex justify-center"> 
                            <img src="/img/fake-laptop.png" />
                        </div>
                    </div>
                </div>
                <div className="second-1-5">
                    <DualDivs />
                </div>
            </div>
        </>
    )
}