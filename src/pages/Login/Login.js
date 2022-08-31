import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Input from '../../components/inputs/Input';
import './login.css';
import Button from '../../components/button/Button';

export const Login = () => {
  return (
    <div className="container_login">
      <Navbar></Navbar> 
      <div className="form_login">
        <form class="register-form">
          <div className='inputs'>
            Email: <Input/>
          </div>
          <div className='inputs'>
            Senha: <Input/>
          </div>
          <Button></Button>
        </form>
      </div>
      <Footer/>
    </div>
  );
  }
  
export default Login;
  