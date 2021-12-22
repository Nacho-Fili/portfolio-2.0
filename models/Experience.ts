import { Experience as ExperienceType } from "../types";

export default class Experience {
    public experience: ExperienceType
    
    constructor(experience: ExperienceType) {
        this.experience = { ...experience }
    }
}