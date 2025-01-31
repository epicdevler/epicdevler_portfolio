import Link from 'next/link';
import style from './_nav_link.module.css'
import {Box, Text} from "@chakra-ui/react";
import { MouseEvent, MouseEventHandler } from 'react';


export default function NavLink(
    {
        label,
        href,
        isActive = false,
        isFirstChild = false,
        onClick = undefined
    }: {
        label: string,
        href: string,
        isActive?: boolean,
        isFirstChild?: boolean,
        onClick?: undefined | MouseEventHandler<HTMLParagraphElement>,
    }
) {
    const isActiveState = isActive ? style.active : ""
    return (
        <Box className={`${style.list} ${isActiveState}`} borderColor={'white'} borderRadius={'full'}>
            <Text onClick={onClick} as={Link}  style={{padding:'.9em', color: "white"}} href={href}>{label}</Text>
            {
                <Box className={`${style.line}`}   /* bg={isActive ? 'white' :"transparent"} */ ></Box>
    
            }
        </Box>
    )
}
