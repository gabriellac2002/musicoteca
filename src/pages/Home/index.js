import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import imgTocando from '../../img/tocando.png';
import './Home.css';
import imgBateria from '../../img/bateria.svg';
import imgMic from '../../img/mic.svg';
import imgSom from '../../img/som.svg';
import imgFone from '../../img/fone.svg';
import Input from '../../components/inputs/Input';
import Button from '../../components/button/Button';

export const Home = () => {
  return (
    <div className="App">
      <Navbar></Navbar> 
        <div className='Home'>
          <div className='containerImgTexto'>
            <img src={imgTocando} alt="" width={450} heigth={450}/>
            <div className='containerTextos'>
              <div className='titulo'>
                <p>Libere os seus sentimentos atravez da música!</p>
              </div>
              <div className='descricao'>
                <p> Vendemos músicas autorais, damos suporte técnico em shows e ajudamos novos artistas
                    a se desenvolverem melhor na sua carreira musical. Fazemos isso desde 2015 quando um
                    grupo de alunos do curso de música da Universidade federal de Juiz de Fora, fundaram
                    a Musicoteca a fim de espalhar a alegria pelo mundo atravez da música.
                </p>
              </div>
            </div>
          </div>

          <div className='containerServicos'>
            <div className='tituloServ'>
              <p>NOSSOS SERVIÇOS</p>
            </div>

            <div className='container_servs'>
              <div className='servico'>
                <img src={imgFone} alt="" width={150} heigth={150}/>
                <div className='titleServ'>
                  <p>Vendemos musicas autorais</p>
                </div>
              </div> 

              <div className='servico'>
                <img src={imgMic} alt="" width={150} heigth={150}/>
                <div className='titleServ'>
                  <p>Tocamos em eventos</p>
                </div>
              </div> 

              <div className='servico'>
                <img src={imgSom} alt="" width={150} heigth={150}/>
                <div className='titleServ'>
                  <p>Suporte tecnico em shows</p>
                </div>
              </div> 

              <div className='servico'>
                <img src={imgBateria} alt="" width={150} heigth={150}/>
                <div className='titleServ'>
                  <p>Aulas de música</p>
                </div>
              </div> 
            </div>
          </div>

          <div className='contato'>
            <p>Contate-nos</p>
            <div className='inputs'>
              Nome: <Input/>
            </div>
            <div className='inputs'>
              Email: <Input/>
            </div>
            <div className='inputs'>
              Assunto: <Input/>
            </div>
            <Button/>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;
