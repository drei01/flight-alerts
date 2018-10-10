import {find, get, isEqual, compose} from 'lodash/fp';

const airlines = [
  {
    id: 'Y4',
    lcc: '1',
    name: 'Volaris'
  },
  {
    id: '2N',
    lcc: '1',
    name: 'NextJet'
  },
  {
    id: 'SE',
    lcc: '1',
    name: 'XL Airways France'
  },
  {
    id: 'QD',
    lcc: '0',
    name: 'JC International Airlines'
  },
  {
    id: 'X4',
    lcc: '0',
    name: 'Alaska Seaplanes X4'
  },
  {
    id: 'JU',
    lcc: '0',
    name: 'Air Serbia'
  },
  {
    id: 'V0',
    lcc: '1',
    name: 'Conviasa'
  },
  {
    id: 'AG',
    lcc: '0',
    name: 'Aruba Airlines'
  },
  {
    id: 'UJ',
    lcc: '0',
    name: 'AlMasria Universal Airlines'
  },
  {
    id: '2A',
    lcc: '0',
    name: 'Deutsche Bahn'
  },
  {
    id: 'LP',
    lcc: '0',
    name: 'LATAM Peru'
  },
  {
    id: 'W3',
    lcc: '0',
    name: 'Arik Air'
  },
  {
    id: 'JI',
    lcc: '0',
    name: 'Meraj Air'
  },
  {
    id: 'DI',
    lcc: '0',
    name: 'Norwegian Air UK'
  },
  {
    id: 'VE',
    lcc: '0',
    name: 'EasyFly'
  },
  {
    id: 'NY',
    lcc: '1',
    name: 'Air Iceland Connect'
  },
  {
    id: 'ET',
    lcc: '0',
    name: 'Ethiopian Airlines'
  },
  {
    id: '5T',
    lcc: '0',
    name: 'Canadian North'
  },
  {
    id: 'F3',
    lcc: '0',
    name: 'Flyadeal'
  },
  {
    id: 'NT',
    lcc: '1',
    name: 'Binter Canarias'
  },
  {
    id: 'CY',
    lcc: '0',
    name: 'Cyprus Airways'
  },
  {
    id: '6I',
    lcc: '0',
    name: 'Alsie Express'
  },
  {
    id: 'PR',
    lcc: '0',
    name: 'Philippine Airlines'
  },
  {
    id: '2P',
    lcc: '1',
    name: 'PAL Express'
  },
  {
    id: '9J',
    lcc: '0',
    name: 'Dana Airlines Limited'
  },
  {
    id: 'SX',
    lcc: '0',
    name: 'SkyWork Airlines'
  },
  {
    id: '8G',
    lcc: '0',
    name: 'Mid Africa Aviation'
  },
  {
    id: 'SF',
    lcc: '0',
    name: 'Tassili Airlines'
  },
  {
    id: 'RT',
    lcc: '0',
    name: 'JSC UVT Aero'
  },
  {
    id: 'BJ',
    lcc: '0',
    name: 'NouvelAir'
  },
  {
    id: 'MV',
    lcc: '0',
    name: 'Air Mediterranean'
  },
  {
    id: 'LH',
    lcc: '0',
    name: 'Lufthansa'
  },
  {
    id: 'D4',
    lcc: '0',
    name: 'Aerodart'
  },
  {
    id: 'OV',
    lcc: '1',
    name: 'SalamAir'
  },
  {
    id: 'LA',
    lcc: '0',
    name: 'LATAM Chile'
  },
  {
    id: 'LQ',
    lcc: '1',
    name: 'Lanmei Airlines'
  },
  {
    id: 'PE',
    lcc: '0',
    name: "People's Viennaline PE"
  },
  {
    id: 'S9',
    lcc: '0',
    name: 'Starbow Airlines'
  },
  {
    id: '9P',
    lcc: '1',
    name: 'Air Arabia Jordan'
  },
  {
    id: 'SV',
    lcc: '0',
    name: 'Saudi Arabian Airlines'
  },
  {
    id: 'KS',
    lcc: '0',
    name: 'Peninsula Airways'
  },
  {
    id: '6D',
    lcc: '0',
    name: 'Pelita'
  },
  {
    id: '99',
    lcc: '0',
    name: 'Ciao Air'
  },
  {
    id: 'BA',
    lcc: '0',
    name: 'British Airways'
  },
  {
    id: 'J2',
    lcc: '0',
    name: 'Azerbaijan Airlines'
  },
  {
    id: 'Z7',
    lcc: '1',
    name: 'Amaszonas Uruguay'
  },
  {
    id: 'ZP',
    lcc: '0',
    name: 'Amaszonas del Paraguay S.A. Lineas Aereas'
  },
  {
    id: 'VT',
    lcc: '0',
    name: 'Air Tahiti'
  },
  {
    id: 'EK',
    lcc: '0',
    name: 'Emirates'
  },
  {
    id: 'WE',
    lcc: '1',
    name: 'Thai Smile'
  },
  {
    id: 'XW',
    lcc: '1',
    name: 'NokScoot'
  },
  {
    id: 'A1',
    lcc: '0',
    name: 'Atifly'
  },
  {
    id: 'VL',
    lcc: '0',
    name: 'Med-View Airline'
  },
  {
    id: '9U',
    lcc: '0',
    name: 'Air Moldova'
  },
  {
    id: 'HM',
    lcc: '0',
    name: 'Air Seychelles'
  },
  {
    id: 'LI',
    lcc: '0',
    name: 'Leeward Islands Air Transport'
  },
  {
    id: 'TQ',
    lcc: '0',
    name: 'Tandem Aero'
  },
  {
    id: '9I',
    lcc: '0',
    name: 'Thai Sky Airlines'
  },
  {
    id: 'XQ',
    lcc: '1',
    name: 'SunExpress'
  },
  {
    id: 'L7',
    lcc: '0',
    name: 'Lugansk Airlines'
  },
  {
    id: 'UG',
    lcc: '0',
    name: 'TunisAir Express'
  },
  {
    id: 'T0',
    lcc: '0',
    name: 'TACA Peru'
  },
  {
    id: 'J5',
    lcc: '0',
    name: 'Alaska Seaplane Service'
  },
  {
    id: 'E2',
    lcc: '0',
    name: 'Eagle Atlantic Airlines'
  },
  {
    id: 'NP',
    lcc: '0',
    name: 'Nile Air'
  },
  {
    id: 'CD',
    lcc: '0',
    name: 'Corendon Dutch Airlines B.V.'
  },
  {
    id: 'WF',
    lcc: '0',
    name: 'Wider\u00f8e'
  },
  {
    id: '3I',
    lcc: '0',
    name: 'Air Comet Chile'
  },
  {
    id: 'HN',
    lcc: '0',
    name: 'Hankook Airline'
  },
  {
    id: 'II',
    lcc: '0',
    name: 'LSM International '
  },
  {
    id: 'W7',
    lcc: '0',
    name: 'Austral Brasil'
  },
  {
    id: 'FL',
    lcc: '0',
    name: 'AirTran Airways'
  },
  {
    id: 'OO',
    lcc: '0',
    name: 'SkyWest'
  },
  {
    id: 'ZM',
    lcc: '0',
    name: 'Air Manas'
  },
  {
    id: '00',
    lcc: '1',
    name: 'Anadolujet'
  },
  {
    id: 'S1',
    lcc: '0',
    name: 'Serbian Airlines'
  },
  {
    id: 'MI',
    lcc: '0',
    name: 'SilkAir'
  },
  {
    id: 'B4',
    lcc: '0',
    name: 'ZanAir'
  },
  {
    id: 'HG',
    lcc: '0',
    name: 'Niki'
  },
  {
    id: 'M2',
    lcc: '0',
    name: 'MHS Aviation GmbH'
  },
  {
    id: 'M1',
    lcc: '0',
    name: 'Maryland Air'
  },
  {
    id: 'LT',
    lcc: '0',
    name: 'Air Lituanica'
  },
  {
    id: 'TE',
    lcc: '0',
    name: 'FlyLal'
  },
  {
    id: '11',
    lcc: '0',
    name: 'TUIfly (X3)'
  },
  {
    id: '7C',
    lcc: '1',
    name: 'Jeju Air'
  },
  {
    id: 'AY',
    lcc: '0',
    name: 'Finnair'
  },
  {
    id: 'AV',
    lcc: '0',
    name: 'Avianca'
  },
  {
    id: 'Y7',
    lcc: '1',
    name: 'NordStar Airlines'
  },
  {
    id: 'PM',
    lcc: '0',
    name: 'Canary Fly'
  },
  {
    id: 'RJ',
    lcc: '0',
    name: 'Royal Jordanian'
  },
  {
    id: 'KK',
    lcc: '1',
    name: 'AtlasGlobal'
  },
  {
    id: '7F',
    lcc: '0',
    name: 'First Air'
  },
  {
    id: 'A7',
    lcc: '0',
    name: 'Air Plus Comet'
  },
  {
    id: 'ZH',
    lcc: '0',
    name: 'Shenzhen Airlines'
  },
  {
    id: 'QR',
    lcc: '0',
    name: 'Qatar Airways'
  },
  {
    id: 'GG',
    lcc: '0',
    name: 'Air Guyane'
  },
  {
    id: '2U',
    lcc: '0',
    name: 'Air Guinee Express'
  },
  {
    id: 'IN',
    lcc: '0',
    name: 'Nam Air'
  },
  {
    id: '4C',
    lcc: '0',
    name: 'LATAM Colombia'
  },
  {
    id: 'FK',
    lcc: '0',
    name: 'Africa West'
  },
  {
    id: 'FZ',
    lcc: '1',
    name: 'Fly Dubai'
  },
  {
    id: '4D',
    lcc: '0',
    name: 'Air Sinai'
  },
  {
    id: 'XM',
    lcc: '0',
    name: 'Alitalia Express'
  },
  {
    id: 'YW',
    lcc: '0',
    name: 'Air Nostrum'
  },
  {
    id: '6S',
    lcc: '0',
    name: 'SaudiGulf Airlines'
  },
  {
    id: 'LG',
    lcc: '0',
    name: 'Luxair'
  },
  {
    id: 'N7',
    lcc: '0',
    name: 'Neptune Air Sdn Bhd'
  },
  {
    id: 'ZT',
    lcc: '0',
    name: 'Titan Airways'
  },
  {
    id: 'QT',
    lcc: '0',
    name: 'TAMPA'
  },
  {
    id: '4Z',
    lcc: '0',
    name: 'Airlink (SAA)'
  },
  {
    id: 'VD',
    lcc: '0',
    name: 'Air Libert'
  },
  {
    id: 'ZW',
    lcc: '0',
    name: 'Air Wisconsin'
  },
  {
    id: 'HP',
    lcc: '0',
    name: 'America West Airlines'
  },
  {
    id: '4A',
    lcc: '0',
    name: 'Air Kiribati'
  },
  {
    id: 'SQ',
    lcc: '0',
    name: 'Singapore Airlines'
  },
  {
    id: 'SZ',
    lcc: '0',
    name: 'Somon Air'
  },
  {
    id: 'NN',
    lcc: '1',
    name: 'VIM Airlines'
  },
  {
    id: '7P',
    lcc: '1',
    name: 'AirPanama'
  },
  {
    id: '5D',
    lcc: '0',
    name: 'Aerolitoral'
  },
  {
    id: 'SB',
    lcc: '0',
    name: 'Aircalin'
  },
  {
    id: '2O',
    lcc: '0',
    name: 'Air Salone'
  },
  {
    id: 'QQ',
    lcc: '0',
    name: 'Alliance Airlines'
  },
  {
    id: 'I9',
    lcc: '0',
    name: 'Air Italy'
  },
  {
    id: 'WY',
    lcc: '0',
    name: 'Oman Air'
  },
  {
    id: 'U6',
    lcc: '1',
    name: 'Ural Airlines'
  },
  {
    id: 'K2',
    lcc: '0',
    name: 'EuroLot'
  },
  {
    id: '4T',
    lcc: '0',
    name: 'Belair'
  },
  {
    id: 'AP',
    lcc: '0',
    name: 'AlbaStar'
  },
  {
    id: 'QH',
    lcc: '0',
    name: 'Air Kyrgyzstan'
  },
  {
    id: 'KO',
    lcc: '0',
    name: 'Komiaviatrans'
  },
  {
    id: 'WI',
    lcc: '0',
    name: 'White Airways'
  },
  {
    id: 'EI',
    lcc: '1',
    name: 'Aer Lingus'
  },
  {
    id: 'QF',
    lcc: '0',
    name: 'Qantas'
  },
  {
    id: 'KJ',
    lcc: '0',
    name: 'British Mediterranean Airways'
  },
  {
    id: 'I8',
    lcc: '0',
    name: 'Izhavia'
  },
  {
    id: 'GK',
    lcc: '0',
    name: 'Jetstar Japan'
  },
  {
    id: 'GL',
    lcc: '0',
    name: 'Air Greenland'
  },
  {
    id: '2I',
    lcc: '1',
    name: 'Star Peru'
  },
  {
    id: 'A5',
    lcc: '1',
    name: 'HOP!'
  },
  {
    id: 'PX',
    lcc: '0',
    name: 'Air Niugini'
  },
  {
    id: 'UI',
    lcc: '0',
    name: 'Auric Air'
  },
  {
    id: 'H1',
    lcc: '0',
    name: 'Hahn Air'
  },
  {
    id: 'E5',
    lcc: '0',
    name: 'Air Arabia Egypt'
  },
  {
    id: 'HA',
    lcc: '0',
    name: 'Hawaiian Airlines'
  },
  {
    id: 'IQ',
    lcc: '0',
    name: 'Qazaq Air'
  },
  {
    id: 'WZ',
    lcc: '1',
    name: 'Red Wings'
  },
  {
    id: 'BN',
    lcc: '0',
    name: 'Horizon Airlines'
  },
  {
    id: 'W8',
    lcc: '0',
    name: 'Cargojet Airways'
  },
  {
    id: 'PT',
    lcc: '0',
    name: 'Red Jet Andes'
  },
  {
    id: '6E',
    lcc: '1',
    name: 'IndiGo Airlines'
  },
  {
    id: 'PP',
    lcc: '0',
    name: 'Air Indus'
  },
  {
    id: 'TC',
    lcc: '0',
    name: 'Air Tanzania'
  },
  {
    id: 'PJ',
    lcc: '0',
    name: 'Air Saint Pierre'
  },
  {
    id: 'Z4',
    lcc: '0',
    name: 'Zoom Airlines'
  },
  {
    id: 'JY',
    lcc: '0',
    name: 'interCaribbean Airways'
  },
  {
    id: 'JM',
    lcc: '0',
    name: 'Air Jamaica'
  },
  {
    id: 'GQ',
    lcc: '0',
    name: 'Sky Express'
  },
  {
    id: 'NE',
    lcc: '0',
    name: 'Nesma Air'
  },
  {
    id: 'DF',
    lcc: '0',
    name: 'Michael Airlines'
  },
  {
    id: 'U1',
    lcc: '0',
    name: 'Aviabus'
  },
  {
    id: '0X',
    lcc: '0',
    name: 'Copenhagen Express'
  },
  {
    id: 'CT',
    lcc: '0',
    name: 'Alitalia Cityliner'
  },
  {
    id: 'AC',
    lcc: '0',
    name: 'Air Canada'
  },
  {
    id: '8Q',
    lcc: '1',
    name: 'Onur Air'
  },
  {
    id: 'LR',
    lcc: '0',
    name: 'LACSA'
  },
  {
    id: 'B9',
    lcc: '0',
    name: 'Air Bangladesh'
  },
  {
    id: '7E',
    lcc: '0',
    name: 'Aeroline GmbH'
  },
  {
    id: '6G',
    lcc: '0',
    name: 'Air Wales'
  },
  {
    id: 'LU',
    lcc: '0',
    name: 'LAN Express'
  },
  {
    id: '5Y',
    lcc: '0',
    name: 'Atlas Air'
  },
  {
    id: 'R7',
    lcc: '0',
    name: 'Aserca Airlines'
  },
  {
    id: 'AS',
    lcc: '0',
    name: 'Alaska Airlines'
  },
  {
    id: 'VU',
    lcc: '0',
    name: 'Air Ivoire'
  },
  {
    id: 'WX',
    lcc: '0',
    name: 'CityJet'
  },
  {
    id: 'IT',
    lcc: '0',
    name: 'Tigerair Taiwan'
  },
  {
    id: 'EH',
    lcc: '0',
    name: 'ANA Wings'
  },
  {
    id: '0B',
    lcc: '1',
    name: 'Blue Air'
  },
  {
    id: 'ZL',
    lcc: '1',
    name: 'Regional Express'
  },
  {
    id: '3E',
    lcc: '0',
    name: 'Air Choice One'
  },
  {
    id: 'FN',
    lcc: '1',
    name: 'Fastjet'
  },
  {
    id: 'CV',
    lcc: '0',
    name: 'Air Chathams'
  },
  {
    id: 'MU',
    lcc: '0',
    name: 'China Eastern Airlines'
  },
  {
    id: 'SY',
    lcc: '1',
    name: 'Sun Country Airlines'
  },
  {
    id: 'MD',
    lcc: '0',
    name: 'Air Madagascar'
  },
  {
    id: 'U8',
    lcc: '0',
    name: 'TUS Airways'
  },
  {
    id: 'FV',
    lcc: '0',
    name: 'Rossiya-Russian Airlines'
  },
  {
    id: 'D9',
    lcc: '0',
    name: 'Aeroflot-Don'
  },
  {
    id: 'NM',
    lcc: '0',
    name: 'Air Madrid'
  },
  {
    id: 'OF',
    lcc: '0',
    name: 'Air Finland'
  },
  {
    id: 'W9',
    lcc: '0',
    name: 'Air Bagan'
  },
  {
    id: 'JS',
    lcc: '0',
    name: 'Air Koryo'
  },
  {
    id: 'P0',
    lcc: '0',
    name: 'Proflight Zambia'
  },
  {
    id: 'LK',
    lcc: '0',
    name: 'Air Luxor'
  },
  {
    id: 'MK',
    lcc: '0',
    name: 'Air Mauritius'
  },
  {
    id: 'XG',
    lcc: '0',
    name: 'SunExpress'
  },
  {
    id: 'RE',
    lcc: '0',
    name: 'Aer Arann'
  },
  {
    id: 'PD',
    lcc: '1',
    name: 'Porter Airlines'
  },
  {
    id: 'FJ',
    lcc: '0',
    name: 'Fiji Airways'
  },
  {
    id: 'BD',
    lcc: '0',
    name: 'Cambodia Bayon Airlines'
  },
  {
    id: '8D',
    lcc: '0',
    name: 'Astair'
  },
  {
    id: 'OT',
    lcc: '0',
    name: 'Aeropelican Air Services'
  },
  {
    id: '6K',
    lcc: '0',
    name: 'Asian Spirit'
  },
  {
    id: 'IO',
    lcc: '1',
    name: 'IrAero'
  },
  {
    id: 'UU',
    lcc: '0',
    name: 'Air Austral'
  },
  {
    id: 'PS',
    lcc: '0',
    name: 'Ukraine International Airlines'
  },
  {
    id: 'MS',
    lcc: '0',
    name: 'Egyptair'
  },
  {
    id: '5L',
    lcc: '0',
    name: 'Aerosur'
  },
  {
    id: 'J8',
    lcc: '0',
    name: 'Berjaya Air'
  },
  {
    id: 'Z3',
    lcc: '0',
    name: 'Avient Aviation'
  },
  {
    id: 'EC',
    lcc: '0',
    name: 'Avialeasing Aviation Company'
  },
  {
    id: '2K',
    lcc: '0',
    name: 'Aerolineas Galapagos (Aerogal)'
  },
  {
    id: 'TX',
    lcc: '0',
    name: 'Air Cara\u00efbes'
  },
  {
    id: 'RC',
    lcc: '0',
    name: 'Atlantic Airways'
  },
  {
    id: '7G',
    lcc: '1',
    name: 'Star Flyer'
  },
  {
    id: '4R',
    lcc: '0',
    name: 'Renfe'
  },
  {
    id: 'LV',
    lcc: '0',
    name: 'MEGA Maledives Airline'
  },
  {
    id: 'P7',
    lcc: '0',
    name: 'Small Planet Airline'
  },
  {
    id: 'BS',
    lcc: '0',
    name: 'British International Helicopters'
  },
  {
    id: 'KF',
    lcc: '0',
    name: 'Blue1'
  },
  {
    id: 'JJ',
    lcc: '0',
    name: 'LATAM Brasil'
  },
  {
    id: 'CH',
    lcc: '0',
    name: 'Bemidji Airlines'
  },
  {
    id: '8E',
    lcc: '0',
    name: 'Bering Air'
  },
  {
    id: 'B2',
    lcc: '0',
    name: 'Belavia Belarusian Airlines'
  },
  {
    id: 'FB',
    lcc: '0',
    name: 'Bulgaria Air'
  },
  {
    id: 'GS',
    lcc: '0',
    name: 'Tianjin Airlines'
  },
  {
    id: 'BF',
    lcc: '0',
    name: 'French Blue'
  },
  {
    id: 'KC',
    lcc: '0',
    name: 'Air Astana'
  },
  {
    id: 'OI',
    lcc: '0',
    name: 'Orchid Airlines'
  },
  {
    id: 'AJ',
    lcc: '0',
    name: 'Aero Contractors'
  },
  {
    id: 'EN',
    lcc: '0',
    name: 'Air Dolomiti'
  },
  {
    id: 'YK',
    lcc: '0',
    name: 'Avia Traffic Airline'
  },
  {
    id: 'TY',
    lcc: '0',
    name: 'Air Caledonie'
  },
  {
    id: 'VX',
    lcc: '1',
    name: 'Virgin America'
  },
  {
    id: 'NF',
    lcc: '0',
    name: 'Air Vanuatu'
  },
  {
    id: 'C9',
    lcc: '1',
    name: 'SkyWise'
  },
  {
    id: '8N',
    lcc: '0',
    name: 'Regional Air Services'
  },
  {
    id: 'HR',
    lcc: '0',
    name: 'China United Airlines'
  },
  {
    id: 'QI',
    lcc: '0',
    name: 'Cimber Air'
  },
  {
    id: 'DQ',
    lcc: '0',
    name: 'Coastal Air'
  },
  {
    id: 'KR',
    lcc: '0',
    name: 'Comores Airlines'
  },
  {
    id: '6A',
    lcc: '0',
    name: 'Consorcio Aviaxsa'
  },
  {
    id: 'OU',
    lcc: '0',
    name: 'Croatia Airlines'
  },
  {
    id: 'TA',
    lcc: '0',
    name: 'Grupo TACA'
  },
  {
    id: '2L',
    lcc: '0',
    name: 'Helvetic Airways'
  },
  {
    id: '2T',
    lcc: '0',
    name: 'TruJet'
  },
  {
    id: 'GF',
    lcc: '0',
    name: 'Gulf Air Bahrain'
  },
  {
    id: 'XK',
    lcc: '0',
    name: 'Air Corsica'
  },
  {
    id: 'KB',
    lcc: '0',
    name: 'Druk Air'
  },
  {
    id: 'HU',
    lcc: '0',
    name: 'Hainan Airlines'
  },
  {
    id: 'SS',
    lcc: '0',
    name: 'Corsairfly'
  },
  {
    id: 'CZ',
    lcc: '0',
    name: 'China Southern Airlines'
  },
  {
    id: 'ZK',
    lcc: '0',
    name: 'Great Lakes Airlines'
  },
  {
    id: 'DO',
    lcc: '0',
    name: 'Dominicana de Aviaci'
  },
  {
    id: 'E3',
    lcc: '0',
    name: 'Domodedovo Airlines'
  },
  {
    id: 'H7',
    lcc: '0',
    name: 'Eagle Air'
  },
  {
    id: 'QU',
    lcc: '0',
    name: 'East African'
  },
  {
    id: 'T3',
    lcc: '0',
    name: 'Eastern Airways'
  },
  {
    id: 'UZ',
    lcc: '0',
    name: 'El-Buraq Air Transport'
  },
  {
    id: 'EU',
    lcc: '0',
    name: 'Empresa Ecuatoriana De Aviacion'
  },
  {
    id: 'B8',
    lcc: '0',
    name: 'Eritrean Airlines'
  },
  {
    id: 'EA',
    lcc: '0',
    name: 'European Air Express'
  },
  {
    id: 'JN',
    lcc: '0',
    name: 'Excel Airways'
  },
  {
    id: 'EO',
    lcc: '0',
    name: 'Express One International'
  },
  {
    id: 'FP',
    lcc: '0',
    name: 'Freedom Air'
  },
  {
    id: 'CU',
    lcc: '0',
    name: 'Cubana de Aviaci\u00f3n'
  },
  {
    id: 'CX',
    lcc: '0',
    name: 'Cathay Pacific'
  },
  {
    id: 'ZE',
    lcc: '1',
    name: 'Eastar Jet'
  },
  {
    id: 'PY',
    lcc: '0',
    name: 'Surinam Airways'
  },
  {
    id: 'OA',
    lcc: '0',
    name: 'Olympic Air'
  },
  {
    id: 'GP',
    lcc: '0',
    name: 'APG Airlines'
  },
  {
    id: 'I7',
    lcc: '0',
    name: 'Paramount Airways'
  },
  {
    id: '4G',
    lcc: '0',
    name: 'Gazpromavia'
  },
  {
    id: 'A9',
    lcc: '0',
    name: 'Georgian Airways'
  },
  {
    id: 'QB',
    lcc: '0',
    name: 'Georgian National Airlines'
  },
  {
    id: 'G0',
    lcc: '0',
    name: 'Ghana International Airlines'
  },
  {
    id: 'G7',
    lcc: '0',
    name: 'GoJet Airlines'
  },
  {
    id: 'TS',
    lcc: '0',
    name: 'Air Transat'
  },
  {
    id: 'UD',
    lcc: '0',
    name: "Hex'Air"
  },
  {
    id: 'FW',
    lcc: '0',
    name: 'Ibex Airlines'
  },
  {
    id: 'EY',
    lcc: '0',
    name: 'Etihad Airways'
  },
  {
    id: 'RZ',
    lcc: '0',
    name: 'Sansa Air'
  },
  {
    id: 'D2',
    lcc: '1',
    name: 'Severstal Air Company'
  },
  {
    id: 'LO',
    lcc: '0',
    name: 'LOT Polish Airlines'
  },
  {
    id: 'IC',
    lcc: '0',
    name: 'Indian Airlines'
  },
  {
    id: 'D6',
    lcc: '0',
    name: 'Interair South Africa'
  },
  {
    id: 'IR',
    lcc: '0',
    name: 'Iran Air'
  },
  {
    id: 'EP',
    lcc: '0',
    name: 'Iran Aseman Airlines'
  },
  {
    id: 'H8',
    lcc: '0',
    name: 'Latin American Wings'
  },
  {
    id: 'ID',
    lcc: '1',
    name: 'Batik Air'
  },
  {
    id: 'WC',
    lcc: '0',
    name: 'Islena De Inversiones'
  },
  {
    id: 'GI',
    lcc: '0',
    name: 'Itek Air'
  },
  {
    id: 'JC',
    lcc: '0',
    name: 'JAL Express'
  },
  {
    id: 'JO',
    lcc: '0',
    name: 'JALways'
  },
  {
    id: '6H',
    lcc: '0',
    name: 'Israir'
  },
  {
    id: '2M',
    lcc: '0',
    name: 'Maya Island Air'
  },
  {
    id: 'RQ',
    lcc: '0',
    name: 'Kam Air'
  },
  {
    id: 'KV',
    lcc: '0',
    name: 'Kavminvodyavia'
  },
  {
    id: 'M5',
    lcc: '0',
    name: 'Kenmore Air'
  },
  {
    id: 'Y9',
    lcc: '0',
    name: 'Kish Air'
  },
  {
    id: '7K',
    lcc: '0',
    name: 'Kogalymavia Air Company'
  },
  {
    id: 'GW',
    lcc: '0',
    name: 'Kuban Airlines'
  },
  {
    id: 'EG',
    lcc: '0',
    name: 'Ernest Airlines'
  },
  {
    id: 'NG',
    lcc: '0',
    name: 'Lauda Air'
  },
  {
    id: 'LN',
    lcc: '0',
    name: 'Libyan Arab Airlines'
  },
  {
    id: 'AT',
    lcc: '0',
    name: 'Royal Air Maroc'
  },
  {
    id: 'MP',
    lcc: '0',
    name: 'Martinair'
  },
  {
    id: 'MZ',
    lcc: '0',
    name: 'Merpati Nusantara Airlines'
  },
  {
    id: 'YV',
    lcc: '0',
    name: 'Mesa Airlines'
  },
  {
    id: 'MX',
    lcc: '0',
    name: 'Mexicana de Aviaci'
  },
  {
    id: 'YX',
    lcc: '0',
    name: 'Midwest Airlines'
  },
  {
    id: 'MY',
    lcc: '0',
    name: 'Midwest Airlines (Egypt)'
  },
  {
    id: '8I',
    lcc: '0',
    name: 'Myway Airlines'
  },
  {
    id: 'YM',
    lcc: '0',
    name: 'Montenegro Airlines'
  },
  {
    id: '3R',
    lcc: '0',
    name: 'Moskovia Airlines'
  },
  {
    id: 'M9',
    lcc: '0',
    name: 'Motor Sich'
  },
  {
    id: '8P',
    lcc: '0',
    name: 'Pacific Coastal Airline'
  },
  {
    id: 'NC',
    lcc: '0',
    name: 'National Jet Systems'
  },
  {
    id: 'ON',
    lcc: '0',
    name: 'Nauru Air Corporation'
  },
  {
    id: 'MT',
    lcc: '1',
    name: 'Thomas Cook Airlines'
  },
  {
    id: 'V7',
    lcc: '1',
    name: 'Volotea'
  },
  {
    id: 'HK',
    lcc: '0',
    name: 'Yangon Airways'
  },
  {
    id: 'RA',
    lcc: '0',
    name: 'Nepal Airlines'
  },
  {
    id: 'EJ',
    lcc: '0',
    name: 'New England Airlines'
  },
  {
    id: 'U7',
    lcc: '0',
    name: 'Northern Dene Airways'
  },
  {
    id: 'J3',
    lcc: '0',
    name: 'Northwestern Air'
  },
  {
    id: '9B',
    lcc: '0',
    name: 'AccesRail'
  },
  {
    id: 'NU',
    lcc: '0',
    name: 'Japan Transocean Air'
  },
  {
    id: 'KE',
    lcc: '0',
    name: 'Korean Air'
  },
  {
    id: 'O2',
    lcc: '0',
    name: 'Oceanic Airlines'
  },
  {
    id: 'OY',
    lcc: '0',
    name: 'Omni Air International'
  },
  {
    id: 'OL',
    lcc: '0',
    name: 'Ostfriesische Lufttransport'
  },
  {
    id: 'VR',
    lcc: '0',
    name: 'TACV'
  },
  {
    id: 'PV',
    lcc: '0',
    name: 'PAN Air'
  },
  {
    id: 'PI',
    lcc: '0',
    name: 'Polar Airlines'
  },
  {
    id: 'O6',
    lcc: '0',
    name: 'Avianca Brazil'
  },
  {
    id: 'PU',
    lcc: '0',
    name: 'Plus Ultra Lineas Aereas'
  },
  {
    id: 'QV',
    lcc: '0',
    name: 'Lao Airlines'
  },
  {
    id: 'U4',
    lcc: '0',
    name: 'Buddha Air'
  },
  {
    id: '8J',
    lcc: '0',
    name: 'Eco Jet'
  },
  {
    id: '9E',
    lcc: '0',
    name: 'Pinnacle Airlines'
  },
  {
    id: 'PH',
    lcc: '0',
    name: 'Polynesian Airlines'
  },
  {
    id: 'BK',
    lcc: '0',
    name: 'Potomac Air'
  },
  {
    id: 'IK',
    lcc: '0',
    name: 'Pegas Fly'
  },
  {
    id: 'O7',
    lcc: '0',
    name: 'Orenburzhye Airline'
  },
  {
    id: '7B',
    lcc: '0',
    name: 'Fly Blue Crane'
  },
  {
    id: 'CG',
    lcc: '0',
    name: 'Airlines PNG'
  },
  {
    id: 'LM',
    lcc: '0',
    name: 'LoganAir LM'
  },
  {
    id: 'RH',
    lcc: '0',
    name: 'Republic Express Airlines'
  },
  {
    id: 'GZ',
    lcc: '0',
    name: 'Air Rarotonga'
  },
  {
    id: 'FQ',
    lcc: '0',
    name: 'Thomas Cook Airlines'
  },
  {
    id: '6O',
    lcc: '0',
    name: 'Orbest'
  },
  {
    id: 'S4',
    lcc: '0',
    name: 'SATA International'
  },
  {
    id: 'MQ',
    lcc: '0',
    name: 'American Eagle Airlines'
  },
  {
    id: '5M',
    lcc: '0',
    name: 'Sibaviatrans'
  },
  {
    id: 'ZS',
    lcc: '0',
    name: 'Sama Airlines'
  },
  {
    id: 'FT',
    lcc: '0',
    name: 'Siem Reap Airways'
  },
  {
    id: '5G',
    lcc: '0',
    name: 'Skyservice Airlines'
  },
  {
    id: 'FS',
    lcc: '0',
    name: 'Servicios de Transportes A'
  },
  {
    id: 'SD',
    lcc: '0',
    name: 'Sudan Airways'
  },
  {
    id: 'SJ',
    lcc: '0',
    name: 'Sriwijaya Air'
  },
  {
    id: 'RB',
    lcc: '0',
    name: 'Syrian Arab Airlines'
  },
  {
    id: 'SC',
    lcc: '0',
    name: 'Shandong Airlines'
  },
  {
    id: 'S5',
    lcc: '0',
    name: 'Shuttle America'
  },
  {
    id: 'BU',
    lcc: '0',
    name: 'Baikotovitchestrian Airlines '
  },
  {
    id: '3P',
    lcc: '0',
    name: 'Tiara Air'
  },
  {
    id: 'YB',
    lcc: '1',
    name: 'BoraJet'
  },
  {
    id: 'Q8',
    lcc: '0',
    name: 'Trans Air Congo'
  },
  {
    id: 'GE',
    lcc: '0',
    name: 'TransAsia Airways'
  },
  {
    id: 'RL',
    lcc: '0',
    name: 'Royal Falcon'
  },
  {
    id: 'T5',
    lcc: '0',
    name: 'Turkmenistan Airlines'
  },
  {
    id: 'LW',
    lcc: '0',
    name: 'Latin American Wings'
  },
  {
    id: 'NO',
    lcc: '1',
    name: 'Neos Air'
  },
  {
    id: '5F',
    lcc: '1',
    name: 'Fly One'
  },
  {
    id: '47',
    lcc: '0',
    name: '88'
  },
  {
    id: 'DT',
    lcc: '0',
    name: 'TAAG Angola Airlines'
  },
  {
    id: 'AX',
    lcc: '0',
    name: 'Trans States Airlines'
  },
  {
    id: 'JD',
    lcc: '0',
    name: 'Beijing Capital Airlines'
  },
  {
    id: 'A4',
    lcc: '0',
    name: 'Azimuth'
  },
  {
    id: '3T',
    lcc: '0',
    name: 'Turan Air'
  },
  {
    id: 'U5',
    lcc: '0',
    name: 'USA3000 Airlines'
  },
  {
    id: 'UF',
    lcc: '0',
    name: 'UM Airlines'
  },
  {
    id: 'US',
    lcc: '0',
    name: 'US Airways'
  },
  {
    id: '2W',
    lcc: '0',
    name: 'Welcome Air'
  },
  {
    id: '8O',
    lcc: '0',
    name: 'West Coast Air'
  },
  {
    id: 'IV',
    lcc: '0',
    name: 'Wind Jet'
  },
  {
    id: 'MF',
    lcc: '0',
    name: 'Xiamen Airlines'
  },
  {
    id: 'IY',
    lcc: '0',
    name: 'Yemenia'
  },
  {
    id: '9Y',
    lcc: '0',
    name: 'Air Kazakhstan'
  },
  {
    id: 'HZ',
    lcc: '0',
    name: 'Aurora Airlines'
  },
  {
    id: 'VS',
    lcc: '0',
    name: 'Virgin Atlantic Airways'
  },
  {
    id: 'S7',
    lcc: '0',
    name: 'S7 Airlines'
  },
  {
    id: 'KW',
    lcc: '0',
    name: 'Carnival Air Lines'
  },
  {
    id: 'B7',
    lcc: '0',
    name: 'Uni Air'
  },
  {
    id: 'YD',
    lcc: '0',
    name: 'Gomelavia'
  },
  {
    id: 'TM',
    lcc: '0',
    name: 'Air Mozambique'
  },
  {
    id: 'GM',
    lcc: '0',
    name: 'Germania Flug'
  },
  {
    id: 'VH',
    lcc: '0',
    name: 'Virgin Pacific'
  },
  {
    id: 'CN',
    lcc: '0',
    name: 'Canadian National Airways'
  },
  {
    id: 'L8',
    lcc: '0',
    name: 'Line Blue'
  },
  {
    id: 'DH',
    lcc: '0',
    name: 'Dennis Sky'
  },
  {
    id: 'ZZ',
    lcc: '0',
    name: 'Zz'
  },
  {
    id: 'PZ',
    lcc: '0',
    name: 'LATAM Paraguay'
  },
  {
    id: 'EQ',
    lcc: '0',
    name: 'TAME'
  },
  {
    id: 'J4',
    lcc: '0',
    name: 'ALAK'
  },
  {
    id: 'S6',
    lcc: '0',
    name: 'Salmon Air'
  },
  {
    id: 'WD',
    lcc: '0',
    name: 'Amsterdam Airlines'
  },
  {
    id: '8F',
    lcc: '0',
    name: 'STP Airways'
  },
  {
    id: '7Y',
    lcc: '0',
    name: 'Med Airways'
  },
  {
    id: 'UQ',
    lcc: '0',
    name: 'Skyjet Airlines'
  },
  {
    id: 'G6',
    lcc: '0',
    name: 'Air Volga'
  },
  {
    id: '4L',
    lcc: '0',
    name: 'Euroline'
  },
  {
    id: 'ZF',
    lcc: '0',
    name: 'Athens Airways'
  },
  {
    id: 'DZ',
    lcc: '0',
    name: 'Starline.kz'
  },
  {
    id: '6P',
    lcc: '0',
    name: 'Gryphon Airlines'
  },
  {
    id: 'JR',
    lcc: '0',
    name: 'Joy Air'
  },
  {
    id: '9H',
    lcc: '0',
    name: 'MDLR Airlines'
  },
  {
    id: 'TI',
    lcc: '0',
    name: 'Tailwind Airlines'
  },
  {
    id: 'Q2',
    lcc: '0',
    name: 'Maldivian'
  },
  {
    id: 'JH',
    lcc: '0',
    name: 'Fuji Dream Airlines'
  },
  {
    id: 'LZ',
    lcc: '0',
    name: 'belleair'
  },
  {
    id: 'XZ',
    lcc: '0',
    name: 'Congo Express'
  },
  {
    id: 'HY',
    lcc: '0',
    name: 'Uzbekistan Airways'
  },
  {
    id: 'TV',
    lcc: '0',
    name: 'Tibet Airlines'
  },
  {
    id: 'UR',
    lcc: '0',
    name: 'UTair-Express'
  },
  {
    id: 'G4',
    lcc: '1',
    name: 'Allegiant Air'
  },
  {
    id: 'BB',
    lcc: '0',
    name: 'Seaborne Airlines'
  },
  {
    id: 'MN',
    lcc: '1',
    name: 'Kulula'
  },
  {
    id: 'H5',
    lcc: '0',
    name: 'I-Fly'
  },
  {
    id: 'R8',
    lcc: '0',
    name: 'AirRussia'
  },
  {
    id: 'D1',
    lcc: '0',
    name: 'Domenican Airlines'
  },
  {
    id: 'C4',
    lcc: '0',
    name: 'LionXpress'
  },
  {
    id: '69',
    lcc: '0',
    name: 'Royal European Airlines'
  },
  {
    id: 'XO',
    lcc: '0',
    name: 'LTE International Airways'
  },
  {
    id: 'G5',
    lcc: '0',
    name: 'Huaxia'
  },
  {
    id: '3B',
    lcc: '0',
    name: 'JobAir'
  },
  {
    id: 'P8',
    lcc: '0',
    name: 'Air Mekong'
  },
  {
    id: 'HH',
    lcc: '0',
    name: 'Air Hamburg (AHO)'
  },
  {
    id: 'NS',
    lcc: '0',
    name: 'Caucasus Airlines'
  },
  {
    id: 'VO',
    lcc: '0',
    name: 'FlyVLM'
  },
  {
    id: 'KT',
    lcc: '0',
    name: 'VickJet'
  },
  {
    id: 'XV',
    lcc: '0',
    name: 'BVI Airways'
  },
  {
    id: 'ZJ',
    lcc: '0',
    name: 'Zambezi Airlines (ZMA)'
  },
  {
    id: 'YQ',
    lcc: '0',
    name: 'Polet Airlines (Priv)'
  },
  {
    id: '12',
    lcc: '0',
    name: '12 North'
  },
  {
    id: 'L6',
    lcc: '0',
    name: 'Mauritania Airlines International'
  },
  {
    id: 'GY',
    lcc: '0',
    name: 'Colorful Guizhou Airlines'
  },
  {
    id: 'CE',
    lcc: '0',
    name: 'Chalair'
  },
  {
    id: '7L',
    lcc: '0',
    name: "Sun D'Or"
  },
  {
    id: 'U3',
    lcc: '0',
    name: 'Avies'
  },
  {
    id: 'ZA',
    lcc: '0',
    name: 'Access Air'
  },
  {
    id: 'TD',
    lcc: '0',
    name: 'Atlantis European Airways'
  },
  {
    id: 'VC',
    lcc: '0',
    name: 'Via Air'
  },
  {
    id: 'DX',
    lcc: '0',
    name: 'DAT Danish Air Transport'
  },
  {
    id: 'D3',
    lcc: '0',
    name: 'Daallo Airlines'
  },
  {
    id: 'IA',
    lcc: '0',
    name: 'Iraqi Airways'
  },
  {
    id: '1T',
    lcc: '0',
    name: '1Time Airline'
  },
  {
    id: 'FM',
    lcc: '0',
    name: 'Shanghai Airlines'
  },
  {
    id: 'UH',
    lcc: '0',
    name: 'AtlasGlobal Ukraine'
  },
  {
    id: 'JK',
    lcc: '0',
    name: 'Spanair'
  },
  {
    id: 'S3',
    lcc: '0',
    name: 'Santa Barbara Airlines'
  },
  {
    id: 'JZ',
    lcc: '0',
    name: 'Skyways Express'
  },
  {
    id: 'K5',
    lcc: '0',
    name: 'SeaPort Airlines'
  },
  {
    id: 'NB',
    lcc: '0',
    name: 'Sterling Airlines'
  },
  {
    id: 'VI',
    lcc: '0',
    name: 'Volga-Dnepr Airlines'
  },
  {
    id: 'VK',
    lcc: '0',
    name: 'Virgin Nigeria Airways'
  },
  {
    id: 'VG',
    lcc: '0',
    name: 'VLM Airlines'
  },
  {
    id: '2Q',
    lcc: '0',
    name: 'Air Cargo Carriers'
  },
  {
    id: 'OK',
    lcc: '0',
    name: 'Czech Airlines'
  },
  {
    id: '5P',
    lcc: '0',
    name: 'Small Planet Airlines'
  },
  {
    id: 'IE',
    lcc: '0',
    name: 'Solomon Airlines'
  },
  {
    id: '6J',
    lcc: '0',
    name: 'Solaseed Air'
  },
  {
    id: '4Q',
    lcc: '0',
    name: 'Safi Airlines'
  },
  {
    id: '7Q',
    lcc: '0',
    name: 'Pan Am World Airways Dominicana'
  },
  {
    id: 'V6',
    lcc: '0',
    name: 'VIP Ecuador'
  },
  {
    id: 'OC',
    lcc: '0',
    name: 'Catovair'
  },
  {
    id: '7Z',
    lcc: '0',
    name: 'Halcyonair'
  },
  {
    id: '4P',
    lcc: '0',
    name: 'Business Aviation'
  },
  {
    id: 'UM',
    lcc: '0',
    name: 'Air Zimbabwe'
  },
  {
    id: '6Y',
    lcc: '0',
    name: 'SmartLynx Airlines'
  },
  {
    id: 'AH',
    lcc: '0',
    name: 'Air Algerie'
  },
  {
    id: 'E4',
    lcc: '0',
    name: 'Elysian Airlines'
  },
  {
    id: '7T',
    lcc: '0',
    name: 'Trenitalia'
  },
  {
    id: 'M4',
    lcc: '0',
    name: 'Mistral Air'
  },
  {
    id: 'FI',
    lcc: '0',
    name: 'Icelandair'
  },
  {
    id: 'ZN',
    lcc: '0',
    name: 'Zenith International Airline'
  },
  {
    id: 'HT',
    lcc: '0',
    name: 'Hellenic Imperial Airways'
  },
  {
    id: 'Q9',
    lcc: '0',
    name: 'Arik Niger'
  },
  {
    id: 'YO',
    lcc: '0',
    name: 'TransHolding System'
  },
  {
    id: '3F',
    lcc: '0',
    name: 'Fly Colombia ( Interliging Flights )'
  },
  {
    id: 'HC',
    lcc: '0',
    name: 'Himalayan Airlines'
  },
  {
    id: 'V9',
    lcc: '0',
    name: 'Star1 Airlines'
  },
  {
    id: 'ZG',
    lcc: '0',
    name: 'Grozny Avia'
  },
  {
    id: 'AU',
    lcc: '0',
    name: 'Austral Lineas Aereas'
  },
  {
    id: 'EV',
    lcc: '0',
    name: 'ExpressJet'
  },
  {
    id: '2F',
    lcc: '0',
    name: 'Frontier Flying Service'
  },
  {
    id: '9S',
    lcc: '0',
    name: 'Spring Airlines'
  },
  {
    id: 'K1',
    lcc: '0',
    name: 'Kostromskie avialinii'
  },
  {
    id: 'B1',
    lcc: '0',
    name: 'Baltic Air lines'
  },
  {
    id: 'XX',
    lcc: '0',
    name: 'Greenfly'
  },
  {
    id: 'FU',
    lcc: '0',
    name: 'Felix Airways'
  },
  {
    id: 'DS',
    lcc: '0',
    name: 'EasyJet (DS)'
  },
  {
    id: 'YL',
    lcc: '0',
    name: 'Yamal Airlines'
  },
  {
    id: 'WO',
    lcc: '0',
    name: 'Swoop'
  },
  {
    id: '8Z',
    lcc: '0',
    name: 'Wizz Air Hungary'
  },
  {
    id: 'R5',
    lcc: '0',
    name: 'Jordan Aviation'
  },
  {
    id: 'HF',
    lcc: '0',
    name: "Air Cote d'Ivoire"
  },
  {
    id: '6B',
    lcc: '0',
    name: 'TUIfly Nordic'
  },
  {
    id: '9T',
    lcc: '0',
    name: 'Transwest Air'
  },
  {
    id: 'AL',
    lcc: '0',
    name: 'Skywalk Airlines'
  },
  {
    id: 'SR',
    lcc: '0',
    name: 'Swissair'
  },
  {
    id: 'SP',
    lcc: '0',
    name: 'SATA Air Acores'
  },
  {
    id: 'RD',
    lcc: '0',
    name: 'Ryan International Airlines'
  },
  {
    id: 'R4',
    lcc: '0',
    name: 'Rossiya'
  },
  {
    id: 'NI',
    lcc: '0',
    name: 'Portugalia'
  },
  {
    id: '9Q',
    lcc: '0',
    name: 'PB Air'
  },
  {
    id: 'OJ',
    lcc: '0',
    name: 'Overland Airways'
  },
  {
    id: 'QO',
    lcc: '0',
    name: 'Origin Pacific Airways'
  },
  {
    id: 'NW',
    lcc: '0',
    name: 'Northwest Airlines'
  },
  {
    id: '1I',
    lcc: '0',
    name: 'NetJets'
  },
  {
    id: 'DM',
    lcc: '0',
    name: 'Maersk'
  },
  {
    id: 'MB',
    lcc: '0',
    name: 'MNG Airlines'
  },
  {
    id: 'VV',
    lcc: '0',
    name: 'Viva Air Peru'
  },
  {
    id: 'CL',
    lcc: '0',
    name: 'Lufthansa CityLine'
  },
  {
    id: 'HE',
    lcc: '0',
    name: 'Luftfahrtgesellschaft Walter'
  },
  {
    id: 'L3',
    lcc: '0',
    name: 'LTU Austria'
  },
  {
    id: 'WJ',
    lcc: '0',
    name: 'Air Labrador'
  },
  {
    id: '3O',
    lcc: '0',
    name: 'Air Arabia Maroc'
  },
  {
    id: '1B',
    lcc: '0',
    name: 'Abacus International'
  },
  {
    id: 'H6',
    lcc: '0',
    name: 'Bulgarian Air Charter'
  },
  {
    id: 'WA',
    lcc: '0',
    name: 'KLM Cityhopper'
  },
  {
    id: 'JF',
    lcc: '0',
    name: 'Jetairfly'
  },
  {
    id: 'QJ',
    lcc: '0',
    name: 'Jet Airways'
  },
  {
    id: 'QX',
    lcc: '0',
    name: 'Horizon Air'
  },
  {
    id: 'YS',
    lcc: '0',
    name: 'R\u00e9gional'
  },
  {
    id: 'GO',
    lcc: '0',
    name: 'Kuzu Airlines Cargo'
  },
  {
    id: 'GH',
    lcc: '0',
    name: 'Globus'
  },
  {
    id: 'PL',
    lcc: '0',
    name: 'Aeroper'
  },
  {
    id: '8A',
    lcc: '0',
    name: 'Atlas Blue'
  },
  {
    id: 'NH',
    lcc: '0',
    name: 'All Nippon Airways'
  },
  {
    id: 'O8',
    lcc: '0',
    name: 'Siam Air'
  },
  {
    id: 'NQ',
    lcc: '0',
    name: 'Air Japan'
  },
  {
    id: 'XR',
    lcc: '0',
    name: 'Corendon Airlines Europe'
  },
  {
    id: 'U9',
    lcc: '0',
    name: 'Tatarstan Airlines'
  },
  {
    id: 'QM',
    lcc: '0',
    name: 'Air Malawi'
  },
  {
    id: 'NX',
    lcc: '0',
    name: 'Air Macau'
  },
  {
    id: '4N',
    lcc: '0',
    name: 'Air North Charter - Canada'
  },
  {
    id: '2B',
    lcc: '0',
    name: 'Aerocondor'
  },
  {
    id: '3G',
    lcc: '0',
    name: 'Atlant-Soyuz Airlines'
  },
  {
    id: 'V3',
    lcc: '0',
    name: 'Carpatair'
  },
  {
    id: 'L5',
    lcc: '0',
    name: 'Atlas Atlantique Airlines'
  },
  {
    id: 'BW',
    lcc: '0',
    name: 'Caribbean Airlines'
  },
  {
    id: 'QC',
    lcc: '0',
    name: 'Camair-co'
  },
  {
    id: '3U',
    lcc: '0',
    name: 'Sichuan Airlines'
  },
  {
    id: 'WU',
    lcc: '0',
    name: 'Wizz Air Ukraine'
  },
  {
    id: 'BQ',
    lcc: '0',
    name: 'Buquebus L\u00edneas A\u00e9reas'
  },
  {
    id: 'YY',
    lcc: '0',
    name: 'Virginwings'
  },
  {
    id: 'MR',
    lcc: '0',
    name: 'Homer Air'
  },
  {
    id: '8U',
    lcc: '0',
    name: 'Afriqiyah Airways'
  },
  {
    id: 'LF',
    lcc: '0',
    name: 'FlyNordic'
  },
  {
    id: 'BH',
    lcc: '0',
    name: 'Hawkair'
  },
  {
    id: '8H',
    lcc: '0',
    name: 'Heli France'
  },
  {
    id: 'JB',
    lcc: '0',
    name: 'Helijet'
  },
  {
    id: 'T4',
    lcc: '0',
    name: 'Hellas Jet'
  },
  {
    id: 'HW',
    lcc: '0',
    name: 'Hello'
  },
  {
    id: 'M7',
    lcc: '0',
    name: 'MasAir'
  },
  {
    id: 'OM',
    lcc: '0',
    name: 'MIAT Mongolian Airlines'
  },
  {
    id: 'PO',
    lcc: '0',
    name: 'Polar Airlines'
  },
  {
    id: '78',
    lcc: '0',
    name: 'Southjet cargo'
  },
  {
    id: '4H',
    lcc: '0',
    name: 'United Airways'
  },
  {
    id: 'W2',
    lcc: '0',
    name: 'Flexflight'
  },
  {
    id: 'MA',
    lcc: '0',
    name: 'Mal\u00e9v'
  },
  {
    id: 'AE',
    lcc: '0',
    name: 'Mandarin Airlines'
  },
  {
    id: 'GV',
    lcc: '0',
    name: 'Grant Aviation'
  },
  {
    id: 'N5',
    lcc: '0',
    name: 'Skagway Air Service'
  },
  {
    id: '5E',
    lcc: '0',
    name: 'SGA Airlines'
  },
  {
    id: 'AO',
    lcc: '0',
    name: 'Avianova (Russia)'
  },
  {
    id: 'P4',
    lcc: '0',
    name: 'Aerolineas Sosa'
  },
  {
    id: 'WQ',
    lcc: '0',
    name: 'PanAm World Airways'
  },
  {
    id: 'KY',
    lcc: '0',
    name: 'KSY'
  },
  {
    id: 'CQ',
    lcc: '0',
    name: 'SOCHI AIR'
  },
  {
    id: 'DN',
    lcc: '0',
    name: 'Senegal Airlines'
  },
  {
    id: '8B',
    lcc: '0',
    name: 'BusinessAir'
  },
  {
    id: 'YR',
    lcc: '0',
    name: 'SENIC AIRLINES'
  },
  {
    id: 'W5',
    lcc: '0',
    name: 'Mahan Air'
  },
  {
    id: 'G8',
    lcc: '1',
    name: 'Go Air'
  },
  {
    id: 'OG',
    lcc: '0',
    name: 'AirOnix'
  },
  {
    id: 'WH',
    lcc: '0',
    name: 'China Northwest Airlines (WH)'
  },
  {
    id: 'JA',
    lcc: '0',
    name: 'JetSmart'
  },
  {
    id: '5Q',
    lcc: '0',
    name: 'BQB Lineas Aereas'
  },
  {
    id: 'KG',
    lcc: '0',
    name: 'Royal Airways'
  },
  {
    id: 'YH',
    lcc: '0',
    name: 'Yangon Airways Ltd.'
  },
  {
    id: 'FG',
    lcc: '0',
    name: 'Ariana Afghan Airlines'
  },
  {
    id: 'LB',
    lcc: '1',
    name: 'Air Costa'
  },
  {
    id: '4M',
    lcc: '0',
    name: 'LATAM Argentina'
  },
  {
    id: 'I2',
    lcc: '0',
    name: 'Iberia Express'
  },
  {
    id: 'ZC',
    lcc: '0',
    name: 'Korongo Airlines'
  },
  {
    id: 'Q3',
    lcc: '0',
    name: 'SOCHI AIR CHATER'
  },
  {
    id: 'AN',
    lcc: '0',
    name: 'Ansett Australia'
  },
  {
    id: '4K',
    lcc: '0',
    name: 'Askari Aviation'
  },
  {
    id: 'ZX',
    lcc: '0',
    name: 'Japan Regio'
  },
  {
    id: 'L4',
    lcc: '0',
    name: 'Luchsh Airlines '
  },
  {
    id: 'HI',
    lcc: '0',
    name: 'Papillon Grand Canyon Helicopters'
  },
  {
    id: 'SO',
    lcc: '0',
    name: "Salsa d\\\\'Haiti"
  },
  {
    id: 'VP',
    lcc: '0',
    name: 'VASP'
  },
  {
    id: 'B5',
    lcc: '0',
    name: 'Fly-SAX'
  },
  {
    id: 'TJ',
    lcc: '0',
    name: 'Tradewind Aviation'
  },
  {
    id: 'SW',
    lcc: '0',
    name: 'Air Namibia'
  },
  {
    id: 'VA',
    lcc: '1',
    name: 'Virgin Australia Airlines'
  },
  {
    id: 'RG',
    lcc: '0',
    name: 'Rotana Jet'
  },
  {
    id: 'NA',
    lcc: '0',
    name: 'Nesma Air'
  },
  {
    id: 'TU',
    lcc: '0',
    name: 'Tunisair'
  },
  {
    id: 'GB',
    lcc: '0',
    name: 'BRAZIL AIR'
  },
  {
    id: 'ES',
    lcc: '0',
    name: 'EuropeSky'
  },
  {
    id: '1C',
    lcc: '0',
    name: 'OneChina'
  },
  {
    id: 'OQ',
    lcc: '0',
    name: 'Chongqing Airlines'
  },
  {
    id: '1X',
    lcc: '0',
    name: 'Branson Air Express'
  },
  {
    id: 'ZY',
    lcc: '0',
    name: 'Ada Air'
  },
  {
    id: 'C5',
    lcc: '0',
    name: 'CommutAir'
  },
  {
    id: 'C3',
    lcc: '0',
    name: 'Contact Air'
  },
  {
    id: 'CS',
    lcc: '0',
    name: 'Continental Micronesia'
  },
  {
    id: '0D',
    lcc: '0',
    name: 'Darwin Airline'
  },
  {
    id: 'SU',
    lcc: '0',
    name: 'Aeroflot Russian Airlines'
  },
  {
    id: 'DK',
    lcc: '0',
    name: 'Eastland Air'
  },
  {
    id: 'WK',
    lcc: '0',
    name: 'Edelweiss Air'
  },
  {
    id: 'GJ',
    lcc: '0',
    name: 'Eurofly Service'
  },
  {
    id: 'EZ',
    lcc: '0',
    name: 'Evergreen International Airlines'
  },
  {
    id: 'XE',
    lcc: '0',
    name: 'ExpressJet'
  },
  {
    id: 'M3',
    lcc: '0',
    name: 'Air Norway'
  },
  {
    id: 'RF',
    lcc: '0',
    name: 'Florida West International Airways'
  },
  {
    id: 'FH',
    lcc: '0',
    name: 'Freebird Airlines'
  },
  {
    id: 'C1',
    lcc: '0',
    name: 'CanXpress'
  },
  {
    id: 'QA',
    lcc: '0',
    name: 'Click (Mexicana)'
  },
  {
    id: 'W1',
    lcc: '0',
    name: 'World Experience Airline'
  },
  {
    id: 'ZQ',
    lcc: '0',
    name: 'Locair'
  },
  {
    id: 'PA',
    lcc: '1',
    name: 'Airblue'
  },
  {
    id: 'N1',
    lcc: '0',
    name: 'N1'
  },
  {
    id: '3J',
    lcc: '0',
    name: 'Jubba Airways'
  },
  {
    id: 'H9',
    lcc: '0',
    name: 'Himalaya Airlines'
  },
  {
    id: 'EM',
    lcc: '0',
    name: 'Empire Airlines'
  },
  {
    id: 'Y8',
    lcc: '0',
    name: 'Marusya Airways'
  },
  {
    id: '4X',
    lcc: '0',
    name: 'Red Jet Mexico'
  },
  {
    id: 'QY',
    lcc: '0',
    name: 'Red Jet Canada'
  },
  {
    id: 'E1',
    lcc: '0',
    name: 'Usa Sky Cargo'
  },
  {
    id: 'GN',
    lcc: '0',
    name: 'GNB Linhas Aereas'
  },
  {
    id: 'XB',
    lcc: '0',
    name: 'NEXT Brasil'
  },
  {
    id: '6U',
    lcc: '0',
    name: 'Air Cargo Germany'
  },
  {
    id: 'N0',
    lcc: '0',
    name: 'Norte Lineas Aereas'
  },
  {
    id: 'G1',
    lcc: '0',
    name: 'Indya Airline Group'
  },
  {
    id: 'T6',
    lcc: '0',
    name: 'Trans Pas Air'
  },
  {
    id: '1F',
    lcc: '0',
    name: 'CB Airways UK ( Interliging Flights )'
  },
  {
    id: 'F1',
    lcc: '0',
    name: 'Fly Brasil'
  },
  {
    id: 'CB',
    lcc: '0',
    name: 'CCML Airlines'
  },
  {
    id: '24',
    lcc: '0',
    name: 'Euro Jet'
  },
  {
    id: '2D',
    lcc: '0',
    name: 'Aero VIP (2D)'
  },
  {
    id: 'Y1',
    lcc: '0',
    name: 'Yellowstone Club Private Shuttle'
  },
  {
    id: 'H3',
    lcc: '0',
    name: 'Harbour Air (Priv)'
  },
  {
    id: 'TH',
    lcc: '0',
    name: 'TransBrasil Airlines'
  },
  {
    id: 'T7',
    lcc: '0',
    name: 'Twin Jet'
  },
  {
    id: 'A6',
    lcc: '0',
    name: 'Air Alps Aviation (A6)'
  },
  {
    id: 'BZ',
    lcc: '0',
    name: 'Black Stallion Airways'
  },
  {
    id: 'RI',
    lcc: '0',
    name: 'Mandala Airlines'
  },
  {
    id: 'HQ',
    lcc: '0',
    name: 'Thomas Cook Belgium'
  },
  {
    id: 'KN',
    lcc: '0',
    name: 'China United'
  },
  {
    id: '4B',
    lcc: '0',
    name: 'BoutiqueAir'
  },
  {
    id: 'I6',
    lcc: '0',
    name: 'Air indus'
  },
  {
    id: '__',
    lcc: '0',
    name: 'FakeAirline'
  },
  {
    id: 'IZ',
    lcc: '1',
    name: 'Arkia'
  },
  {
    id: 'KA',
    lcc: '0',
    name: 'Cathay Dragon'
  },
  {
    id: 'QG',
    lcc: '1',
    name: 'Citilink'
  },
  {
    id: 'E9',
    lcc: '0',
    name: "Compagnie Africaine d\\\\'Aviation"
  },
  {
    id: 'RS',
    lcc: '0',
    name: 'Air Seoul'
  },
  {
    id: 'DG',
    lcc: '0',
    name: 'CebGo'
  },
  {
    id: 'Q6',
    lcc: '0',
    name: 'Volaris Costa Rica'
  },
  {
    id: 'IW',
    lcc: '0',
    name: 'Wings Air'
  },
  {
    id: 'HD',
    lcc: '1',
    name: 'Air Do'
  },
  {
    id: 'CI',
    lcc: '0',
    name: 'China Airlines'
  },
  {
    id: 'VB',
    lcc: '1',
    name: 'VivaAerobus'
  },
  {
    id: '5H',
    lcc: '1',
    name: 'Fly540'
  },
  {
    id: 'F8',
    lcc: '0',
    name: 'Flair Airlines'
  },
  {
    id: 'K6',
    lcc: '0',
    name: 'Cambodia Angkor Air'
  },
  {
    id: 'DA',
    lcc: '0',
    name: 'Dana Air'
  },
  {
    id: 'JE',
    lcc: '1',
    name: 'Mango'
  },
  {
    id: 'YT',
    lcc: '0',
    name: 'Yeti Airways'
  },
  {
    id: 'OB',
    lcc: '1',
    name: 'Boliviana de Aviaci\u00f3n'
  },
  {
    id: 'TG',
    lcc: '0',
    name: 'Thai Airways International'
  },
  {
    id: 'K8',
    lcc: '0',
    name: 'Kan Air'
  },
  {
    id: 'RO',
    lcc: '0',
    name: 'Tarom'
  },
  {
    id: 'WW',
    lcc: '1',
    name: 'WOW air'
  },
  {
    id: '77',
    lcc: '0',
    name: 'Southjet connect'
  },
  {
    id: '9X',
    lcc: '1',
    name: 'Southern Airways Express'
  },
  {
    id: 'CC',
    lcc: '0',
    name: 'CM Airlines'
  },
  {
    id: 'OH',
    lcc: '0',
    name: 'Comair'
  },
  {
    id: '9L',
    lcc: '0',
    name: 'Colgan Air'
  },
  {
    id: 'CJ',
    lcc: '0',
    name: 'BA CityFlyer'
  },
  {
    id: 'O1',
    lcc: '0',
    name: 'Orbit Airlines Azerbaijan'
  },
  {
    id: '5K',
    lcc: '0',
    name: 'Hi Fly (5K)'
  },
  {
    id: 'NJ',
    lcc: '0',
    name: 'Nordic Global Airlines'
  },
  {
    id: '20',
    lcc: '0',
    name: 'Air Salone'
  },
  {
    id: 'EE',
    lcc: '0',
    name: 'RegionalJet'
  },
  {
    id: 'QL',
    lcc: '1',
    name: 'Laser Air'
  },
  {
    id: 'RK',
    lcc: '0',
    name: 'Air Afrique'
  },
  {
    id: '76',
    lcc: '0',
    name: 'Southjet'
  },
  {
    id: 'OS',
    lcc: '0',
    name: 'Austrian Airlines'
  },
  {
    id: 'FR',
    lcc: '1',
    name: 'Ryanair'
  },
  {
    id: 'SA',
    lcc: '0',
    name: 'South African Airways'
  },
  {
    id: 'GR',
    lcc: '0',
    name: 'Aurigny Air Services'
  },
  {
    id: 'UX',
    lcc: '0',
    name: 'Air Europa'
  },
  {
    id: 'VN',
    lcc: '0',
    name: 'Vietnam Airlines'
  },
  {
    id: 'WN',
    lcc: '1',
    name: 'Southwest Airlines'
  },
  {
    id: 'TK',
    lcc: '0',
    name: 'Turkish Airlines'
  },
  {
    id: '9K',
    lcc: '1',
    name: 'Cape Air'
  },
  {
    id: 'KM',
    lcc: '0',
    name: 'Air Malta'
  },
  {
    id: 'AA',
    lcc: '0',
    name: 'American Airlines'
  },
  {
    id: 'YE',
    lcc: '0',
    name: 'Yan Air'
  },
  {
    id: 'Z9',
    lcc: '0',
    name: 'Bek Air'
  },
  {
    id: 'XC',
    lcc: '1',
    name: 'Corendon'
  },
  {
    id: 'P6',
    lcc: '0',
    name: 'Pascan Aviation'
  },
  {
    id: 'YU',
    lcc: '0',
    name: 'EuroAtlantic Airways'
  },
  {
    id: '9M',
    lcc: '0',
    name: 'Central Mountain Air'
  },
  {
    id: 'SM',
    lcc: '1',
    name: 'Air Cairo'
  },
  {
    id: 'EF',
    lcc: '1',
    name: 'EasyFly'
  },
  {
    id: 'KI',
    lcc: '1',
    name: 'KrasAvia'
  },
  {
    id: '7N',
    lcc: '0',
    name: 'Pawa Dominicana'
  },
  {
    id: '6T',
    lcc: '1',
    name: 'Air Mandalay'
  },
  {
    id: 'XL',
    lcc: '0',
    name: 'LATAM Ecuador'
  },
  {
    id: 'P5',
    lcc: '0',
    name: 'Wingo airlines'
  },
  {
    id: '2C',
    lcc: '0',
    name: 'SNCF'
  },
  {
    id: 'A3',
    lcc: '1',
    name: 'Aegean'
  },
  {
    id: 'NK',
    lcc: '1',
    name: 'Spirit Airlines'
  },
  {
    id: '2J',
    lcc: '0',
    name: 'Air Burkina'
  },
  {
    id: 'BP',
    lcc: '0',
    name: 'Air Botswana'
  },
  {
    id: 'V8',
    lcc: '0',
    name: 'ATRAN Cargo Airlines'
  },
  {
    id: '6F',
    lcc: '1',
    name: 'Primera Air Nordic'
  },
  {
    id: 'CW',
    lcc: '0',
    name: 'Air Marshall Islands'
  },
  {
    id: 'IG',
    lcc: '1',
    name: 'Meridiana'
  },
  {
    id: 'MW',
    lcc: '0',
    name: 'Mokulele Flight Service'
  },
  {
    id: 'DL',
    lcc: '0',
    name: 'Delta Air Lines'
  },
  {
    id: 'RV',
    lcc: '0',
    name: 'Caspian Airlines'
  },
  {
    id: 'C0',
    lcc: '0',
    name: 'Centralwings'
  },
  {
    id: 'VZ',
    lcc: '0',
    name: 'Thai Vietjet'
  },
  {
    id: 'IS',
    lcc: '0',
    name: 'Island Airlines'
  },
  {
    id: 'IF',
    lcc: '0',
    name: 'Islas Airways'
  },
  {
    id: 'R6',
    lcc: '0',
    name: 'RACSA'
  },
  {
    id: 'RW',
    lcc: '0',
    name: 'Republic Airlines'
  },
  {
    id: 'C2',
    lcc: '0',
    name: 'CanXplorer'
  },
  {
    id: 'T2',
    lcc: '0',
    name: 'Thai Air Cargo'
  },
  {
    id: 'Q5',
    lcc: '0',
    name: '40-Mile Air'
  },
  {
    id: 'V5',
    lcc: '0',
    name: 'Danube Wings (V5)'
  },
  {
    id: 'SH',
    lcc: '0',
    name: 'Sharp Airlines'
  },
  {
    id: 'LC',
    lcc: '0',
    name: 'Varig Log'
  },
  {
    id: 'XF',
    lcc: '0',
    name: 'Vladivostok Air'
  },
  {
    id: '7W',
    lcc: '0',
    name: 'Wayraper'
  },
  {
    id: 'F7',
    lcc: '0',
    name: 'Etihad Regional'
  },
  {
    id: 'S2',
    lcc: '0',
    name: 'Air Sahara'
  },
  {
    id: 'V2',
    lcc: '0',
    name: 'Vision Airlines'
  },
  {
    id: '8V',
    lcc: '0',
    name: 'Astral Aviation'
  },
  {
    id: '8T',
    lcc: '0',
    name: 'Air Tindi'
  },
  {
    id: 'UB',
    lcc: '0',
    name: 'Myanmar National Airlines'
  },
  {
    id: 'YN',
    lcc: '0',
    name: 'Air Creebec'
  },
  {
    id: 'PB',
    lcc: '0',
    name: 'Provincial Airlines'
  },
  {
    id: '7V',
    lcc: '0',
    name: 'Federai Airlines'
  },
  {
    id: 'V4',
    lcc: '0',
    name: 'Vieques Air Link'
  },
  {
    id: 'P1',
    lcc: '0',
    name: 'Publiccharters.com'
  },
  {
    id: '0V',
    lcc: '0',
    name: 'VASCO'
  },
  {
    id: 'ZD',
    lcc: '0',
    name: 'EWA Air'
  },
  {
    id: '4W',
    lcc: '0',
    name: 'Allied Air'
  },
  {
    id: '7J',
    lcc: '1',
    name: 'Tajik Air'
  },
  {
    id: 'N6',
    lcc: '0',
    name: 'Nomad Aviation'
  },
  {
    id: 'F2',
    lcc: '0',
    name: 'Safarilink Aviation'
  },
  {
    id: 'WG',
    lcc: '1',
    name: 'Sunwing'
  },
  {
    id: 'WV',
    lcc: '0',
    name: 'Aero VIP'
  },
  {
    id: 'J1',
    lcc: '0',
    name: 'One Jet'
  },
  {
    id: 'ST',
    lcc: '1',
    name: 'Germania'
  },
  {
    id: 'UL',
    lcc: '0',
    name: 'SriLankan Airlines'
  },
  {
    id: 'ML',
    lcc: '1',
    name: 'Air Mediterranee'
  },
  {
    id: 'JT',
    lcc: '1',
    name: 'Lion Air'
  },
  {
    id: 'DB',
    lcc: '0',
    name: 'Brit Air'
  },
  {
    id: 'R3',
    lcc: '1',
    name: 'Yakutia Airlines'
  },
  {
    id: 'VJ',
    lcc: '1',
    name: 'VietJet Air'
  },
  {
    id: 'DR',
    lcc: '1',
    name: 'Ruili Airlines'
  },
  {
    id: 'DV',
    lcc: '1',
    name: 'Scat Air'
  },
  {
    id: 'FA',
    lcc: '1',
    name: 'Fly Safair'
  },
  {
    id: 'PN',
    lcc: '1',
    name: 'West Air China'
  },
  {
    id: 'JX',
    lcc: '1',
    name: 'Jambojet'
  },
  {
    id: '8L',
    lcc: '1',
    name: 'Lucky air'
  },
  {
    id: 'LX',
    lcc: '0',
    name: 'Swiss International Air Lines'
  },
  {
    id: 'K9',
    lcc: '1',
    name: 'KrasAvia (old iata)'
  },
  {
    id: '5U',
    lcc: '0',
    name: 'Transportes A\u00e9reos Guatemaltecos'
  },
  {
    id: 'XY',
    lcc: '1',
    name: 'flynas'
  },
  {
    id: 'J7',
    lcc: '1',
    name: 'Greenland Express'
  },
  {
    id: 'SG',
    lcc: '1',
    name: 'Spicejet'
  },
  {
    id: '5W',
    lcc: '0',
    name: 'WESTBahn'
  },
  {
    id: '3K',
    lcc: '0',
    name: 'Jetstar Asia Airways'
  },
  {
    id: 'Z6',
    lcc: '1',
    name: 'Dniproavia'
  },
  {
    id: 'EL',
    lcc: '1',
    name: 'Ellinair'
  },
  {
    id: 'MJ',
    lcc: '1',
    name: 'Mihin Lanka'
  },
  {
    id: '5C',
    lcc: '1',
    name: 'Nature Air'
  },
  {
    id: '9N',
    lcc: '0',
    name: 'Tropic Air Limited'
  },
  {
    id: 'HX',
    lcc: '1',
    name: 'Hong Kong Airlines'
  },
  {
    id: 'AW',
    lcc: '1',
    name: 'RAVSA Venezolana'
  },
  {
    id: '9C',
    lcc: '1',
    name: 'Spring Airlines'
  },
  {
    id: 'G9',
    lcc: '1',
    name: 'Air Arabia'
  },
  {
    id: 'YZ',
    lcc: '0',
    name: 'Alas Uruguay'
  },
  {
    id: '5Z',
    lcc: '1',
    name: 'Cem Air'
  },
  {
    id: 'BR',
    lcc: '1',
    name: 'EVA Air'
  },
  {
    id: 'NL',
    lcc: '1',
    name: 'Shaheen Air International'
  },
  {
    id: 'ZB',
    lcc: '1',
    name: 'Monarch'
  },
  {
    id: '6R',
    lcc: '1',
    name: 'Alrosa'
  },
  {
    id: 'AB',
    lcc: '1',
    name: 'Air Berlin'
  },
  {
    id: '9V',
    lcc: '0',
    name: 'Avior Airlines'
  },
  {
    id: '5O',
    lcc: '0',
    name: 'ASL Airlines France'
  },
  {
    id: 'EB',
    lcc: '1',
    name: 'Wamos Air'
  },
  {
    id: 'CA',
    lcc: '0',
    name: 'Air China'
  },
  {
    id: 'WS',
    lcc: '1',
    name: 'WestJet'
  },
  {
    id: 'OR',
    lcc: '1',
    name: 'TUI Airlines Netherlands'
  },
  {
    id: 'GT',
    lcc: '1',
    name: 'Flyvista'
  },
  {
    id: '7I',
    lcc: '1',
    name: 'Insel Air'
  },
  {
    id: 'DP',
    lcc: '1',
    name: 'Pobeda'
  },
  {
    id: 'BC',
    lcc: '1',
    name: 'Skymark Airlines'
  },
  {
    id: 'BL',
    lcc: '0',
    name: 'Jetstar Pacific'
  },
  {
    id: '5N',
    lcc: '1',
    name: 'NordAvia'
  },
  {
    id: 'S8',
    lcc: '1',
    name: 'SkyWise'
  },
  {
    id: 'VF',
    lcc: '0',
    name: 'Valuair'
  },
  {
    id: 'W4',
    lcc: '1',
    name: 'LC Per\u00fa'
  },
  {
    id: 'KL',
    lcc: '0',
    name: 'KLM Royal Dutch Airlines'
  },
  {
    id: 'JW',
    lcc: '1',
    name: 'Vanilla Air'
  },
  {
    id: '2G',
    lcc: '1',
    name: 'Angara airlines'
  },
  {
    id: 'Y5',
    lcc: '1',
    name: 'Golden Myanmar Airlines'
  },
  {
    id: '7R',
    lcc: '1',
    name: 'Rusline'
  },
  {
    id: 'LJ',
    lcc: '1',
    name: 'Jin Air'
  },
  {
    id: 'DC',
    lcc: '1',
    name: 'Sverigeflyg'
  },
  {
    id: 'WB',
    lcc: '0',
    name: 'Rwandair Express'
  },
  {
    id: '8R',
    lcc: '1',
    name: 'Sol L\u00edneas A\u00e9reas'
  },
  {
    id: 'I4',
    lcc: '0',
    name: 'I-Fly'
  },
  {
    id: '8M',
    lcc: '0',
    name: 'Myanmar Airways'
  },
  {
    id: 'G3',
    lcc: '1',
    name: 'Gol Transportes A\u00e9reos'
  },
  {
    id: 'PG',
    lcc: '1',
    name: 'Bangkok Airways'
  },
  {
    id: 'OX',
    lcc: '1',
    name: 'Orient Thai Airlines'
  },
  {
    id: 'NZ',
    lcc: '1',
    name: 'Air New Zealand'
  },
  {
    id: 'VQ',
    lcc: '1',
    name: 'Novoair'
  },
  {
    id: 'X9',
    lcc: '0',
    name: 'Fake Airline'
  },
  {
    id: 'BI',
    lcc: '0',
    name: 'Royal Brunei Airlines'
  },
  {
    id: 'BT',
    lcc: '1',
    name: 'airBaltic'
  },
  {
    id: 'BE',
    lcc: '1',
    name: 'flybe'
  },
  {
    id: 'XN',
    lcc: '0',
    name: 'Xpressair'
  },
  {
    id: 'K7',
    lcc: '0',
    name: 'Air KBZ'
  },
  {
    id: 'MO',
    lcc: '1',
    name: 'Calm Air'
  },
  {
    id: 'SI',
    lcc: '0',
    name: 'Blue Islands'
  },
  {
    id: 'MM',
    lcc: '1',
    name: 'Peach Aviation'
  },
  {
    id: 'C7',
    lcc: '1',
    name: 'Cinnamon Air'
  },
  {
    id: 'YJ',
    lcc: '1',
    name: 'Asian Wings Air'
  },
  {
    id: 'OZ',
    lcc: '0',
    name: 'Asiana Airlines'
  },
  {
    id: 'OD',
    lcc: '1',
    name: 'Malindo Air'
  },
  {
    id: 'ED',
    lcc: '1',
    name: 'Airblue'
  },
  {
    id: 'KX',
    lcc: '0',
    name: 'Cayman Airways'
  },
  {
    id: '7H',
    lcc: '1',
    name: 'Ravn Alaska'
  },
  {
    id: 'CO',
    lcc: '0',
    name: 'Cobalt Air'
  },
  {
    id: 'RX',
    lcc: '1',
    name: 'Regent Airways'
  },
  {
    id: 'BX',
    lcc: '1',
    name: 'Air Busan'
  },
  {
    id: 'KQ',
    lcc: '0',
    name: 'Kenya Airways'
  },
  {
    id: 'ME',
    lcc: '0',
    name: 'Middle East Airlines'
  },
  {
    id: 'CM',
    lcc: '0',
    name: 'Copa Airlines'
  },
  {
    id: '9W',
    lcc: '0',
    name: 'Jet Airways'
  },
  {
    id: 'IX',
    lcc: '1',
    name: 'Air India Express'
  },
  {
    id: 'BY',
    lcc: '1',
    name: 'TUI Airways'
  },
  {
    id: 'Z8',
    lcc: '1',
    name: 'Amaszonas'
  },
  {
    id: 'KU',
    lcc: '0',
    name: 'Kuwait Airways'
  },
  {
    id: '3S',
    lcc: '0',
    name: 'Air Antilles Express'
  },
  {
    id: '6W',
    lcc: '1',
    name: 'Saratov Aviation Division'
  },
  {
    id: 'PW',
    lcc: '0',
    name: 'Precision Air'
  },
  {
    id: 'TP',
    lcc: '0',
    name: 'TAP Portugal'
  },
  {
    id: 'ZV',
    lcc: '1',
    name: 'V Air'
  },
  {
    id: 'YC',
    lcc: '1',
    name: 'Yamal Air'
  },
  {
    id: 'JL',
    lcc: '0',
    name: 'Japan Airlines'
  },
  {
    id: 'HO',
    lcc: '1',
    name: 'Juneyao Airlines'
  },
  {
    id: 'SN',
    lcc: '0',
    name: 'Brussels Airlines'
  },
  {
    id: 'PF',
    lcc: '1',
    name: 'Primera Air'
  },
  {
    id: 'QS',
    lcc: '1',
    name: 'SmartWings'
  },
  {
    id: 'IB',
    lcc: '0',
    name: 'Iberia Airlines'
  },
  {
    id: 'B0',
    lcc: '0',
    name: 'Aws express'
  },
  {
    id: 'TF',
    lcc: '0',
    name: 'Braathens Regional Airlines'
  },
  {
    id: 'BM',
    lcc: '0',
    name: 'BMI regional'
  },
  {
    id: 'SK',
    lcc: '0',
    name: 'SAS'
  },
  {
    id: 'AQ',
    lcc: '1',
    name: '9 Air'
  },
  {
    id: 'P9',
    lcc: '1',
    name: 'Peruvian Airlines'
  },
  {
    id: 'DD',
    lcc: '1',
    name: 'Nok Air'
  },
  {
    id: 'PK',
    lcc: '0',
    name: 'Pakistan International Airlines'
  },
  {
    id: 'TN',
    lcc: '0',
    name: 'Air Tahiti Nui'
  },
  {
    id: 'JP',
    lcc: '0',
    name: 'Adria Airways'
  },
  {
    id: 'VW',
    lcc: '0',
    name: 'Aeromar'
  },
  {
    id: 'GA',
    lcc: '0',
    name: 'Garuda Indonesia'
  },
  {
    id: 'JV',
    lcc: '0',
    name: 'Bearskin Lake Air Service'
  },
  {
    id: 'A2',
    lcc: '0',
    name: 'Astra Airlines'
  },
  {
    id: 'AF',
    lcc: '0',
    name: 'Air France'
  },
  {
    id: '7M',
    lcc: '0',
    name: 'MAYAir'
  },
  {
    id: 'WP',
    lcc: '0',
    name: 'Island Air'
  },
  {
    id: '3M',
    lcc: '1',
    name: 'Silver Airways'
  },
  {
    id: 'KD',
    lcc: '0',
    name: 'Kalstar Aviation'
  },
  {
    id: 'CF',
    lcc: '0',
    name: 'City Airline'
  },
  {
    id: '3Q',
    lcc: '0',
    name: 'Yunnan Airlines'
  },
  {
    id: 'CP',
    lcc: '0',
    name: 'Canadian Airlines'
  },
  {
    id: 'MH',
    lcc: '1',
    name: 'Malaysia Airlines'
  },
  {
    id: 'ZI',
    lcc: '0',
    name: 'Aigle Azur'
  },
  {
    id: 'TR',
    lcc: '1',
    name: 'Scoot'
  },
  {
    id: 'D8',
    lcc: '0',
    name: 'Norwegian International'
  },
  {
    id: 'QW',
    lcc: '0',
    name: 'Blue Wings'
  },
  {
    id: 'B3',
    lcc: '0',
    name: 'Bellview Airlines'
  },
  {
    id: 'TL',
    lcc: '1',
    name: 'Airnorth'
  },
  {
    id: 'TO',
    lcc: '0',
    name: 'Transavia France'
  },
  {
    id: 'N4',
    lcc: '0',
    name: 'Nordwind Airlines'
  },
  {
    id: 'KP',
    lcc: '0',
    name: 'ASKY Airlines'
  },
  {
    id: 'QK',
    lcc: '0',
    name: 'Air Canada Jazz'
  },
  {
    id: '9R',
    lcc: '1',
    name: 'SATENA'
  },
  {
    id: 'Q7',
    lcc: '0',
    name: 'SkyBahamas Air'
  },
  {
    id: 'B6',
    lcc: '1',
    name: 'JetBlue Airways'
  },
  {
    id: 'BG',
    lcc: '1',
    name: 'Biman Bangladesh Airlines'
  },
  {
    id: 'AI',
    lcc: '0',
    name: 'Air India Limited'
  },
  {
    id: 'HV',
    lcc: '1',
    name: 'Transavia'
  },
  {
    id: 'UE',
    lcc: '0',
    name: 'Nasair'
  },
  {
    id: 'AM',
    lcc: '0',
    name: 'AeroM\u00e9xico'
  },
  {
    id: 'UO',
    lcc: '1',
    name: 'Hong Kong Express Airways'
  },
  {
    id: 'RP',
    lcc: '0',
    name: 'Chautauqua Airlines'
  },
  {
    id: 'Z2',
    lcc: '0',
    name: 'Philippines AirAsia'
  },
  {
    id: 'AD',
    lcc: '1',
    name: 'Azul'
  },
  {
    id: 'IP',
    lcc: '0',
    name: 'Island Spirit'
  },
  {
    id: 'UK',
    lcc: '0',
    name: 'Air Vistara'
  },
  {
    id: 'LY',
    lcc: '1',
    name: 'El Al Israel Airlines'
  },
  {
    id: '3H',
    lcc: '1',
    name: 'AirInuit'
  },
  {
    id: 'R2',
    lcc: '1',
    name: 'Orenburg Airlines'
  },
  {
    id: 'UA',
    lcc: '0',
    name: 'United Airlines'
  },
  {
    id: '3L',
    lcc: '1',
    name: 'Intersky'
  },
  {
    id: '2Z',
    lcc: '1',
    name: 'Passaredo'
  },
  {
    id: 'UT',
    lcc: '1',
    name: 'UTair'
  },
  {
    id: 'X3',
    lcc: '1',
    name: 'TUIfly'
  },
  {
    id: 'UP',
    lcc: '1',
    name: 'Bahamasair'
  },
  {
    id: 'J9',
    lcc: '1',
    name: 'Jazeera Airways'
  },
  {
    id: 'U2',
    lcc: '1',
    name: 'easyJet'
  },
  {
    id: 'UN',
    lcc: '1',
    name: 'Transaero Airlines'
  },
  {
    id: 'I5',
    lcc: '0',
    name: 'AirAsia India'
  },
  {
    id: 'TW',
    lcc: '1',
    name: 'Tway Airlines'
  },
  {
    id: 'FY',
    lcc: '1',
    name: 'Firefly'
  },
  {
    id: 'XJ',
    lcc: '0',
    name: 'Thai AirAsia X'
  },
  {
    id: 'XT',
    lcc: '0',
    name: 'Indonesia AirAsia X'
  },
  {
    id: 'AZ',
    lcc: '0',
    name: 'Alitalia'
  },
  {
    id: 'TZ',
    lcc: '1',
    name: 'Scoot - old'
  },
  {
    id: 'EW',
    lcc: '1',
    name: 'Eurowings'
  },
  {
    id: 'WM',
    lcc: '0',
    name: 'Windward Islands Airways'
  },
  {
    id: '4U',
    lcc: '1',
    name: 'germanwings'
  },
  {
    id: 'JQ',
    lcc: '1',
    name: 'Jetstar Airways'
  },
  {
    id: 'SL',
    lcc: '1',
    name: 'Thai Lion Air'
  },
  {
    id: 'H2',
    lcc: '1',
    name: 'Sky Airline'
  },
  {
    id: 'TB',
    lcc: '1',
    name: 'tuifly.be'
  },
  {
    id: 'AR',
    lcc: '0',
    name: 'Aerolineas Argentinas'
  },
  {
    id: 'DE',
    lcc: '1',
    name: 'Condor'
  },
  {
    id: 'TT',
    lcc: '1',
    name: 'Tiger Airways Australia'
  },
  {
    id: 'W6',
    lcc: '1',
    name: 'Wizzair'
  },
  {
    id: 'FC',
    lcc: '1',
    name: 'VivaColombia'
  },
  {
    id: '5J',
    lcc: '1',
    name: 'Cebu Pacific'
  },
  {
    id: 'PC',
    lcc: '1',
    name: 'Pegasus'
  },
  {
    id: 'F9',
    lcc: '1',
    name: 'Frontier Airlines'
  },
  {
    id: 'FD',
    lcc: '0',
    name: 'Thai AirAsia'
  },
  {
    id: 'QZ',
    lcc: '0',
    name: 'Indonesia AirAsia'
  },
  {
    id: 'D7',
    lcc: '0',
    name: 'AirAsia X'
  },
  {
    id: 'PQ',
    lcc: '0',
    name: 'Philippines AirAsia'
  },
  {
    id: 'VY',
    lcc: '1',
    name: 'Vueling'
  },
  {
    id: 'DY',
    lcc: '1',
    name: 'Norwegian'
  },
  {
    id: 'LS',
    lcc: '1',
    name: 'Jet2'
  },
  {
    id: 'BV',
    lcc: '1',
    name: 'Blue Panorama'
  },
  {
    id: 'AK',
    lcc: '1',
    name: 'AirAsia'
  },
  {
    id: '4O',
    lcc: '1',
    name: 'Interjet (ABC Aerolineas)'
  },
  {
    id: '1D',
    lcc: '1',
    name: 'Aerolinea de Antioquia'
  },
  {
    id: 'FO',
    lcc: '1',
    name: 'Flybondi'
  },
  {
    id: 'RM',
    lcc: '1',
    name: 'Armenia Aircompany'
  },
  {
    id: 'OE',
    lcc: '1',
    name: 'LaudaMotion'
  }
];

const getId = get('id');

getAirline.operation = 'READ';
function getAirline(code) {
  return new Promise((resolve) => {
    const matchesId = compose(
      isEqual(code),
      getId
    );

    resolve( {
      logo: `https://images.kiwi.com/airlines/32/${code}.png`,
      ...find(matchesId, airlines)
    });
  });
}

export {getAirline};
