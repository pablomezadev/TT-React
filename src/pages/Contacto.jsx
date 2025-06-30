import React from 'react';
import NavBarML from '../components/estaticos/NavBarML';
import Footer from '../components/estaticos/Footer';
import Formulario from '../components/Formulario';
import ScrollFadeIn from '../components/utils/ScrollFadeIn';
// import '../pages/styles/pages.css';

import './styles/Contacto.css';

function Contacto() {
  return (
    <>
      <NavBarML isBusador={false}/>
      {/* <ScrollFadeIn> */}
      <main className="container py-4">
        {/* <ScrollFadeIn>
          <section className="cabecera-section text-center mb-5">
            <h1 className="display-5 fw-bold">Contacto</h1>
            <p className="lead">
              ¿Tenés preguntas, sugerencias o querés conocer más sobre nosotros?
              <br />
              Escribinos a nuestro correo o completá el formulario a continuación.
            </p>
            <p>
              <strong>Email:</strong> contacto@techhouse.com
            </p>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <Formulario />
            </div>
          </section>
          
        </ScrollFadeIn> */}


        <section className="contacto-seccion">
          <div className="contacto-wrapper">
            <ScrollFadeIn>
              {/* <h2 className="contacto-titulo">📞 Contacto</h2> */}
              <h2 className="contacto-titulo">📞 ¿Con qué podemos ayudarte?</h2>
              <p className="contacto-descripcion">
                ¿Tenés preguntas, sugerencias o querés conocer más sobre nosotros?<br />
                Escribinos a nuestro correo o completá el formulario a continuación.
              </p>
              <p className="contacto-email">
                <strong>Email:</strong> <a href="mailto:contacto@techhouse.com">contacto@techhouse.com</a>
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn>
              <Formulario />
            </ScrollFadeIn>
          </div>
        </section>
      </main>
      {/* </ScrollFadeIn> */}
      <Footer />
    </>
  );
}

export default Contacto;
