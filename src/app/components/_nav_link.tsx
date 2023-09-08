import style from './_nav_link.module.css'

export default function NavLink(
    {
        label,
        isActive
    }
) {
    const isActiveState = isActive ? "block" : "none"
    return (
        <div className={style.list}>
            <li><a style={{color: "white"}} href="#">{label}</a></li>
            <div className={`${style.line}`} style={{background: "brand", display: isActiveState}}></div>
        </div>
    )
}
