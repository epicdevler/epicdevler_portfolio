import {Container} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";

const ProjectsSections = () => {
    return (
        <Container as={'section'} maxW={'container.lg'} py={100}>
            <SectionTitle labelInFrontColor={'#6842EF'} labelInFront={'Projects'} labelBehind={'My'}/>
            <p style={{margin: '24px 0', fontWeight: 400, lineHeight: '28px', fontSize: '14px'}}>
                Lorem ipsum dolor sit amet consectetur. Consectetur porttitor ac volutpat imperdiet at quam senectus
                risus. Sagittis vitae quis luctus neque nibh auctor amet. Vitae tincidunt amet enim cursus amet elit.
            </p>
        </Container>
    )
}

export default ProjectsSections