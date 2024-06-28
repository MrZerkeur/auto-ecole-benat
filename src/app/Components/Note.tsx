import React from 'react';
import "../globals.css"

interface Noteprops{
    header : string;
    text : string;
}

export function Notes(props : Noteprops) {
  const { header, text } = props;
  console.log(header)
  return (
    <div className='Note'>
      <div className="Note-elements">
        <div className="Note-header-text"><p>{header}</p></div>
        <div className="Note-line"></div>
        <div className="Note-big-text">{text}</div>
        <div className="Note-button">en savoir plus</div>
      </div>
    </div>
  );
}

export default Notes;