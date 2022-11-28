import {User} from "./user";
import {KitStepCollection} from "./kit-step";

export class WelcomeKit {
  constructor(
    public title: string,
    public description: string,
    public steps: KitStepCollection,
    public createdBy: User,
    public id?: string,
  ) {
  }
}
