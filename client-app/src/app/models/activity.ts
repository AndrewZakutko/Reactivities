import { Profile } from "./profile";

export interface IActivity {
    id: string;
    title: string;
    date: Date | null;
    description: string;
    catagory: string;
    city: string;
    venue: string;
    hostUsername: string;
    isCancelled: boolean;
    isGoing: boolean;
    isHost: boolean;
    host?: Profile;
    attendees: Profile[];
}

export class IActivity implements IActivity {
    constructor(init?: ActivityFormValues) {
        Object.assign(this, init);
    }
}

export class ActivityFormValues {
    id?: string = undefined;
    title: string = '';
    catagory: string = '';
    description: string = '';
    date: Date | null = null;
    city: string = '';
    venue: string = '';

    constructor(activity?: ActivityFormValues) {
        if(activity) {
            this.id = activity.id;
            this.title = activity.title;
            this.catagory = activity.catagory;
            this.description = activity.description;
            this.date = activity.date;
            this.city = activity.city;
            this.venue = activity.venue
        }
    }
}