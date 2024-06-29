"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Notes from "./Components/Note";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import MyMap from "./Components/MyMap";
import React from 'react';

interface StarIconProps {
  children: React.ReactNode;
}

const StarIcon: React.FC<StarIconProps> = ({ children }) => {
  const styles = {
    fontSize: '300%',
    color: '#FFCC00',
  };

  return <span style={styles}>{children}</span>;
};



function Benefits(){
  return (
  <div className="layer-2-1">
        <div className="fr-one rg">
        <img src="/img/statsm.png" alt="1"/>
        <p className="">TAUX DE REUSSIE ELEVE</p>
        </div>
        <div className="fr-two rg">
        <img src="/img/hand.png" alt="2"/>
        <p>8 INSTRUCTEURS A VOTRE SERVICE</p>
        </div>
        <div className="fr-three rg">
        <img src="/img/ed.png" alt="3"/>
        <p>COURS EN LIGNE</p>
        </div>
      </div>
  )

}

function Passage(){
  return(
    <div className="layer-4-1">
        <div className="layer-4-1-holder">
        <p>La majorité des élèves décrochent leur permis dès le premier passage de l&apos;examen !</p>
        <div className="text-under-sline"/>
        <img src="/img/cute-car.png" className="cute-car" alt="cute"/>
        </div>
      </div>
  )
}





interface OverlayTableProps {
  imageUrl?: string; 
  overlayText: string; 
}

// const OverlayTable: React.FC<OverlayTableProps> = ({ imageUrl, overlayText }) => {
//   return (
//     <table className="w-full p-0">
//       <tbody className="w-full p-0">
//         <tr>
//           <td className="absolute"></td>
//           <td rowSpan={2} className="w-full p-0 m-0">
//             {imageUrl && <img src={imageUrl} alt="Overlay Image" className=""/>}
//           </td>
//         </tr>
//         <tr>
//           <td colSpan={2} className="w-full p-0" >{overlayText}</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

function First()
{
  const MyData = [
    { day: 'LUNDI', time: '14H30-18H' },
    { day: 'MARDI', time: '14H30-18H' },
    { day: 'MERCREDI', time: '14H30-18H' },
    { day: 'JEUDI', time: '14H30-18H' },
    { day: 'VENDREDI', time: '14H30-18H' },
  ];

  const YouData = [
    { day: 'DE LUNDI', time: '14H30-18H' },
    { day: 'A VENDREDI', time: '14H30-18H' },
  ];

  return(
    <div className="layer-7-1 layer-7-1a">
      <div className="upper-section">

        <div className="right-side-agency">
          <div className="main_image">
            <img src="/img/sadc-boutiqueb.png" className="rsa-image" alt="iu"/>
          </div>
            <div className="main_text flex flex-col gap-4">
              <h1 className="sans text-2xl font-medium leading-9 text-center">
              Horaires d&apos;ouverture de l&apos;agence :
              </h1>
              <div className="bf5">
              <MyTable data={MyData}  />
              </div>
              <div className="af5">
              <MyTable data={YouData} />
              </div>
            </div>
          

            {/* <OverlayTable imageUrl="/img/sadc-boutique.png" overlayText="ana m9weedd"/> */}

        </div>
        <div className="left-side-agency">
          {/* <img src="/img/sadc-cars.png" className="lsa-image"/> */}
            <div className="main_image">
              <img src="/img/sadc-carsb.png" className="rsa-image" alt="no"/>
            </div>
            <div className="main_text flex flex-col mt-regu">
              <h1>
                Horaires de conduite : <br /> De 8H à 20H
              </h1>
            </div>
          </div>
      </div>
      <div className="Buttom-section">
        <div className="right-side-agency">
        <div className="main_image">
            <img src="/img/color-back.png" className="rsa-image" alt="kit"/>
          </div>
            <div className="main_text mt-regu">
              <h1>
              103, rue nationale 33240 <br /> Saint André de Cubzac
              </h1>
              <p>
              Nous sommes disponible par téléphone au 05 57 43 34 20 <br /> Nous vous recontacterons dès que possible.
              </p>
              <div className="review-google-rev hefb">
                    <div>
                      <p className="sans text-xl font-semibold leading-6 text-center">NOUS CONTACTER</p> 
                    </div>
                </div>
              
            </div>
        </div>
        <div className="left-side-agency">
          <MyMap number={1} />
        </div>
      </div>
    </div>
  )
}




function Second()
{

  const MyData = [
    { day: 'VENDREDI', time: '16H-19H' },
    { day: 'SAMEDI', time: '10H-13H' },
  ];
  
  return(
    <div className="layer-7-1 layer-7-1a">
      <div className="upper-section">

        <div className="right-side-agency">
          {/* <img src="/img/punac-boutique.png" className="rsa-image"/> */}
          <div className="main_image">
            <img src="/img/punac-boutiqueb.png" className="rsa-image" alt="jo"/>
          </div>
            <div className="main_text flex flex-col gap-4">
              <h1 className="sans text-2xl font-medium leading-9 text-center">
              Horaires d&apos;ouverture de l&apos;agence :
              </h1>
              <MyTable data={MyData} />
            </div>


        </div>
        <div className="left-side-agency">
          {/* <img src="/img/punac-cars.png" className="lsa-image"/> */}

          <div className="main_image">
              <img src="/img/punac-carsb.png" className="rsa-image" alt="meq"/>
             
            </div>
            <div className="main_text flex flex-col mt-regu">
              <h1>
                Horaires de conduite : <br /> De 8H à 20H
              </h1>
            </div>
          
        </div>
      </div>
      <div className="Buttom-section">
        <div className="right-side-agency">
        <div className="main_image">
            <img src="/img/color-back.png" className="rsa-image" alt="opn"/>
          </div>
            <div className="main_text mt-regu">
              <h1>
              21 ROUTE DE BOURG 33710 PUGNAC
              </h1>
              <p>
              Nous sommes disponible par téléphone au 05 57 43 34 20 ou par mail à l&apos;adresse contact@exemple.com
              </p>
              <div className="review-google-rev hefb">
                    <div>
                      <p className="sans text-xl font-semibold leading-6 text-center">NOUS CONTACTER</p> 
                    </div>
              </div>
        </div>
        </div>
        <div className="left-side-agency">
          <MyMap number={2} />
        </div>
      </div>
    </div>
  )
}

interface TableProps {
  data: { day: string; time: string }[]; 
}

const MyTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="myTable rounded-xl">
      <thead className="rounded-xl">
        <tr className="headerRow">
          {data.map((item) => (
            <th key={item.day}> {item.day} </th> // Use the day directly
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="dataRow">
          {data.map((item) => (
            <td key={item.day}> {item.time} </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};



export default function Home()
{
  
  
  const [activeButton, setActiveButton] = useState<string>('button1'); 

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const myTitles = ['cours de code en salle', 'cours de code en LIGNE', 'cours de perfectionnement', 'Boîte mécanique sur peugeot 208', 'Boîte automatique sur citroËn C3'];
  const myTexts = [
    'Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d\'apprentissage interactive et efficace.',
    'Explorez nos cours de code en ligne, conçu pour vous offrir une flexibilité d\'apprentissage ultime. Rejoignez nos sessions interactives dirigées par des formateurs experts.',
    'Découvrez notre service de cours de perfectionnement, conçu pour vous aider à affiner vos compétences de conduite. Rejoignez nos sessions en ligne interactives animées par des formateurs expérimentés.',
    'Plongez dans notre programme de cours de conduite sur boîte mécanique, où vous prendrez en main la Peugeot 208. Rejoignez-nous pour des sessions pratiques sur route, encadrées par nos formateurs, et développez votre habileté à conduire avec assurance.',
    'Embarquez dans notre programme de cours de conduite sur boîte automatique, avec la Citroën C3 comme véhicule d\'apprentissage. Rejoignez-nous pour des sessions pratiques sur route, et développez votre habileté à conduire en toute fluidité et confiance.',
  ];

  const images = Array.from({ length: 6 }, (_, i) => ({
    src: `/reviews/review-${i + 1}.png`, 
    alt: `Review Image ${i + 1}`,
  }));

  const [agency, setagency] = useState("first");

  const update = (str : string) => {
      setagency(str);
      if(str == "first")
        setActiveButton("button1");
      else
      setActiveButton("button2");
      
  }

  const numItemsFirstDiv = 3;

  
  return (
		<>
			{/* <img src="/img/driving-women.png" className="image"/> */}
      <div className="first-layer-all-the-time">
        <div className="flatf">
          <h1>
            LE PERMIS EN UN CLAQUEMENT<br /> DE DOIGTS !
          </h1>
          <div className="holding-fold">
            <div className="review-google-rev hefb">
              <a href="/qsn" target="_blank">

              <div>
                <p>EN SAVOIR PLUS</p> 
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-line" />
      <Benefits />
      <div className="layer-3-1">
          <div className="layering3">
            <div className="layer-3-1-img">
            
                <img src="/img/multi-cars.png" alt="eeg" />
            </div>
            <div className="layer-3-1-reg">
                <h1>
                benat auto-ecole
                </h1>
                <p>
                Bienvenue chez Benat Auto École, votre partenaire confiance pour une conduite sûre et réussie à Saint André de Cubzac et Pugnac! Avec deux agences à votre service, nous offrons une gamme complète de cours de conduite sur boîte mécanique et automatique, avec des véhicules comme la Peugeot 208 et la Citroën C3. Nos 8 formateurs qualifiés vous guideront avec expertise à travers des sessions pratiques sur route, vous préparant non seulement pour le permis, mais pour une conduite confiante et fluide. Avec un taux de réussite élevé et des clients satisfaits, rejoignez-nous chez Benat Auto École et laissez-nous vous mener vers la route du succès!
                </p>
            </div>
          </div>
      </div>
      <Passage />
      <div className="layer-5-1">
        <div className="two-pics-on-line ">
          <div className="flex flex-col align-items-cen">
            <a href="https://www.securite-routiere.gouv.fr/resultats-du-permis-de-conduire#/" target="_blank"> <img src="/img/andts.png" className="two-pics-left two-pics-on-line-left padin-same " alt="thos" /></a>
             <h1 className="only-mobile">Agence nationale des titres sécurisés</h1> 
             </div>
          <div className="two-pics-on-line-middle"></div>
          <div className=" flex flex-col align-items-cen">
          <a href="https://ants.gouv.fr/" target="_blank"> <img  src="/img/rdpdc.png" className="two-pics-right two-pics-on-line-right padin-same " alt="soap"/> </a>
               {/* <div className="absolute h-full w-full"></div> */}
             <h1 className="only-mobile">Résultats du permis de conduire</h1>
          </div>
        </div>
      </div>
      <div className="layer-6-1">
        <img src="/img/lemon-aaaa.png" className="lemon-up" alt="nop"/>
        <div className=""></div>
        <div className="notes-for-services">
        <div className="notes-for-services-regulating">

          <div className="first-three-notes grid grid-cols-3 gap-x-4">
          {myTitles.slice(0, numItemsFirstDiv).map((title, index) => (
            <Notes key={index} header={title} text={myTexts[index]} selection={1}/>
            ))}

          </div>
          <div className="second-three-notes grid grid-cols-2 gap-x-4 ">
            {myTitles.slice(numItemsFirstDiv).map((title, index) => (
              <Notes key={index + numItemsFirstDiv} header={title} text={myTexts[index + numItemsFirstDiv]} selection={1} />
              ))}
          </div>
        </div>
        </div>
        <div className="agency-choice">
          <button className={`agency-f same-button ${activeButton === 'button1' ? 'active' : ''}`} onClick={() => update("first") }>AGENCE 1</button>
          <button className={`agency-s same-button ${activeButton === 'button2' ? 'active' : ''}`} onClick={() => update("second") }>AGENCE 2</button>
        </div>
      </div>
      {agency === "first" ? <First /> : <Second />}
      <div className="layer-8-1" >
              <div className="layer-8-1-reg">
                 <div><h1>NOTATION</h1></div>
                 <div>
                      <StarIcon>&#9733;</StarIcon>
                      <StarIcon>&#9733;</StarIcon>
                      <StarIcon>&#9733;</StarIcon>
                      <StarIcon>&#9733;</StarIcon>
                      <StarIcon>&#9733;</StarIcon>
                </div>
                 <div><h2>93% de satisfaction client</h2></div>
                 <div className="button-google-rev cursor-pointer">
                   <a href="https://www.google.com/maps/place/Driving+School+Benat/@44.9933915,-0.452552,17z/data=!4m8!3m7!1s0xd5532a975991637:0x2de7c88c346a2f48!8m2!3d44.9933878!4d-0.4476757!9m1!1b1!16s%2Fg%2F11g0hnyv7x?entry=ttu" target="_blank">

                   <div>
                     <p>VOIR NOS AVIS GOOGLE</p> 
                   </div>
                   </a>
                   <div className="google-svg">
                      <img src="/icon-chrome.svg" alt="dope"/>
                   </div>
                 </div>
                 <div className="review-google-rev hefb">
                 <a href="https://www.google.com/maps/place/Driving+School+Benat/@44.9933915,-0.452552,17z/data=!4m8!3m7!1s0xd5532a975991637:0x2de7c88c346a2f48!8m2!3d44.9933878!4d-0.4476757!9m1!1b1!16s%2Fg%2F11g0hnyv7x?entry=ttu" target="_blank">
                    <div>
                      <p>DONNER UN AVIS</p> 
                    </div>
                    </a>
                    <div className="google-svg">
                      <img src="/Vector.svg" alt="hope"/>
                   </div>
                 </div>

              </div>
      </div>
      <div className="layer-9-1">
        <div >
        {images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
        </div>
        {/* <div className="muah"></div> */}
      </div>
      <div className="blue-line-s" />
      <div className="layer-10-1">
        <div className="pre-footer-first-page">
          <div>
            <img src="/img/head-of-support.png" alt="pilo"/>
          </div>
          <div className="text-upper-the-phone">
            <div>
              <h4>Notre équipe est disponible pour vous fournir les renseignements dont vous avez besoin au :</h4>
            </div>
            <div className="phone-holder">
              <div className="phone-holder-reg">
                <p>05 57 43 34 20</p>
                <FontAwesomeIcon icon={faPhone} color="#1940C5" />
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
	)
}


