import { useState } from 'react';
import { useAppContext } from './AppProvider';
import { useAppContextUi } from './AppProviderUi';

export default function Servicio () {
  //seccion declaraciones properties
  const { systemcar, dispatch } = useAppContext();
  const { dispatch: dispatchUi } = useAppContextUi();    

  const [aceite, setAceite] = useState(systemcar.servicio.aceite);
  const [frenos, setFrenos] = useState(systemcar.servicio.frenos);
  const [balanceo, setBalanceo] = useState(systemcar.servicio.balanceo);
  const [diagnostico, setDiagnostico] = useState(systemcar.servicio.diagnostico);
  const [electrica, SetElectrica] = useState(systemcar.servicio.electrica);
  const [suspension, Setsuspension] = useState(systemcar.servicio.suspension);

  console.log(aceite);
  console.log(frenos);

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
   const servicio = { 
      aceite, 
      frenos, 
      balanceo, 
      diagnostico, 
      electrica,
      suspension
    };
    dispatch({
        type: 'ADD_SERVICIO',
        value: servicio
    });
    dispatchUi({
      type: 'setForm',
      value: 4 
    });   
  }

  const handleRegresar = () => {
    dispatchUi({
        type: 'setForm',
        value: 2,
    })
}

//seccion vista
return (
        <form className='form-react'>
          <h2>Tipo de Servicios</h2>

          <div className="form-control">
            <table>
              <tr>
                  <th>SELECCIONE EL TIPO DE SERVICIO A REALIZAR:</th>
              </tr>
              <tr>
                  <td>
                    <input
                      type="checkbox" 
                      name="aceite" 
                      id="aceite"
                      checked={aceite}
                      onClick={(e)=> setAceite(e.target.checked)}
                    />    
                    <label for="aceite">Cambio de aceite</label>              
                  </td>
              </tr> 
              <tr>
                  <td>
                    <input 
                      type="checkbox" 
                      name="frenos" 
                      id="frenos"
                      checked={frenos}
                      onClick={(e)=> setFrenos(e.target.checked)}
                    />
                    <label for="frenos">Cambio de frenos</label>                  
                  </td>
              </tr>                        
              <tr>
                  <td>
                    <input 
                      type="checkbox"
                      name="balanceo" 
                      id="balanceo"
                      checked={balanceo}
                      onClick={(e)=> setBalanceo(e.target.checked)}
                    />
                    <label for="balanceo">Alineación y balanceo</label>                    
                  </td>
              </tr>                        
              <tr>
                  <td>
                    <input 
                      type="checkbox"
                      name="diagnostico" 
                      id="diagnostico"
                      checked={diagnostico}
                      onClick={(e)=> setDiagnostico(e.target.checked)}
                    />
                    <label for="diagnostico">Diagnóstico general</label>                    
                  </td>
              </tr>                        
              <tr>
                  <td>
                    <input 
                      type="checkbox"
                      name="electrica" 
                      id="electrica"
                      checked={electrica}
                      onClick={(e)=> SetElectrica(e.target.checked)}
                      />
                    <label for="electrica">Revisión sistema eléctrica</label>                    
                  </td>
              </tr>                        
              <tr>
                  <td>
                    <input 
                      type="checkbox"
                      name="suspension" 
                      id="suspension"
                      checked={suspension}
                      onClick={(e)=> Setsuspension(e.target.checked)}
                    />
                    <label for="suspension">Revisión de la suspensión</label>                    
                  </td>
              </tr>                        
            </table>
          </div>

          <div className='botones'>
              <button type="submit" name='vehiculo' onClick={handleRegresar}> {'<<=='}Regresar </button>
              <button type="submit" name='orden' onClick={handleSubmit}> Generar orden{'==>>'} </button>
          </div>   
        </form>
    );
}