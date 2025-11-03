/*
Mehndi Shop Demo (React + Bootstrap)

Files included below are intended as a single-file demo (App.jsx) you can paste into a fresh Create React App project.

How to run locally (quick):
1. npx create-react-app mehndi-demo
2. cd mehndi-demo
3. Replace src/App.js with the contents of this file (rename to App.js if needed).
4. Add src/index.css and paste the CSS block from below into that file (or append to App.css).
5. Install bootstrap: npm install bootstrap
6. In src/index.js add: import 'bootstrap/dist/css/bootstrap.min.css'; import './index.css';
7. npm start

What this demo includes:
- Single-page scrolling layout (Home, About, Services, Gallery, Contact)
- React + Bootstrap layout and components
- Smooth scroll for nav links
- Lightbox-style image modal for gallery
- Contact/Send Query form (demo: shows toast; not connected to backend)
- Simple styling matching Mehndi aesthetic (maroon/gold/cream)

Notes:
- Images are sample Unsplash URLs. Replace with your client's images in the gallery and hero.
- To add booking, we can integrate a date/time picker and backend later.

----- START OF App.js -----
*/

import React, { useState } from 'react';

const sampleGallery = [
  'https://imgs.search.brave.com/eXCRcorHSgPoTENK2DoexvhfM0e2D8Hem8hQP3Nx-RQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWVo/bmRpZGVzaWduLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yb3lh/bC1mcm9udC1tZWhu/ZGktZGVzaWduLmpw/Zw',
  'https://imgs.search.brave.com/eXCRcorHSgPoTENK2DoexvhfM0e2D8Hem8hQP3Nx-RQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWVo/bmRpZGVzaWduLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yb3lh/bC1mcm9udC1tZWhu/ZGktZGVzaWduLmpw/Zw',
  'https://imgs.search.brave.com/eXCRcorHSgPoTENK2DoexvhfM0e2D8Hem8hQP3Nx-RQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWVo/bmRpZGVzaWduLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yb3lh/bC1mcm9udC1tZWhu/ZGktZGVzaWduLmpw/Zw',
  'https://imgs.search.brave.com/eXCRcorHSgPoTENK2DoexvhfM0e2D8Hem8hQP3Nx-RQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWVo/bmRpZGVzaWduLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yb3lh/bC1mcm9udC1tZWhu/ZGktZGVzaWduLmpw/Zw',
  'https://imgs.search.brave.com/eXCRcorHSgPoTENK2DoexvhfM0e2D8Hem8hQP3Nx-RQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWVo/bmRpZGVzaWduLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yb3lh/bC1mcm9udC1tZWhu/ZGktZGVzaWduLmpw/Zw',
  'https://imgs.search.brave.com/eXCRcorHSgPoTENK2DoexvhfM0e2D8Hem8hQP3Nx-RQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWVo/bmRpZGVzaWduLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yb3lh/bC1mcm9udC1tZWhu/ZGktZGVzaWduLmpw/Zw'
];

export default function App() {
  const [activeImg, setActiveImg] = useState(null);
  const [toastMsg, setToastMsg] = useState('');

  function handleNavClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function openImage(url) {
    setActiveImg(url);
  }

  function closeModal() {
    setActiveImg(null);
  }

  function submitContact(e) {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();
    if (!name || !message) {
      setToastMsg('Please enter your name and message.');
      setTimeout(() => setToastMsg(''), 3000);
      return;
    }
    // Demo: show success toast. Replace this with actual API / email integration.
    setToastMsg('Thanks! Your query was sent (demo).');
    e.target.reset();
    setTimeout(() => setToastMsg(''), 3000);
  }

  return (
    <div className="font-sans" style={{background: '#FFF8E7', minHeight: '100vh'}}>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{background:'#6A1B1A'}}>
        <div className="container">
          <a className="navbar-brand text-white fw-bold" href="#home" onClick={(e)=>handleNavClick(e,'home')}>Ajay Mehndi</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-white" href="#about" onClick={(e)=>handleNavClick(e,'about')}>About</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#services" onClick={(e)=>handleNavClick(e,'services')}>Services</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#gallery" onClick={(e)=>handleNavClick(e,'gallery')}>Gallery</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#contact" onClick={(e)=>handleNavClick(e,'contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="py-5" style={{backgroundImage: `linear-gradient(rgba(106,27,26,0.45), rgba(106,27,26,0.45)), url('https://images.unsplash.com/photo-1549888834-0c58b45a7af4?auto=format&fit=crop&w=1400&q=60')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container text-center text-white py-5">
          <h1 style={{fontFamily:'Playfair Display, serif', fontSize: '3rem'}}>Beautiful Mehndi Artistry</h1>
          <p className="lead" style={{maxWidth:700, margin:'0 auto'}}>Handcrafted mehndi designs for weddings, festivals and special occasions. Traditional patterns, modern twists — crafted with love.</p>
          <div className="mt-4">
            <a className="btn btn-warning btn-lg me-2" href="#contact" onClick={(e)=>handleNavClick(e,'contact')}>Book Appointment</a>
            <a className="btn btn-outline-light btn-lg" href="#gallery" onClick={(e)=>handleNavClick(e,'gallery')}>View Gallery</a>
          </div>
        </div>
      </header>

      <main>
        {/* ABOUT */}
        <section id="about" className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 style={{fontFamily:'Playfair Display, serif', color:'#6A1B1A'}}>About Ajay Mehndi</h2>
                <p>Ajay Mehndi offers artisanal henna designs combining traditional motifs with contemporary style. With 10+ years of experience and hundreds of satisfied customers, we make every celebration memorable.</p>
                <ul>
                  <li>Custom bridal packages</li>
                  <li>Party & event mehndi</li>
                  <li>Natural henna, hygienic tools</li>
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://imgs.search.brave.com/eXCRcorHSgPoTENK2DoexvhfM0e2D8Hem8hQP3Nx-RQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWVo/bmRpZGVzaWduLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9yb3lh/bC1mcm9udC1tZWhu/ZGktZGVzaWduLmpw/Zw" alt="mehndi" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-5" style={{background:'#fff'}}>
          <div className="container">
            <h3 className="text-center mb-4" style={{fontFamily:'Playfair Display, serif', color:'#6A1B1A'}}>Our Services</h3>
            <div className="row g-4">
              <ServiceCard title="Bridal Mehndi" text="Intricate full-hand bridal designs with trial sessions and bridal packages." />
              <ServiceCard title="Party Mehndi" text="Quick, stylish designs for friends and family parties." />
              <ServiceCard title="Kids Mehndi" text="Simple, safe, and adorable designs for children." />
              <ServiceCard title="Custom Events" text="Corporate events, festivals, and workshops on request." />
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-5">
          <div className="container">
            <h3 className="text-center mb-4" style={{fontFamily:'Playfair Display, serif', color:'#6A1B1A'}}>Gallery</h3>
            <div className="row g-3">
              {sampleGallery.map((url, i) => (
                <div className="col-6 col-md-4" key={i}>
                  <div className="gallery-card position-relative" style={{cursor:'pointer'}} onClick={()=>openImage(url)}>
                    <img src={url} alt={`mehndi-${i}`} className="img-fluid rounded shadow-sm" />
                    <div className="overlay">
                      <div className="overlay-text">View</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-5" style={{background:'#6A1B1A', color:'white'}}>
          <div className="container">
            <h3 className="text-center mb-4" style={{fontFamily:'Playfair Display, serif'}}>Contact & Send Query</h3>
            <div className="row">
              <div className="col-md-6">
                <p>Reach us for bookings, pricing, and custom requests.</p>
                <ul>
                  <li>Phone: +91-XXXXXXXXXX</li>
                  <li>Email: info@ajaymehandi.com</li>
                  <li>Address: Kundli, Sonipat, Haryana</li>
                </ul>
                <div className="mt-3">
                  <a className="btn btn-warning me-2" href="#" onClick={(e)=>{e.preventDefault(); setToastMsg('WhatsApp chat demo (replace with link)'); setTimeout(()=>setToastMsg(''),3000)}}>WhatsApp</a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card p-3 shadow" style={{background:'#FFF8E7'}}>
                  <form onSubmit={submitContact}>
                    <div className="mb-2">
                      <input name="name" className="form-control" placeholder="Your name" />
                    </div>
                    <div className="mb-2">
                      <input name="phone" className="form-control" placeholder="Phone (optional)" />
                    </div>
                    <div className="mb-2">
                      <textarea name="message" className="form-control" rows={4} placeholder="Your message / query" />
                    </div>
                    <div className="text-end">
                      <button className="btn btn-primary">Send Query</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-3 text-center" style={{background:'#2b0e0e', color:'#fff'}}>
        <div className="container">© {new Date().getFullYear()} Ajay Mehndi — Crafted with ❤️</div>
      </footer>

      {/* IMAGE MODAL */}
      {activeImg && (
        <div className="modal-backdrop-custom" onClick={closeModal}>
          <div className="modal-img" onClick={(e)=>e.stopPropagation()}>
            <img src={activeImg} alt="enlarged" className="img-fluid rounded" />
            <button className="btn btn-sm btn-outline-light mt-2" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toastMsg && (
        <div className="toast-custom p-3 shadow rounded">{toastMsg}</div>
      )}

      {/* Inline styles & fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap');
        .font-sans { font-family: 'Poppins', sans-serif; }
        h1,h2,h3 { font-family: 'Playfair Display', serif; }
        .gallery-card { overflow: hidden; position: relative; }
        .gallery-card img { transition: transform .35s ease; }
        .gallery-card:hover img { transform: scale(1.05); }
        .gallery-card .overlay { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; opacity:0; background: rgba(0,0,0,0.25); transition:opacity .25s ease; }
        .gallery-card:hover .overlay { opacity:1; }
        .overlay-text { color: white; font-weight:600; padding: .5rem 1rem; border:1px solid rgba(255,255,255,0.6); border-radius:20px; }
        .modal-backdrop-custom { position:fixed; inset:0; background: rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:1050; }
        .modal-img { max-width:90%; max-height:80%; text-align:center; }
        .toast-custom { position:fixed; right:20px; bottom:20px; background: #fff3cd; color:#856404; }
      `}</style>
    </div>
  );
}

function ServiceCard({title, text}){
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 border-0 shadow-sm" style={{borderRadius:12}}>
        <div className="card-body">
          <h5 style={{color:'#6A1B1A'}}>{title}</h5>
          <p className="small text-muted">{text}</p>
        </div>
      </div>
    </div>
  )
}

/*
----- END OF App.js -----

Replace images and text as needed. If you'd like, I can:
- Convert this to a multi-page React Router site
- Hook up the contact form to Formspree or a simple serverless function
- Add a date/time booking widget
- Deploy to Netlify / Vercel and share a live link

Tell me which of the above you want next and provide your images/text/logo and preferred primary color.
*/
