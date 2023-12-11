import work, {WorkExperience} from './workExperience'
import technologySchema, {Technology} from "./technology";
import projectSchema, { Project } from './projects';

export const schemaTypes = [work, technologySchema, projectSchema]

export interface Interface {
    work: WorkExperience,
    technologies: Technology,
    project: Project,
}