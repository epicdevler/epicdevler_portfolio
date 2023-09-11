import {IconButton} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcon(
    {
        href, iconUrl, alt = ""
    }: {
        href: string, iconUrl: IconDefinition, alt?: string
    }
) {
    return (
        <IconButton as={'a'} href={href} target={'_blank'} padding={"10px"} borderRadius={"100"}
                    aria-label={alt}>
            <FontAwesomeIcon icon={iconUrl} />
        </IconButton>
    )
}