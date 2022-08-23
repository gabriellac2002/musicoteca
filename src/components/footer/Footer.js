import './footer.css';
import LogoFooter from '../../img/Logo2.svg';
import wpp from '../../img/5.svg';
import face from '../../img/6.svg';
import insta from '../../img/7.svg';

function Footer() {

    return (
       <div className='container'>
           <img src={LogoFooter} alt='logo' width={200} height={200}/>

           <div className='fraseEfeito'>
                <p> Porque a vida é mais bonita com música </p>
           </div>

           <div className='contatos'>
                <div className='icones'>
                    <img src={wpp} alt='logo' width={25} height={25}/>
                    (32)984579233 
                </div>
                <div className='icones'>
                    <img src={face} alt='logo' width={25} height={25}/>
                    @musicoteca
                </div>
                <div className='icones'>
                    <img src={insta} alt='logo' width={25} height={25}/>
                    @musicoteca
                </div>
           </div>
       </div>
    );
}

export default Footer;