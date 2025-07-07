
let _initialized = false;
let isConnected = false;
const COUNTRY_GROUPINGS = [
  {
    "iso3c": "AFG",
    "Country": "Afghanistan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "ALB",
    "Country": "Albania",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "DZA",
    "Country": "Algeria",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Africa",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "AND",
    "Country": "Andorra",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "AGO",
    "Country": "Angola",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "ATG",
    "Country": "Antigua Barb",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "ARG",
    "Country": "Argentina",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "ARM",
    "Country": "Armenia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Eurasia",
    "Region": "Asia"
  },
  {
    "iso3c": "AUS",
    "Country": "Australia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "AUT",
    "Country": "Austria",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "AZE",
    "Country": "Azerbaijan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Eurasia",
    "Region": "Asia"
  },
  {
    "iso3c": "BHS",
    "Country": "Bahamas",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "BHR",
    "Country": "Bahrain",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "BGD",
    "Country": "Bangladesh",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "BRB",
    "Country": "Barbados",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "BLR",
    "Country": "Belarus",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "BEL",
    "Country": "Belgium",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "BLZ",
    "Country": "Belize",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "BEN",
    "Country": "Benin",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "BTN",
    "Country": "Bhutan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "BOL",
    "Country": "Bolivia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "BIH",
    "Country": "Bosnia Herzg",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "BWA",
    "Country": "Botswana",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "BRA",
    "Country": "Brazil",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "BRN",
    "Country": "Brunei Darsm",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "BGR",
    "Country": "Bulgaria",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "BFA",
    "Country": "Burkina Faso",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "BDI",
    "Country": "Burundi",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "CPV",
    "Country": "Cabo Verde",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "KHM",
    "Country": "Cambodia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "CMR",
    "Country": "Cameroon",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "CAN",
    "Country": "Canada",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "North America",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "CAF",
    "Country": "Cent Afr Rep",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "TCD",
    "Country": "Chad",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "CHL",
    "Country": "Chile",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "CHN",
    "Country": "China",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "TWN",
    "Country": "Chinese Taipei",
    "UNFCCC": 0,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "COL",
    "Country": "Colombia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "COM",
    "Country": "Comoros",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "COD",
    "Country": "Congo DR",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "COG",
    "Country": "Congo Rep",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "COK",
    "Country": "Cook Is",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "CRI",
    "Country": "Costa Rica",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "CIV",
    "Country": "Cote d Ivoire",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "HRV",
    "Country": "Croatia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "CUB",
    "Country": "Cuba",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "CYP",
    "Country": "Cyprus",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "CZE",
    "Country": "Czechia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "DNK",
    "Country": "Denmark",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "DJI",
    "Country": "Djibouti",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Africa",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "DMA",
    "Country": "Dominica",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "DOM",
    "Country": "Dominican Rep",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "ECU",
    "Country": "Ecuador",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "EGY",
    "Country": "Egypt",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Africa",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "SLV",
    "Country": "El Salvador",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "GNQ",
    "Country": "Eq Guinea",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "ERI",
    "Country": "Eritrea",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "EST",
    "Country": "Estonia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "SWZ",
    "Country": "Eswatini",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "ETH",
    "Country": "Ethiopia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "FJI",
    "Country": "Fiji",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "FIN",
    "Country": "Finland",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "FRA",
    "Country": "France",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "GAB",
    "Country": "Gabon",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "GMB",
    "Country": "Gambia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "GEO",
    "Country": "Georgia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Eurasia",
    "Region": "Europe"
  },
  {
    "iso3c": "DEU",
    "Country": "Germany",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "GHA",
    "Country": "Ghana",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "GRC",
    "Country": "Greece",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "GRD",
    "Country": "Grenada",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "GTM",
    "Country": "Guatemala",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "GIN",
    "Country": "Guinea",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "GNB",
    "Country": "Guinea Bissau",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "GUY",
    "Country": "Guyana",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "HTI",
    "Country": "Haiti",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "HND",
    "Country": "Honduras",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "HUN",
    "Country": "Hungary",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "ISL",
    "Country": "Iceland",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "IND",
    "Country": "India",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "IDN",
    "Country": "Indonesia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "IRN",
    "Country": "Iran IR",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "IRQ",
    "Country": "Iraq",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "IRL",
    "Country": "Ireland",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "ISR",
    "Country": "Israel",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "ITA",
    "Country": "Italy",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "JAM",
    "Country": "Jamaica",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "JPN",
    "Country": "Japan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "JOR",
    "Country": "Jordan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "KAZ",
    "Country": "Kazakhstan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "KEN",
    "Country": "Kenya",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "KIR",
    "Country": "Kiribati",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "PRK",
    "Country": "Korea DPR",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "KOR",
    "Country": "Korea Rep",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "KWT",
    "Country": "Kuwait",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "KGZ",
    "Country": "Kyrgyzstan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "LAO",
    "Country": "Lao PDR",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "LVA",
    "Country": "Latvia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "LBN",
    "Country": "Lebanon",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "LSO",
    "Country": "Lesotho",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "LBR",
    "Country": "Liberia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "LBY",
    "Country": "Libya",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Africa",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "LIE",
    "Country": "Liechtenstein",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "LTU",
    "Country": "Lithuania",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "LUX",
    "Country": "Luxembourg",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "MDG",
    "Country": "Madagascar",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "MWI",
    "Country": "Malawi",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "MYS",
    "Country": "Malaysia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "MDV",
    "Country": "Maldives",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "MLI",
    "Country": "Mali",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "MLT",
    "Country": "Malta",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "MHL",
    "Country": "Marshall Is",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "MRT",
    "Country": "Mauritania",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "MUS",
    "Country": "Mauritius",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "MEX",
    "Country": "Mexico",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "North America",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "FSM",
    "Country": "Micronesia",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "MDA",
    "Country": "Moldova Rep",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "MCO",
    "Country": "Monaco",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "MNG",
    "Country": "Mongolia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "MNE",
    "Country": "Montenegro",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "MAR",
    "Country": "Morocco",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Africa",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "MOZ",
    "Country": "Mozambique",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "MMR",
    "Country": "Myanmar",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "NAM",
    "Country": "Namibia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "NRU",
    "Country": "Nauru",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "NPL",
    "Country": "Nepal",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "NLD",
    "Country": "Netherlands",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "NZL",
    "Country": "New Zealand",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "NIC",
    "Country": "Nicaragua",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "NER",
    "Country": "Niger",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "NGA",
    "Country": "Nigeria",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "NIU",
    "Country": "Niue",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "MKD",
    "Country": "North Macedonia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "NOR",
    "Country": "Norway",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "OMN",
    "Country": "Oman",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "PAK",
    "Country": "Pakistan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "PLW",
    "Country": "Palau",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "PSE",
    "Country": "Palestine",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "PAN",
    "Country": "Panama",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "PNG",
    "Country": "Papua N Guin",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "PRY",
    "Country": "Paraguay",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "PER",
    "Country": "Peru",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "PHL",
    "Country": "Philippines",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "POL",
    "Country": "Poland",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "PRT",
    "Country": "Portugal",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "QAT",
    "Country": "Qatar",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "ROU",
    "Country": "Romania",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "RUS",
    "Country": "Russian Fed",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Eurasia",
    "Region": "Europe"
  },
  {
    "iso3c": "RWA",
    "Country": "Rwanda",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "WSM",
    "Country": "Samoa",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "SMR",
    "Country": "San Marino",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "STP",
    "Country": "Sao Tome Prn",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "SAU",
    "Country": "Saudi Arabia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "SEN",
    "Country": "Senegal",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "SRB",
    "Country": "Serbia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "SYC",
    "Country": "Seychelles",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "SLE",
    "Country": "Sierra Leone",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "SGP",
    "Country": "Singapore",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "SVK",
    "Country": "Slovakia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "SVN",
    "Country": "Slovenia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "SLB",
    "Country": "Solomon Is",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "SOM",
    "Country": "Somalia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "ZAF",
    "Country": "South Africa",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "SSD",
    "Country": "South Sudan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "ESP",
    "Country": "Spain",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "LKA",
    "Country": "Sri Lanka",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "KNA",
    "Country": "St Kitts Nevis",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "LCA",
    "Country": "St Lucia",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "VCT",
    "Country": "St Vincent Gren",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "SDN",
    "Country": "Sudan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "SUR",
    "Country": "Suriname",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "SWE",
    "Country": "Sweden",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 1,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "CHE",
    "Country": "Switzerland",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "SYR",
    "Country": "Syrian AR",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "TJK",
    "Country": "Tajikistan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "TZA",
    "Country": "Tanzania",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "THA",
    "Country": "Thailand",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "TLS",
    "Country": "Timor Leste",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "TGO",
    "Country": "Togo",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "TON",
    "Country": "Tonga",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "TTO",
    "Country": "Trinidad Tobago",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Central America and the Caribbean",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "TUN",
    "Country": "Tunisia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Africa",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "TUR",
    "Country": "Turkey",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Eurasia",
    "Region": "Asia"
  },
  {
    "iso3c": "TKM",
    "Country": "Turkmenistan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "TUV",
    "Country": "Tuvalu",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "UGA",
    "Country": "Uganda",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "GBR",
    "Country": "UK",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "UKR",
    "Country": "Ukraine",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 1,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Europe",
    "Region": "Europe"
  },
  {
    "iso3c": "ARE",
    "Country": "United Arab Em",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "URY",
    "Country": "Uruguay",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "USA",
    "Country": "USA",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 1,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "North America",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "UZB",
    "Country": "Uzbekistan",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "VUT",
    "Country": "Vanuatu",
    "UNFCCC": 1,
    "SIDS 40": 1,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 1,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Oceania",
    "Region": "North America and Oceania"
  },
  {
    "iso3c": "VEN",
    "Country": "Venezuela",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 1,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 1,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "South America",
    "Region": "Latin America and the Caribbean"
  },
  {
    "iso3c": "VNM",
    "Country": "Viet Nam",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 1,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Asia",
    "Region": "Asia"
  },
  {
    "iso3c": "YEM",
    "Country": "Yemen",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 1,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 1,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 0,
    "IRENA REGION": "Middle East",
    "Region": "Middle East and North Africa"
  },
  {
    "iso3c": "ZMB",
    "Country": "Zambia",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 1,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  },
  {
    "iso3c": "ZWE",
    "Country": "Zimbabwe",
    "UNFCCC": 1,
    "SIDS 40": 0,
    "EU 27": 0,
    "NDC=Target": 0,
    "LAC": 0,
    "G 20": 0,
    "LDCs 43": 0,
    "ASIA 32": 0,
    "EUROPE 45": 0,
    "LAC 32": 0,
    "MENA 20": 0,
    "North America and Oceania 19": 0,
    "Sub Saharan Africa 48": 1,
    "IRENA REGION": "Africa",
    "Region": "Sub-Saharan Africa"
  }
];
const INHERITED = [
  "doc_code",
  "country",
  "policy_year",
  "policy_name",
  "policy_format",
  "hyperlink"
];
const dropdowns = {
  "Technology": [
    "Renewable Energy",
    "Non-hydro renewable",
    "Solar",
    "Solar PV",
    "Solar CSP",
    "Wind",
    "Onshore Wind",
    "Offshore Wind",
    "Geothermal",
    "Bioenergy",
    "Solid Biomass",
    "Biogas",
    "Liquid Biofuel",
    "Hydropower",
    "Other",
    "Hybrid",
    "Wave",
    "Tidal",
    "Partially renewable",
    "Renewables Including Gas",
    "Renewables Including Nuclear",
    "Renewables Including Gas and Nuclear",
    "Renewables Including Hydrogen",
    "Non-Fossil",
    "Bioenergy including Waste to Energy",
    "Zero Emission Sources"
  ],

  "Sector": [
    "Electricity",
    "Transmission"
  ],

  "Policy Type": [
    "Law",
    "Regulation",
    "National Strategy/Plan/Roadmap",
    "NDC",
    "LT-LEDS",
    "Press Release",
    "official announcement",
    "Electricity/Energy Planning Document",
    "Guidelines",
    "other"
  ]
};
const apiBase = "https://dbpolicyaddin-d0d4fdehc5h8cpdh.northeurope-01.azurewebsites.net/api";
let reminderTimer = null;
const statusEl = document.getElementById("status");
const COLUMN_MAP = {
  // policies
  country:             "Country",
  doc_code:            "Document Code",
  policy_name:         "Policy Name",
  short_name:          "Short Name",
  date_entry:          "Last Modified",
  policy_snapshot:     "Policy Snapshot",
  policy_day:          "Policy Date Day (if applicable)",
  policy_month:        "Policy Date Month (if applicable)",
  policy_year:         "Policy Date Year (if applicable)",
  policy_format:       "Policy Type",
  additional_info:     "Additional Info on Policy",
  hyperlink:           "Download File",
  doc_online:          "Document Unavailable Online?",
  additional_links:    "Additional Relevant Links",
  meta_qa:             "Internal Questions & Answers",
  language:            "Policy Language",
  // social_acceptance
  page_number:              "Page Number",
  revenue_sharing:          "Sharing Revenue of Projects",
  employment:               "Employment",
  capacity:                 "Capacity Building & Skills",
  awareness:                "Awareness",
  i_and_d:                  "I+D",
  public_services:          "Public Services & Infrastructure",
  incentives:               "Environmental Incentives",
  investments:              "Capital, Investment & Support",
  co_ownership:             "Co-ownership",
  economic_progress:        "Economic Progressivity",
  environmental_compliance: "Environmental Compliance Charges",
  social_impact:            "Social Impact Assessment",
  strategic_assessment:     "Strategic Environmental Assessment",
  impact_assessment:        "Environmental Impact Assessment",
  open_access:              "Open Information Access",
  consultation:             "Meaningful Consultation",
  local_participation:      "Local Community Participation",
  new_development:          "New Development Measures",
  impartiality:             "Decision-Maker Impartiality",
  gender:                   "Gender",
  planning_elements:        "New Planning Elements",
  territory_management:     "Territorial Management",
  comm_participation:       "Community Participation",
  energy_poverty:           "Energy Poverty",
  human_rights:             "Human Rights",
  governance:               "Governance",
  visual_impact:            "Visual Impact",
  legal_protections:        "Constitutional Protections",
  legal_agreements:         "Binding Legal Agreements",
  benefit_agreements:       "Benefit & Impact Agreements",
  conflict_management:      "Conflict Management",
  eco_economic_compatibility:"Ecological & Economic Compensation",
  enforcement:              "Enforcement & Monitoring",
  income_generation:        "Income-Generating Activities",
  advisory_services:        "Advisory Services",
  financial_service_access: "Financial Services Access",
  qa:                       "Internal Q&A",
  hyperlink:           "Download File",

  // fiscal_measures
  exemptions:               "Exemption & Fiscal Measures Description",
  technology:               "Technology",
  income_tax:               "Income Tax",
  vat:                      "VAT",
  sales_tax:                "Sales Tax",
  import_duty:              "Import Duty",
  local_tax:                "Local Taxes",
  administrative_tax:       "Administrative Taxes",
  capital:                  "Capital",
  resource_tax:             "Resource Tax",
  transmission_exemption:   "Transmission Exemptions",
  carbon_credits:           "Carbon Credits",
  other_tax:                "Other Taxes",
  accelerated_depreciation: "Accelerated Depreciation",
  form:                     "Form (refunds, credits, schedules)",
  fiscal_stability:         "Fiscal Stability",
  hyperlink:           "Download File",

  // critical_minerals
  disclosure_requirements:      "Contract Disclosure Requirements?",
  revenue_requirements:         "Revenue Disclosure Requirements?",
  open_data_requirements:       "Open Data Requirements?",
  fpic:                         "Free Prior Informed Consent (FPIC)?",
  human_rights_protections:     "Human Rights Protections?",
  benefit_sharing:              "Benefit-Sharing Provisions?",
  local_business_development:   "Local Business Quotas?",
  vocational_training:          "Vocational Training Provisions?",
  local_hiring:                 "Local Hiring Mandates?",
  refinement_requirements:      "Refinement Requirements?",
  technology_transfer:          "Technology Transfer Requirements?",
  artisanal_provisions:         "Artisanal Mining Provisions?",
  infrastructure_requirements:  "Infrastructure Requirements?",
  shared_ownership:             "Shared Ownership Provisions?",
  community_development_mandates:
                                "Community Development Mandates?",
  community_development_provisions:
                                "Community Development Provisions?",
  negotiation_requirements:     "Negotiation Requirements?",
  social_investment:            "Social Investment Mandates?",
  dispute_resolution:           "Dispute Resolution Provisions?",
  displacement_safeguards:      "Displacement Safeguards?",
  resettlement:                 "Resettlement Measures?",
  gender_youth_provisions:      "Gender & Youth Provisions?",
  labor_mandates:               "Labor Mandates?",
  eia_requirements:             "EIA Requirements?",
  resource_use_controls:        "Resource Use Controls?",
  environmental_hazard_reqs:    "Environmental Hazard Requirements?",
  mining_operations:            "Renewable Energy in Mining?",
  local_investments:            "Local Energy Investments?",
  site_rehabilitation:          "Site Rehabilitation Requirements?",
  hyperlink:           "Download File",

  // just transitions

  local_communities:            "Local Communities",
  jobs:                         "Jobs",
  local_value_chains:           "Local Value Chains",
  prior_informed_consent:       "Prior Informed Consent",
  indigenous_peoples:           "Indigenous Peoples",
  fossil_fuel_transition:       "transition for fossil fuel dependent economies",
  energy_access:                "energy access",
  public_procurement:           "RE public procurement",
  re_fund:                      "RE Fund?",
  env_impact:                   "environmental impact",
  decomissioning:               "decomissioning",
  hyperlink:           "Download File",


};

let _tokenCache = {
  token: null,
  expiresAt: 0
};

async function getToken() {
  // 1) if we still have a valid token, just return it
  if (_tokenCache.token && Date.now() < _tokenCache.expiresAt - 60000) {
    // still at least 60 s left
    return _tokenCache.token;
  }

  // 2) otherwise, show the dialog once more
  const token = await new Promise((resolve, reject) => {
    Office.context.ui.displayDialogAsync(
      `${window.location.origin}/auth.html`,
      { height: 60, width: 30, displayInIframe: false },
      (result) => {
        if (result.status !== Office.AsyncResultStatus.Succeeded) {
          return reject(result.error.message);
        }
        const dialog = result.value;
        dialog.addEventHandler(
          Office.EventType.DialogMessageReceived,
          (args) => {
            dialog.close();
            let msg;
            try {
              msg = JSON.parse(args.message);
            } catch {
              return reject("Malformed message from auth dialog");
            }
            if (msg.type === "token")   return resolve(msg.token);
            if (msg.type === "error")   return reject(msg.error);
            reject("Unknown response from auth dialog");
          }
        );
      }
    );
  });

  // 3) cache it for ~1 hour 
  _tokenCache.token     = token;
  _tokenCache.expiresAt = Date.now() + 55 * 60_000;  // expire in 55 minutes

  return token;
}
function showLoading(msg) {
  document.getElementById("loadingMessage").innerText = msg;
  document.getElementById("loadingContainer").classList.remove("hidden");
}
function hideLoading() {
  document.getElementById("loadingContainer").classList.add("hidden");
  document.getElementById("loadingMessage").innerText = "";
}

// Excel header > db column
const DISPLAY_TO_DB = Object.fromEntries(
  Object.entries(COLUMN_MAP).map(([db, disp]) => [disp, db])
);

function showReminderModal() {
  document.getElementById("reminderModal").classList.add("visible");
}
function hideReminderModal() {
  document.getElementById("reminderModal").classList.remove("visible");
}

// schedule a reminder every intervalMs (defaults to 30 minutes)
function scheduleReminder(intervalMs = 30 * 60 * 1000) {
  if (reminderTimer) {
    clearTimeout(reminderTimer);
  }
  reminderTimer = setTimeout(() => {
    showReminderModal();
  }, intervalMs);
}

function setupTabs() {
  ['connect','pull','faq'].forEach(tabKey => {
    const tabEl   = document.getElementById(`tab-${tabKey}`);
    const panelEl = document.getElementById(`panel-${tabKey}`);
  
    tabEl.addEventListener('click', () => {
      // if this tab is disabled, bail out
      if (tabEl.classList.contains('disabled')) return;
  
      // switch active tab
      ['connect','pull','faq'].forEach(other => {
        document.getElementById(`tab-${other}`)
          .classList.toggle('active', other===tabKey);
        document.getElementById(`panel-${other}`)
          .style.display = (other===tabKey) ? 'block' : 'none';
      });
    });
  });
  
}
async function pullCountryGroupings() {
  await Excel.run(async ctx => {
    const sheetName = "Country Groupings";
    // delete old if present
    let old = ctx.workbook.worksheets.getItemOrNullObject(sheetName);
    await ctx.sync();
    if (!old.isNullObject) {
      old.delete();
      await ctx.sync();
    }

    // new sheet
    const sheet = ctx.workbook.worksheets.add(sheetName);

    // headers from the first object’s keys
    const headers = Object.keys(COUNTRY_GROUPINGS[0] || {});
    sheet.getRangeByIndexes(0, 0, 1, headers.length).values = [headers];

    // data rows
    const data = COUNTRY_GROUPINGS.map(row =>
      headers.map(h => row[h] ?? null)
    );
    if (data.length) {
      sheet
        .getRangeByIndexes(1, 0, data.length, headers.length)
        .values = data;
    }

    // make it a table so filters just work
    const used = sheet.getUsedRange();
    used.load("rowCount,columnCount");
    await ctx.sync();
    sheet.tables.add(used, true).name = "tbl_CountryGroupings";

    await ctx.sync();
  });
}


async function authFetch(url, opts = {}) {
  const token = await getToken().catch(err => {
    console.error("❌ Failed to get token:", err);
    throw err;
  });
  console.log("✅ Token:", token);
  opts.headers = {
    ...opts.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
  opts.credentials = "include";
  return fetch(url, opts);
}
document.getElementById("connectForm").addEventListener("submit", async (evt) => {
  evt.preventDefault();
  const status = document.getElementById("connectStatus");
  status.innerText = "Signing in…";
  try {
    await getToken(); // will trigger MS popup if needed
    status.innerText = "✅ Signed in!";
    showLoading("Server is starting up (this may take a moment)…");
    await populateTableCheckboxes();
    isConnected = true;
    document.getElementById("tab-pull").classList.remove("disabled");
  } catch (err) {
    status.innerText = `❌ Something unexpected occured while connecting to the server and your request timed out. Please refresh and try again.`;
  }
  finally {
    hideLoading();
  }
});


async function fetchPolicyRecord(code) {
  const res = await authFetch(`${apiBase}/pull?table=policies`, {
    method: "GET"
  });

  if (!res.ok) throw new Error(await res.text());
  const rows = await res.json();

  return rows.find(
    r => String(r.doc_code).trim().toUpperCase() === code.toUpperCase()
  );
}


async function pullDocCodeIntoTables(tableNames, code, policy) {
  const dispToDb = DISPLAY_TO_DB;               
  const inheritedSet = new Set(INHERITED);       // quick lookup

  await Excel.run(async ctx => {
    for (const tableName of tableNames) {
      if (tableName === "policies") continue;   // skip policies itself

      const displayName = tableName.replace(/_/g, " ");
      const sheet       = ctx.workbook.worksheets.getItem(displayName);
      const tblName     = `tbl_${tableName}`;
      const tbl         = sheet.tables.getItem(tblName);

      // load headers
      const headerRange = tbl.getHeaderRowRange();
      headerRange.load("values");
      await ctx.sync();
      const headers = headerRange.values[0];
      const codeDisp = COLUMN_MAP.doc_code;
      const codeIdx  = headers.indexOf(codeDisp);
      if (codeIdx < 0) {
        throw new Error(`Table "${displayName}" missing "${codeDisp}" column`);
      }

      // load existing rows
      const body  = tbl.getDataBodyRange();
      body.load(["rowCount","values"]);
      await ctx.sync();

      // look for the code
      let rowIdx = body.values.findIndex(r =>
        ((r[codeIdx]||"")+"").toUpperCase() === code.toUpperCase()
      );

      if (rowIdx < 0) {
        // NOT FOUND → build a single "full" row with code+inherited
        const fullRow = headers.map(hdr => {
          const dbCol = dispToDb[hdr];
          if (dbCol === "doc_code") {
            return code;
          } else if (inheritedSet.has(dbCol)) {
            return policy[dbCol] ?? "";
          }
          return "";
        });
        await tbl.rows.add(null, [ fullRow ]);
        // no further updates needed for this table
        continue;
      }

      // FOUND → just overwrite the inherited columns in place
      INHERITED.forEach(dbCol => {
        const disp = COLUMN_MAP[dbCol];
        const colI = headers.indexOf(disp);
        if (colI < 0) return;
        body.getCell(rowIdx, colI).values = [[ policy[dbCol] ?? "" ]];
      });
    }

    await ctx.sync();
  });
}

async function pullOnePolicy(tableName, code) {
  await Excel.run(async ctx => {
    // 1) locate the sheet & table
    const displayName = tableName.replace(/_/g, " ");
    const sheet = ctx.workbook.worksheets.getItem(displayName);
    const tblName = `tbl_${tableName}`;
    const tbl = sheet.tables.getItem(tblName);

    // 2) load headers & find doc_code column
    const headerRange = tbl.getHeaderRowRange();
    headerRange.load("values");
    await ctx.sync();
    const headers  = headerRange.values[0];
    const dispCode = COLUMN_MAP.doc_code;
    const codeIdx  = headers.indexOf(dispCode);
    if (codeIdx < 0) throw new Error(`Missing column "${dispCode}"`);

    // 3) fetch the record from API
    const policy = await fetchPolicyRecord(tableName, code);
    if (!policy) throw new Error(`No record for "${code}"`);

    // 4) get or append the row
    const body = tbl.getDataBodyRange();
    body.load(["rowCount","values"]);
    await ctx.sync();
    let rowIdx = body.values.findIndex(r =>
      ((r[codeIdx]||"")+"").toUpperCase() === code.toUpperCase()
    );
    if (rowIdx < 0) {
      const newRow = headers.map((_,i) => i===codeIdx ? code : "");
      await tbl.rows.add(null, [ newRow ]);
      await ctx.sync();
      body.load(["rowCount","values"]);
      await ctx.sync();
      rowIdx = body.rowCount - 1;
    }

    // 5) write each inherited field
    INHERITED.forEach(dbCol => {
      const disp    = COLUMN_MAP[dbCol];
      const colIdx  = headers.indexOf(disp);
      if (colIdx < 0) return;
      const cell = body.getCell(rowIdx, colIdx);
      cell.values = [[ policy[dbCol] ?? "" ]];
    });

    await ctx.sync();
  });
}

Office.onReady(async info => {
  if (info.host !== Office.HostType.Excel) return;
  if (!Office.context.requirements.isSetSupported("NestedAppAuth", "1.1")) {
    console.warn("Running without NAA support—only interactive login via popup will work.");
  }
  OfficeRuntime.auth.getAccessToken({ allowConsentPrompt: true }).catch(() => {});

  attachEventHandlers();            // wire up pull/push/closeReminder
  scheduleReminder();               
  setupTabs();          
  const closeBtn = document.getElementById("closeReminder");
  if (closeBtn) {
    closeBtn.addEventListener("click", hideReminderModal);
  }
    
});



function attachEventHandlers() {
  document.getElementById("pull") .onclick = pullFromDb;
  document.getElementById("push") .onclick = pushToDb;
}

async function populateTableCheckboxes() {
  const container = document.getElementById("tableCheckboxContainer");
  if (container.dataset.populated) return;     // already done
  container.dataset.populated = "true";
  container.innerHTML = "";
  showLoading("Connecting to the server...");
  try {
    const res = await authFetch(`${apiBase}/tables`, { method: "GET" });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API error ${res.status}: ${text}`);
    }
    const tables = await res.json(); 

    const unique = [...new Set(tables)].sort((a, b) => {
      if (a === "policies") return -1;
      if (b === "policies") return 1;
      return a.localeCompare(b);
    });

    unique.forEach(t => {
      const id = `chk_${t}`;
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.value = t;
      label.htmlFor = id;
      label.innerText = t.replace(/_/g, " ");
      container.appendChild(checkbox);
      container.appendChild(label);
      container.appendChild(document.createElement("br"));
    });

  } catch (e) {
    console.error("Failed to load tables:", e);
    document.getElementById("status").innerText =
      `There was an error pulling the following sheets from the database: ${e.message}. Try pulling the sheets one at a time, or refresh this pane. If the error persists, contact julia.weppler@sei.org.`;
  }
  finally {
    hideLoading();
  }
}

async function fetchDbRows(tableName) {
  const token = await getToken();
  // 1) get column list
  const colsRes = await fetch(
    `${apiBase}/columns?table=${encodeURIComponent(tableName)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  if (!colsRes.ok) throw new Error(await colsRes.text());
  const dbCols = await colsRes.json();

  // 2) get data rows
  const dataRes = await fetch(
    `${apiBase}/pull?table=${encodeURIComponent(tableName)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  if (!dataRes.ok) throw new Error(await dataRes.text());
  const rows = await dataRes.json();

  return { dbCols, rows };
}

// Pull data for the chosen table (or all sheets if “All Tables”)
async function pullFromDb() {
  const status = document.getElementById("status");

  // 1) Gather checked tables
  const checked = Array.from(
    document.querySelectorAll("#tableCheckboxContainer input[type=checkbox]:checked")
  ).map(cb => cb.value);

  if (!checked.length) {
    status.innerText = "Please select at least one table to pull.";
    return;
  }

  // 2) Loop through each table
  for (const tableName of checked) {
    status.innerText = `Loading columns for "${tableName}"…`;

    try {
      // 2a) Fetch DB columns
      const colsRes = await authFetch(`${apiBase}/columns?table=${encodeURIComponent(tableName)}`);
      if (!colsRes.ok) throw new Error(await colsRes.text());
      const dbCols = await colsRes.json();

      // 2b) Build ordered column list
      let orderedDbCols;
      if (tableName === "policies") {
        const primary = ["country", "doc_code", "hyperlink", "policy_year", "policy_name", "policy_format"];
        const rest = dbCols.filter(c => !primary.includes(c));
        orderedDbCols = [...primary, ...rest];
      } else {
        const extras = ["hyperlink", "country", "policy_year", "policy_name", "policy_format", "date_entry"];
        const rest = dbCols.filter(c => c !== "doc_code" && !extras.includes(c));
        orderedDbCols = ["doc_code", ...extras.filter(c => dbCols.includes(c)), ...rest];
      }
      const headers = orderedDbCols.map(c => COLUMN_MAP[c] || c);

      // 2c) Fetch row data
      status.innerText = `Pulling rows from "${tableName}"…`;
      const dataRes = await authFetch(`${apiBase}/pull?table=${encodeURIComponent(tableName)}`);
      if (!dataRes.ok) throw new Error(await dataRes.text());
      const rows = await dataRes.json();

      console.log(`📥 [pullFromDb] "${tableName}" →`, {
        dbCols,
        orderedDbCols,
        rawRows: rows
      });

      // 3) Write to Excel
      await Excel.run(async ctx => {
        const displayName = tableName.replace(/_/g, " ");
        let sheet = ctx.workbook.worksheets.getItemOrNullObject(displayName);
        await ctx.sync();

        if (sheet.isNullObject) {
          sheet = ctx.workbook.worksheets.add(displayName);
        }
        sheet.activate();
        sheet.getUsedRange()?.clear();
        await ctx.sync();

        // Write headers
        sheet.getRangeByIndexes(0, 0, 1, headers.length).values = [headers];
        await ctx.sync();

        // Write rows
        if (rows.length) {
          const data = rows.map(r => orderedDbCols.map(col => r[col] ?? null));
          sheet.getRangeByIndexes(1, 0, data.length, headers.length).values = data;
          if (data.length) {
            // write data rows
            sheet.getRangeByIndexes(1, 0, data.length, headers.length).values = data;
            await ctx.sync();
        
            // inject real Excel hyperlinks in the "Hyperlink" column
            const hyperlinkColIdx = headers.indexOf("Download File");
            if (hyperlinkColIdx >= 0) {
              data.forEach((row, i) => {
                const url = row[hyperlinkColIdx];
                if (typeof url === "string" && url.startsWith("http")) {
                  const cell = sheet.getRangeByIndexes(i + 1, hyperlinkColIdx, 1, 1);
                  cell.hyperlink = { address: url, textToDisplay: "Access PDF" };
                }
              });
              await ctx.sync();
            }
          }
          await ctx.sync();
        }
        // Convert to Excel Table
        const used = sheet.getUsedRange();
        used.load("rowCount, columnCount");
        await ctx.sync();

        const safeName = displayName.trim().toLowerCase().replace(/\s+/g, "_");
        const tblName = `tbl_${safeName}`;
        const oldTbl = sheet.tables.getItemOrNullObject(tblName);
        await ctx.sync();
        if (!oldTbl.isNullObject) {
          oldTbl.delete();
          await ctx.sync();
        }

        sheet.tables.add(
          sheet.getRangeByIndexes(0, 0, used.rowCount, used.columnCount),
          true
        ).name = tblName;

        // Add dropdowns
        await Excel.run(async ctx => {
          const sheet = ctx.workbook.worksheets.getActiveWorksheet();
          const used = sheet.getUsedRange();
          used.load("rowCount,columnCount");
          await ctx.sync();

          const headerRange = sheet.getRangeByIndexes(0, 0, 1, used.columnCount);
          headerRange.load("values");
          await ctx.sync();
          const headers = headerRange.values[0];
          for (const [colName, options] of Object.entries(dropdowns)) {
              const cIdx = headers.indexOf(colName);
              if (cIdx < 0 || used.rowCount < 2) continue;
  
              const dvRange = sheet.getRangeByIndexes(1, cIdx, used.rowCount - 1, 1);
              dvRange.dataValidation.ignoreBlanks = true;
  
              let src;
              const joined = options.join(",");
              if (joined.length > 255) {
                console.warn(`Dropdown for "${colName}" exceeds 255 chars and will truncate.`);
              }
              src = joined;
              
  
              dvRange.dataValidation.rule = {
                list: { inCellDropdown: true, source: src }
              };
            }


          await ctx.sync();
        });

        // Autofit layout
        sheet.getUsedRange().getEntireColumn().format.columnWidth = 130;
        sheet.getUsedRange().getEntireRow().format.rowHeight = 18;
        await ctx.sync();

        // 4) Cache to hidden sheet
        const cacheName = `__cache__${tableName}`;
        let cacheSheet = ctx.workbook.worksheets.getItemOrNullObject(cacheName);
        await ctx.sync();

        if (cacheSheet.isNullObject) {
          cacheSheet = ctx.workbook.worksheets.add(cacheName);
          cacheSheet.visibility = Excel.SheetVisibility.hidden;
        } else {
          cacheSheet.getUsedRange()?.clear();
        }

        cacheSheet.getRangeByIndexes(0, 0, 1, orderedDbCols.length).values = [orderedDbCols];

        if (rows.length) {
          const cacheData = rows.map(r => orderedDbCols.map(col => r[col] ?? null));
          cacheSheet.getRangeByIndexes(1, 0, cacheData.length, orderedDbCols.length).values = cacheData;
        }

        await ctx.sync();
      });

      status.innerText = "Adding Country Groupings sheet…";
      await pullCountryGroupings();
      status.innerText = rows.length
        ? `Pulled ${rows.length} rows from "${tableName}".`
        : `Table "${tableName}" is empty—headers imported.`;

    } catch (err) {
      console.error(`Error pulling "${tableName}":`, err);
      status.innerText = `Error pulling "${tableName}": ${err.message}`;
    }
  }
}

async function pullOneTable(tableName) {
  // fetch columns
  const colsRes = await authFetch(`${apiBase}/columns?table=${encodeURIComponent(tableName)}`);
  if (!colsRes.ok) throw new Error(await colsRes.text());
  const dbCols = await colsRes.json();

  // build orderedDbCols & headers
  let orderedDbCols;
  if (tableName === "policies") {
    const primary = ["country", "doc_code", "hyperlink", "policy_year", "policy_name", "policy_format"];
    orderedDbCols = [...primary, ...dbCols.filter(c => !primary.includes(c))];
  } else {
    const extras = ["hyperlink", "country", "policy_year", "policy_name", "policy_format", "date_entry"];
    orderedDbCols = [
      "doc_code",
      ...extras.filter(c => dbCols.includes(c)),
      ...dbCols.filter(c => c !== "doc_code" && !extras.includes(c))
    ];
  }
  const headers = orderedDbCols.map(c => COLUMN_MAP[c] || c);

  // fetch rows
  const dataRes = await authFetch(`${apiBase}/pull?table=${encodeURIComponent(tableName)}`);
  if (!dataRes.ok) throw new Error(await dataRes.text());
  const rows = await dataRes.json();
  console.log(`📥 [pullOneTable] "${tableName}" →`, {
    orderedDbCols,
    headers,
    rows
  });

  // write into Excel
  await Excel.run(async ctx => {
    const displayName = tableName.replace(/_/g, " ");
    let sheet = ctx.workbook.worksheets.getItemOrNullObject(displayName);
    await ctx.sync();

    if (sheet.isNullObject) {
      sheet = ctx.workbook.worksheets.add(displayName);
    }
    sheet.activate();
    sheet.getUsedRange()?.clear();
    await ctx.sync();

    // headers
    sheet.getRangeByIndexes(0, 0, 1, headers.length).values = [headers];
    await ctx.sync();

    // data
    if (rows.length) {
      const data = rows.map(r => orderedDbCols.map(col => r[col] ?? null));
      sheet.getRangeByIndexes(1, 0, data.length, headers.length).values = data;
      if (data.length) {
        // write data rows
        sheet.getRangeByIndexes(1, 0, data.length, headers.length).values = data;
        await ctx.sync();
    
        // inject real Excel hyperlinks in the "Hyperlink" column
        const hyperlinkColIdx = headers.indexOf("Download File");
        if (hyperlinkColIdx >= 0) {
          data.forEach((row, i) => {
            const url = row[hyperlinkColIdx];
            if (typeof url === "string" && url.startsWith("http")) {
              const cell = sheet.getRangeByIndexes(i + 1, hyperlinkColIdx, 1, 1);
              cell.hyperlink = { address: url, textToDisplay: "Access PDF" };
            }
          });
          await ctx.sync();
        }
      }
      await ctx.sync();
    }
    
    // convert to Table + autofit
    const used = sheet.getUsedRange();
    used.load("rowCount,columnCount");
    await ctx.sync();

    const tblName = `tbl_${displayName.trim().toLowerCase().replace(/\s+/g, "_")}`;
    const oldTbl = sheet.tables.getItemOrNullObject(tblName);
    await ctx.sync();
    if (!oldTbl.isNullObject) {
      oldTbl.delete();
      await ctx.sync();
    }

    sheet.tables.add(
      sheet.getRangeByIndexes(0, 0, used.rowCount, used.columnCount),
      true
    ).name = tblName;

    // Add dropdowns
    await Excel.run(async ctx => {
        const sheet = ctx.workbook.worksheets.getActiveWorksheet();
        const used  = sheet.getUsedRange();
        used.load("rowCount,columnCount");
        await ctx.sync();
  
        const headerR = sheet.getRangeByIndexes(0, 0, 1, used.columnCount);
        headerR.load("values");
        await ctx.sync();
        const headers = headerR.values[0];
  
        for (const [colName, options] of Object.entries(dropdowns)) {
          const cIdx = headers.indexOf(colName);
          if (cIdx < 0 || used.rowCount < 2) continue;
  
          const dvRange = sheet.getRangeByIndexes(1, cIdx, used.rowCount - 1, 1);
          dvRange.dataValidation.ignoreBlanks = true;
  
          let src;
      
          const joined = options.join(",");
          if (joined.length > 255) {
            console.warn(`Dropdown for "${colName}" exceeds 255 chars and will truncate.`);
          }
          src = joined;
          
  
          dvRange.dataValidation.rule = {
            list: { inCellDropdown: true, source: src }
          };
        }
  
        await ctx.sync();
      });

    sheet.getUsedRange().getEntireColumn().format.columnWidth = 130;
    sheet.getUsedRange().getEntireRow().format.rowHeight = 18;
    await ctx.sync();

    // update hidden cache
    const cacheName = `__cache__${tableName}`;
    let cacheSheet = ctx.workbook.worksheets.getItemOrNullObject(cacheName);
    await ctx.sync();
    if (cacheSheet.isNullObject) {
      cacheSheet = ctx.workbook.worksheets.add(cacheName);
      cacheSheet.visibility = Excel.SheetVisibility.hidden;
    } else {
      cacheSheet.getUsedRange()?.clear();
    }

    cacheSheet.getRangeByIndexes(0, 0, 1, orderedDbCols.length).values = [orderedDbCols];

    if (rows.length) {
      const cacheData = rows.map(r => orderedDbCols.map(col => r[col] ?? null));
      cacheSheet.getRangeByIndexes(1, 0, cacheData.length, orderedDbCols.length).values = cacheData;
    }

    await ctx.sync();
  });

  return rows.length;
}


async function pushToDb() {
  const status = document.getElementById("status");
  status.innerText = "Preparing to push…";

  // 1) Load valid table names
  let validTables;
  try {
    const tblRes = await authFetch(`${apiBase}/tables`);
    validTables = new Set(await tblRes.json());
  } catch {
    return (status.innerText = "❌ Failed loading table list.");
  }

  // 2) Determine which sheets to push
  const sheetsToPush = await Excel.run(async ctx => {
    const toPush = [];
    const sheets = ctx.workbook.worksheets;
    sheets.load("items/name,items/visibility");
    await ctx.sync();

    for (const sheet of sheets.items) {
      if (
        sheet.visibility !== Excel.SheetVisibility.visible ||
        sheet.name.startsWith("__cache__")
      )
        continue;

      const tableName = sheet.name.replace(/\s+/g, "_").toLowerCase();
      if (!validTables.has(tableName)) continue;

      // 2a) Fetch DB columns
      let dbCols;
      try {
        const colRes = await authFetch(`${apiBase}/columns?table=${encodeURIComponent(tableName)}`);
        dbCols = await colRes.json();
      } catch {
        status.innerText = `❌ Unable to load columns for ${tableName}`;
        continue;
      }

      // 2b) Load cache snapshot (if exists)
      const cacheSheet = ctx.workbook.worksheets.getItemOrNullObject(`__cache__${tableName}`);
      await ctx.sync();
      const cacheMap = new Map();
      if (!cacheSheet.isNullObject) {
        const used = cacheSheet.getUsedRange();
        used.load("values");
        await ctx.sync();
        const [headersRow, ...dataRows] = used.values || [];
        const cacheHeaders = headersRow.map(h => h.toLowerCase());
        for (const row of dataRows) {
          const obj = {};
          cacheHeaders.forEach((h, i) => (obj[h] = row[i]));
          cacheMap.set(obj.doc_code, obj);
        }
      }

      // 2c) Read live sheet
      const used = sheet.getUsedRange();
      used.load("values");
      await ctx.sync();
      const [headerRow, ...dataRows] = used.values || [];
      const headerMap = headerRow.map(h => DISPLAY_TO_DB[h] || h);

      // 2d) Build rows to push
      const toTablePush = [];
      const today = new Date();
      const formattedToday = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(today);

      for (const row of dataRows) {
        const obj     = {};

        // get this row’s doc_code so we can look up the original hyperlink
        const codeIdx     = headerRow.indexOf(COLUMN_MAP.doc_code);
        const docCode     = String(row[codeIdx] || "").trim();
        const cacheEntry  = cacheMap.get(docCode) || {};
      
        row.forEach((cellValue, colIdx) => {
          const dbCol = headerMap[colIdx];
          if (dbCol === "hyperlink" && tableName !== "policies") return;
          if (!dbCol || !dbCols.includes(dbCol)) return;
      
          if (dbCol === "hyperlink") {
            // only overwrite if the user actually typed/pasted a valid URL or cleared it
            if (typeof cellValue === "string" && (cellValue.startsWith("http") || cellValue === "")) {
              obj.hyperlink = cellValue;
            } else if (cacheEntry.hyperlink) {
              // otherwise keep the old URL from cache
              obj.hyperlink = cacheEntry.hyperlink;
            }
          } else {
            obj[dbCol] = cellValue;
          }
        });

        if (tableName === "policies" && !obj.country && obj.doc_code) {
          const iso3 = String(obj.doc_code).substring(0, 3).toUpperCase();
          const grp = COUNTRY_GROUPINGS.find(g => g.iso3c === iso3);
          if (grp) obj.country = grp.Country;
        }

        // Remove inherited fields on non-policy tables
        if (tableName !== "policies") {
          ["country", "policy_year", "policy_name", "policy_format"].forEach(k => delete obj[k]);
        }

        // Always update the push date
        obj.date_entry = formattedToday;
        if (!obj.doc_code) continue;

        const orig = cacheMap.get(obj.doc_code);
        const isChanged = !orig || Object.keys(obj).some(k =>
          k !== "date_entry" &&
          String(orig[k] ?? "") !== String(obj[k] ?? "")
        );

        if (isChanged) {
          toTablePush.push(obj);
        }
      }

      if (toTablePush.length) {
        toPush.push({ tableName, rows: toTablePush });
      }
    }

    return toPush;
  });

  if (!sheetsToPush.length) {
    return (status.innerText = "No changes detected.");
  }

  // 3) Push each table’s changes
  for (const { tableName, rows } of sheetsToPush) {
    if (!await confirmPush(`${rows.length} change(s) to "${tableName}"?`)) {
      status.innerText = `Skipped "${tableName}".`;
      continue;
    }

    status.innerText = `Pushing "${tableName}"…`;
    console.log("⏫ [CLIENT] pushing to", tableName, "– payload:", JSON.stringify(rows, null, 2));
    try {
      const res = await authFetch(`${apiBase}/push?table=${encodeURIComponent(tableName)}`, {
        method: "POST",
        body: JSON.stringify(rows)
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || JSON.stringify(payload));
      status.innerText = `✅ Pushed ${rows.length} to "${tableName}".`;
      scheduleReminder();
      // Refresh cache for just this table
      await pullOneTable(tableName);
    } catch (err) {
      return (status.innerText = `❌ Error pushing "${tableName}": ${err.message}`);
    }
  }
}


// helper to ask user
function confirmPush(msg) {
  return askConfirm(`Push ${msg}`);
}


function askConfirm(message) {
  return new Promise(resolve => {
    const dlg    = document.getElementById("confirmDialog");
    const msgEl  = document.getElementById("confirmMessage");
    const yesBtn = document.getElementById("confirmYes");
    const noBtn  = document.getElementById("confirmNo");
    msgEl.textContent = message;
    dlg.style.display = "flex";
    function cleanUp() {
      dlg.style.display = "none";
      yesBtn.removeEventListener("click", onYes);
      noBtn.removeEventListener("click", onNo);
    }
    function onYes() { cleanUp(); resolve(true); }
    function onNo()  { cleanUp(); resolve(false); }
    yesBtn.addEventListener("click", onYes);
    noBtn .addEventListener("click", onNo);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const tabParam = params.get('tab');

  if (tabParam === 'faq') {
    activateTab('tab-faq', 'panel-faq');
  }

  function activateTab(tabId, panelId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.content').forEach(panel => panel.style.display = 'none');

    document.getElementById(tabId).classList.add('active');
    document.getElementById(panelId).style.display = 'block';
  }
});