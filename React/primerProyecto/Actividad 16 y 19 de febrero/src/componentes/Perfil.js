import React from 'react'
import '../estilos/Perfil.css'

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.jpg`)}
            alt='Foto de album' />
        
        <div className= 'contenedor-texto-perfil'>
            <p className='nombre-perfil'>
                <strong>{props.nombre} de {props.grupo}</strong>
            </p>
            <p className= 'pais-perfil'>
                {props.pais} - {props.fecha}
            </p>
            <p className='texto-perfil'>"{props.descripcion}"</p>
        

            <div className='boton'>
                <button onClick={() => window.open(props.spotify, '_blank')}>
                    Seguir en Spotify
                </button>
                
                <button onClick={() => window.open(props.youtube, '_blank')}>
                    Seguir en YouTube
                </button>

                <button onClick={() => window.open(props.wikipedia, '_blank')}>
                    Seguir en wikipedia
                </button>
            </div>    
        </div>
        
    </div>    
    )
    
}
export default Perfil;