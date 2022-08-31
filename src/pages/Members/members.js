import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Card from '../../components/cards/Card';
import './membros.css';
import {useState, useEffect} from 'react';

export const Members = () => {
  const [membros, setMembros] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/members').then((res) => res.json().then(data => setMembros(data)))
  },[membros]);

  return (
    <div className="pag_members">
      <Navbar></Navbar> 
      <div className="container_membros">
          <p className='titulo_principal'>Membros da Musicoteca</p>
          <div className='container_cards'>
            {membros.map((membro) => <Card name = {membro.name}
            email = {membro.email}
            departamentos = {membro.departamentos}
            cargo = {membro.cargo}
            aniversario = {membro.aniversario} />)}
          </div>
      </div>
      <Footer/>
    </div>
  );
}
  
export default Members;
  