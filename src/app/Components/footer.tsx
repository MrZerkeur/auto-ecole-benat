import Link from "next/link"

export default function Footer()
{
    return (
        <div className="footer-container">

  <div className="on-top-of-footer">
    <div className="fotter-toping toping1">
        <div className="logo-wf-section">
        <div><p>Site internet réalisé par :</p></div>
        <img src="/img/webfabric.png" className="webfabric-logo"/>
        </div>
    </div>
    <div className="fotter-toping toping2">
        <div className="fm-section-on-top">
            <div>
                <img src="/img/benat-footer-logo.png" alt="" />
            </div>
            <div>
            <ul className="footer-menu">
        <li className="footer-item">
          <Link href="/">ACCUEIL</Link>
        </li>
        <li className="footer-item">
          <Link href="/permis">PERMIS</Link>
        </li>
        <li className="footer-item">
          <Link href="/code">CODE</Link>
        </li>
        <li className="footer-item">
          <Link href="/qsn">QUI SOMME-NOUS?</Link>
        </li>
        <li className="footer-item">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
            </div>
        </div>
        <div className="fm-line"></div>
        <div className="fm-section-on-midlle">
            <p>Bienvenue chez Benat Auto École, votre partenaire confiance pour une conduite sûre et réussie à Saint André de Cubzac et Pugnac! Avec deux agences à votre service, nous offrons une gamme complète de cours de conduite. Nos formateurs qualifiés vous guideront avec expertise à travers des sessions pratiques sur route, vous préparant non seulement pour le permis, mais pour une conduite confiante et fluide. Rejoignez-nous chez Benat Auto École et laissez-nous vous mener vers la route du succès!</p>
        </div>
        <div className="phone-numberfooter">
            <div> <p>05 57 43 34 20</p></div>
        </div>
        <div className="fm-section-on-bottom">
            <div className="lmt f-footer tge">
                <p>auto-ecole-benat.fr</p>
            </div>
            <div className="lmt s-footer  tge">
                <p>©Benat Auto école - Tout droits réservés</p>
            </div>
        </div>
    </div>
    <div className="fotter-toping toping3">
        <div className="text-right-right-footer tge">
        Mentions légales
        </div>
        <div className="text-right-right-footer tge">
        Politique de confidentialité
        </div>
    </div>
  </div>
</div>
    )
}


function Footing()
{
    return (
        <div className="footer-container">
  <img src="/img/footer-img.png" className="footer-footing" />
  <div className="on-top-of-footer">
    <div className="fotter-toping toping1">
        <div className="logo-wf-section">
        <div><p>Site internet réalisé par :</p></div>
        <img src="/img/webfabric.png" className="webfabric-logo"/>
        </div>
    </div>
    <div className="fotter-toping toping2">
        <div className="fm-section-on-top">
            <div>
                <img src="/img/benat-footer-logo.png" alt="" />
            </div>
            <div>
            <ul className="footer-menu">
        <li className="footer-item">
          <Link href="/">ACCEUIL</Link>
        </li>
        <li className="footer-item">
          <Link href="/permis">PERMIS</Link>
        </li>
        <li className="footer-item">
          <Link href="/code">CODE</Link>
        </li>
        <li className="footer-item">
          <Link href="/qsn">QUI SOMME-NOUS?</Link>
        </li>
        <li className="footer-item">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
            </div>
        </div>
        <div className="fm-line"></div>
        <div className="fm-section-on-midlle">
            <p>Bienvenue chez Benat Auto École, votre partenaire confiance pour une conduite sûre et réussie à Saint André de Cubzac et Pugnac! Avec deux agences à votre service, nous offrons une gamme complète de cours de conduite. Nos formateurs qualifiés vous guideront avec expertise à travers des sessions pratiques sur route, vous préparant non seulement pour le permis, mais pour une conduite confiante et fluide. Rejoignez-nous chez Benat Auto École et laissez-nous vous mener vers la route du succès!</p>
        </div>
        <div className="phone-numberfooter">
            <div> <p>05 57 43 34 20</p></div>
        </div>
        <div className="fm-section-on-bottom">
            <div className="lmt f-footer tge">
                <p>auto-ecole-benat.fr</p>
            </div>
            <div className="lmt s-footer  tge">
                <p>©Benat Auto école - Tout droits réservés</p>
            </div>
        </div>
    </div>
    <div className="fotter-toping toping3">
        <div className="text-right-right-footer tge">
        Mentions légales
        </div>
        <div className="text-right-right-footer tge">
        Politique de confidentialité
        </div>
    </div>
  </div>
</div>
    )
}