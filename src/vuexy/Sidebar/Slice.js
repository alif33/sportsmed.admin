export default function Slice({ item, role, setRole, position }){
    return(
        <li 
            onClick={()=>setRole(position)} 
        >
            <a className="d-flex align-items-center" href={item.uri}>
                <i data-feather="circle" />
                <span className="menu-item text-truncate" data-i18n="Collapsed Menu">
                    {item.name}
                </span>
            </a>
        </li>
    )
}