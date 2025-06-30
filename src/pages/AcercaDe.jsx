import React from 'react';
import NavBarML from '../components/estaticos/NavBarML';
import Footer from '../components/estaticos/Footer';
import ScrollFadeIn from '../components/utils/ScrollFadeIn'; // asegúrate de importar correctamente
import LogoIcon from '../components/icons/LogoIcon';

function AcercaDe() {
  return (
    <>
      <NavBarML isBusador={false} />
      <main className="container py-4">
        <ScrollFadeIn>
          <section className="mb-5 text-center">
            <h1 className="display-5 fw-bold"> <b>TT-React</b></h1>
            <p className="lead">
              Somos una tienda online especializada en tecnología y gadgets modernos.
            </p>
            <p>
              Desde 2025, trabajamos para ofrecerte los productos más innovadores del mercado con una experiencia de compra simple y rápida.
            </p>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section className="mb-5 row align-items-center">
            <div className="col-md-6">
              {/* <img
                src="https://img.freepik.com/vector-gratis/logotipo-compania-tecnologia-abstracta-gradiente_52683-9702.jpg?semt=ais_hybrid&w=740"
                alt="Tech store"
                className="img-fluid rounded shadow"
              /> */}
              <LogoIcon size={"250"}/>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h2>Nuestra Misión</h2>
              <p>
                En <b>TT-React</b> creemos que la tecnología debe estar al alcance de todos. Por eso ofrecemos atención personalizada, envíos rápidos y soporte postventa.
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <section className="text-center">
            <h2>¿Dónde estamos?</h2>
            <p>
              Atendemos 100% online desde Buenos Aires, Argentina. Próximamente abriremos nuestro primer showroom físico.
            </p>
            <p>
              Seguinos en redes para enterarte de las novedades y lanzamientos.
            </p>
          </section>
        </ScrollFadeIn>
      </main>
      <Footer />
    </>
  );
}

export default AcercaDe;
