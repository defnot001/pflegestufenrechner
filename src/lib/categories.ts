export type Field = {
  id: string;
  label: string;
  shortLabel: string;
  info: string;
  exclusive?: string[];
};

export type Category = {
  name: string;
  fields: Field[];
};

export const categories: Category[] = [
  {
    name: 'Betreuung',
    fields: [
      {
        id: 'ankleiden',
        label: 'An- und Auskleiden',
        shortLabel: 'Ankleiden',
        info: 'Hilfe beim An- und Ausziehen von Kleidungsstücken',
      },
      {
        id: 'inkontinenz',
        label: 'Reinigung bei inkontinenten Patienten',
        shortLabel: 'Inkontinenzpflege',
        info: 'Säuberung und Pflege bei Inkontinenz',
      },
      {
        id: 'leibstuhl',
        label: 'Entleerung und Reinigung des Leibstuhles',
        shortLabel: 'Leibstuhlpflege',
        info: 'Hilfe bei der Benutzung und Reinigung des Toilettenstuhls',
      },
      {
        id: 'medikamente',
        label: 'Einnehmen von Medikamenten',
        shortLabel: 'Medikamente',
        info: 'Unterstützung bei der Einnahme von Medikamenten',
      },
      {
        id: 'stoma',
        label: 'Anus-praeter-Pflege',
        shortLabel: 'Stoma-Pflege',
        info: 'Pflege eines künstlichen Darmausgangs',
      },
      {
        id: 'kanuele',
        label: 'Kanülen- oder Sondenpflege',
        shortLabel: 'Kanülen/Sonden',
        info: 'Pflege von medizinischen Zugängen wie Kanülen oder Sonden',
      },
      {
        id: 'katheter',
        label: 'Katheter-Pflege',
        shortLabel: 'Katheter',
        info: 'Pflege eines Blasenkatheters',
      },
      {
        id: 'einlaeufe',
        label: 'Einläufe',
        shortLabel: 'Einläufe',
        info: 'Durchführung von Darmeinläufen',
      },
      {
        id: 'mobilitaetshilfeEng',
        label: 'Mobilitätshilfe im engeren Sinn',
        shortLabel: 'Mobilität (eng)',
        info: 'Unterstützung bei der Bewegung innerhalb der Wohnung',
      },
    ],
  },
  {
    name: 'Pflege',
    fields: [
      {
        id: 'koerperpflege',
        label: 'Tägliche Körperpflege',
        shortLabel: 'Körperpflege',
        info: 'Hilfe bei der täglichen Hygiene und Körperpflege',
      },
      {
        id: 'kochen',
        label: 'Zubereitung von Mahlzeiten',
        shortLabel: 'Mahlzeiten zubereiten',
        info: 'Unterstützung bei der Zubereitung von Mahlzeiten',
      },
      {
        id: 'essen',
        label: 'Einnehmen von Mahlzeiten',
        shortLabel: 'Mahlzeiten einnehmen',
        info: 'Hilfe beim Essen und Trinken',
      },
      {
        id: 'notdurft',
        label: 'Verrichtung der Notdurft',
        shortLabel: 'Toilettengang',
        info: 'Unterstützung beim Toilettengang',
      },
    ],
  },
  {
    name: 'Persönliche Hilfe',
    fields: [
      {
        id: 'besorgungen',
        label:
          'Herbeischaffung von Nahrungsmitteln, Medikamenten und Bedarfsgütern des täglichen Lebens',
        shortLabel: 'Einkäufe',
        info: 'Einkäufe und Besorgungen für den täglichen Bedarf',
      },
      {
        id: 'putzen',
        label: 'Reinigung der Wohnung und der persönlichen Gebrauchsgegenstände',
        shortLabel: 'Reinigung',
        info: 'Hilfe bei der Reinigung des Wohnbereichs und persönlicher Gegenstände',
      },
      {
        id: 'waschen',
        label: 'Pflege der Leib- und Bettwäsche',
        shortLabel: 'Wäschepflege',
        info: 'Waschen und Pflegen von Kleidung und Bettwäsche',
      },
      {
        id: 'heizen',
        label: 'Beheizung des Wohnraumes einschließlich der Herbeischaffung von Heizmaterial',
        shortLabel: 'Heizung',
        info: 'Sicherstellung einer angemessenen Raumtemperatur und Beschaffung von Heizmaterial',
      },
      {
        id: 'mobilitaetshilfeWeit',
        label: 'Mobilitätshilfe im weiteren Sinn',
        shortLabel: 'Mobilität (weit)',
        info: 'Unterstützung bei der Bewegung außerhalb der Wohnung',
      },
    ],
  },
] as const;
