import Notes from "../Components/Note";
import DocumentAf from "../Components/daf"
import "../styles/code.css"



function ThirdLayer(){
    const myTitles = ['cours de code en salle', 'cours de code en LIGNE','cours de perfectionnement'];
  const myTexts = [
    'Découvrez notre service de cours de code en salle, conçu pour vous offrir une expérience d\'apprentissage interactive et efficace.',
    'Explorez nos cours de code en ligne, conçu pour vous offrir une flexibilité d\'apprentissage ultime. Rejoignez nos sessions interactives dirigées par des instructeurs experts.',
    'Découvrez notre service de cours de perfectionnement, conçu pour vous aider à affiner vos compétences de conduite. Rejoignez nos sessions en ligne interactives animées par des formateurs expérimentés.',
  ];
    return(
        <div className="layer-3-2">
            <div>

            </div>
            <div className="layer-3-2-midle">
                <div className="grid grid-cols-3 gap-x-4 layer-3-2-midle-regulation">
                    <div className="both-notes">
                    {
                        <Notes key={0} header={myTitles[0]} text={myTexts[0]} selection={3}/>
                    }   
                    </div>
                    <div className="both-notes">
                    {
                        <Notes key={1} header={myTitles[1]} text={myTexts[1]} selection={3}/>
                    }
                    </div>
                    <div className="both-notes">
                    {
                        <Notes key={2} header={myTitles[2]} text={myTexts[2]} selection={3}/>
                    }
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}



export default function code(){
    return (
        <>
        <div className="third-layer-all-the-time">
                <div className="flatf">
                    <h1 className="permis-upper-text3">
                    OBTENEZ LE CODE HAUT LA <br />
                     MAIN EN UN TEMPS RECORD
                    </h1>
                </div>
            <img src="/img/certified.png" className="certif-absol-2" alt="hilo"/>
        </div>
        {/* <img src="/img/third-page-main-e.png" className="third-page-main-photo" /> */}
        <ThirdLayer />
        <DocumentAf  ImgPath="/img/sli.png"/>
        </>
    )
}