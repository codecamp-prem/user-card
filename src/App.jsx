import { UserCardClass } from './UserCardClass'
import './user.css'
import user from './user.json'
//import { UserCard } from './UserCard'

function App() {
  return (
    <UserCardClass user={user}/>
  )
}

export default App
