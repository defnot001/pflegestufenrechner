import { FieldState } from '../components/care-calculator';
import { Field, FieldId } from './categories';

/**
 * behinderungErwachsene: stufe 3
 * behinderungErwachsene + BehinderungErwachseneStuhlHarn: stufe 4
 * behinderungErwachsene + BehinderungErwachseneObereExtremitaet: stufe 5
 * sehbehinderung: stufe 3
 * blindheit: stufe 4
 * taubblindheit: stufe 5
 */

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

export function calculatePflegestufe(
  selectedFields: Map<FieldId, FieldState>,
  fieldMap: Map<FieldId, Field>
): number {
  let monthlyMinuteCounter = 0;

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

  let minimalPflegestufe = 0;

  if (selectedFieldIds.includes('behinderungErwachsene')) {
    minimalPflegestufe = 3;

    if (selectedFieldIds.includes('BehinderungErwachseneStuhlHarn')) {
      minimalPflegestufe = Math.max(minimalPflegestufe, 4);
    }

    if (selectedFieldIds.includes('BehinderungErwachseneObereExtremitaet')) {
      minimalPflegestufe = Math.max(minimalPflegestufe, 5);
    }
  }

  if (selectedFieldIds.includes('sehbehinderung')) {
    minimalPflegestufe = Math.max(minimalPflegestufe, 3);
  }

  if (selectedFieldIds.includes('blindheit')) {
    minimalPflegestufe = Math.max(minimalPflegestufe, 4);
  }

  if (selectedFieldIds.includes('taubblindheit')) {
    minimalPflegestufe = Math.max(minimalPflegestufe, 5);
  }

  pflegestufe = Math.max(pflegestufe, minimalPflegestufe);

  return pflegestufe;
}
