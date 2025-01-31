import {IconButton} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SocialIcon(
    {
        href, iconUrl, alt = "",
        showBorder = false,
        hoverBg = "whiteAlpha.700", hoverContentColor = "black"
    }: {
        href: string, iconUrl: IconDefinition, alt?: string,
        showBorder?: boolean
        hoverBg?: string, hoverContentColor?: string
    }
) {
    return (
        <IconButton as={Link} bg={'transparent'} borderWidth={showBorder ? 1 : 0} borderColor={'whiteAlpha.400'} textColor={'white'} href={href} target={'_blank'} padding={"10px"} borderRadius={"100"}
                    aria-label={alt}
                    _hover={{bg:hoverBg, textColor:hoverContentColor}}
                    >
            <FontAwesomeIcon icon={iconUrl} />
        </IconButton>
    )
}