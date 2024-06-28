import "../styles/qsn.css"
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HorizontalSlide from "../Components/horiz"

interface Slide {
    imageUrl: string;
    title: string;
    text: string;
  }

export default function qsn(){
    const mySlides: Slide[] = [
        {
          imageUrl: '/img/one.png',
          title: 'PATIENCE',
          text: 'Nous sommes patients et compréhensifs avec nos élèves, reconnaissant que chaque personne apprend à son propre rythme.',
        },
        {
          imageUrl: '/img/two.png',
          title: 'RESPONSABILITE',
          text: 'Nous inculquons un sens de responsabilité à nos élèves en soulignant l\'importance de la conduite sécuritaire et respectueuse des règles de la route.',
        },
        {
            imageUrl: '/img/three.png',
            title: 'TRANSPARENCE',
            text: 'Nous sommes transparents sur nos tarifs, nos processus d\'apprentissage et nos attentes envers les élèves.',
        },
        {
            imageUrl: '/img/four.png',
            title: 'ECOUTE',
            text: 'Écoute et communication : Nous sommes à l\'écoute des besoins et des préoccupations de nos élèves, favorisant une communication ouverte et honnête.',
        },
        {
            imageUrl: '/img/five.png',
            title: 'SECURITE',
            text: 'Nous priorisons la sécurité sur la route et enseignons les meilleures pratiques pour éviter les accidents.',
        },
        {
            imageUrl: '/img/six.png',
            title: 'RESPECT',
            text: 'Nous respectons chaque élève et créons un environnement d\'apprentissage inclusif et sans jugement.',
        },
      ];
      
    return (
        <>
        <div className="four-layer-all-the-time">
            <div className="flatf">
                    <h1 className="permis-upper-text4">
                    QUI SOMMES-NOUS?
                    </h1>
            </div>
        </div>
        {/* <img src="/img/third-page-main-picture.png" className="third-page-main-picture" /> */}
        <div className="layer-2-3">
        <div className="layering3">
            <div className="layer-2-3-img">
                <img src="/img/multi-cars.png" alt="" />
            </div>
            <div className="layer-2-3-reg">
                <h1>
                benat auto-ecole
                </h1>
                <p>
                Bienvenue chez Benat Auto École, votre partenaire confiance pour une conduite sûre et réussie à Saint André de Cubzac et Pugnac! Avec deux agences à votre service, nous offrons une gamme complète de cours de conduite sur boîte mécanique et automatique, avec des véhicules comme la Peugeot 208 et la Citroën C3. Nos 8 formateurs qualifiés vous guideront avec expertise à travers des sessions pratiques sur route, vous préparant non seulement pour le permis, mais pour une conduite confiante et fluide. Avec un taux de réussite élevé et des clients satisfaits, rejoignez-nous chez Benat Auto École et laissez-nous vous mener vers la route du succès!
                </p>
            </div>
            </div>
        </div>
        <div className="layer-3-3">
            <div className="nos-valeur-h1"><h1>NOS VALEURS</h1></div>
            <HorizontalSlide slides={mySlides} />
            <div></div>
        </div>
        <div className="layer-4-3">
            <div className="first-4-3">
                <div className="regulating-reg">
                    <div><p>Notre équipe est disponible pour vous fournir les renseignements dont vous<br /> avez besoin au :</p></div>
                    <div className="down-hold-thing">
                    <div className="phone-holder">
                            <div className="phone-holder-reg">
                                <p>05 57 43 34 20</p>
                                <FontAwesomeIcon icon={faPhone} color="#1940C5" />
                            </div>
                        </div>
                        <div className="review-google-revi">
                            <div>
                                <p>VOIR NOS AVIS GOOGLE</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-4-3">
                <div>
                    <img src="/gif/map.gif" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}