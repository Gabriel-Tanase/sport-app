import { NextApiRequest } from "next";
import { AppRootStore } from "../redux/interface";
import { Education } from "../schemas/education";
import { Event } from "../schemas/event";
import { Plan } from "../schemas/plan";
import { WorkExperience } from "../schemas/workexperience";
import { Gallery } from "../schemas/gallery";
import { Profile as ProfileSchema} from '../schemas/profile'
import { User as UserSchema } from "../schemas/user";

declare global {
  namespace React {
    interface FunctionComponent<P = {}> {
      getInitialProps?: (...args: any[]) => void;
    }
  }
}
export interface NextApiRequestAuthorized extends NextApiRequest {
  decoded: {
    id: string;
    email: string;
  };
}

export interface PagePropsType {
  initialReduxState: AppRootStore;
}

export interface MyAppProps {
  Component: any;
  pageProps: PagePropsType;
  getInitialProps: (...args) => void;
}

export interface Profile extends ProfileSchema{
  plans: Plan[],
  events: Event[],
  workExperience: WorkExperience[],
  education: Education[], 
  gallery: Gallery 
}

export interface User extends UserSchema {
  profile: Profile
}