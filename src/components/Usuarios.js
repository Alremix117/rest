/*import React, { useState } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Usuario 1", email: "usuario1@example.com", rutina: null, clasesCanceladas: [] },
    { id: 2, nombre: "Usuario 2", email: "usuario2@example.com", rutina: null, clasesCanceladas: [] },
    { id: 3, nombre: "Usuario 3", email: "usuario3@example.com", rutina: null, clasesCanceladas: [] },
    // Agrega más usuarios si es necesario
  ]);

  const [rutinas, setRutinas] = useState([
    { id: 1, nombre: "Rutina 1", descripcion: "Esta es la rutina 1" },
    { id: 2, nombre: "Rutina 2", descripcion: "Esta es la rutina 2" },
    // Agrega más rutinas si es necesario
  ]);

  const [horaActual] = useState(new Date());

  const handleEliminarUsuario = (id) => {
    const nuevaListaUsuarios = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevaListaUsuarios);
  };

  const handleAsignarRutina = (usuarioId, rutinaId) => {
    const nuevosUsuarios = usuarios.map((usuario) => {
      if (usuario.id === usuarioId) {
        return { ...usuario, rutina: rutinaId };
      }
      return usuario;
    });
    setUsuarios(nuevosUsuarios);
  };

  const handleCancelarClase = (usuarioId) => {
    const nuevosUsuarios = usuarios.map((usuario) => {
      if (usuario.id === usuarioId) {
        if (diferenciaHoras(horaActual, usuario.horaClase) >= 2) {
          // Solo se pueden cancelar clases con 2 horas de anticipación
          usuario.clasesCanceladas.push(usuario.horaClase);
          return { ...usuario, horaClase: null };
        }
      }
      return usuario;
    });
    setUsuarios(nuevosUsuarios);
  };

  const handleBloquearUsuario = (usuarioId) => {
    const nuevosUsuarios = usuarios.map((usuario) => {
      if (usuario.id === usuarioId) {
        return { ...usuario, bloqueado: true };
      }
      return usuario;
    });
    setUsuarios(nuevosUsuarios);
  };

  // Función para calcular la diferencia de horas entre dos fechas
  const diferenciaHoras = (hora1, hora2) => {
    const diff = Math.abs(hora2 - hora1);
    return Math.floor(diff / 36e5); // 1 hora tiene 36e5 milisegundos
  };

  return (
    <div className="md:w-4/6 xl:w-4/5 bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Usuarios</h1>
      <ul className="space-y-2">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="flex items-center">
            <div className="flex-grow">
              <p className="text-gray-900 font-bold">{usuario.nombre}</p>
              <p className="text-gray-600">{usuario.email}</p>
              {usuario.bloqueado ? (
                <p className="text-red-600">Bloqueado</p>
              ) : (
                <>
                  {usuario.rutina ? (
                    <p className="text-green-600">Tiene una rutina asignada</p>
                  ) : (
                    <p className="text-gray-600">Sin rutina asignada</p>
                  )}
                  {usuario.horaClase ? (
                    <>
                      <p>Próxima Clase: {usuario.horaClase.toLocaleString()}</p>
                      <button
                        onClick={() => handleCancelarClase(usuario.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Cancelar Clase
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleBloquearUsuario(usuario.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Bloquear
                    </button>
                  )}
                  {usuario.rutina ? (
                    <button
                      onClick={() => handleCancelarRutina(usuario.id)}
                      className="bg-red-500 hover-bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Cancelar Rutina
                    </button>
                  ) : (
                    <>
                      <select
                        onChange={(e) => handleAsignarRutina(usuario.id, parseInt(e.target.value))}
                        className="border rounded py-1 px-2 ml-2"
                      >
                        <option value="">Seleccionar Rutina</option>
                        {rutinas.map((rutina) => (
                          <option key={rutina.id} value={rutina.id}>
                            {rutina.nombre}
                          </option>
                        ))}
                      </select>
                    </>
                  )}
                </>
              )}
            </div>
            <button
              onClick={() => handleEliminarUsuario(usuario.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;




*/