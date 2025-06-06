import './InputComponent.css'

function Input({monto, onChange}) {
   return(
     <input type="number"
    placeholder="Ingrese el monto a invertir"
    value={monto}
    onChange={onChange}
    className='input-monto'
     />
    )
}

export default Input