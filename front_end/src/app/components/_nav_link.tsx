import style from './_nav_link.module.css'
import {Box} from "@chakra-ui/react";

export default function NavLink(
    {
        label,
        href,
        isActive = false,
    }: {
        label: string,
        href: string,
        isActive?: boolean
    }
) {
    const isActiveState = isActive ? "block" : "none"
    return (
        <Box className={style.list}>
            <li><a style={{color: "white"}} href={href}>{label}</a></li>
            <div className={`${style.line}`} style={{background: "brand", display: isActiveState}}></div>
        </Box>
    )
}
