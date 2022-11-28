import {ReplayStep} from "./reply-step";

export class Reply {
  constructor(
    public templateRefId: string,
    public steps: Array<ReplayStep>,
    public assigneeUserId: string,
    public senderUserId: string
  ) {
  }
}
