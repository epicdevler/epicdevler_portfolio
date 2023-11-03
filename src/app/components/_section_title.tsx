import style from './_section_title.module.css';
import {leckerliOne} from "@/app/fonts";
import {Text} from '@chakra-ui/react'

export default function SectionTitle(
    {
        labelBehind,
        labelInFront,
        labelInFrontColor,
    }:
        {
            labelInFront: string,
            labelInFrontColor?: string,
            labelBehind?: string
        }
) {
    return (
        <div className={style.styled_title}>
            <p className={leckerliOne.className} style={{opacity: 0.22}}>{labelBehind}</p>
            <Text as={'h1'} textColor={labelInFrontColor}>{labelInFront}</Text>
        </div>
    )
}