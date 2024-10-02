export type Field = {
  id: FieldId;
  dailyMinutes?: number;
  motivationMinutes?: number;
  label: string;
  description: string;
  dependent?: Dependency[];
  exclusive?: Exclusivity[];
};

export type Exclusivity = {
  conflictingFieldId: FieldId;
  conflictMessage: string;
};

export type Dependency = {
  requiredField: FieldId;
  requiredMessage: string;
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
  | 'geistigeBehinderungErw'
  | 'staendigerPflegebedarf'
  | 'aussergewoehnlicherPflegebedarf'
  | 'unkoordinierbareBetreuung'
  | 'keineZielgerichteteBewegung'
  | 'behinderungErwachsene'
  | 'BehinderungErwachseneStuhlHarn'
  | 'BehinderungErwachseneObereExtremitaet'
  | 'sehbehinderung'
  | 'blindheit'
  | 'taubblindheit';

export const categories: Category[] = [
  {
    name: 'Betreuung',
    fields: [
      {
        id: 'ankleiden',
        dailyMinutes: 40,
        motivationMinutes: dailyMinutes(10),
        label: 'An- und Auskleiden',
        description:
          'Unterstützung und/oder Übernahme durch andere Personen beim An- und Auskleiden. Bei Menschen mit geistigen und/oder psychischen Behinderungen werden auch die Beaufsichtigung und Anleitung bei der Tätigkeit gewertet.',
      },
      {
        id: 'inkontinenz',
        dailyMinutes: 40,
        label: 'Inkontinenzpflege',
        description: 'Übernahme der Reinigung und Pflege bei inkontinenten Personen.',
        exclusive: [
          {
            conflictingFieldId: 'leibstuhl',
            conflictMessage:
              'Die Tatsache, dass die zu betreuende Person einen Leibstuhl benutzen kann, bedeutet in den meisten Fällen, dass sie nicht vollständig inkontinent sein kann. In den allermeisten Fällen werden daher nicht beide Kategorien gleichzeitig bewertet.',
          },
          {
            conflictingFieldId: 'notdurft',
            conflictMessage:
              'Die Person wird bereits bei der Verrichtung der Notdurft unterstützt. In den allermeisten Fällen ist eine gleichzeitige Bewerteung beider Tätigkeiten daher nicht möglich.',
          },
        ],
      },
      {
        id: 'leibstuhl',
        dailyMinutes: 20,
        label: 'Leibstuhlpflege',
        description: 'Übernahme der Entleerung und Reinigung des Leibstuhles.',
        exclusive: [
          {
            conflictingFieldId: 'inkontinenz',
            conflictMessage:
              'Da bereits das Feld Inkontinenz ausgewählt wurde, kann diese Feld nicht auch ausgewählt werden. In dern allerwenigsten Fällen wird ein Leibstuhl benutzt und die Person ist dennoch inkontinent.',
          },
        ],
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
        label: 'Mobilitätshilfe im engeren Sinn',
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
        motivationMinutes: dailyMinutes(10),
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
        motivationMinutes: dailyMinutes(10),
        label: 'Mahlzeiten einnehmen',
        description:
          'Unterstützung bei der Aufnahme von Getränken und Speisen, auch bei Sondenernährung. Bei Menschen mit geistigen und/oder psychischen Behinderungen werden auch die Beaufsichtigung und Anleitung bei der Tätigkeit gewertet.',
      },
      {
        id: 'notdurft',
        dailyMinutes: 60,
        label: 'Toilettengang',
        description:
          'Unterstützung bei der Verrichtung der Notdurft. Bei Menschen mit geistigen und/oder psychischen Behinderungen werden auch die Beaufsichtigung und Anleitung bei der Tätigkeit gewertet.',
        exclusive: [
          {
            conflictingFieldId: 'inkontinenz',
            conflictMessage:
              'Da die Person bereits Pflege aufgrund ihrer bestehenden Inkontinenz benötigt, wird in den allermeisten Fällen die Unterstützung beim Toilettengang nicht ebenfalls gewertet.',
          },
        ],
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
          'Hilfe bei der Beheizung des Wohnraumes einschließlich der Herbeischaffung von Heizmaterial. Dieser Punkt wird nur dann bewertet, wenn das Beheizen des Wohnraumes manuelle Arbeit erfordert, die die zu betreuende Person nicht selbst durchführen kann. Automatische Heizsysteme werden demnach nicht bewertet.',
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
              'Mobilitätshilfe im weiteren Sinn für Kinder und Erwachsene kann nicht gleichzeitig bewertet werden. Die Antragsteller:innen können nur entweder Kinder oder Erwachsene sein.',
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
              'Mobilitätshilfe im weiteren Sinn für Kinder und Erwachsene kann nicht gleichzeitig bewertet werden. Die Antragsteller:innen können nur entweder Kinder oder Erwachsene sein.',
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
        exclusive: [
          {
            conflictingFieldId: 'geistigeBehinderungJugend',
            conflictMessage:
              'Der:Die Antragsteller:in kann nur entweder ein Kind oder ein:e Jugendliche:r sein.',
          },
          {
            conflictingFieldId: 'geistigeBehinderungErw',
            conflictMessage:
              'Der:Die Antragsteller:in kann nur entweder ein Kind oder ein:e Erwachsene:r sein.',
          },
        ],
      },
      {
        id: 'geistigeBehinderungJugend',
        dailyMinutes: dailyMinutes(75),
        label: 'Schwere Behinderung (Jugendliche)',
        description:
          'Pauschalwertung für die Pflege und Betreuung von schwerst behinderten Kindern und Jugendlichen ab dem vollendeten 7. Lebensjahr bis zum vollendeten 15. Lebensjahr. Für diese Wertung müssen mindestens zwei voneinander unabhängige schwere Funktionseinschränkungen vorliegen.',
        exclusive: [
          {
            conflictingFieldId: 'geistigeBehinderungKind',
            conflictMessage:
              'Der:Die Antragsteller:in kann nur entweder ein:e Jugendliche:r oder ein Kind sein.',
          },
          {
            conflictingFieldId: 'geistigeBehinderungErw',
            conflictMessage:
              'Der:Die Antragsteller:in kann nur entweder ein:e Jugendliche:r oder ein:e Erwachsene:r sein.',
          },
        ],
      },
      {
        id: 'geistigeBehinderungErw',
        dailyMinutes: dailyMinutes(45),
        label: 'geisitge Behinderung (Erwachsene)',
        description:
          'Pauschalwertung für die Betreuung von Menschen mit schweren geistigen oder psychischen Behinderungen ab dem vollendeten 15. Lebensjahr. Vor allem demezielle Erkrankungen werden hierbei gewertet.',
        exclusive: [
          {
            conflictingFieldId: 'geistigeBehinderungKind',
            conflictMessage:
              'Der:Die Antragsteller:in kann nur entweder ein:e Erwachsene:r oder ein Kind sein.',
          },
          {
            conflictingFieldId: 'geistigeBehinderungJugend',
            conflictMessage:
              'Der:Die Antragsteller:in kann nur entweder ein:e Erwachsene:r oder ein:e Jugendliche:r sein.',
          },
        ],
      },
    ],
  },
  {
    name: 'Erschwernisse',
    fields: [
      {
        id: 'staendigerPflegebedarf',
        label: 'Ständiger Pflegebedarf',
        description:
          'Ständiger Pflegebedarf liegt vor, wenn dieser täglich oder zumindest mehrmals wöchentlich regelmäßig gegeben ist. Ohne diese Voraussetzung kann kein Pflegegeld zuerkannt werden.',
      },
      {
        id: 'aussergewoehnlicherPflegebedarf',
        dailyMinutes: dailyMinutes(75),
        label: 'Außergewöhnlicher Pflegebedarf',
        description:
          'Ein außergewöhnlicher Pflegeaufwand liegt insbesondere vor, wenn die dauernde Bereitschaft, nicht jedoch die dauernde Anwesenheit einer Pflegeperson oder die regelmäßige Nachschau durch eine Pflegeperson in relativ kurzen, jedoch planbaren Zeitabständen erforderlich ist, wobei zumindest eine einmalige Nachschau auch in den Nachtstunden erforderlich sein muss oder mehr als 5 Pflegeeinheiten, davon eine auch in den Nachtstunden, erforderlich sind.',
      },
      {
        id: 'unkoordinierbareBetreuung',
        label: 'zeitlich unkoordinierbare Betreuung',
        description:
          'Zeitlich unkoordinierbare Betreuungsmaßnahmen liegen dann vor, wenn ein Pflegeplan wegen einer körperlichen, geistigen oder psychischen Behinderung oder einer Sinnesbehinderung des pflegebedürftigen Menschen nicht eingehalten werden kann und die Betreuungsmaßnahme unverzüglich erbracht werden muss.',
      },
      {
        id: 'keineZielgerichteteBewegung',
        label: 'keine zielgerichtete Bewegung',
        description:
          'Der pflegebedürftige Mensch kann keine zielgerichteten Bewegungen der Arme und Beine durchführen, die einem funktioniellen Zweck dienen. Menschen, die selbst mit einem Becher trinken können, können demnach nicht diese Einstufung erhalten. Es ist jedoch auch ein gleichzuachtender Zustand zu bewerten, der gelegentlich bei schwer dementen Personen auftritt. Diese können sich zwar bewegen, jedoch ist die Bewegung nicht funktional und verfolgt keinen Zweck.',
      },
    ],
  },
  {
    name: 'Mindesteinstufungen',
    fields: [
      {
        id: 'behinderungErwachsene',
        label: 'Behinderung Erwachsene',
        description:
          'Personen, die das 14. Lebensjahr vollendet haben und auf Grund einer Querschnittlähmung, einer beidseitigen Beinamputation, einer genetischen Muskeldystrophie, einer Encephalitis disseminata oder einer infantilen Cerebralparese zur eigenständigen Lebensführung überwiegend auf den selbständigen Gebrauch eines Rollstuhles oder eines technisch adaptierten Rollstuhles angewiesen sind.',
      },
      {
        id: 'BehinderungErwachseneStuhlHarn',
        label: 'zusätzliche Inkontinenz',
        description:
          'Personen, bei denen zusätzlich zum Feld "Behinderung Erwachsene" eine Stuhl- oder Harninkontinenz bzw. eine Blasen- oder Mastdarmlähmung vorliegt.',
        dependent: [
          {
            requiredField: 'behinderungErwachsene',
            requiredMessage:
              'Um dieses Feld auswählen zu können, muss das Feld Behinderung Erwachsene ebenfalls ausgewählt werden.',
          },
        ],
      },
      {
        id: 'BehinderungErwachseneObereExtremitaet',
        label: 'zusätzlicher Ausfall obere Extremitäten',
        description:
          'Personen, bei denen zusätzlich zum Feld "Behinderung Erwachsene" ein deutlicher Ausfall von Funktionen der oberen Extremitäten vorliegt.',
        dependent: [
          {
            requiredField: 'behinderungErwachsene',
            requiredMessage:
              'Um dieses Feld auswählen zu können, muss das Feld Behinderung Erwachsene ebenfalls ausgewählt werden.',
          },
        ],
      },
      {
        id: 'sehbehinderung',
        label: 'hochgradige Sehbehinderung',
        description:
          'Als hochgradig sehbehindert gilt, wer am besseren Auge mit optimaler Korrektur eine Sehleistung mit einem Visus von kleiner oder gleich 0,05 (3/60) ohne Gesichtsfeldeinschränkung hat oder einem Visus von kleiner oder gleich 0,1 (6/60) in Verbindung mit einer Quadrantenanopsie hat oder einem Visus von kleiner oder gleich 0,3 (6/20) in Verbindung mit einer Hemianopsie hat oder einem Visus von kleiner oder gleich 1,0 (6/6) in Verbindung mit einer röhrenförmigen Gesichtsfeldeinschränkung hat.',
        exclusive: [
          {
            conflictingFieldId: 'blindheit',
            conflictMessage:
              'Es kann nur entweder eine hochgradige Sehbehinderung oder Blindheit ausgewählt werden.',
          },
          {
            conflictingFieldId: 'taubblindheit',
            conflictMessage:
              'Es kann nur entweder eine hochgradige Sehbehinderung oder Taubblindheit ausgewählt werden.',
          },
        ],
      },
      {
        id: 'blindheit',
        label: 'Bindheit',
        description:
          'Als blind gilt, wer am besseren Auge mit optimaler Korrektur eine Sehleistung mit einem Visus von kleiner oder gleich 0,02 (1/60) ohne Gesichtsfeldeinschränkung hat oder einem Visus von kleiner oder gleich 0,03 (2/60) in Verbindung mit einer Quadrantenanopsie hat oder einem Visus von kleiner oder gleich 0,06 (4/60) in Verbindung mit einer Hemianopsie hat oder einem Visus von kleiner oder gleich 0,1 (6/60) in Verbindung mit einer röhrenförmigen Gesichtsfeldeinschränkung hat.',
        exclusive: [
          {
            conflictingFieldId: 'sehbehinderung',
            conflictMessage:
              'Es kann nur entweder Blindheit oder eine hochgradige Sehbehinderung ausgewählt werden.',
          },
          {
            conflictingFieldId: 'taubblindheit',
            conflictMessage: 'Es kann nur entweder Blindheit oder Taubblindheit ausgewählt werden.',
          },
        ],
      },
      {
        id: 'taubblindheit',
        label: 'Taubblindheit',
        description:
          'Als taubblind gelten Blinde nach den Einstufungsregeln des Feldes "Blindheit", deren Hörvermögen so hochgradig eingeschränkt ist, dass eine verbale und akustische Kommunikation mit der Umwelt nicht möglich ist.',
        exclusive: [
          {
            conflictingFieldId: 'sehbehinderung',
            conflictMessage:
              'Es kann nur entweder Taubblindheit oder eine hochgradige Sehbehinderung ausgewählt werden',
          },
          {
            conflictingFieldId: 'blindheit',
            conflictMessage: 'Es kann nur entweder Taubblindheit oder Blindheit ausgewählt werden.',
          },
        ],
      },
    ],
  },
] as const;

function dailyMinutes(hoursPerMonth: number) {
  return (hoursPerMonth * 60) / 30;
}
