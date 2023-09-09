import style from './_section_title.module.css';
import {leckerliOne} from "@/app/fonts";

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
            <p className={leckerliOne.variable} style={{opacity: 0.22}}>{labelBehind}</p>
            <h1 style={{color: labelInFrontColor}}>{labelInFront}</h1>
        </div>
    )
}