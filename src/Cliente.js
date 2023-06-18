import { useState } from 'react';
import { useAppContext } from './AppProvider';
import { useAppContextUi } from './AppProviderUi';

const tipoId = ['Escoger Tipo de ID...', 'Cédula', 'Ruc', 'Pasaporte']

export default function Cliente () {
  //seccion declaraciones properties
  const { systemcar, dispatch } = useAppContext();
  const { dispatch: dispatchUi } = useAppContextUi();

  const [nombres, setNombres] = useState(systemcar.cliente.nombres);
  const [email, setEmail] = useState(systemcar.cliente.email);
  const [celular, setCelular] = useState(systemcar.cliente.celular);
  const [identificacionFiscal, setIdentificacionFiscal] = useState(systemcar.cliente.identificacionFiscal);
  const [tipoid, setTipoId] = useState(systemcar.cliente.tipoid);

  console.log(systemcar.cliente);


  //methods
  const handleChange = (e) => { 
    setTipoId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipoid === 'Escoger Tipo de ID...' || tipoid === '') {
      alert('Por favor, seleccione el Tipo Identicación');
      return;
    }

    const cliente = {
      nombres, 
      email, 
      celular, 
      identificacionFiscal, 
      tipoid
    };

    //console.log(cliente); 
    dispatch({
        type: 'ADD_CLIENTE',
        value: cliente  
    });
    
    dispatchUi({
      type: 'setForm',
      value: 2  
    });

  }
 
    //seccion vista
    return (
        <div>
          <form className='form-react' onSubmit={handleSubmit} id="FormCliente">    
              <h2>Datos del Cliente</h2>
              <div className='form-control'>
                  <label htmlFor="nombre">Nombres</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    placeholder="Ingrese nombres del cliente..."
                    value={nombres}
                    onChange={(e)=> setNombres(e.target.value)}
                    required
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Ingrese email del cliente (Ej: mail@hotmail.com)..."
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor="celular">Celular</label>
                  <input 
                    type="text" 
                    id="celular" 
                    placeholder="Ingrese número de celular del cliente..."
                    value={celular}
                    onChange={(e)=> setCelular(e.target.value)}
                    required
                  />
              </div>
              <div className='form-control'>
                  <label htmlFor="identificacion">Identificación Fiscal</label>
                  <input 
                    type="text" 
                    id="identificacion" 
                    placeholder="Ingrese identificación fiscal del cliente..."
                    value={identificacionFiscal}
                    onChange={(e)=> setIdentificacionFiscal(e.target.value)}
                    required
                  />
              </div>

              <div className='form-control'>
                <label htmlFor="tipo_id">Tipo de Identificación</label>
                <div className='caja'>
                  <select id='tipo_id' onChange={handleChange} value={tipoid}>
                    {tipoId.map(item => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='botones'>
                    <button type="submit" name='vehiculo'>Siguiente{'==>>'}</button>
              </div>  
          </form>     
        </div>
        );
  }