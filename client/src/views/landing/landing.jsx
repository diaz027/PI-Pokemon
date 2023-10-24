import {useNavigate} from 'react-router-dom'

function Init() {

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }

  return (
    
    <div>
      <h1>bienvenidos a Pokedex</h1>
      <button onClick={navigateHandler}>HOME</button>
    </div>
  );
}
export default Init;