
function Input({nom}) {
  return (
    <div>
        <input type="text" 
        onChange = {(e)=>nom(e.target.value)}
        />
    </div>
  )
}

export default Input