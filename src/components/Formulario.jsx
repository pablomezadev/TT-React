// import React, { useState } from 'react';
// import './styles/Formulario.css';

// const Formulario = () => {
//   const [form, setForm] = useState({
//     nombre: '',
//     email: '',
//     telefono: '',
//     asunto: '',
//     mensaje: '',
//   });

//   const [mensajeEstado, setMensajeEstado] = useState('');

//   const manejarCambio = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const manejarEnvio = (e) => {
//     e.preventDefault();

//     // Validación básica
//     const camposVacios = Object.values(form).some((valor) => valor.trim() === '');
//     if (camposVacios) {
//       setMensajeEstado('⚠️ Por favor completa todos los campos.');
//       return;
//     }

//     setMensajeEstado(`✅ Gracias, ${form.nombre}. Tu mensaje fue enviado con éxito.`);

//     setForm({
//       nombre: '',
//       email: '',
//       telefono: '',
//       asunto: '',
//       mensaje: '',
//     });

//     // Ocultar mensaje después de unos segundos
//     setTimeout(() => {
//       setMensajeEstado('');
//     }, 4000);
//   };

//   return (
//     <form className="formulario" onSubmit={manejarEnvio}>
//       <h3 className="formulario-titulo">Formulario de Contacto</h3>

//       <input
//         type="text"
//         name="nombre"
//         value={form.nombre}
//         onChange={manejarCambio}
//         placeholder="Nombre"
//         className="formulario-input"
//       />

//       <input
//         type="email"
//         name="email"
//         value={form.email}
//         onChange={manejarCambio}
//         placeholder="Correo electrónico"
//         className="formulario-input"
//       />

//       <input
//         type="tel"
//         name="telefono"
//         value={form.telefono}
//         onChange={manejarCambio}
//         placeholder="Teléfono"
//         className="formulario-input"
//       />

//       <input
//         type="text"
//         name="asunto"
//         value={form.asunto}
//         onChange={manejarCambio}
//         placeholder="Asunto"
//         className="formulario-input"
//       />

//       <textarea
//         name="mensaje"
//         value={form.mensaje}
//         onChange={manejarCambio}
//         placeholder="Escribe tu mensaje..."
//         className="formulario-textarea"
//         rows="4"
//       />

//       <button type="submit" className="formulario-boton">
//         Enviar
//       </button>

//       {mensajeEstado && (
//         <div className="formulario-mensaje">
//           {mensajeEstado}
//         </div>
//       )}
//     </form>
//   );
// };

// export default Formulario;


// comienzo :  Formulario 2
// import React, { useState } from 'react';
// import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
// import './styles/Formulario2.css';

// const Formulario = () => {
//   const [form, setForm] = useState({
//     nombre: '',
//     email: '',
//     telefono: '',
//     asunto: '',
//     mensaje: '',
//   });

//   const [mensajeEstado, setMensajeEstado] = useState('');
//   const [esError, setEsError] = useState(false);

//   const manejarCambio = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const manejarEnvio = (e) => {
//     e.preventDefault();

//     const camposVacios = Object.values(form).some((valor) => valor.trim() === '');
//     if (camposVacios) {
//       setMensajeEstado('Por favor completa todos los campos.');
//       setEsError(true);
//       return;
//     }

//     setMensajeEstado(`Gracias, ${form.nombre}. Tu mensaje fue enviado con éxito.`);
//     setEsError(false);

//     setForm({
//       nombre: '',
//       email: '',
//       telefono: '',
//       asunto: '',
//       mensaje: '',
//     });

//     setTimeout(() => {
//       setMensajeEstado('');
//     }, 4000);
//   };

//   return (
//     <form className="formulario" onSubmit={manejarEnvio}>
//       <h3 className="formulario-titulo">📬 Contactanos</h3>

//       <div className="formulario-grupo">
//         <input
//           type="text"
//           name="nombre"
//           value={form.nombre}
//           onChange={manejarCambio}
//           placeholder="Nombre completo"
//           className="formulario-input"
//         />

//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={manejarCambio}
//           placeholder="Correo electrónico"
//           className="formulario-input"
//         />
//       </div>

//       <div className="formulario-grupo">
//         <input
//           type="tel"
//           name="telefono"
//           value={form.telefono}
//           onChange={manejarCambio}
//           placeholder="Teléfono"
//           className="formulario-input"
//         />

//         <input
//           type="text"
//           name="asunto"
//           value={form.asunto}
//           onChange={manejarCambio}
//           placeholder="Asunto"
//           className="formulario-input"
//         />
//       </div>

//       <textarea
//         name="mensaje"
//         value={form.mensaje}
//         onChange={manejarCambio}
//         placeholder="Escribí tu mensaje..."
//         className="formulario-textarea"
//         rows="4"
//       />

//       <button type="submit" className="formulario-boton">
//         Enviar mensaje
//       </button>

//       {mensajeEstado && (
//         <div className={`formulario-mensaje ${esError ? 'error' : 'exito'}`}>
//           {esError ? <FaExclamationTriangle /> : <FaCheckCircle />}
//           <span>{mensajeEstado}</span>
//         </div>
//       )}
//     </form>
//   );
// };

// export default Formulario;



// Comienzo formulario 3:
import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaEnvelopeOpenText } from 'react-icons/fa';
import './styles/Formulario.css';

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const [mensajeEstado, setMensajeEstado] = useState('');
  const [esError, setEsError] = useState(false);

  const manejarCambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const camposVacios = Object.values(form).some((valor) => valor.trim() === '');
    if (camposVacios) {
      setMensajeEstado('Por favor completá todos los campos.');
      setEsError(true);
      return;
    }

    setMensajeEstado(`Gracias, ${form.nombre}. Tu mensaje fue enviado con éxito.`);
    setEsError(false);

    setForm({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: '',
    });

    setTimeout(() => {
      setMensajeEstado('');
    }, 4000);
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <div className="formulario-header">
        <FaEnvelopeOpenText size={30} />
        <h3>Contactanos</h3>
      </div>

      <div className="formulario-grupo">
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={manejarCambio}
          placeholder="Nombre completo"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={manejarCambio}
          placeholder="Correo electrónico"
        />
      </div>

      <div className="formulario-grupo">
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={manejarCambio}
          placeholder="Teléfono"
        />
        <input
          type="text"
          name="asunto"
          value={form.asunto}
          onChange={manejarCambio}
          placeholder="Asunto"
        />
      </div>

      <textarea
        name="mensaje"
        value={form.mensaje}
        onChange={manejarCambio}
        placeholder="Escribí tu mensaje..."
        rows="4"
      />

      <button type="submit">Enviar mensaje</button>

      {mensajeEstado && (
        <div className={`mensaje-estado ${esError ? 'error' : 'exito'}`}>
          {esError ? <FaExclamationTriangle /> : <FaCheckCircle />}
          <span>{mensajeEstado}</span>
        </div>
      )}
    </form>
  );
};

export default Formulario;
