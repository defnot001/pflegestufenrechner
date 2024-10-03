import { categories, Field, FieldId } from './categories';

export const fieldMap = new Map<FieldId, Field>();

for (const category of categories) {
  for (const field of category.fields) {
    fieldMap.set(field.id, field);
  }
}
