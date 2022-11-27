import {KitStepSectionCollection} from "./kit-step-section";

export class KitStep {
  constructor(
    public name: string,
    public order: number,
    public sections: KitStepSectionCollection
  ) {
  }
}

export class KitStepCollection extends Array<KitStep> {
}

export class KitStepPartialCollection extends Array<Partial<KitStep>> {
}
