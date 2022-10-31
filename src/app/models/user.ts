import { Job } from "./job";

export class User {

    userId:number;
    userName: string;
    userEmail: string;
    userPassword: string;
    userMobile:string;
    userQualification: string;
    userSkills: string;

    jobList: Job[];
}
