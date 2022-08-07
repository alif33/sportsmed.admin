import Slice from "./Slice"

export default function Multi({ menu, role, setRole }){

    return(
        <li 
            onClick={()=>setRole(role===menu.id ? 0: menu.id)} 
            className={`nav-item has-sub ${role===menu.id ? 'open': ''}`}
        >
            <a 
                className="d-flex align-items-center" 
                href="#"
            >
                <i className={ menu.icon }></i>
                <span className="menu-title text-truncate" data-i18n="Page Layouts">{menu.name}</span>
                <span className="badge badge-light-danger rounded-pill ms-auto me-1">{menu.items.length}</span>
            </a>
            <ul className="menu-content">
                { menu.items.map((item, index)=><Slice 
                    key={index} 
                    item={item}
                    role={role}
                    setRole={setRole}
                    position={menu.id}
                />)}
            </ul>
        </li>
    )
}