
import {IconButton} from "@chakra-ui/react";
import Image from "next/image";

export default function SocialIcon(
    {
        iconUrl, alt = ""
    }: {
        iconUrl: string, alt?: string
    }
) {
    return (
        <IconButton padding={"10px"} borderRadius={"100"}
                    aria-label={alt}>
            <Image src={iconUrl} alt={alt} width={20} height={20}/>
        </IconButton>
    )
}