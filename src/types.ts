type Region = 'america' | 'europe' | 'asia' | 'oceania' | 'africa';
type SubRegion =
  | 'north-america'
  | 'south-america'
  | 'central-america'
  | 'carribean'
  | 'eu-union'
  | 'ex-ussr'
  | 'ex-yugos'
  | 'baltic'
  | 'middle-east'
  | 'north-africa';

export type CountryName =
  | 'Afghanistan'
  | 'Albania'
  | 'Algeria'
  | 'Andorra'
  | 'Angola'
  | 'Antigua and Barbuda'
  | 'Argentina'
  | 'Armenia'
  | 'Aruba'
  | 'Australia'
  | 'Austria'
  | 'Azerbaijan'
  | 'Bahamas'
  | 'Bahrain'
  | 'Bangladesh'
  | 'Barbados'
  | 'Belarus'
  | 'Belgium'
  | 'Belize'
  | 'Benin'
  | 'Bhutan'
  | 'Bolivia'
  | 'Bosnia and Herzegovina'
  | 'Botswana'
  | 'Brazil'
  | 'British Indian Ocean Territory'
  | 'Brunei'
  | 'Bulgaria'
  | 'Burkina Faso'
  | 'Burundi'
  | 'Cambodia'
  | 'Cameroon'
  | 'Canada'
  | 'Cape Verde'
  | 'Caribbean Netherlands'
  | 'Central African Republic'
  | 'Chad'
  | 'Chile'
  | 'China'
  | 'Colombia'
  | 'Comoros'
  | 'Congo'
  | 'Congo'
  | 'Costa Rica'
  | "Côte d'Ivoire"
  | 'Croatia'
  | 'Cuba'
  | 'Curaçao'
  | 'Cyprus'
  | 'Czech Republic'
  | 'Denmark'
  | 'Djibouti'
  | 'Dominica'
  | 'Dominican Republic'
  | 'Ecuador'
  | 'Egypt'
  | 'El Salvador'
  | 'Equatorial Guinea'
  | 'Eritrea'
  | 'Estonia'
  | 'Ethiopia'
  | 'Fiji'
  | 'Finland'
  | 'France'
  | 'French Guiana'
  | 'French Polynesia'
  | 'Gabon'
  | 'Gambia'
  | 'Georgia'
  | 'Germany'
  | 'Ghana'
  | 'Greece'
  | 'Grenada'
  | 'Guadeloupe'
  | 'Guam'
  | 'Guatemala'
  | 'Guinea'
  | 'Guinea-Bissau'
  | 'Guyana'
  | 'Haiti'
  | 'Honduras'
  | 'Hong Kong'
  | 'Hungary'
  | 'Iceland'
  | 'India'
  | 'Indonesia'
  | 'Iran'
  | 'Iraq'
  | 'Ireland'
  | 'Israel'
  | 'Italy'
  | 'Jamaica'
  | 'Japan'
  | 'Jordan'
  | 'Kazakhstan'
  | 'Kenya'
  | 'Kiribati'
  | 'Kosovo'
  | 'Kuwait'
  | 'Kyrgyzstan'
  | 'Laos'
  | 'Latvia'
  | 'Lebanon'
  | 'Lesotho'
  | 'Liberia'
  | 'Libya'
  | 'Liechtenstein'
  | 'Lithuania'
  | 'Luxembourg'
  | 'Macau'
  | 'Macedonia'
  | 'Madagascar'
  | 'Malawi'
  | 'Malaysia'
  | 'Maldives'
  | 'Mali'
  | 'Malta'
  | 'Marshall Islands'
  | 'Martinique'
  | 'Mauritania'
  | 'Mauritius'
  | 'Mexico'
  | 'Micronesia'
  | 'Moldova'
  | 'Monaco'
  | 'Mongolia'
  | 'Montenegro'
  | 'Morocco'
  | 'Mozambique'
  | 'Myanmar'
  | 'Namibia'
  | 'Nauru'
  | 'Nepal'
  | 'Netherlands'
  | 'New Caledonia'
  | 'New Zealand'
  | 'Nicaragua'
  | 'Niger'
  | 'Nigeria'
  | 'North Korea'
  | 'Norway'
  | 'Oman'
  | 'Pakistan'
  | 'Palau'
  | 'Palestine'
  | 'Panama'
  | 'Papua New Guinea'
  | 'Paraguay'
  | 'Peru'
  | 'Philippines'
  | 'Poland'
  | 'Portugal'
  | 'Puerto Rico'
  | 'Qatar'
  | 'Réunion'
  | 'Romania'
  | 'Russia'
  | 'Rwanda'
  | 'Saint Kitts and Nevis'
  | 'Saint Lucia'
  | 'Saint Vincent and the Grenadines'
  | 'Samoa'
  | 'San Marino'
  | 'São Tomé and Príncipe'
  | 'Saudi Arabia'
  | 'Senegal'
  | 'Serbia'
  | 'Seychelles'
  | 'Sierra Leone'
  | 'Singapore'
  | 'Slovakia'
  | 'Slovenia'
  | 'Solomon Islands'
  | 'Somalia'
  | 'South Africa'
  | 'South Korea'
  | 'South Sudan'
  | 'Spain'
  | 'Sri Lanka'
  | 'Sudan'
  | 'Suriname'
  | 'Swaziland'
  | 'Sweden'
  | 'Switzerland'
  | 'Syria'
  | 'Taiwan'
  | 'Tajikistan'
  | 'Tanzania'
  | 'Thailand'
  | 'Timor-Leste'
  | 'Togo'
  | 'Tonga'
  | 'Trinidad and Tobago'
  | 'Tunisia'
  | 'Turkey'
  | 'Turkmenistan'
  | 'Tuvalu'
  | 'Uganda'
  | 'Ukraine'
  | 'United Arab Emirates'
  | 'United Kingdom'
  | 'United States'
  | 'Uruguay'
  | 'Uzbekistan'
  | 'Vanuatu'
  | 'Vatican City'
  | 'Venezuela'
  | 'Vietnam'
  | 'Yemen'
  | 'Zambia'
  | 'Zimbabwe';

type BaseCountryData = [
  CountryName, // country name
  Array<Region | SubRegion>, // regions
  string, // iso2 code
  string, // international dial code
];

type CountryDataWithFormat = [
  ...BaseCountryData,
  string, // format
];

type CountryDataWithOrder = [
  ...CountryDataWithFormat,
  number, // order priority
];

export type CountryData =
  | BaseCountryData
  | CountryDataWithFormat
  | CountryDataWithOrder;

export interface ParsedCountry {
  name: CountryData[0];
  regions: CountryData[1];
  iso2: CountryData[2];
  dialCode: CountryData[3];
  format: CountryData[4];
  priority: CountryData[5];
}
