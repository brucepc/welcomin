import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, doc, docData, Firestore, updateDoc} from "@angular/fire/firestore";
import {map} from "rxjs";
import {KitStep} from '../model/kit-step';
import {WelcomeKit} from "../model/welcome-kit";

@Injectable({
  providedIn: 'root'
})
export class WelcomeKitService {
  private ref: any;

  constructor(
    private fs: Firestore
  ) {
    this.ref = collection(this.fs, 'kits');
  }

  getAll() {
    return collectionData(this.ref, {idField: 'id'})
      .pipe(
        map((data) =>
          data.map((wk: any) => new WelcomeKit(wk.title as string, wk.description, wk.steps, wk.user, wk.id))
        )
      );
  }

  add(kit: WelcomeKit) {
    return addDoc(this.ref, kit)
      .then(res => {
        kit.id = res.id;
        return;
      })
  }

  update(kit: Partial<WelcomeKit> & { id: string }) {
    const kitRef = doc(this.ref, kit.id);
    return updateDoc(kitRef, Object.fromEntries(Object.entries(kit).filter(value => !!value[1])));
  }

  get(kitId: string) {
    return docData(doc(this.ref, kitId), {idField: 'id'})
      .pipe(
        map((kit: any) => new WelcomeKit(kit.title, kit.description, kit.steps, kit.createdBy, kit.id))
      );
  }

  putStep(welcomeKit: Partial<WelcomeKit> & { id: string }, step: Partial<KitStep>) {
    if (Array.isArray(welcomeKit.steps) && welcomeKit.steps.length > 0) {
      const found = welcomeKit.steps.findIndex(s => s.order === step.order);
      if (found > -1) {
        welcomeKit.steps.splice(found, 1, step as KitStep);
      } else {
        welcomeKit.steps.push(step as KitStep);
      }
    } else {
      welcomeKit.steps = [step as KitStep];
    }
    return this.update(welcomeKit);
  }
}
