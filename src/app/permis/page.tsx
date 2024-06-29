import "../styles/permis.css";
import Notes from "../Components/Note"
import DocumentAf from "../Components/daf"



function SecondLayer(){
    return(
        <div className="layer-2-2">
            <div>

            </div>
            <div className="middle-layer-2-2">
               <div className="middle-layer-2-2-regulate">
                <div className=""> <p>DES COURS ADAPTés aux élèves pour une <b> réussite garantie</b></p> </div>
                <div className="same-blue-line"></div>
                <div className=""><p>des <b>instructeurs diplômés</b> afin de vous guider au mieux</p></div>
                <div className="same-blue-line"></div>
                <div className=""><p>des cours sur <b>boites manuelle ou automatique</b></p></div>
               </div> 
            </div>
            <div>

            </div>
        </div>
    );

}


function ThirdLayer(){
    const myTitles = ['BOITE MECANIQUE SUR PEUGEOT 2008', 'Boîte automatique sur citroËn C3'];
  const myTexts = [
    'Plongez dans notre programme de cours de conduite sur boîte mécanique, où vous prendrez en main la Peugeot 208. Rejoignez-nous pour des sessions pratiques sur route, encadrées par nos formateurs, et développez votre habileté à conduire avec assurance.',
    'Embarquez dans notre programme de cours de conduite sur boîte automatique, avec la Citroën C3 comme véhicule d\'apprentissage. Rejoignez-nous pour des sessions pratiques sur route, et développez votre habileté à conduire en toute fluidité et confiance.',
  ];
    return(
        <div className="layer-3-2">
            <div>

            </div>
            <div className="layer-3-2-midle">
                <div className="layer-3-2-midle-regulation">
                    <div className="grid grid-cols-2 gap-x-4 layer-3-2-midle-rn">
                             <div className="both-notes">
                             {
                                 <Notes key={0} header={myTitles[0]} text={myTexts[0]} selection={2}/>
                             }   
                             </div>
                             <div className="both-notes">
                             {
                                 <Notes key={1} header={myTitles[1]} text={myTexts[1]} selection={2}/>
                             }
                             </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default function permis(){
    
    const path = "/img/fli.png";
    
    return (
        <>
        <div className="second-layer-all-the-time">
            <div className="flatf">
                <h1 className="permis-upper-text1">
                votre permis ?
                </h1>
                <p className="permis-upper-text2">
                obtenez le sans <br /> accroc !
                </p>
            </div>
            <img src="/img/certified.png" alt='gyg' className="certif-absol"/>

        </div>
        {/* <img src="/img/page-two-main-e.png" className="page-two-main-photo" /> */}
        <SecondLayer />
        <ThirdLayer />
        <DocumentAf ImgPath={path}/>
        </>
    )
}