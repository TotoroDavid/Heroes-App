import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext)

  //login
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath' || '/')//the last page
    login('TotoroDavid')
    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>

    </div>
  )
}
