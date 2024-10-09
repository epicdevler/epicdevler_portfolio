import style from './_nav_link.module.css'
import {Box, Link} from "@chakra-ui/react";

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
    const isActiveState = isActive ? style.active : ""
    return (
        <Box className={`${style.list} ${isActiveState}`}>
            <li><Link color={'white'} style={{color: "white"}} href={href}>{label}</Link></li>
            {
                <Box className={`${style.line}`}  /* bg={isActive ? 'white' :"transparent"} */ ></Box>
    
            }
        </Box>
    )
}
