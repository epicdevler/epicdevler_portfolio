import {IconButton} from "@chakra-ui/react";
import Image from "next/image";

export default function SocialIcon(
    {iconUrl, alt}
) {
    return (
        <IconButton bg={"white"} padding={"10px"} borderRadius={"100"} aria-label={alt}>
            <Image src={iconUrl} alt={alt} width={20} height={20}/>
        </IconButton>
    )
}