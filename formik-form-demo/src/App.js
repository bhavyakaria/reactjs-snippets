import './App.css';
import { FieldArray, Form, Formik, useFormik } from 'formik';
import * as yup from "yup";

function App() {

  const validdationSchema = yup.object().shape({
    email: yup.string(),
    mobileNumbers: yup.array(yup.string())
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      mobileNumbers: ["123", "345"]
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const updateMobileNumbers = (e) => {
    formik.values.mobileNumbers.push("");
  }

  return (
    <div className="App">
      <Formik initialValues={formik.initialValues} validationSchema={validdationSchema} onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}></input>
          <button onClick={updateMobileNumbers}>Update Mobile Numbers</button>
          <div style={{ display: 'flex' }}>
            <FieldArray name="mobileNumbers">
              {() => (formik.values.mobileNumbers.map((number, index) => {
                return (
                  <><input type={"text"} /></>
                )
              }))}
            </FieldArray>
          </div>
          <button type="submit">Submit</button>
        </div>
      </Formik>
    </div>
  );
}

export default App;
