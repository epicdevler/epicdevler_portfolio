import {IconButton} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SocialIcon(
    {
        href, iconUrl, alt = "",
        hoverBg = "whiteAlpha.700", hoverContentColor = "black"
    }: {
        href: string, iconUrl: IconDefinition, alt?: string,
        hoverBg?: string, hoverContentColor?: string
    }
) {
    return (
        <IconButton as={Link} bg={'transparent'} textColor={'white'} href={href} target={'_blank'} padding={"10px"} borderRadius={"100"}
                    aria-label={alt}
                    _hover={{bg:hoverBg, textColor:hoverContentColor}}
                    >
            <FontAwesomeIcon icon={iconUrl} />
        </IconButton>
    )
}