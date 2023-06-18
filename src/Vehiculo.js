import { useState } from 'react';
import { useAppContext } from './AppProvider';
import { useAppContextUi } from './AppProviderUi';

export default function Vehiculo () {
  //seccion declaraciones properties
  const { systemcar, dispatch } = useAppContext();
  const { dispatch: dispatchUi } = useAppContextUi();  

  const [marca, setMarca] = useState(systemcar.vehiculo.marca);
  const [modelo, setModelo] = useState(systemcar.vehiculo.modelo);
  const [placa, setPlaca] = useState(systemcar.vehiculo.placa);
  const [gasolina, setGasolina] = useState(systemcar.vehiculo.gasolina);
  const [defectos, SetDefectos] = useState(systemcar.vehiculo.defectos);

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    const vehiculo = { 
      marca, 
      modelo, 
      placa, 
      gasolina, 
      defectos
    };
    dispatch({
        type: 'ADD_VEHICULO',
        value: vehiculo
    });
    dispatchUi({
      type: 'setForm',
      value: 3 
    });    
  }

  const handleRegresar = () => {
    dispatchUi({
        type: 'setForm',
        value: 1,
    })
}


//seccion vista
return (
    <form className='form-react'>
        <h2>Datos del Vehiculo</h2>
        <div className='form-control'>
            <label htmlFor="marca">Marca</label>
            <input 
              type="text" 
              id="marca" 
              placeholder="Ingrese marca del vehículo..."
              value={marca}
              onChange={(e)=> setMarca(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label htmlFor="modelo">Modelo</label>
            <input 
              type="text" 
              id="modelo" 
              placeholder="Ingrese modelo del vehículo..."
              value={modelo}
              onChange={(e)=> setModelo(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label htmlFor="placa">Placa</label>
            <input 
              type="text" 
              id="placa" 
              placeholder="Ingrese placa del vehículo..."
              value={placa}
              onChange={(e)=> setPlaca(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label htmlFor="gasolina">Nivel Tanque Gasolina</label>
            <input 
              type="text" 
              id="gasolina" 
              placeholder="Ingrese nivel de tanque de gasolina del vehículo..."
              value={gasolina}
              onChange={(e)=> setGasolina(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label htmlFor="detalle">Datos Exterior del Vehiculo</label>
            <input 
              type="text" 
              id="detalle" 
              placeholder="Ingrese datos exterior del vehículo (defectos)..."
              value={defectos}
              onChange={(e)=> SetDefectos(e.target.value)}
            />
        </div>

        <div className='botones'>
            <button type="submit" name='cliente' onClick={handleRegresar}> {'<<=='}Regresar </button>
            <button type="submit" name='servicio' onClick={handleSubmit}> Siguiente{'==>>'} </button>
        </div>   
    </form>
    );
}