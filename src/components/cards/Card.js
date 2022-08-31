import './card.css';

export const Card = (props) => {
    return (
        <div className="card">
            <div className='container_info'>
                <div className="label">Nome:</div> 
                <div className="resp">{props.name}</div> 
            </div>
            <div className='container_info'>
                <div className="label">Email:</div> 
                <div className="resp">{props.email}</div> 
            </div>
            <div className='container_info'>
                <div className="label">Departamento:</div> 
                <div className="resp">{props.departamentos.map((dep)=><p>{dep}</p>)}</div> 
            </div>
            <div className='container_info'>
                <div className="label">Cargo:</div> 
                <div className="resp">{props.cargo}</div> 
            </div>
            <div className='container_info'>
                <div className="label">Aniversário:</div> 
                <div className="resp">{props.aniversario}</div> 
            </div>
              
        </div>
    );
  }
  
export default Card;