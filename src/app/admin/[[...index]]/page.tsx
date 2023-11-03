'use client'
import {NextStudio} from "next-sanity/studio";
import sanityConfig from "../../../../sanity.config";

const SanityAdmin = () => {
    return <NextStudio config={sanityConfig} />
}

export default SanityAdmin