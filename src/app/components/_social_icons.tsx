import {IconButton} from "@chakra-ui/react";
import Image from "next/image";

export default function SocialIcon(
    {
        href, iconUrl, alt = ""
    }: {
        href: string, iconUrl: string, alt?: string
    }
) {
    return (
        <IconButton as={'a'} href={href} target={'_blank'} padding={"10px"} borderRadius={"100"}
                    aria-label={alt}>
            <Image src={iconUrl} alt={alt} width={20} height={20}/>
        </IconButton>
    )
}