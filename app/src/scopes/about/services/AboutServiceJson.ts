import { injectable } from "inversify.config";
import AboutService from "scopes/about/services/AboutService";

@injectable()
export default class AboutServiceJson implements AboutService {
    Exception(): void {
        throw new Error("Method not implemented.");
    }

    Now(): Date {
        throw new Error("Method not implemented.");
    }
    
}