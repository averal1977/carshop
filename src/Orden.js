import { useAppContext } from "./AppProvider";
import { useAppContextUi } from './AppProviderUi';


export default function Orden () {
    //seccion declaraciones properties
    const { systemcar, dispatch } = useAppContext();
    const { dispatch: dispatchUi } = useAppContextUi();    

    let today = new Date();
    today.setDate(today.getDate()+2).toLocaleString();
    let now = today.toLocaleString();

    const {nombres, email, celular, identificacionFiscal, tipoid} = systemcar.cliente;
    const {marca, modelo,  placa, gasolina, defectos} = systemcar.vehiculo;
    const {aceite, frenos, balanceo, diagnostico, electrica, suspension} = systemcar.servicio;     


    let orden = <h5>No existe ninguna orden de trabajo</h5>;

        orden = (
        <div>
            <h2>ORDEN DE TRABAJO</h2>
            <table>
                <tr>
                    <th>DATOS DEL CLIENTE</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Cliente:</td>
                    <td>{nombres}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Celular:</td>
                    <td>{celular}</td>
                </tr>
                <tr>
                    <td>Identificacion Fiscal:</td>
                    <td>{identificacionFiscal}</td>
                </tr>
                <tr>
                    <td>Tipo de Identificación:</td>
                    <td>{tipoid}</td>
                </tr>                    

                <tr>
                    <th>DATOS DEL VEHICULO</th>
                    <th></th>
                </tr>

                <tr>
                    <td>Marca:</td>
                    <td>{marca}</td>
                </tr>
                <tr>
                    <td>Modelo:</td>
                    <td>{modelo}</td>
                </tr>
                <tr>
                    <td>Placa:</td>
                    <td>{placa}</td>
                </tr>
                <tr>
                    <td>Nivel Tanque Gasolina:</td>
                    <td>{gasolina}</td>
                </tr>
                <tr>
                    <td>Datos Exterior del Vehiculo:</td>
                    <td>{defectos}</td>
                </tr>                                                            

                <tr>
                    <th>SERVICIOS SELECCIONADOS</th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                        <div>{(aceite)? '(X) Cambio de aceite' : ''}</div>
                        <div>{(frenos)? '(X) Cambio de frenos' : ''}</div>
                        <div>{(balanceo)? '(X) Alineación y balanceo' : ''}</div>
                        <div>{(diagnostico)? '(X) Diagnóstico general' : ''}</div>
                        <div>{(electrica)? '(X) Revisión sistema eléctrica' : ''}</div>
                        <div>{(suspension)? '(X) Revisión de la suspensión' : ''}</div>
                    </td>
                    <td>
                        <img alt = "auto" src = "/car.png"
                        />
                    </td>
                </tr>

                <tr>
                    <th>DATOS DE ENTREGA Y APROBACIÓN</th>
                    <th></th>
                </tr>

                <tr>
                    <td>Fecha y Hora de Entrega:</td>
                    <td>{now}</td>
                </tr>
                <tr>
                    <td>Firma de Aprobación del Cliente:</td>
                    <td>-----------------FIRMA-----------------</td>
                </tr>
            </table>
        </div>
        );

const handleSubmit = () => {
    dispatch({
        type: 'RESET'
    });        
    dispatchUi({
        type: 'setForm',
        value: 1,
    });
}

const handleRegresar = () => {
    dispatchUi({
        type: 'setForm',
        value: 3,
    })
}

//seccion vista    
    return (
        <div>
            <form className='form-react'>
                {orden}  
                <div className='botones'>
                    <button type="submit" name='servicio' onClick={handleRegresar}> {'<<=='}Regresar </button>   
                    <button type="submit" name='cliente' onClick={handleSubmit} >Otra Orden{'==>>'}</button>
                </div>               
            </form>     
        </div>
    )
}