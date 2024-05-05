import { UserProfile } from "./UserProfile";

export class user {
    id? : number;

    firstname? : string;

    lastname?: string;

    email? : string;

    login? : string;

    profiles : Array<UserProfile> = [];
}
