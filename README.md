<div align="center">
    <img src="/car.png">
</div>

<div align="center">
    <H1>PROYECTO FINAL REACT - CAR SHOP V.1.0.0</H1>
    <table>
        <tbody>
            <tr>
                <td>(A)</td>
                <td>Descripción del Proyecto</td>
            </tr>
            <tr>
                <td>(B)</td>
                <td>Desarrollo</td>
            </tr>	
            <tr>
                <td>(c)</td>
                <td>Despliegue</td>
            </tr>	            
        </tbody>
    </table> 
</div>

<div STYLE="margin:30px 180px">
    <H3>(A) Descripción</H3>
    <p>
        Este proyecto tiene la finalidad de registrar los datos del cliente, datos de su vehículo y escoger el o los servicio(s) que desee que se le aplique a su vehiculo, ya con esta informacion se genera la orden de trabajo con todos los datos ingreados y se regista la fecha y hora de entrega. También permite generar una nueva orden y si es necesario regresar a cualquier paso
        anterior para realizar cualquier modificación. Está compuesto por los siguientes componentes:
    </p>
    <ol>
        <li>Componente principal (index.js) </li> 
        <li>Componente secundario (App.js) </li> 
        <li>Menú de navegación de los diferentes componentes (AppNavigate.js) </li> 
        <li>Proveedor (context y reducer) controla el menú entre los componentes (AppProviderUi.js)</li> 
        <li>Proveedor (context y reducer) estado total de la aplicación (AppProvider.js)</li> 
        <li>Ingreso de datos del cliente (Cliente.js)</li> 
        <li>Ingreso de datos del vehículo (Vehiculo.js)</li>    
        <li>Registro de los servicios que requiere el cliente para su vehículo (Servicio.js)</li>                
        <li>Orden de trabajo (Orden.js)</li>            
        <li>Archivo de Estilos CSS (App.css y index.css)</li>  
    </ol>
</div>

<div STYLE="margin:30px 180px">
    <H3>(B) Desarrollo</H3>
    <p>
        Se debe ejecutar los siguientes pasos para poder levantar el proyecto:
    </p>
    <ol>
        <li>Copiar el cotenido de la carpeta del (Github) en ruta donde tenga instalada las dependencias de React con nombre /carshop
        </li>
        <li>A través de la consola ir a la carpeta /carshop. Ej: cd carshop</li>                 
        <li>Ejecutar comando para levantar proyecto: npm run start</li>                 
    </ol>
</div>

<div STYLE="margin:30px 180px">
    <H3>(C) Despliegue</H3>
    <p>
        Se debe ejecutar los siguientes pasos para desplegar el proyecto:
    </p>
    <ol>
        <li>Ir a la carpea carshop. Ej: cd carshop</li>
        <li>Ejecutar el comando: npm run build</li>
        <li>Se crea la carpeta /buid dentro de /carshop</li>                 
        <li>En la consola de AWS crear el bucket S3</li>     
        <li>Crear politica de ACL: arn:aws:s3:::proyectoreactcarshop</li>     
        <li>Habilitar Static website hosting</li>     
        <li>Subir el contenido de los archivos de la carpeta build</li> 
        <li><a href="http://proyectoreactcarshop.s3-website-us-east-1.amazonaws.com">Link resultante del despliegue en AWS</a></td> </li>   
    </ol>
</div>
