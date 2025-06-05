import React, { useState } from 'react';
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

  const manejarCambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Validación básica
    const camposVacios = Object.values(form).some((valor) => valor.trim() === '');
    if (camposVacios) {
      setMensajeEstado('⚠️ Por favor completa todos los campos.');
      return;
    }

    setMensajeEstado(`✅ Gracias, ${form.nombre}. Tu mensaje fue enviado con éxito.`);

    setForm({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: '',
    });

    // Ocultar mensaje después de unos segundos
    setTimeout(() => {
      setMensajeEstado('');
    }, 4000);
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h3 className="formulario-titulo">Formulario de Contacto</h3>

      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={manejarCambio}
        placeholder="Nombre"
        className="formulario-input"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={manejarCambio}
        placeholder="Correo electrónico"
        className="formulario-input"
      />

      <input
        type="tel"
        name="telefono"
        value={form.telefono}
        onChange={manejarCambio}
        placeholder="Teléfono"
        className="formulario-input"
      />

      <input
        type="text"
        name="asunto"
        value={form.asunto}
        onChange={manejarCambio}
        placeholder="Asunto"
        className="formulario-input"
      />

      <textarea
        name="mensaje"
        value={form.mensaje}
        onChange={manejarCambio}
        placeholder="Escribe tu mensaje..."
        className="formulario-textarea"
        rows="4"
      />

      <button type="submit" className="formulario-boton">
        Enviar
      </button>

      {mensajeEstado && (
        <div className="formulario-mensaje">
          {mensajeEstado}
        </div>
      )}
    </form>
  );
};

export default Formulario;