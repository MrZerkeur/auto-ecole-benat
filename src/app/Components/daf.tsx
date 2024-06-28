import React from 'react';
import "../globals.css"

interface Typeimg{
    ImgPath : string
}


export default function DocumentAf({ImgPath} : Typeimg){

    return(
        <>
        <div className='the-duplicate-layer'>

            <div className='the-duplicate-layer-h1'>
                <h1>DOCUMENTS A FOURNIR</h1>
            </div>
            <div className='multiple-layer-regulating'>
                <div className='multiple-layer-mid'>

                     <div className='multiple-layer-midimg-reg'><img src={ImgPath} className='img-prob'/></div>
                     <div className='line-in-midlle-layers'></div>
                     <div className=''>

                         <ul className='disc-before' >
                           <li>Votre<b> ASSR2 / BSR / permis AM</b></li>
                           <li>La <b>carte d'identité de l'élève</b></li>
                           <li>Votre <b>certificat Journée Défense et Citoyenneté</b> (J.D.C)</li>
                           <li>Une <b>attestation d'hébergement</b> rédigée par l'hébergeur</li>
                           <li>Une <b>facture</b> récente <b>au nom de l'hébergeur</b></li>
                           <li>La <b>pièce d'identité de l'hébergeur</b></li>
                           <li>Une <b>photo et signature numérique</b></li>
                         </ul>
                     </div>
                </div>
            </div>
        </div>
        </>
    );

}