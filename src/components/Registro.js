import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FirebaseContext } from '../firebase';

const registrationBackgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/img/ComfortableBackground.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
};

const formStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};

const inputStyle = {
  backgroundColor: "#f5f5f5",
  border: "1px solid #ccc",
  color: "#333",
  padding: "10px",
  borderRadius: "5px",
  width: "100%",
  marginBottom: "10px",
};

const labelStyle = {
  color: "#333",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#2196F3", // Azul
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

function Register() {
  const { firebase } = useContext(FirebaseContext);

  const formik = useFormik({
    initialValues: {
      nombre: '',
      cedula: '',
      usuario: '',
      email: '',
      contraseña: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .max(20, 'El nombre debe tener máximo 20 caracteres')
        .required('El nombre es obligatorio'),
      cedula: Yup.number()
        .min(10, 'La cédula tiene un máximo de 10 caracteres')
        .required('La cédula es obligatoria'),
      usuario: Yup.string()
        .max(20, 'El usuario debe tener máximo 20 caracteres')
        .required('El usuario es obligatorio'),
      email: Yup.string()
        .max(30, 'El email debe tener máximo 30 caracteres')
        .required('El email es obligatorio'),
      contraseña: Yup.string()
        .max(20, 'La contraseña debe tener máximo 20 caracteres')
        .required('La contraseña es obligatoria'),
    }),
    onSubmit: (Registro, { resetForm }) => { 
      try {
        firebase.db.collection('usuario').add(Registro);
        resetForm(); 
      } catch (e) {
        console.error(e);
      }
    },
  });

  return (
    <div style={registrationBackgroundStyle} className="h-screen flex justify-center items-center">
      <div className="md:w-1/2 xl:w-1/2" style={formStyle}>
        <h1 className="text-2xl font-bold text-center">Registro</h1>
        <form onSubmit={formik.handleSubmit} className="text-center">
          <div>
            <label style={labelStyle}>Nombre Completo:</label>
            <input
              name="nombre"
              type="text"
              style={inputStyle}
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.nombre && formik.errors.nombre ? (
            <div>
              <p style={{ color: "red" }}>Ha ocurrido un error</p>
              <p>{formik.errors.nombre}</p>
            </div>
          ) : null}
          <div>
            <label style={labelStyle}>Cédula:</label>
            <input
              name="cedula"
              type="text"
              style={inputStyle}
              value={formik.values.cedula}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.cedula && formik.errors.cedula ? (
            <div>
              <p style={{ color: "red" }}>Ha ocurrido un error</p>
              <p>{formik.errors.cedula}</p>
            </div>
          ) : null}
          <div>
            <label style={labelStyle}>Nombre de Usuario:</label>
            <input
              name="usuario"
              type="text"
              style={inputStyle}
              value={formik.values.usuario}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.usuario && formik.errors.usuario ? (
            <div>
              <p style={{ color: "red" }}>Ha ocurrido un error</p>
              <p>{formik.errors.usuario}</p>
            </div>
          ) : null}
          <div>
            <label style={labelStyle}>Email:</label>
            <input
              name="email"
              type="email"
              style={inputStyle}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div>
              <p style={{ color: "red" }}>Ha ocurrido un error</p>
              <p>{formik.errors.email}</p>
            </div>
          ) : null}
          <div>
            <label style={labelStyle}>Contraseña:</label>
            <input
              name="contraseña"
              type="password"
              style={inputStyle}
              value={formik.values.contraseña}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.contraseña && formik.errors.contraseña ? (
            <div>
              <p style={{ color: "red" }}>Ha ocurrido un error</p>
              <p>{formik.errors.contraseña}</p>
            </div>
          ) : null}
          <button type="submit" style={buttonStyle}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
