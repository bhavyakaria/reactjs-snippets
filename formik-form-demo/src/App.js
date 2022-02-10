import './App.css';
import { useFormik } from 'formik';

function App() {

  const formik = useFormik({
    initialValues: {
      email: "",
      mobileNumbers: ["123", "345"]
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
