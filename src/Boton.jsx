
function Boton({texto,id}) {
  return (
    <div>
        <button
        onClick={()=>document.getElementById(id).textContent = texto}
        >aplicar</button>

    </div>
  )
}

export default Boton