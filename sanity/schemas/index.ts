import work, {WorkExperience} from './workExperience'
import technologySchema, {Technology} from "./technology";

export const schemaTypes = [work, technologySchema]


export interface Interface {
    work: WorkExperience,
    technologies: Technology
}