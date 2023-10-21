import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FirebaseContext } from '../firebase';

const exerciseBackgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/img/Gym.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
};

function RegisterExercise() {
  const { firebase } = useContext(FirebaseContext);

  const formik = useFormik({
    initialValues: {
      ejercicio: '',
      cedula: '',
      tiempo: '',
      descanso: '',
      horaInicio: '',
      horaFin: '',
      dia: '',
    },
    validationSchema: Yup.object({
      ejercicio: Yup.string()
        .max(50, 'El ejercicio debe tener máximo 50 caracteres')
        .required('El ejercicio es obligatorio'),
      cedula: Yup.number()
        .min(10, 'La cédula tiene un máximo de 10 caracteres')
        .required('La cédula es obligatoria'),
      tiempo: Yup.number()
        .required('El tiempo es obligatorio'),
      descanso: Yup.number()
        .required('El tiempo de descanso es obligatorio'),
      horaInicio: Yup.string()
        .required('La hora de inicio es obligatoria'),
      horaFin: Yup.string()
        .required('La hora de fin es obligatoria'),
      dia: Yup.string()
        .required('El día es obligatorio'),
    }),
    onSubmit: (ejercicio) => {
      try {
        firebase.db.collection('ejercicios').add(ejercicio);
      } catch (e) {
        console.error(e);
      }
    },
  });

  return (
    <div style={exerciseBackgroundStyle} className="h-screen flex justify-center items-center">
      <div className="md:w-1/2 xl:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">Registro de Ejercicio</h1>
        <form onSubmit={formik.handleSubmit} className="text-center">
          <div className="mb-4">
            <label className="block text-gray-600">Ejercicio:</label>
            <input
              name="ejercicio"
              type="text"
              className="border p-2 w-full"
              value={formik.values.ejercicio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Cédula del Usuario:</label>
            <input
              name="cedula"
              type="text"
              className="border p-2 w-full"
              value={formik.values.cedula}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Tiempo (minutos):</label>
            <input
              name="tiempo"
              type="number"
              className="border p-2 w-full"
              value={formik.values.tiempo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Descanso (minutos):</label>
            <input
              name="descanso"
              type="number"
              className="border p-2 w-full"
              value={formik.values.descanso}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Hora de Inicio:</label>
            <input
              name="horaInicio"
              type="text"
              className="border p-2 w-full"
              value={formik.values.horaInicio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Hora de Fin:</label>
            <input
              name="horaFin"
              type="text"
              className="border p-2 w-full"
              value={formik.values.horaFin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Día:</label>
            <input
              name="dia"
              type="text"
              className="border p-2 w-full"
              value={formik.values.dia}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.ejercicio && formik.errors.ejercicio ? (
            <div>
              <p>Ha ocurrido un error</p>
              <p>{formik.errors.ejercicio}</p>
            </div>
          ) : null}
          {formik.touched.cedula && formik.errors.cedula ? (
            <div>
              <p>Ha ocurrido un error</p>
              <p>{formik.errors.cedula}</p>
            </div>
          ) : null}
          {formik.touched.tiempo && formik.errors.tiempo ? (
            <div>
              <p>Ha ocurrido un error</p>
              <p>{formik.errors.tiempo}</p>
            </div>
          ) : null}
          {formik.touched.descanso && formik.errors.descanso ? (
            <div>
              <p>Ha ocurrido un error</p>
              <p>{formik.errors.descanso}</p>
            </div>
          ) : null}
          {formik.touched.horaInicio && formik.errors.horaInicio ? (
            <div>
              <p>Ha ocurrido un error</p>
              <p>{formik.errors.horaInicio}</p>
            </div>
          ) : null}
          {formik.touched.horaFin && formik.errors.horaFin ? (
            <div>
              <p>Ha ocurrido un error</p>
              <p>{formik.errors.horaFin}</p>
            </div>
          ) : null}
          {formik.touched.dia && formik.errors.dia ? (
            <div>
              <p>Ha ocurrido un error</p>
              <p>{formik.errors.dia}</p>
            </div>
          ) : null}
          <button
            type="submit"
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Registrar Ejercicio
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterExercise;
