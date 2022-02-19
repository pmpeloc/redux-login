import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { userLogin } from './redux/actions/userActions';

const App = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(values.email, values.password));
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Email'
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <input
          type='password'
          placeholder='Password'
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
};

export default App;
