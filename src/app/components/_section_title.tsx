import style from './_section_title.module.css';
import {leckerliOne} from "@/app/fonts";
import {RefObject} from "react";

export default function SectionTitle(
    {
        labelBehind,
        labelInFront,
    }:
        {
            labelInFront: string,
            labelBehind?: string
        }
){
    return (
        <div className={style.styled_title}>
            <p className={leckerliOne.variable} style={{opacity: 0.22}}>{labelBehind}</p>
            <h1>{labelInFront}</h1>
        </div>
    )
}