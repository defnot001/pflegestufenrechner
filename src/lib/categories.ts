export type Field = {
  id: FieldId;
  dailyMinutes?: number;
  label: string;
  description: string;
  exclusive?: Exclusivity[];
};

export type Exclusivity = {
  conflictingFieldId: FieldId;
  conflictMessage: string;
};

export type Category = {
  name: string;
  fields: Field[];
};

export type FieldId =
  | 'ankleiden'
  | 'inkontinenz'
  | 'leibstuhl'
  | 'medikamente'
  | 'stoma'
  | 'kanuele'
  | 'katheter'
  | 'einlaeufe'
  | 'mobilitaetshilfeEng'
  | 'koerperpflege'
  | 'kochen'
  | 'essen'
  | 'notdurft'
  | 'besorgungen'
  | 'putzen'
  | 'waschen'
  | 'heizen'
  | 'mobilitaetshilfeWeitErw'
  | 'mobilitaetshilfeWeitKind'
  | 'geistigeBehinderungKind'
  | 'geistigeBehinderungJugend'
  | 'geistigeBehinderungErw';

export const categories: Category[] = [
  {
    name: 'Betreuung',
    fields: [
      {
        id: 'ankleiden',
        dailyMinutes: 40,
        label: 'An- und Auskleiden',
        description:
          'Unterstützung und/oder Übernahme durch andere Personen beim An- und Auskleiden. Bei Menschen mit geistigen und/oder psychischen Behinderungen werden auch die Beaufsichtigung und Anleitung bei der Tätigkeit gewertet.,',
      },
      {
        id: 'inkontinenz',
        dailyMinutes: 40,
        label: 'Inkontinenzpflege',
        description: 'Übernahme der Reinigung und Pflege bei inkontinenten Personen.',
      },
      {
        id: 'leibstuhl',
        dailyMinutes: 20,
        label: 'Leibstuhlpflege',
        description: 'Übernahme der Entleerung und Reinigung des Leibstuhles.',
      },
      {
        id: 'medikamente',
        dailyMinutes: 6,
        label: 'Medikamente',
        description:
          'Unterstützung bei der Einnahme von Medikamenten. Hierunter fällt auch die Beaufsichtigung bei der Einnahme, wenn diese notwendig ist, um die richtige Einnahme sicherzustellen. Außerdem wird auch das Verabreichen von Medikamenten über Sonden oder Injektionen erfasst.',
      },
      {
        id: 'stoma',
        dailyMinutes: 15,
        label: 'Stoma-Pflege',
        description:
          'Übernahme der Pflege eines künstlichen Darmausgangs. Dazu zählen Übernahme der Reinigung des Ausgangs sowie des Wechsels der Auffangbeutel.',
      },
      {
        id: 'kanuele',
        dailyMinutes: 10,
        label: 'Kanülen / Sonden',
        description:
          'Übernahme der Pflege von medizinischen Zugängen wie Kanülen oder Sonden z.B. zur Nahrungsaufname oder Verabreichung von Medikamenten.',
      },
      {
        id: 'katheter',
        dailyMinutes: 10,
        label: 'Katheter',
        description: 'Übernahme der Pflege von z.B. Harnkathetern.',
      },
      {
        id: 'einlaeufe',
        dailyMinutes: 30,
        label: 'Einläufe',
        description:
          'Übernahme der Durchführung von Darmeinläufen, wobei diese medizinisch notwendig sein müssen.',
      },
      {
        id: 'mobilitaetshilfeEng',
        dailyMinutes: 30,
        label: 'Mobilität engerer Sinn',
        description:
          'Unterstützung bei der Fortbewegung innerhalb der Wohnung und des unmittlebaren Umfelds. Wenn sich die zu betreuuende Person jedoch unter Einsatz eines Hilfsmittels selnstständig fortbewegen kann, wird dies nicht gewertet.',
      },
    ],
  },
  {
    name: 'Pflege',
    fields: [
      {
        id: 'koerperpflege',
        dailyMinutes: 50,
        label: 'Körperpflege',
        description:
          'Übernahme und Unterstützung bei der täglichen Körperpflege. Bei Menschen mit geistigen und/oder psychischen Behinderungen werden auch die Beaufsichtigung und Anleitung bei der Tätigkeit gewertet.',
      },
      {
        id: 'kochen',
        dailyMinutes: 60,
        label: 'Mahlzeiten zubereiten',
        description: 'Übernahme der Zubereitung von Mahlzeiten, auch bei Sondenernährung.',
      },
      {
        id: 'essen',
        dailyMinutes: 60,
        label: 'Mahlzeiten einnehmen',
        description:
          'Unterstützung bei der Aufnahme von Getränken und Speisen, auch bei Sondenernährung. Bei Menschen mit geistigen und/oder psychischen Behinderungen werden auch die Beaufsichtigung und Anleitung bei der Tätigkeit gewertet.',
      },
      {
        id: 'notdurft',
        label: 'Toilettengang',
        description:
          'Unterstützung bei der Verrichtung der Notdurft. Bei Menschen mit geistigen und/oder psychischen Behinderungen werden auch die Beaufsichtigung und Anleitung bei der Tätigkeit gewertet.',
      },
    ],
  },
  {
    name: 'Persönliche Hilfe',
    fields: [
      {
        id: 'besorgungen',
        dailyMinutes: dailyMinutes(10),
        label: 'Einkäufe',
        description:
          'Hilfe bei der Herbeischaffung von Nahrungsmitteln, Medikamenten und Bedarfsgütern des täglichen Lebens.',
      },
      {
        id: 'putzen',
        dailyMinutes: dailyMinutes(10),
        label: 'Reinigung',
        description: 'Hilfe bei der Reinigung des Wohnbereichs und der persönlichen Gegenstände.',
      },
      {
        id: 'waschen',
        dailyMinutes: dailyMinutes(10),
        label: 'Wäschepflege',
        description: 'Hilfe beim Waschen und Pflegen der Kleidung und Bettwäsche.',
      },
      {
        id: 'heizen',
        dailyMinutes: dailyMinutes(10),
        label: 'Heizung',
        description:
          'Hilfe bei der Beheizung des Wohnraumes einschließlich der Herbeischaffung von Heizmaterial. Dieser Punkt wird nur dann bewertet, wenn das Beheizen des Wohnraumes manuelle Arbeit erfordert, die die zu betreuende Person nicht selbst durchführen kann. Automatische Heizsysteme werden demnach bewertet.',
      },
      {
        id: 'mobilitaetshilfeWeitErw',
        dailyMinutes: dailyMinutes(10),
        label: 'Mobilität weiterer Sinn (Erwachsene)',
        description:
          'Unterstützung bei der Bewegung außerhalb der Wohnung inklusive Transport und Begleitung zu Arztbesuchen und anderen persönlichen Terminen.',
        exclusive: [
          {
            conflictingFieldId: 'mobilitaetshilfeWeitKind',
            conflictMessage:
              'Mobilitätshilfe im weiteren Sinn für Erwachsene und Kinder kann nicht gleichzeitig bewertet werden.',
          },
        ],
      },
      {
        id: 'mobilitaetshilfeWeitKind',
        dailyMinutes: dailyMinutes(50),
        label: 'Mobilität weiterer Sinn (Kinder)',
        description:
          'Für Kinder und Jugendliche bis zum vollendeten 15. Lebensjahr kann ein Pauschalwert für Mobilitätshilfe im weiteren Sinn angesetzt werden. Hierbei sind bis zu 50 Stunden pro Monat möglich, jedoch kann auch nach individueller Einschätzung ein geringeres Ausmaß angesetzt werden.',
        exclusive: [
          {
            conflictingFieldId: 'mobilitaetshilfeWeitErw',
            conflictMessage:
              'Mobilitätshilfe im weiteren Sinn für Kinder und Erwachsene kann nicht gleichzeitig bewertet werden.',
          },
        ],
      },
    ],
  },
  {
    name: 'Beeinträchtigungen',
    fields: [
      {
        id: 'geistigeBehinderungKind',
        dailyMinutes: dailyMinutes(50),
        label: 'Schwere Behinderung (Kinder)',
        description:
          'Pauschalwertung für die Pflege und Betreuung von schwerst behinderten Kindern bis zum vollendeten 7. Lebensjahr. Für diese Wertung müssen mindestens zwei voneinander unabhängige schwere Funktionseinschränkungen vorliegen.',
      },
      {
        id: 'geistigeBehinderungJugend',
        dailyMinutes: dailyMinutes(75),
        label: 'Schwere Behinderung (Jugendliche)',
        description:
          'Pauschalwertung für die Pflege und Betreuung von schwerst behinderten Kindern und Jugendlichen ab dem vollendeten 7. Lebensjahr bis zum vollendeten 15. Lebensjahr. Für diese Wertung müssen mindestens zwei voneinander unabhängige schwere Funktionseinschränkungen vorliegen.',
      },
      {
        id: 'geistigeBehinderungErw',
        dailyMinutes: dailyMinutes(45),
        label: 'geisitge Behinderung (Erwachsene)',
        description:
          'Pauschalwertung für die Betreuung von Menschen mit schweren geistigen oder psychischen Behinderungen ab dem vollendeten 15. Lebensjahr. Vor allem demezielle Erkrankungen werden hierbei gewertet.',
      },
    ],
  },
] as const;

function dailyMinutes(hoursPerMonth: number) {
  return (hoursPerMonth * 60) / 30;
}
