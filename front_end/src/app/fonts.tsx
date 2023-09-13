import {Jua, Leckerli_One, Poppins} from 'next/font/google'

export const leckerliOne = Leckerli_One(
    {
        weight: '400',
        subsets: ['latin'],
        variable: "--leckerliOne"
    }
)
export const jua = Jua(
    {
        weight: '400',
        subsets: ['latin'],
        variable: "--jua"
    }
)
export const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900',],
    subsets: ['latin'],
    variable: "--poppins"
})