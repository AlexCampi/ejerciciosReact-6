import {useParams, Link} from 'react-router-dom'

function Operaciones(){
    let parametros = useParams()
    let num1 = parseInt(parametros.num1)
    let num2 = parseInt(parametros.num2)
    return(
        <>
        <h1>Operaciones</h1>
        <p>{num1}+{num2}={num1+num2}</p>
        <p>{num1}-{num2}={num1-num2}</p>
        <p>{num1}x{num2}={num1*num2}</p>
        <p>{num1}/{num2}={num1/num2}</p>
        <p>{num1}%{num2}={num1%num2}</p>
        <Link to='/'><button type='button'>Ocultar</button></Link>
        </>
    )
}

export default Operaciones