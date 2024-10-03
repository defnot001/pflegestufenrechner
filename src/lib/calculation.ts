import { FieldState } from '../components/care-calculator';
import { categories, Field, FieldId } from './categories';

//   1: >= 65 & staendigerPflegebedarf
//   2: >= 95 & staendigerPflegebedarf
//   3: >= 120 & staendigerPflegebedarf
//   4: >= 160 & staendigerPflegebedarf
//   5: >= 180 & aussergewoehnlicherPflegebedarf
//   6: >= 180 & unkoordinierbareBetreuung
//   7: >= 180 & keineZielgerichteteBewegung

type PflegestufeCondition = {
  pflegestufe: number;
  minHours: number;
  requiredFieldId: FieldId;
};

const pflegestufeConditions: PflegestufeCondition[] = [
  {
    pflegestufe: 7,
    minHours: 180,
    requiredFieldId: 'keineZielgerichteteBewegung',
  },
  {
    pflegestufe: 6,
    minHours: 180,
    requiredFieldId: 'unkoordinierbareBetreuung',
  },
  {
    pflegestufe: 5,
    minHours: 180,
    requiredFieldId: 'aussergewoehnlicherPflegebedarf',
  },
  {
    pflegestufe: 4,
    minHours: 180,
    requiredFieldId: 'staendigerPflegebedarf',
  },
  {
    pflegestufe: 4,
    minHours: 160,
    requiredFieldId: 'staendigerPflegebedarf',
  },
  {
    pflegestufe: 3,
    minHours: 120,
    requiredFieldId: 'staendigerPflegebedarf',
  },
  {
    pflegestufe: 2,
    minHours: 95,
    requiredFieldId: 'staendigerPflegebedarf',
  },
  {
    pflegestufe: 1,
    minHours: 65,
    requiredFieldId: 'staendigerPflegebedarf',
  },
];

export function calculatePflegestufe(selectedFields: Map<FieldId, FieldState>): number {
  let monthlyMinuteCounter = 0;

  const fieldMap = new Map<FieldId, Field>();

  for (const category of categories) {
    for (const field of category.fields) {
      fieldMap.set(field.id, field);
    }
  }

  for (const [fieldId, state] of selectedFields.entries()) {
    const field = fieldMap.get(fieldId);

    if (field) {
      let dailyMinutes = 0;

      if (state === 'support' && field.dailyMinutes !== undefined) {
        dailyMinutes = field.dailyMinutes;
      } else if (state === 'motivation' && field.motivationMinutes !== undefined) {
        dailyMinutes = field.motivationMinutes;
      }

      monthlyMinuteCounter += dailyMinutes * 30;
    }
  }

  const monthlyHours = Math.round(monthlyMinuteCounter / 60);

  let pflegestufe = 0;
  const selectedFieldIds = Array.from(selectedFields.keys());

  for (const condition of pflegestufeConditions) {
    const meetsHoursRequirement = monthlyHours >= condition.minHours;
    const hasRequiredField = selectedFieldIds.includes(condition.requiredFieldId);

    if (meetsHoursRequirement && hasRequiredField) {
      pflegestufe = condition.pflegestufe;
      break;
    }
  }

  return pflegestufe;
}
