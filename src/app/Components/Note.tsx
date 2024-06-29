"use client"
import React from 'react';
import "../globals.css"
import internal from 'stream';
import { useState } from 'react';




interface Noteprops{
    header : string;
    text : string;
    selection : number;
}

const FullScreen: React.FC<Noteprops> = (props)  => {

  // const Texts = ["Plongez dans notre programme de cours de conduite sur boîte mécanique, où vous prendrez en main la Peugeot 208. Rejoignez-nous pour des sessions pratiques sur route, encadrées par nos formateurs, et développez votre habileté à conduire avec assurance.Plongez dans notre programme de cours de conduite sur boîte mécanique, où vous prendrez en main la Peugeot 208. Rejoignez-nous pour des sessions pratiques sur route, encadrées par nos formateurs, et développez votre habileté à conduire avec assurance.Plongez dans notre programme de cours de conduite sur boîte mécanique, où vous prendrez en main la Peugeot 208. Rejoignez-nous pour des sessions pratiques sur route, encadrées par nos formateurs, et développez votre habileté à conduire avec assurance.Plongez dans notre programme de cours de conduite sur boîte mécanique, où vous prendrez en main la Peugeot 208. Rejoignez-nous pour des sessions pratiques sur route, encadrées par nos formateurs, et développez votre habileté à conduire avec assurance.","Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d'apprentissage interactive et efficace. Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d'apprentissage interactive et efficace. Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d'apprentissage interactive et efficace. Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d'apprentissage interactive et efficace. Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d'apprentissage interactive et efficace. Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d'apprentissage interactive et efficace. "]

  const [isFullScreen, setIsFullScreen] = useState(true);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      {/* <button onClick={toggleFullScreen}>Full Screen</button> */}
      {isFullScreen && (
        <div className="fullscreen-div" onClick={toggleFullScreen}>
          <div className='div-pertty h-fit w-fit '>

            <div className='div-pretty-reg flex flex-col gap-4 justify-center p-20 items-center h-full'>

            {props.header && <p>{props.header}</p>}
            <div className='line-in-midlle'></div>
            {props.header && <p className='dp-header'>{props.text}</p>}
            {/* {props.selection == 3 && <p className='dp-text'>{Texts[1]}</p>} */}
            {/* Content for your fullscreen div */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export function Notes(props : Noteprops) {
  const [apper,setappear] = useState(false);
  
  const HandleApp = () =>{
    setappear(!apper);
  }

  const { header, text ,selection } = props;
  console.log(header)
  return (
    <>
    {apper && selection == 2 && <FullScreen header={header} text={text} selection={2}/>}
    {apper && selection == 3 && <FullScreen header={header} text={text} selection={3}/>}
    {/* <div id="fullscreen-div"></div> */}
    <div className='Note'>
      <div className="Note-elements">
        <div className="Note-header-text"><p>{header}</p></div>
        <div className="Note-line"></div>
        <div className="Note-big-text">{text}</div>
        { selection == 1 && <a href="/code" className="Note-button hefb">en savoir plus</a>}
        { selection == 2 && <div className="Note-button hefb" onClick={() => HandleApp()}>en savoir plus</div>}
        { selection == 3 && <div className="Note-button hefb" onClick={() => HandleApp()}>en savoir plus</div>}

      </div>
    </div>
    </>
  );
}

export default Notes;