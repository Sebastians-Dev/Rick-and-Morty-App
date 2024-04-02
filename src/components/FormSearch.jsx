import { useRef } from "react"
import './style/FormSearch.css'

const FormSearch = ({ setLocationSelect }) => {

    const inputSearch = useRef()

    const handelSubmit= e => {
        e.preventDefault()
        setLocationSelect(inputSearch.current.value.trim())
    }

  return (
    <form className="form" onSubmit={handelSubmit}>
        <input className="form__input" ref={inputSearch} type="text" />
        <button className="form__button" >Buscar</button>
    </form>
  )
}

export default FormSearch