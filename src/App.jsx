import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  ChevronRight, 
  Star, 
  Menu,
  X,
  Plane,
  Building,
  Globe2,
  Compass
} from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Avis Local",
    content: "J’ai adoré voyager avec cette agence de voyage, vraiment une expérience incroyable du début à la fin. Une équipe très sérieuse, professionnelle et surtout très fiable, ce qui est super rassurant. Tout était parfaitement organisé, sans …",
    date: "Il y a 2 mois",
    stars: 5
  },
  {
    id: 2,
    name: "Client Fidèle",
    content: "Une agence de confiance depuis deux générations. Nous faisons confiance à l’agence de voyage Tlemsani depuis près de 20 ans. Mon …",
    date: "Il y a 5 mois",
    stars: 5
  },
  {
    id: 3,
    name: "Voyageur Régulier",
    content: "Excellente agence de voyage sur Oran ,nous voyageons avec eux depuis plus de 10 ans déjà, M.Tlemsani et ses filles offrent une très bonne prestation de service ,à savoir une large gamme de destinations à travers le monde et au niveau …",
    date: "Il y a 1 an",
    stars: 5
  },
  {
    id: 4,
    name: "Client Satisfait",
    content: "Je tiens à remercier Tlemsani Tours, pour leur professionnalisme et leur excellente organisation. Tout était parfait, Leur équipe est à l’écoute, chaleureuse et toujours …",
    date: "Il y a 3 semaines",
    stars: 5
  }
];

const destinations = [
  { id: 1, title: 'Omra & Hajj', price: 'À partir de 180,000 DZD', image: 'https://images.unsplash.com/photo-1591465223011-aa9b09cdfc63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Dubaï Magique', price: 'À partir de 155,000 DZD', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Istanbul Découverte', price: 'À partir de 95,000 DZD', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="logo">
            <Globe2 className="logo-icon" size={32} color={scrolled ? 'var(--primary)' : 'var(--white)'} />
            <span>Tlemsani Tours</span>
          </a>
          
          <div className="nav-links">
            <a href="#accueil" className="nav-link">Accueil</a>
            <a href="#services" className="nav-link">Nos Services</a>
            <a href="#destinations" className="nav-link">Destinations</a>
            <a href="#avis" className="nav-link">Avis</a>
            <a href="#contact" className="btn btn-primary" style={{color: 'white'}}>
              <PhoneCall size={18} />
              0661 15 53 71
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="accueil" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Excellence en Voyage</div>
            <h1>Voyagez vers de <span>Nouveaux Horizons</span> avec Tlemsani Tours</h1>
            <p>
              Votre agence de voyage de confiance à Oran, Algérie. 
              Que ce soit pour une Omra inoubliable, un séjour de détente ou un voyage d'affaires, 
              nous nous occupons de chaque détail.
            </p>
            <div className="hero-actions">
              <a href="#destinations" className="btn btn-primary">
                Découvrir nos offres
                <ChevronRight size={20} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Nos Services Premium</h2>
          <p className="section-subtitle">
            Profitez de notre expertise de plus de 20 ans dans le domaine du voyage et du tourisme.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Plane /></div>
              <h3>Billetterie Mondiale</h3>
              <p>Réservation de billets d'avion sur toutes les compagnies aériennes aux meilleurs tarifs pour vos voyages personnels ou professionnels.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><Building /></div>
              <h3>Réservation d'Hôtels</h3>
              <p>Un large choix d'hébergements allant du confort abordable aux hôtels de luxe 5 étoiles à travers le monde entier.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><Globe2 /></div>
              <h3>Omra & Hajj</h3>
              <p>Des programmes complets et un accompagnement personnalisé pour l'accomplissement de vos rites religieux en toute sérénité.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><Compass /></div>
              <h3>Voyages Organisés</h3>
              <p>Des circuits touristiques sur mesure, planifiés dans les moindres détails pour vous garantir un séjour inoubliable et relaxant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Promo */}
      <section id="destinations" className="destinations-section">
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem'}}>
            <div>
              <h2 className="section-title" style={{color: 'white', textAlign: 'left', marginBottom: '0.5rem'}}>Destinations Populaires</h2>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem'}}>Explorez nos offres les plus demandées au départ d'Alger et d'Oran.</p>
            </div>
            <a href="#contact" className="btn btn-primary" style={{backgroundColor: 'var(--white)', color: 'var(--secondary)'}}>
              Voir tout le catalogue
            </a>
          </div>

          <div className="destinations-grid">
            {destinations.map(dest => (
              <div key={dest.id} className="destination-card">
                <img src={dest.image} alt={dest.title} />
                <div className="destination-overlay">
                  <h3>{dest.title}</h3>
                  <div className="destination-price">{dest.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Google Reviews */}
      <section id="avis" className="reviews-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Ce Que Disent Nos Clients</h2>
            <p className="section-subtitle">
              La satisfaction de nos voyageurs est notre plus grande récompense. Découvrez leurs expériences authentiques.
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="stars">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} fill="#FFC107" size={20} />
                    ))}
                  </div>
                  <div className="google-tag">
                    <FcGoogle size={20} />
                    Google Maps
                  </div>
                </div>
                
                <div className="review-content">
                  <p>{review.content}</p>
                </div>
                
                <div className="review-footer">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt pour votre prochaine aventure ?</h2>
          <p>Contactez notre agence dès aujourd'hui pour planifier votre voyage sur mesure.</p>
          <a href="#contact" className="btn btn-primary" style={{transform: 'scale(1.1)'}}>
            Demander un devis gratuit
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>Tlemsani Tours</h4>
              <p>Agence de Tourisme et de Voyages située à Oran. Plus de deux générations d'expertise pour rendre vos voyages uniques et mémorables.</p>
              <div className="footer-socials">
                <a href="#" className="social-icon">IG</a>
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">In</a>
              </div>
            </div>

            <div className="footer-links">
              <h5>Liens Rapides</h5>
              <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#services">Nos Services</a></li>
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#avis">Avis Clients</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h5>Services</h5>
              <ul>
                <li><a href="#">Omra & Hajj</a></li>
                <li><a href="#">Billetterie</a></li>
                <li><a href="#">Réservation Hôtel</a></li>
                <li><a href="#">Voyages Organisés</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h5 style={{color: 'white', fontSize: '1.125rem', marginBottom: '1.5rem'}}>Contactez-nous</h5>
              
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <div>
                  <strong>Adresse</strong>
                  <p>Oran, Algérie</p>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <PhoneCall className="footer-contact-icon" />
                <div>
                  <strong>Téléphone</strong>
                  <p>0661 15 53 71</p>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <div>
                  <strong>Email</strong>
                  <p>contact@tlemsanitours.dz</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tlemsani Tours - Agence de Tourisme & Voyages. Tous droits réservés.</p>
            <p>Conçu par Votre Partenaire Légal</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
