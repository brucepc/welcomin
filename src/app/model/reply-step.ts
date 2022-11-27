export enum ReplayStepStatus {
  AWAITING,
  DOING,
  DONE
}

export class ReplayStep {
  constructor(
    public kitStepId: string,
    public status: ReplayStepStatus,
    data: any
  ) {
  }
}
