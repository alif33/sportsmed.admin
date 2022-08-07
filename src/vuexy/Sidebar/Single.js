import Slice from "./Slice"

export default function Multi({ menu, role, setRole }){

    return(
        <li 
            onClick={()=>setRole(role===menu.id ? 0: menu.id)} 
            className={`nav-item has-sub ${role===menu.id ? 'open': ''}`}
        >
            
        </li>
    )
}