import React, { useState } from 'react';

function RegistroCliente() {
  // Definimos un estado local para rastrear la información del cliente
  const [cliente, setCliente] = useState({
    id: '',  // Campo para el ID (que podría ser generado automáticamente por la base de datos)
    primerNombre: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    telefono: '',
  });

  // La función handleChange se llama cuando se produce un cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizamos el estado del cliente con la nueva información
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  // La función handleSubmit se llama cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos del cliente a tu servidor
    // o realizar validaciones antes de enviar los datos
    console.log('Cliente registrado:', cliente);
    // Luego de enviar los datos, podrías restablecer el estado o redirigir a otra página
  };

  return (
    <div>
      <h1>Registro de Cliente</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo de primer nombre */}
        <label>
          Primer Nombre:
          <input
            type="text"
            name="primerNombre"
            value={cliente.primerNombre}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Campo de segundo nombre */}
        <label>
          Segundo Nombre:
          <input
            type="text"
            name="segundoNombre"
            value={cliente.segundoNombre}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Campo de apellido paterno */}
        <label>
          Apellido Paterno:
          <input
            type="text"
            name="apellidoPaterno"
            value={cliente.apellidoPaterno}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Campo de apellido materno */}
        <label>
          Apellido Materno:
          <input
            type="text"
            name="apellidoMaterno"
            value={cliente.apellidoMaterno}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Campo de correo */}
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={cliente.correo}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Campo de teléfono */}
        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={cliente.telefono}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Botón de registro */}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroCliente;
