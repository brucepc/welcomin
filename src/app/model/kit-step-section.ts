export enum KitStepSectionType {
  PARAGRAPH = 'PARAGRAPH',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  QUOTE = 'QUOTE',
  TODO = 'TODO',
  FILE = 'FILE',
  LINK = 'LINK',
  DYNAMIC_VIDEO = 'DYNAMIC_VIDEO',
  QUIZ = 'QUIZ'
}

export class KitStepSection {
  constructor(
    public order: number,
    public content: string,
    public type: KitStepSectionType
  ) {
  }
}

export class KitStepSectionCollection extends Array<KitStepSection> {
}
