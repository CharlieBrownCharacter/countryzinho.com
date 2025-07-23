import type { Country } from '@/services/resources/country/types.ts'

export type GuessedCountry = { guessed: boolean; country: Country }

export type GuessedCountriesMap = Record<Country['isoAlpha2Code'], GuessedCountry>

export const countries: Country[] = [
  {
    name: 'Afghanistan',
    isoAlpha2Code: 'AF',
    continents: ['asia'],
    allowedGuesses: {
      en: ['afghanistan'],
      es: ['afganistán', 'afganistan'],
      pt: ['afeganistão', 'afeganistao'],
    },
  },
  {
    name: 'Albania',
    isoAlpha2Code: 'AL',
    continents: ['europe'],
    allowedGuesses: {
      en: ['albania'],
      es: ['albania'],
      pt: ['albânia', 'albania'],
    },
  },
  {
    name: 'Algeria',
    isoAlpha2Code: 'DZ',
    continents: ['africa'],
    allowedGuesses: {
      en: ['algeria'],
      es: ['argelia'],
      pt: ['argélia', 'argelia'],
    },
  },
  {
    name: 'American Samoa',
    isoAlpha2Code: 'AS',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['american samoa'],
      es: ['samoa americana'],
      pt: ['samoa americana'],
    },
  },
  {
    name: 'Andorra',
    isoAlpha2Code: 'AD',
    continents: ['europe'],
    allowedGuesses: {
      en: ['andorra'],
      es: ['andorra'],
      pt: ['andorra'],
    },
  },
  {
    name: 'Angola',
    isoAlpha2Code: 'AO',
    continents: ['africa'],
    allowedGuesses: {
      en: ['angola'],
      es: ['angola'],
      pt: ['angola'],
    },
  },
  {
    name: 'Anguilla',
    isoAlpha2Code: 'AI',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['anguilla'],
      es: ['anguilla'],
      pt: ['anguilla'],
    },
  },

  {
    name: 'Antarctica',
    isoAlpha2Code: 'AQ',
    continents: ['antarctica'],
    allowedGuesses: {
      en: ['antarctica'],
      es: ['antártida', 'antartida'],
      pt: ['antártica', 'antartica'],
    },
  },
  {
    name: 'Antigua and Barbuda',
    isoAlpha2Code: 'AG',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['antigua and barbuda'],
      es: ['antigua y barbuda'],
      pt: ['antígua e barbuda', 'antigua e barbuda'],
    },
  },
  {
    name: 'Aruba',
    isoAlpha2Code: 'AW',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['aruba'],
      es: ['aruba'],
      pt: ['aruba'],
    },
  },
  {
    name: 'Argentina',
    isoAlpha2Code: 'AR',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['argentina'],
      es: ['argentina'],
      pt: ['argentina'],
    },
  },
  {
    name: 'Armenia',
    isoAlpha2Code: 'AM',
    continents: ['asia', 'europe'],
    allowedGuesses: {
      en: ['armenia'],
      es: ['armenia'],
      pt: ['armênia', 'armenia'],
    },
  },
  {
    name: 'Australia',
    isoAlpha2Code: 'AU',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['australia'],
      es: ['australia'],
      pt: ['austrália', 'australia'],
    },
  },
  {
    name: 'Austria',
    isoAlpha2Code: 'AT',
    continents: ['europe'],
    allowedGuesses: {
      en: ['austria'],
      es: ['austria'],
      pt: ['áustria', 'austria'],
    },
  },
  {
    name: 'Azerbaijan',
    isoAlpha2Code: 'AZ',
    continents: ['asia', 'europe'],
    allowedGuesses: {
      en: ['azerbaijan'],
      es: ['azerbaiyán', 'azerbaiyan'],
      pt: ['azerbaijão', 'azerbaijao'],
    },
  },
  {
    name: 'Bahamas',
    isoAlpha2Code: 'BS',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['bahamas'],
      es: ['bahamas'],
      pt: ['bahamas'],
    },
  },
  {
    name: 'Bahrain',
    isoAlpha2Code: 'BH',
    continents: ['asia'],
    allowedGuesses: {
      en: ['bahrain'],
      es: ['baréin', 'barein'],
      pt: ['bareine', 'barein'],
    },
  },
  {
    name: 'Bangladesh',
    isoAlpha2Code: 'BD',
    continents: ['asia'],
    allowedGuesses: {
      en: ['bangladesh'],
      es: ['bangladés', 'banglades'],
      pt: ['bangladesh'],
    },
  },
  {
    name: 'Barbados',
    isoAlpha2Code: 'BB',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['barbados'],
      es: ['barbados'],
      pt: ['barbados'],
    },
  },
  {
    name: 'Belarus',
    isoAlpha2Code: 'BY',
    continents: ['europe'],
    allowedGuesses: {
      en: ['belarus'],
      es: ['bielorrusia'],
      pt: ['bielorrússia', 'bielorrussia'],
    },
  },
  {
    name: 'Belgium',
    isoAlpha2Code: 'BE',
    continents: ['europe'],
    allowedGuesses: {
      en: ['belgium'],
      es: ['bélgica', 'belgica'],
      pt: ['bélgica', 'belgica'],
    },
  },
  {
    name: 'Belize',
    isoAlpha2Code: 'BZ',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['belize'],
      es: ['belice'],
      pt: ['belize'],
    },
  },
  {
    name: 'Benin',
    isoAlpha2Code: 'BJ',
    continents: ['africa'],
    allowedGuesses: {
      en: ['benin'],
      es: ['benín', 'benin'],
      pt: ['benim'],
    },
  },
  {
    name: 'Bermuda',
    isoAlpha2Code: 'BM',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['bermuda'],
      es: ['bermudas'],
      pt: ['bermudas'],
    },
  },
  {
    name: 'Bhutan',
    isoAlpha2Code: 'BT',
    continents: ['asia'],
    allowedGuesses: {
      en: ['bhutan'],
      es: ['bután', 'butan'],
      pt: ['butão', 'butao'],
    },
  },
  {
    name: 'Bolivia',
    isoAlpha2Code: 'BO',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['bolivia'],
      es: ['bolivia'],
      pt: ['bolívia', 'bolivia'],
    },
  },
  {
    name: 'Bosnia and Herzegovina',
    isoAlpha2Code: 'BA',
    continents: ['europe'],
    allowedGuesses: {
      en: ['bosnia and herzegovina', 'bosnia'],
      es: ['bosnia y herzegovina', 'bosnia'],
      pt: ['bósnia e herzegovina', 'bosnia e herzegovina', 'bósnia', 'bosnia'],
    },
  },
  {
    name: 'Botswana',
    isoAlpha2Code: 'BW',
    continents: ['africa'],
    allowedGuesses: {
      en: ['botswana'],
      es: ['botsuana'],
      pt: ['botsuana'],
    },
  },
  {
    name: 'Brazil',
    isoAlpha2Code: 'BR',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['brazil'],
      es: ['brasil'],
      pt: ['brasil'],
    },
  },
  {
    name: 'British Indian Ocean Territory',
    isoAlpha2Code: 'IO',
    continents: ['asia'],
    allowedGuesses: {
      en: ['british indian ocean territory'],
      es: ['territorio británico del océano Índico', 'territorio britanico del oceano indico'],
      pt: ['território britânico do oceano índico', 'territorio britanico do oceano indico'],
    },
  },
  {
    name: 'British Virgin Islands',
    isoAlpha2Code: 'VG',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['british virgin islands', 'virgin islands'],
      es: [
        'islas vírgenes británicas',
        'islas virgenes britanicas',
        'islas vírgenes',
        'islas virgenes',
      ],
      pt: ['ilhas virgens britânicas', 'ilhas virgens britanicas', 'ilhas virgens'],
    },
  },
  {
    name: 'Brunei Darussalam',
    isoAlpha2Code: 'BN',
    continents: ['asia'],
    allowedGuesses: {
      en: ['brunei', 'brunei darussalam'],
      es: ['brunéi', 'brunei darussalam'],
      pt: ['brunei', 'brunei darussalam'],
    },
  },
  {
    name: 'Bulgaria',
    isoAlpha2Code: 'BG',
    continents: ['europe'],
    allowedGuesses: {
      en: ['bulgaria'],
      es: ['bulgaria'],
      pt: ['búlgaria', 'bulgaria'],
    },
  },
  {
    name: 'Burkina Faso',
    isoAlpha2Code: 'BF',
    continents: ['africa'],
    allowedGuesses: {
      en: ['burkina faso'],
      es: ['burkina faso'],
      pt: ['burkina faso'],
    },
  },
  {
    name: 'Burundi',
    isoAlpha2Code: 'BI',
    continents: ['africa'],
    allowedGuesses: {
      en: ['burundi'],
      es: ['burundi'],
      pt: ['burundi'],
    },
  },
  {
    name: 'Cambodia',
    isoAlpha2Code: 'KH',
    continents: ['asia'],
    allowedGuesses: {
      en: ['cambodia'],
      es: ['camboya'],
      pt: ['camboja'],
    },
  },
  {
    name: 'Cameroon',
    isoAlpha2Code: 'CM',
    continents: ['africa'],
    allowedGuesses: {
      en: ['cameroon'],
      es: ['camerún', 'camerun'],
      pt: ['camarões', 'camaroes'],
    },
  },
  {
    name: 'Canada',
    isoAlpha2Code: 'CA',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['canada'],
      es: ['canadá', 'canada'],
      pt: ['canadá', 'canada'],
    },
  },
  {
    name: 'Cape Verde',
    isoAlpha2Code: 'CV',
    continents: ['africa'],
    allowedGuesses: {
      en: ['cape verde'],
      es: ['cabo verde'],
      pt: ['cabo verde'],
    },
  },
  {
    name: 'Cayman Islands',
    isoAlpha2Code: 'KY',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['cayman islands'],
      es: ['islas cayman'],
      pt: ['ilhas cayman'],
    },
  },
  {
    name: 'Central African Republic',
    isoAlpha2Code: 'CF',
    continents: ['africa'],
    allowedGuesses: {
      en: ['central african republic'],
      es: ['república centroafricana', 'republica centroafricana'],
      pt: ['república centro-africana', 'republica centro-africana'],
    },
  },
  {
    name: 'Chad',
    isoAlpha2Code: 'TD',
    continents: ['africa'],
    allowedGuesses: {
      en: ['chad'],
      es: ['chad'],
      pt: ['chade'],
    },
  },
  {
    name: 'Chile',
    isoAlpha2Code: 'CL',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['chile'],
      es: ['chile'],
      pt: ['chile'],
    },
  },
  {
    name: 'China',
    isoAlpha2Code: 'CN',
    continents: ['asia'],
    allowedGuesses: {
      en: ['china'],
      es: ['china'],
      pt: ['china'],
    },
  },
  {
    name: "Côte d'Ivoire",
    isoAlpha2Code: 'CI',
    continents: ['africa'],
    allowedGuesses: {
      en: ['cote divoire', 'ivore', 'ivory coast', "cote d'ivoire"],
      es: ['costa de marfil', 'costa marfil'],
      pt: ['costa do marfim', 'costa marfim'],
    },
  },
  {
    name: 'Colombia',
    isoAlpha2Code: 'CO',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['colombia'],
      es: ['colombia'],
      pt: ['colômbia', 'colombia'],
    },
  },
  {
    name: 'Comoros',
    isoAlpha2Code: 'KM',
    continents: ['africa'],
    allowedGuesses: {
      en: ['comoros'],
      es: ['comoras'],
      pt: ['comores'],
    },
  },
  {
    name: 'Congo',
    isoAlpha2Code: 'CG',
    continents: ['africa'],
    allowedGuesses: {
      en: ['congo'],
      es: ['congo'],
      pt: ['congo'],
    },
  },
  {
    name: 'Cook Islands',
    isoAlpha2Code: 'CK',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['cook islands'],
      es: ['islas cook'],
      pt: ['ilhas cook'],
    },
  },
  {
    name: 'Costa Rica',
    isoAlpha2Code: 'CR',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['costa rica'],
      es: ['costa rica'],
      pt: ['costa rica'],
    },
  },
  {
    name: 'Croatia',
    isoAlpha2Code: 'HR',
    continents: ['europe'],
    allowedGuesses: {
      en: ['croatia'],
      es: ['croacia'],
      pt: ['croácia', 'croacia'],
    },
  },
  {
    name: 'Cuba',
    isoAlpha2Code: 'CU',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['cuba'],
      es: ['cuba'],
      pt: ['cuba'],
    },
  },
  {
    name: 'Curacao',
    isoAlpha2Code: 'CW',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['curacao'],
      es: ['curaçao', 'curacao'],
      pt: ['curaçao', 'curacao'],
    },
  },
  {
    name: 'Cyprus',
    isoAlpha2Code: 'CY',
    continents: ['asia', 'europe'],
    allowedGuesses: {
      en: ['cyprus'],
      es: ['chipre'],
      pt: ['chipre'],
    },
  },
  {
    name: 'Czech Republic',
    isoAlpha2Code: 'CZ',
    continents: ['europe'],
    allowedGuesses: {
      en: ['czech republic', 'czechia'],
      es: ['república checa', 'chequia'],
      pt: ['república tcheca', 'chequia'],
    },
  },
  {
    name: 'Democratic Republic of the Congo',
    isoAlpha2Code: 'CD',
    continents: ['africa'],
    allowedGuesses: {
      en: ['democratic republic of the congo', 'drc'],
      es: ['república democrática del congo', 'rdc'],
      pt: ['república democrática do congo', 'rdc'],
    },
  },
  {
    name: 'Denmark',
    isoAlpha2Code: 'DK',
    continents: ['europe'],
    allowedGuesses: {
      en: ['denmark'],
      es: ['dinamarca'],
      pt: ['dinamarca'],
    },
  },
  {
    name: 'Djibouti',
    isoAlpha2Code: 'DJ',
    continents: ['africa'],
    allowedGuesses: {
      en: ['djibouti'],
      es: ['yibuti'],
      pt: ['jibuti'],
    },
  },
  {
    name: 'Dominica',
    isoAlpha2Code: 'DM',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['dominica'],
      es: ['dominica'],
      pt: ['dominica'],
    },
  },
  {
    name: 'Dominican Republic',
    isoAlpha2Code: 'DO',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['dominican republic'],
      es: ['república dominicana', 'republica dominicana'],
      pt: ['república dominicana', 'republica dominicana'],
    },
  },
  {
    name: 'Ecuador',
    isoAlpha2Code: 'EC',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['ecuador'],
      es: ['ecuador'],
      pt: ['equador'],
    },
  },
  {
    name: 'Egypt',
    isoAlpha2Code: 'EG',
    continents: ['africa', 'asia'],
    allowedGuesses: {
      en: ['egypt'],
      es: ['egipto'],
      pt: ['egito'],
    },
  },
  {
    name: 'El Salvador',
    isoAlpha2Code: 'SV',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['el salvador'],
      es: ['el salvador'],
      pt: ['el salvador'],
    },
  },
  {
    name: 'Equatorial Guinea',
    isoAlpha2Code: 'GQ',
    continents: ['africa'],
    allowedGuesses: {
      en: ['equatorial guinea'],
      es: ['guinea ecuatorial'],
      pt: ['guiné equatorial', 'guine equatorial'],
    },
  },
  {
    name: 'Eritrea',
    isoAlpha2Code: 'ER',
    continents: ['africa'],
    allowedGuesses: {
      en: ['eritrea'],
      es: ['eritrea'],
      pt: ['eritreia'],
    },
  },
  {
    name: 'Estonia',
    isoAlpha2Code: 'EE',
    continents: ['europe'],
    allowedGuesses: {
      en: ['estonia'],
      es: ['estonia'],
      pt: ['estônia', 'estonia'],
    },
  },
  {
    name: 'Eswatini',
    isoAlpha2Code: 'SZ',
    continents: ['africa'],
    allowedGuesses: {
      en: ['eswatini', 'swaziland'],
      es: ['esuatini', 'suazilandia'],
      pt: ['eswatini', 'suazilândia', 'suazilandia'],
    },
  },
  {
    name: 'Ethiopia',
    isoAlpha2Code: 'ET',
    continents: ['africa'],
    allowedGuesses: {
      en: ['ethiopia'],
      es: ['etiopía', 'etiopia'],
      pt: ['etiópia', 'etiopia'],
    },
  },
  {
    name: 'Falkland Islands',
    isoAlpha2Code: 'FK',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['falkland islands'],
      es: ['islas malvinas'],
      pt: ['ilhas malvinas'],
    },
  },
  {
    name: 'Faroe Islands',
    isoAlpha2Code: 'FO',
    continents: ['europe'],
    allowedGuesses: {
      en: ['faroe islands'],
      es: ['islas feroe', 'islas féroe'],
      pt: ['ilhas feroé', 'ilhas feroe'],
    },
  },
  {
    name: 'Fiji',
    isoAlpha2Code: 'FJ',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['fiji'],
      es: ['fiyi'],
      pt: ['fiji'],
    },
  },
  {
    name: 'Finland',
    isoAlpha2Code: 'FI',
    continents: ['europe'],
    allowedGuesses: {
      en: ['finland'],
      es: ['finlandia'],
      pt: ['finlândia', 'finlandia'],
    },
  },
  {
    name: 'France',
    isoAlpha2Code: 'FR',
    continents: ['europe'],
    allowedGuesses: {
      en: ['france'],
      es: ['francia'],
      pt: ['frança', 'franca'],
    },
  },
  {
    name: 'French Polynesia',
    isoAlpha2Code: 'PF',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['french polynesia'],
      es: ['polinesia francesa'],
      pt: ['polinésia francesa', 'polinesia francesa'],
    },
  },
  {
    name: 'French Southern Territories',
    isoAlpha2Code: 'TF',
    continents: ['antarctica'],
    allowedGuesses: {
      en: ['french southern territories'],
      es: ['territorios australes franceses'],
      pt: ['territórios franceses do sul', 'territorios franceses do sul'],
    },
  },
  {
    name: 'Gabon',
    isoAlpha2Code: 'GA',
    continents: ['africa'],
    allowedGuesses: {
      en: ['gabon'],
      es: ['gabón', 'gabon'],
      pt: ['gabão', 'gabao'],
    },
  },
  {
    name: 'Gambia',
    isoAlpha2Code: 'GM',
    continents: ['africa'],
    allowedGuesses: {
      en: ['gambia'],
      es: ['gambia'],
      pt: ['gâmbia', 'gambia'],
    },
  },
  {
    name: 'Georgia',
    isoAlpha2Code: 'GE',
    continents: ['asia', 'europe'],
    allowedGuesses: {
      en: ['georgia'],
      es: ['georgia'],
      pt: ['geórgia', 'georgia'],
    },
  },
  {
    name: 'Germany',
    isoAlpha2Code: 'DE',
    continents: ['europe'],
    allowedGuesses: {
      en: ['germany'],
      es: ['alemania'],
      pt: ['alemanha'],
    },
  },
  {
    name: 'Ghana',
    isoAlpha2Code: 'GH',
    continents: ['africa'],
    allowedGuesses: {
      en: ['ghana'],
      es: ['ghana'],
      pt: ['ghana'],
    },
  },
  {
    name: 'Gibraltar',
    isoAlpha2Code: 'GI',
    continents: ['europe'],
    allowedGuesses: {
      en: ['gibraltar'],
      es: ['gibraltar'],
      pt: ['gibraltar'],
    },
  },
  {
    name: 'Greece',
    isoAlpha2Code: 'GR',
    continents: ['europe'],
    allowedGuesses: {
      en: ['greece'],
      es: ['grecia'],
      pt: ['grécia', 'grecia'],
    },
  },
  {
    name: 'Greenland',
    isoAlpha2Code: 'GL',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['greenland'],
      es: ['groenlandia'],
      pt: ['groenlândia', 'groenlandia'],
    },
  },
  {
    name: 'Grenada',
    isoAlpha2Code: 'GD',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['grenada'],
      es: ['granada'],
      pt: ['granada'],
    },
  },
  {
    name: 'Guam',
    isoAlpha2Code: 'GU',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['guam'],
      es: ['guam'],
      pt: ['guam'],
    },
  },
  {
    name: 'Guatemala',
    isoAlpha2Code: 'GT',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['guatemala'],
      es: ['guatemala'],
      pt: ['guatemala'],
    },
  },
  {
    name: 'Guernsey',
    isoAlpha2Code: 'GG',
    continents: ['europe'],
    allowedGuesses: {
      en: ['guernsey'],
      es: ['guernsey'],
      pt: ['guernsey'],
    },
  },
  {
    name: 'Guinea',
    isoAlpha2Code: 'GN',
    continents: ['africa'],
    allowedGuesses: {
      en: ['guinea'],
      es: ['guinea'],
      pt: ['guiné', 'guine'],
    },
  },
  {
    name: 'Guinea-Bissau',
    isoAlpha2Code: 'GW',
    continents: ['africa'],
    allowedGuesses: {
      en: ['guinea-bissau'],
      es: ['guinea-bisáu', 'guinea-bisau'],
      pt: ['guiné-bissau', 'guine-bissau'],
    },
  },
  {
    name: 'Guyana',
    isoAlpha2Code: 'GY',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['guyana'],
      es: ['guyana'],
      pt: ['guiana'],
    },
  },
  {
    name: 'Haiti',
    isoAlpha2Code: 'HT',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['haiti'],
      es: ['haití', 'haiti'],
      pt: ['haiti'],
    },
  },
  {
    name: 'Holy See',
    isoAlpha2Code: 'VA',
    continents: ['europe'],
    allowedGuesses: {
      en: ['holy see', 'vatican city'],
      es: ['santa sede', 'ciudad del vaticano', 'vaticano'],
      pt: ['santa sé', 'santa se', 'cidade do vaticano', 'vaticano'],
    },
  },
  {
    name: 'Honduras',
    isoAlpha2Code: 'HN',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['honduras'],
      es: ['honduras'],
      pt: ['honduras'],
    },
  },
  {
    name: 'Hungary',
    isoAlpha2Code: 'HU',
    continents: ['europe'],
    allowedGuesses: {
      en: ['hungary'],
      es: ['hungría', 'hungria'],
      pt: ['hungria'],
    },
  },
  {
    name: 'Iceland',
    isoAlpha2Code: 'IS',
    continents: ['europe'],
    allowedGuesses: {
      en: ['iceland'],
      es: ['islandia'],
      pt: ['islândia', 'islandia'],
    },
  },
  {
    name: 'India',
    isoAlpha2Code: 'IN',
    continents: ['asia'],
    allowedGuesses: {
      en: ['india'],
      es: ['india'],
      pt: ['índia', 'india'],
    },
  },
  {
    name: 'Indonesia',
    isoAlpha2Code: 'ID',
    continents: ['asia', 'oceania'],
    allowedGuesses: {
      en: ['indonesia'],
      es: ['indonesia'],
      pt: ['indonésia', 'indonesia'],
    },
  },
  {
    name: 'Iran',
    isoAlpha2Code: 'IR',
    continents: ['asia'],
    allowedGuesses: {
      en: ['iran'],
      es: ['irán', 'iran'],
      pt: ['irã', 'ira'],
    },
  },
  {
    name: 'Iraq',
    isoAlpha2Code: 'IQ',
    continents: ['asia'],
    allowedGuesses: {
      en: ['iraq'],
      es: ['iraq'],
      pt: ['iraque'],
    },
  },
  {
    name: 'Ireland',
    isoAlpha2Code: 'IE',
    continents: ['europe'],
    allowedGuesses: {
      en: ['ireland'],
      es: ['irlanda'],
      pt: ['irlanda'],
    },
  },
  {
    name: 'Isle of Man',
    isoAlpha2Code: 'IM',
    continents: ['europe'],
    allowedGuesses: {
      en: ['isle of man'],
      es: ['isla de man'],
      pt: ['ilha de man'],
    },
  },
  {
    name: 'Israel',
    isoAlpha2Code: 'IL',
    continents: ['asia'],
    allowedGuesses: {
      en: ['israel'],
      es: ['israel'],
      pt: ['israel'],
    },
  },
  {
    name: 'Italy',
    isoAlpha2Code: 'IT',
    continents: ['europe'],
    allowedGuesses: {
      en: ['italy'],
      es: ['italia', 'italía'],
      pt: ['itália', 'italia'],
    },
  },
  {
    name: 'Jamaica',
    isoAlpha2Code: 'JM',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['jamaica'],
      es: ['jamaica'],
      pt: ['jamaica'],
    },
  },
  {
    name: 'Japan',
    isoAlpha2Code: 'JP',
    continents: ['asia'],
    allowedGuesses: {
      en: ['japan'],
      es: ['japón', 'japon'],
      pt: ['japão', 'japao'],
    },
  },
  {
    name: 'Jersey',
    isoAlpha2Code: 'JE',
    continents: ['europe'],
    allowedGuesses: {
      en: ['jersey'],
      es: ['jersey'],
      pt: ['jersey'],
    },
  },
  {
    name: 'Jordan',
    isoAlpha2Code: 'JO',
    continents: ['asia'],
    allowedGuesses: {
      en: ['jordan'],
      es: ['jordania'],
      pt: ['jordânia', 'jordania'],
    },
  },
  {
    name: 'Kazakhstan',
    isoAlpha2Code: 'KZ',
    continents: ['asia', 'europe'],
    allowedGuesses: {
      en: ['kazakhstan'],
      es: ['kazajistán', 'kazajistan'],
      pt: ['cazaquistão', 'cazaquistao'],
    },
  },
  {
    name: 'Kenya',
    isoAlpha2Code: 'KE',
    continents: ['africa'],
    allowedGuesses: {
      en: ['kenya'],
      es: ['kenia'],
      pt: ['quênia', 'quenia'],
    },
  },
  {
    name: 'Kiribati',
    isoAlpha2Code: 'KI',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['kiribati'],
      es: ['kiribati'],
      pt: ['kiribati'],
    },
  },
  {
    name: 'Korea (North)',
    isoAlpha2Code: 'KP',
    continents: ['asia'],
    allowedGuesses: {
      en: ['north korea', 'korea north', 'korea (north)'],
      es: ['corea del norte', 'corea norte'],
      pt: ['coreia do norte', 'coreia norte'],
    },
  },
  {
    name: 'Korea (South)',
    isoAlpha2Code: 'KR',
    continents: ['asia'],
    allowedGuesses: {
      en: ['south korea', 'korea south', 'korea (south)'],
      es: ['corea del sur', 'corea sur'],
      pt: ['coreia do sul', 'coreia sul'],
    },
  },
  {
    name: 'Kuwait',
    isoAlpha2Code: 'KW',
    continents: ['asia'],
    allowedGuesses: {
      en: ['kuwait'],
      es: ['kuwait'],
      pt: ['kuwait'],
    },
  },
  {
    name: 'Kyrgyzstan',
    isoAlpha2Code: 'KG',
    continents: ['asia'],
    allowedGuesses: {
      en: ['kyrgyzstan'],
      es: ['kirguistán', 'kirguistan'],
      pt: ['quirguistão', 'quirguistao'],
    },
  },
  {
    name: 'Laos',
    isoAlpha2Code: 'LA',
    continents: ['asia'],
    allowedGuesses: {
      en: ['laos', 'lao pdr'],
      es: ['laos', 'rp laos'],
      pt: ['laos', 'rp laos'],
    },
  },
  {
    name: 'Latvia',
    isoAlpha2Code: 'LV',
    continents: ['europe'],
    allowedGuesses: {
      en: ['latvia'],
      es: ['letonia'],
      pt: ['letônia', 'letonia'],
    },
  },
  {
    name: 'Lebanon',
    isoAlpha2Code: 'LB',
    continents: ['asia'],
    allowedGuesses: {
      en: ['lebanon'],
      es: ['líbano', 'libano'],
      pt: ['líbano', 'libano'],
    },
  },
  {
    name: 'Lesotho',
    isoAlpha2Code: 'LS',
    continents: ['africa'],
    allowedGuesses: {
      en: ['lesotho'],
      es: ['lesoto'],
      pt: ['lesoto'],
    },
  },
  {
    name: 'Liberia',
    isoAlpha2Code: 'LR',
    continents: ['africa'],
    allowedGuesses: {
      en: ['liberia'],
      es: ['liberia'],
      pt: ['libéria', 'liberia'],
    },
  },
  {
    name: 'Libya',
    isoAlpha2Code: 'LY',
    continents: ['africa'],
    allowedGuesses: {
      en: ['libya'],
      es: ['libia'],
      pt: ['líbia', 'libia'],
    },
  },
  {
    name: 'Liechtenstein',
    isoAlpha2Code: 'LI',
    continents: ['europe'],
    allowedGuesses: {
      en: ['liechtenstein'],
      es: ['liechtenstein'],
      pt: ['liechtenstein'],
    },
  },
  {
    name: 'Lithuania',
    isoAlpha2Code: 'LT',
    continents: ['europe'],
    allowedGuesses: {
      en: ['lithuania'],
      es: ['lituania'],
      pt: ['lituânia', 'lituania'],
    },
  },
  {
    name: 'Luxembourg',
    isoAlpha2Code: 'LU',
    continents: ['europe'],
    allowedGuesses: {
      en: ['luxembourg'],
      es: ['luxemburgo'],
      pt: ['luxemburgo'],
    },
  },
  {
    name: 'Madagascar',
    isoAlpha2Code: 'MG',
    continents: ['africa'],
    allowedGuesses: {
      en: ['madagascar'],
      es: ['madagascar'],
      pt: ['madagáscar', 'madagascar'],
    },
  },
  {
    name: 'Malawi',
    isoAlpha2Code: 'MW',
    continents: ['africa'],
    allowedGuesses: {
      en: ['malawi'],
      es: ['malaui'],
      pt: ['malawi'],
    },
  },
  {
    name: 'Malaysia',
    isoAlpha2Code: 'MY',
    continents: ['asia'],
    allowedGuesses: {
      en: ['malaysia'],
      es: ['malasia'],
      pt: ['malásia', 'malasia'],
    },
  },
  {
    name: 'Maldives',
    isoAlpha2Code: 'MV',
    continents: ['asia'],
    allowedGuesses: {
      en: ['maldives'],
      es: ['maldivas'],
      pt: ['maldivas'],
    },
  },
  {
    name: 'Mali',
    isoAlpha2Code: 'ML',
    continents: ['africa'],
    allowedGuesses: {
      en: ['mali'],
      es: ['mali'],
      pt: ['mali'],
    },
  },
  {
    name: 'Malta',
    isoAlpha2Code: 'MT',
    continents: ['europe'],
    allowedGuesses: {
      en: ['malta'],
      es: ['malta'],
      pt: ['malta'],
    },
  },
  {
    name: 'Marshall Islands',
    isoAlpha2Code: 'MH',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['marshall islands'],
      es: ['islas marshall'],
      pt: ['ilhas marshal', 'ilhas marshall'],
    },
  },
  {
    name: 'Mauritania',
    isoAlpha2Code: 'MR',
    continents: ['africa'],
    allowedGuesses: {
      en: ['mauritania'],
      es: ['mauritania'],
      pt: ['mauritânia', 'mauritania'],
    },
  },
  {
    name: 'Mauritius',
    isoAlpha2Code: 'MU',
    continents: ['africa'],
    allowedGuesses: {
      en: ['mauritius'],
      es: ['mauricio'],
      pt: ['maurício', 'mauricio'],
    },
  },
  {
    name: 'Mexico',
    isoAlpha2Code: 'MX',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['mexico'],
      es: ['méxico', 'mexico'],
      pt: ['méxico', 'mexico'],
    },
  },
  {
    name: 'Micronesia',
    isoAlpha2Code: 'FM',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['micronesia'],
      es: ['micronesia'],
      pt: ['micronésia', 'micronesia'],
    },
  },
  {
    name: 'Moldova',
    isoAlpha2Code: 'MD',
    continents: ['europe'],
    allowedGuesses: {
      en: ['moldova'],
      es: ['moldavia'],
      pt: ['moldávia', 'moldavia'],
    },
  },
  {
    name: 'Monaco',
    isoAlpha2Code: 'MC',
    continents: ['europe'],
    allowedGuesses: {
      en: ['monaco'],
      es: ['mónaco', 'monaco'],
      pt: ['mônaco', 'monaco'],
    },
  },
  {
    name: 'Mongolia',
    isoAlpha2Code: 'MN',
    continents: ['asia'],
    allowedGuesses: {
      en: ['mongolia'],
      es: ['mongolia'],
      pt: ['mongólia', 'mongolia'],
    },
  },
  {
    name: 'Montenegro',
    isoAlpha2Code: 'ME',
    continents: ['europe'],
    allowedGuesses: {
      en: ['montenegro'],
      es: ['montenegro'],
      pt: ['montenegro'],
    },
  },
  {
    name: 'Montserrat',
    isoAlpha2Code: 'MS',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['montserrat'],
      es: ['montserrat'],
      pt: ['montserrat'],
    },
  },
  {
    name: 'Morocco',
    isoAlpha2Code: 'MA',
    continents: ['africa'],
    allowedGuesses: {
      en: ['morocco'],
      es: ['marruecos'],
      pt: ['marrocos'],
    },
  },
  {
    name: 'Mozambique',
    isoAlpha2Code: 'MZ',
    continents: ['africa'],
    allowedGuesses: {
      en: ['mozambique'],
      es: ['mozambique'],
      pt: ['moçambique', 'mozambique'],
    },
  },
  {
    name: 'Myanmar',
    isoAlpha2Code: 'MM',
    continents: ['asia'],
    allowedGuesses: {
      en: ['myanmar', 'burma'],
      es: ['myanmar', 'birmania', 'birmania'],
      pt: ['myanmar', 'birmânia', 'birmania'],
    },
  },
  {
    name: 'Namibia',
    isoAlpha2Code: 'NA',
    continents: ['africa'],
    allowedGuesses: {
      en: ['namibia'],
      es: ['namibia'],
      pt: ['namíbia', 'namibia'],
    },
  },
  {
    name: 'Nauru',
    isoAlpha2Code: 'NR',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['nauru'],
      es: ['nauru'],
      pt: ['nauru'],
    },
  },
  {
    name: 'Nepal',
    isoAlpha2Code: 'NP',
    continents: ['asia'],
    allowedGuesses: {
      en: ['nepal'],
      es: ['nepal'],
      pt: ['népal', 'nepal'],
    },
  },
  {
    name: 'Netherlands',
    isoAlpha2Code: 'NL',
    continents: ['europe'],
    allowedGuesses: {
      en: ['netherlands'],
      es: ['países bajos', 'paises bajos', 'holanda'],
      pt: ['países baixos', 'paises baixos', 'holanda'],
    },
  },
  {
    name: 'New Caledonia',
    isoAlpha2Code: 'NC',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['new caledonia'],
      es: ['nueva caledonia'],
      pt: ['nova caledônia', 'nova caledonia'],
    },
  },
  {
    name: 'New Zealand',
    isoAlpha2Code: 'NZ',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['new zealand'],
      es: ['nueva zelanda'],
      pt: ['nova zelândia', 'nova zelândia'],
    },
  },
  {
    name: 'Nicaragua',
    isoAlpha2Code: 'NI',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['nicaragua'],
      es: ['nicaragua'],
      pt: ['nicarágua', 'nicaragua'],
    },
  },
  {
    name: 'Niger',
    isoAlpha2Code: 'NE',
    continents: ['africa'],
    allowedGuesses: {
      en: ['niger'],
      es: ['níger', 'niger'],
      pt: ['níger', 'niger'],
    },
  },
  {
    name: 'Nigeria',
    isoAlpha2Code: 'NG',
    continents: ['africa'],
    allowedGuesses: {
      en: ['nigeria'],
      es: ['nigeria'],
      pt: ['nigéria', 'nigeria'],
    },
  },
  {
    name: 'Niue',
    isoAlpha2Code: 'NU',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['niue'],
      es: ['niue'],
      pt: ['niue'],
    },
  },
  {
    name: 'North Macedonia',
    isoAlpha2Code: 'MK',
    continents: ['europe'],
    allowedGuesses: {
      en: ['north macedonia'],
      es: ['macedonia del norte', 'macedonia norte'],
      pt: ['macedônia do norte', 'macedonia do norte'],
    },
  },
  {
    name: 'Northern Mariana Islands',
    isoAlpha2Code: 'MP',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['northern mariana islands'],
      es: ['islas marianas del norte'],
      pt: ['ilhas marianas do norte'],
    },
  },
  {
    name: 'Norway',
    isoAlpha2Code: 'NO',
    continents: ['europe'],
    allowedGuesses: {
      en: ['norway'],
      es: ['noruega'],
      pt: ['noruega'],
    },
  },
  {
    name: 'Oman',
    isoAlpha2Code: 'OM',
    continents: ['asia'],
    allowedGuesses: {
      en: ['oman'],
      es: ['oman'],
      pt: ['omã', 'oma'],
    },
  },
  {
    name: 'Pakistan',
    isoAlpha2Code: 'PK',
    continents: ['asia'],
    allowedGuesses: {
      en: ['pakistan'],
      es: ['pakistán', 'pakistan'],
      pt: ['paquistão', 'paquistao'],
    },
  },
  {
    name: 'Palau',
    isoAlpha2Code: 'PW',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['palau'],
      es: ['palau'],
      pt: ['palau'],
    },
  },
  {
    name: 'Palestine',
    isoAlpha2Code: 'PS',
    continents: ['asia'],
    allowedGuesses: {
      en: ['palestine'],
      es: ['palestina'],
      pt: ['palestina'],
    },
  },
  {
    name: 'Panama',
    isoAlpha2Code: 'PA',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['panama'],
      es: ['panamá', 'panama'],
      pt: ['panamá', 'panama'],
    },
  },
  {
    name: 'Papua New Guinea',
    isoAlpha2Code: 'PG',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['papua new guinea'],
      es: ['papúa nueva guinea', 'papua nueva guinea'],
      pt: ['papua nova guiné', 'papua nova guine'],
    },
  },
  {
    name: 'Paraguay',
    isoAlpha2Code: 'PY',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['paraguay'],
      es: ['paraguay'],
      pt: ['paraguai'],
    },
  },
  {
    name: 'Peru',
    isoAlpha2Code: 'PE',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['peru'],
      es: ['perú', 'peru'],
      pt: ['peru'],
    },
  },
  {
    name: 'Philippines',
    isoAlpha2Code: 'PH',
    continents: ['asia'],
    allowedGuesses: {
      en: ['philippines'],
      es: ['filipinas'],
      pt: ['filipinas'],
    },
  },
  {
    name: 'Pitcairn',
    isoAlpha2Code: 'PN',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['pitcairn'],
      es: ['pitcairn'],
      pt: ['pitcairn'],
    },
  },
  {
    name: 'Poland',
    isoAlpha2Code: 'PL',
    continents: ['europe'],
    allowedGuesses: {
      en: ['poland'],
      es: ['polonia'],
      pt: ['polônia', 'polonia'],
    },
  },
  {
    name: 'Portugal',
    isoAlpha2Code: 'PT',
    continents: ['europe'],
    allowedGuesses: {
      en: ['portugal'],
      es: ['portugal'],
      pt: ['portugal'],
    },
  },
  {
    name: 'Puerto Rico',
    isoAlpha2Code: 'PR',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['puerto rico'],
      es: ['puerto rico'],
      pt: ['porto rico'],
    },
  },
  {
    name: 'Qatar',
    isoAlpha2Code: 'QA',
    continents: ['asia'],
    allowedGuesses: {
      en: ['qatar'],
      es: ['qatar'],
      pt: ['qatar'],
    },
  },
  {
    name: 'Romania',
    isoAlpha2Code: 'RO',
    continents: ['europe'],
    allowedGuesses: {
      en: ['romania'],
      es: ['rumania', 'romania'],
      pt: ['romênia', 'romenia'],
    },
  },
  {
    name: 'Russia',
    isoAlpha2Code: 'RU',
    continents: ['europe', 'asia'],
    allowedGuesses: {
      en: ['russia'],
      es: ['rusia'],
      pt: ['rússia', 'russia'],
    },
  },
  {
    name: 'Rwanda',
    isoAlpha2Code: 'RW',
    continents: ['africa'],
    allowedGuesses: {
      en: ['rwanda'],
      es: ['ruanda'],
      pt: ['ruanda'],
    },
  },
  {
    name: 'Saint Barthelemy',
    isoAlpha2Code: 'BL',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['saint barthelemy'],
      es: ['san bartolomé', 'san bartolome'],
      pt: ['são bartolomeu', 'sao bartolomeu'],
    },
  },
  {
    name: 'Saint Helena',
    isoAlpha2Code: 'SH',
    continents: ['africa'],
    allowedGuesses: {
      en: ['saint helena'],
      es: ['santa helena'],
      pt: ['santa helena'],
    },
  },
  {
    name: 'Saint Kitts and Nevis',
    isoAlpha2Code: 'KN',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['saint kitts and nevis'],
      es: ['san cristóbal y nieves', 'san cristobal y nieves'],
      pt: ['são cristóvão e neves', 'sao cristovao e neves'],
    },
  },
  {
    name: 'Saint Lucia',
    isoAlpha2Code: 'LC',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['saint lucia'],
      es: ['santa lucía', 'santa lucia'],
      pt: ['santa lúcia', 'santa lucia'],
    },
  },
  {
    name: 'Saint Martin',
    isoAlpha2Code: 'MF',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['saint martin'],
      es: ['san martín', 'san martin'],
      pt: ['são martinho', 'sao martinho'],
    },
  },
  {
    name: 'Saint Pierre and Miquelon',
    isoAlpha2Code: 'PM',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['saint pierre and miquelon'],
      es: ['san pedro y miquelón', 'san pedro y miquelon'],
      pt: ['são pedro e miquelão', 'sao pedro e miquelao'],
    },
  },
  {
    name: 'Saint Vincent and the Grenadines',
    isoAlpha2Code: 'VC',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['saint vincent and the grenadines'],
      es: ['san vicente y las granadinas'],
      pt: ['são vicente e granadinas', 'sao vicente e granadinas'],
    },
  },
  {
    name: 'Samoa',
    isoAlpha2Code: 'WS',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['samoa'],
      es: ['samoa'],
      pt: ['samoa'],
    },
  },
  {
    name: 'San Marino',
    isoAlpha2Code: 'SM',
    continents: ['europe'],
    allowedGuesses: {
      en: ['san marino'],
      es: ['san marino'],
      pt: ['san marino'],
    },
  },
  {
    name: 'Sao Tome and Principe',
    isoAlpha2Code: 'ST',
    continents: ['africa'],
    allowedGuesses: {
      en: ['sao tome and principe'],
      es: ['santo tomé y príncipe', 'santo tome y principe'],
      pt: ['são tomé e príncipe', 'sao tome e principe'],
    },
  },
  {
    name: 'Saudi Arabia',
    isoAlpha2Code: 'SA',
    continents: ['asia'],
    allowedGuesses: {
      en: ['saudi arabia'],
      es: ['arabia saudita'],
      pt: ['arábia saudita', 'arabia saudita'],
    },
  },
  {
    name: 'Senegal',
    isoAlpha2Code: 'SN',
    continents: ['africa'],
    allowedGuesses: {
      en: ['senegal'],
      es: ['senegal'],
      pt: ['senegal'],
    },
  },
  {
    name: 'Serbia',
    isoAlpha2Code: 'RS',
    continents: ['europe'],
    allowedGuesses: {
      en: ['serbia'],
      es: ['serbia'],
      pt: ['sérvia', 'servia'],
    },
  },
  {
    name: 'Seychelles',
    isoAlpha2Code: 'SC',
    continents: ['africa'],
    allowedGuesses: {
      en: ['seychelles'],
      es: ['seychelles'],
      pt: ['seychelles'],
    },
  },
  {
    name: 'Sierra Leone',
    isoAlpha2Code: 'SL',
    continents: ['africa'],
    allowedGuesses: {
      en: ['sierra leone'],
      es: ['sierra leona'],
      pt: ['sierra leoa'],
    },
  },
  {
    name: 'Singapore',
    isoAlpha2Code: 'SG',
    continents: ['asia'],
    allowedGuesses: {
      en: ['singapore'],
      es: ['singapur'],
      pt: ['singapura'],
    },
  },
  {
    name: 'Sint Maarten',
    isoAlpha2Code: 'SX',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['sint maarten'],
      es: ['sint maarten'],
      pt: ['sint maarten'],
    },
  },
  {
    name: 'Slovakia',
    isoAlpha2Code: 'SK',
    continents: ['europe'],
    allowedGuesses: {
      en: ['slovakia'],
      es: ['eslovaquia'],
      pt: ['eslováquia', 'eslovaquia'],
    },
  },
  {
    name: 'Slovenia',
    isoAlpha2Code: 'SI',
    continents: ['europe'],
    allowedGuesses: {
      en: ['slovenia'],
      es: ['eslovenia'],
      pt: ['eslovênia', 'eslovenia'],
    },
  },
  {
    name: 'Solomon Islands',
    isoAlpha2Code: 'SB',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['solomon islands'],
      es: ['islas salomón', 'islas salomon'],
      pt: ['ilhas salomão', 'ilhas salomao'],
    },
  },
  {
    name: 'Somalia',
    isoAlpha2Code: 'SO',
    continents: ['africa'],
    allowedGuesses: {
      en: ['somalia'],
      es: ['somalia'],
      pt: ['somália', 'somalia'],
    },
  },
  {
    name: 'South Africa',
    isoAlpha2Code: 'ZA',
    continents: ['africa'],
    allowedGuesses: {
      en: ['south africa'],
      es: ['sudáfrica', 'sudafrica'],
      pt: ['áfrica do sul', 'africa do sul'],
    },
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    isoAlpha2Code: 'GS',
    continents: ['antarctica'],
    allowedGuesses: {
      en: ['south georgia and the south sandwich islands'],
      es: [
        'georgia del sur y las islas sandwich del sur',
        'georgia del sur y las islas sandwich del sur',
      ],
      pt: [
        'geórgia do sul e as ilhas sandwich do sul',
        'georgia do sul e as ilhas sandwich do sul',
      ],
    },
  },
  {
    name: 'South Sudan',
    isoAlpha2Code: 'SS',
    continents: ['africa'],
    allowedGuesses: {
      en: ['south sudan'],
      es: ['sudán del sur', 'sudan del sur'],
      pt: ['sudão do sul', 'sudao do sul'],
    },
  },
  {
    name: 'Spain',
    isoAlpha2Code: 'ES',
    continents: ['europe'],
    allowedGuesses: {
      en: ['spain'],
      es: ['españa', 'espana'],
      pt: ['espanha'],
    },
  },
  {
    name: 'Sri Lanka',
    isoAlpha2Code: 'LK',
    continents: ['asia'],
    allowedGuesses: {
      en: ['sri lanka'],
      es: ['sri lanka'],
      pt: ['sri lanka'],
    },
  },
  {
    name: 'Sudan',
    isoAlpha2Code: 'SD',
    continents: ['africa'],
    allowedGuesses: {
      en: ['sudan'],
      es: ['sudán', 'sudan'],
      pt: ['sudão', 'sudao'],
    },
  },
  {
    name: 'Suriname',
    isoAlpha2Code: 'SR',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['suriname'],
      es: ['surinam'],
      pt: ['suriname'],
    },
  },
  {
    name: 'Sweden',
    isoAlpha2Code: 'SE',
    continents: ['europe'],
    allowedGuesses: {
      en: ['sweden'],
      es: ['suecia'],
      pt: ['suécia', 'suécia', 'suecia'],
    },
  },
  {
    name: 'Switzerland',
    isoAlpha2Code: 'CH',
    continents: ['europe'],
    allowedGuesses: {
      en: ['switzerland'],
      es: ['suiza'],
      pt: ['suíça', 'suica'],
    },
  },
  {
    name: 'Syrian Arab Republic',
    isoAlpha2Code: 'SY',
    continents: ['asia'],
    allowedGuesses: {
      en: ['syria', 'syrian arab republic'],
      es: ['siria', 'república árabe siria'],
      pt: ['síria', 'siria', 'república árabe síria', 'republica arabe siria'],
    },
  },
  {
    name: 'Taiwan',
    isoAlpha2Code: 'TW',
    continents: ['asia'],
    allowedGuesses: {
      en: ['taiwan'],
      es: ['taiwán', 'taiwan'],
      pt: ['taiwan'],
    },
  },
  {
    name: 'Tajikistan',
    isoAlpha2Code: 'TJ',
    continents: ['asia'],
    allowedGuesses: {
      en: ['tajikistan'],
      es: ['tajikistán', 'tajikistan'],
      pt: ['tajiquistão', 'tajiquistao'],
    },
  },
  {
    name: 'Tanzania',
    isoAlpha2Code: 'TZ',
    continents: ['africa'],
    allowedGuesses: {
      en: ['tanzania'],
      es: ['tanzania'],
      pt: ['tanzânia', 'tanzania'],
    },
  },
  {
    name: 'Thailand',
    isoAlpha2Code: 'TH',
    continents: ['asia'],
    allowedGuesses: {
      en: ['thailand'],
      es: ['tailandia'],
      pt: ['tailândia', 'tailandia'],
    },
  },
  {
    name: 'Timor-Leste',
    isoAlpha2Code: 'TL',
    continents: ['asia'],
    allowedGuesses: {
      en: ['timor-leste', 'east timor'],
      es: ['timor oriental', 'timor-leste'],
      pt: ['timor-leste', 'timor leste'],
    },
  },
  {
    name: 'Togo',
    isoAlpha2Code: 'TG',
    continents: ['africa'],
    allowedGuesses: {
      en: ['togo'],
      es: ['togo'],
      pt: ['togo'],
    },
  },
  {
    name: 'Tokelau',
    isoAlpha2Code: 'TK',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['tokelau'],
      es: ['tokelau'],
      pt: ['tokelau'],
    },
  },
  {
    name: 'Tonga',
    isoAlpha2Code: 'TO',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['tonga'],
      es: ['tonga'],
      pt: ['tonga'],
    },
  },
  {
    name: 'Trinidad and Tobago',
    isoAlpha2Code: 'TT',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['trinidad and tobago'],
      es: ['trinidad y tobago'],
      pt: ['trindade e tobago', 'trindade & tobago'],
    },
  },
  {
    name: 'Tunisia',
    isoAlpha2Code: 'TN',
    continents: ['africa'],
    allowedGuesses: {
      en: ['tunisia'],
      es: ['túnez', 'tunez'],
      pt: ['túnis', 'tunis'],
    },
  },
  {
    name: 'Turkey',
    isoAlpha2Code: 'TR',
    continents: ['asia', 'europe'],
    allowedGuesses: {
      en: ['turkey'],
      es: ['turquía', 'turquia'],
      pt: ['turquia', 'turquía'],
    },
  },
  {
    name: 'Turkmenistan',
    isoAlpha2Code: 'TM',
    continents: ['asia'],
    allowedGuesses: {
      en: ['turkmenistan'],
      es: ['turkmenistán', 'turkmenistan'],
      pt: ['turcomenistão', 'turcomenistao'],
    },
  },
  {
    name: 'Tuvalu',
    isoAlpha2Code: 'TV',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['tuvalu'],
      es: ['tuvalu'],
      pt: ['tuvalu'],
    },
  },
  {
    name: 'Uganda',
    isoAlpha2Code: 'UG',
    continents: ['africa'],
    allowedGuesses: {
      en: ['uganda'],
      es: ['uganda'],
      pt: ['uganda'],
    },
  },
  {
    name: 'Ukraine',
    isoAlpha2Code: 'UA',
    continents: ['europe'],
    allowedGuesses: {
      en: ['ukraine'],
      es: ['ucrania'],
      pt: ['ucrânia', 'ucrania'],
    },
  },
  {
    name: 'United Arab Emirates',
    isoAlpha2Code: 'AE',
    continents: ['asia'],
    allowedGuesses: {
      en: ['united arab emirates', 'uae'],
      es: ['emiratos árabes unidos', 'emiratos arabes unidos'],
      pt: ['emirados árabes unidos', 'emirados arabes unidos'],
    },
  },
  {
    name: 'United Kingdom',
    isoAlpha2Code: 'GB',
    continents: ['europe'],
    allowedGuesses: {
      en: ['united kingdom', 'uk', 'great britain'],
      es: ['reino unido', 'gran bretaña'],
      pt: ['reino unido', 'grã-bretanha', 'gra-bretanha'],
    },
  },
  {
    name: 'United States',
    isoAlpha2Code: 'US',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['united states', 'usa'],
      es: ['estados unidos', 'eeuu'],
      pt: ['estados unidos', 'eua'],
    },
  },
  {
    name: 'United States Virgin Islands',
    isoAlpha2Code: 'VI',
    continents: ['northAmerica'],
    allowedGuesses: {
      en: ['united states virgin islands', 'us virgin islands', 'virgin islands'],
      es: ['islas vírgenes de estados unidos', 'islas virgenes de estados unidos'],
      pt: ['ilhas virgens dos estados unidos', 'ilhas virgens eua'],
    },
  },
  {
    name: 'Uruguay',
    isoAlpha2Code: 'UY',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['uruguay'],
      es: ['uruguay'],
      pt: ['uruguai'],
    },
  },
  {
    name: 'Uzbekistan',
    isoAlpha2Code: 'UZ',
    continents: ['asia'],
    allowedGuesses: {
      en: ['uzbekistan'],
      es: ['uzbekistán', 'uzbekistan'],
      pt: ['uzbequistão', 'uzbequistao'],
    },
  },
  {
    name: 'Vanuatu',
    isoAlpha2Code: 'VU',
    continents: ['oceania'],
    allowedGuesses: {
      en: ['vanuatu'],
      es: ['vanuatu'],
      pt: ['vanuatu'],
    },
  },
  {
    name: 'Venezuela',
    isoAlpha2Code: 'VE',
    continents: ['southAmerica'],
    allowedGuesses: {
      en: ['venezuela'],
      es: ['venezuela'],
      pt: ['venezuela'],
    },
  },
  {
    name: 'Vietnam',
    isoAlpha2Code: 'VN',
    continents: ['asia'],
    allowedGuesses: {
      en: ['vietnam'],
      es: ['vietnam', 'vietnamita'],
      pt: ['vietnam', 'vietnamita'],
    },
  },
  {
    name: 'Yemen',
    isoAlpha2Code: 'YE',
    continents: ['asia'],
    allowedGuesses: {
      en: ['yemen'],
      es: ['yemen'],
      pt: ['iemen', 'yemen'],
    },
  },
  {
    name: 'Zambia',
    isoAlpha2Code: 'ZM',
    continents: ['africa'],
    allowedGuesses: {
      en: ['zambia'],
      es: ['zambia'],
      pt: ['zâmbia', 'zambia'],
    },
  },
  {
    name: 'Zimbabwe',
    isoAlpha2Code: 'ZW',
    continents: ['africa'],
    allowedGuesses: {
      en: ['zimbabwe'],
      es: ['zimbabue'],
      pt: ['zimbábue', 'zimbabue'],
    },
  },
]

export const europeanCountries: Country[] = countries.filter((country) =>
  country.continents.includes('europe'),
)

export const southAmericaCountries: Country[] = countries.filter((country) =>
  country.continents.includes('southAmerica'),
)

export const northAmericaCountries: Country[] = countries.filter((country) =>
  country.continents.includes('northAmerica'),
)

export const africaCountries: Country[] = countries.filter((country) =>
  country.continents.includes('africa'),
)

export const antarcticaCountries: Country[] = countries.filter((country) =>
  country.continents.includes('antarctica'),
)

export const asiaCountries: Country[] = countries.filter((country) =>
  country.continents.includes('asia'),
)

export const oceaniaCountries: Country[] = countries.filter((country) =>
  country.continents.includes('oceania'),
)

export function createGuessedCountriesMap(countries: Country[]): GuessedCountriesMap {
  const _countries: GuessedCountriesMap = {}

  for (const country of countries) {
    _countries[country.isoAlpha2Code] = { guessed: false, country }
  }

  return _countries
}
