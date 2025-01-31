import style from './_section_title.module.css';
import {leckerliOne} from "@/app/fonts";
import {Text} from '@chakra-ui/react'

export default function SectionTitle(
    {
        labelBehind,
        labelInFront,
        labelInFrontColor,
        labelInBehindColor
    }:
        {
            labelInFront: string,
            labelInFrontColor?: string,
            labelInBehindColor?: string,
            labelBehind?: string
        }
) {
    return (
        <div className={style.styled_title}>
            <Text className={leckerliOne.className} textColor={labelInBehindColor} style={{opacity: 0.22}}>{labelBehind}</Text>
            <Text as={'h1'} textColor={labelInFrontColor}>{labelInFront}</Text>
        </div>
    )
}