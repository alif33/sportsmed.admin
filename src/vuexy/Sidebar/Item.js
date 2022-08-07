export default function Item(){

    return(
        <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="layout" /><span className="menu-title text-truncate" data-i18n="Page Layouts">Page Layouts</span><span className="badge badge-light-danger rounded-pill ms-auto me-1">2</span></a>
            <ul className="menu-content">
                <li><a className="d-flex align-items-center" href="layout-collapsed-menu.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Collapsed Menu">Collapsed Menu</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="layout-full.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Layout Full">Layout Full</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="layout-without-menu.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Without Menu">Without Menu</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="layout-empty.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Layout Empty">Layout Empty</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="layout-blank.html"><i data-feather="circle" /><span className="menu-item text-truncate" data-i18n="Layout Blank">Layout Blank</span></a>
                </li>
            </ul>
        </li>
    )
}