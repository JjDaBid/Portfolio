import { useState, useEffect } from 'react';
import './Login.css';
import appFirebase from '../../credentials';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(appFirebase);

// eslint-disable-next-line react/prop-types
const Login = ({ userMail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const location = useLocation();
  const history = useNavigate();

  const isRegister = location.pathname === '/register';
  const formTitle = isRegister ? 'Registrar Nuevo Usuario' : 'Iniciar Sesión';
  const buttonText = isRegister ? 'Registrar' : 'Iniciar Sesión';

  const handleAuthentication = async (e) => {
    e.preventDefault();
  
    if (isRegister && password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
        confirmButtonColor: '#FE001B',
      });
      return;
    }
  
    try {
      if (isRegister) {
        // Registra el nuevo usuario sin autenticarlo
        await createUserWithEmailAndPassword(auth, email, password);
        // Muestra un SweetAlert con el nuevo usuario creado
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: `El usuario ${email} se ha registrado exitosamente.`,
          confirmButtonColor: '#28a745',
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
  
      // Redirige al usuario a la página de inicio
      history('/');
  
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Swal.fire({
          icon: 'error',
          title: 'Usuario no encontrado',
          text: 'El usuario ingresado no existe. Por favor, regístrese si es nuevo.',
          confirmButtonColor: '#FE001B',
        });
      } else if (error.code === 'auth/wrong-password') {
        Swal.fire({
          icon: 'error',
          title: 'Contraseña incorrecta',
          text: 'La contraseña ingresada no es correcta. Verifique e inténtelo de nuevo.',
          confirmButtonColor: '#FE001B',
        });
      } else if (error.code === 'auth/email-already-in-use') {
        Swal.fire({
          icon: 'error',
          title: 'Usuario existente',
          text: 'El correo electrónico ya se encuentra registrado. Por favor, inicie sesión o utilice otro correo electrónico.',
          confirmButtonColor: '#FE001B',
        });
      } else {
        console.error('Error de autenticación:', error);
      }
    }
  };

  useEffect(() => {
    // Redirige al usuario si ya ha iniciado sesión
    if (userMail) {
      history('/');
    }
  }, [userMail, history]);

  return (
    <div className='login-main'>
      <div className='login-container'>
        <i className='fas fa-circle-user my-5' style={{ fontSize: '7rem' }}></i>
        <h2 className='text-[18px] font-bold mb-2'>{formTitle}</h2>
        <form onSubmit={handleAuthentication}>
          <div className='form-group w-100 text-[18px]'>
            <label htmlFor='email'>Correo Electrónico:</label>
            <input
              className='w-100'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group w-100 text-[18px]'>
            <label htmlFor='password'>Contraseña:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isRegister && (
            <div className='form-group w-100 text-[18px]'>
              <label htmlFor='confirmPassword' >Confirmar Contraseña:</label>
              <input 
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <div className='w-100'>
            <button id='main-button' type='submit'>
              {buttonText}
            </button>
          </div>
        </form>
        <div className='flex justify-content-center gap-10 w-100'>
          {userMail === 'auditoriaycalidadcic@gmail.com' && (
            <h4 className='mx-4'>
              {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
              <button
                className='secondary-button'
                id='secondary-button'
                onClick={() => {
                  if (isRegister) {
                    history('/login');
                  } else {
                    history('/register');
                  }
                }}
              >
                {isRegister ? 'Iniciar Sesión' : 'Registrarse'}
              </button>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export { Login };