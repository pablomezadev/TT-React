import React from 'react';
// import './styles/Carrousel.css'; 

function Carrousel() {
    return (
        <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade custom-carousel"
            // className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            
            // style={{ maxWidth: '100%', maxHeight:"20rem", aspectRatio: '0.5 / 0.5', overflow: 'hidden', backgroundColor: '#f9f9f9' }}

        >
            {/* Indicadores (puntos) */}
            {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}

            {/* Imágenes con texto superpuesto */}
            <div className="carousel-inner">
                
                
                <div className="carousel-item active"> 
                    <img src="https://http2.mlstatic.com/D_NQ_801313-MLA86746952493_062025-OO.webp" className="d-block w-100" alt="Manzana" />
                    <div className="carousel-caption d-none d-md-block">
                        <p>Descubrí lo último en tecnología.</p>
                    </div>
                </div>


                <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/D_NQ_628472-MLA86566475059_062025-OO.webp" className="d-block w-100" alt="Oferta 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <a href="/ofertas" className="btn btn-warning btn-sm">Aprovechar</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/D_NQ_919378-MLA86864273023_062025-OO.webp" className="d-block w-100" alt="Promo 3" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>

            {/* Botones de navegación */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
}

export default Carrousel;
