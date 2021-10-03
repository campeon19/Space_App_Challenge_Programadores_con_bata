const DATAYPES = ["Temporal","Application"];
const YEARS = ["1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
const TIME = ["Hourly","Daily", "Monthly", "Climatology"]
const PARAMETERS = ["PRECSNOLAND", "PRECTOTCORR", "PS", "PSC","QV2M", "QV10M","RH2M","SNODP","T2M","T2MDEW","T2MWET","TS","U?M","V?M","WD?M","WS?M","WSC","ALLSKY_KT","ALLSKY_NKT","ALLSKY_SFC_LW_DWN","ALLSKY_SFC_SW_DIFF","ALLSKY_SFC_SW_DNI","ALLSKY_SFC_SW_DWN","ALLSKY_SRF_ALB","AOD_?","CLOUD_AMT","CLOUD_OD","CLRSKY_KT","CLRSKY_NKT","CLRSKY_SFC_LW_DWN","CLRSKY_SFC_SW_DWN","CLRSKY_SRF_ALB","DIFFUSE_ILLUMINANCE","DIRECT_ILLUMINANCE","GLOBAL_ILLUMINANCE","PW","SZA","TOA_SW_DNI","TOA_SW_DWN","ZENITH_LUMINANCE","ALLSKY_SFC_?","ALLSKY_SFC_UV_INDEX","ALLSKY_SFC_PAR_TOT","CLRSKY_SFC_PAR_TOT","CLRSKY_SFC_SW_DIFF","CLRSKY_SFC_SW_DIRH","CLRSKY_SFC_SW_DNI"]
const PARAMETERS2 = [
    {
      item: 'All sky insolation clearness index',
      id: 'ALLSKY_KT',
    },
    {
      item: 'All sky normalized insolation clearness index',
      id: 'ALLSKY_NKT',
    },
    {
      item: 'All sky surface UVA or UVB radiance',
      id: 'ALLSKY_SFC',
    },
    {
      item: 'All sky surface longwave downward irradiance',
      id: 'ALLSKY_SFC_LW_DWN',
    },
    {
      item: 'All sky surface PAR total',
      id: 'ALLSKY_SFC_PAR_TOT',
    },
    {
      item: 'All sky surface shortwave diffuse irradiance',
      id: 'ALLSKY_SFC_SW_DIFF',
    },
    {
      item: 'All sky surface shortwave downwward direct normal irradiance',
      id: 'ALLSKY_SFC_SW_DNI',
    },
    {
      item: 'All sky surface shortware downward irradiance',
      id: 'ALLSKY_SFC_SW_DWN',
    },
    {
      item: 'All sky surface UV index',
      id: 'ALLSKY_SFC_UV_INDEX',
    },
    {
      item: 'All sky surface albedo',
      id: 'ALLSKY_SRF_ALB',
    },
    {
      item: 'Aerosol optical depth 55 OR 84',
      id: 'AOD',
    },
    {
      item: 'Cloud amount',
      id: 'CLOUD_AMT',
    },
    {
      item: 'Cloud optical visible depth',
      id: 'CLOUD_OD',
    },
    {
      item: 'Clear sky insolation clearness index',
      id: 'CLRSKY_KT',
    },
    {
      item: 'Clear sky normalized insolation clearness index',
      id: 'CLRSKY_NKT',
    },
    {
      item: 'Clear sky surface longwave downward irradiance',
      id: 'CLRSKY_SFC_LW_DWN',
    },
    {
      item: 'Clear sky surface PAR total',
      id: 'CLRSKY_SFC_PAR_TOT',
    },
    {
      item: 'Clear sky surface shortwave downward diffuse horizontal irradiance',
      id: 'CLRSKY_SFC_SW_DIFF',
    },
    {
      item: 'Clear sky surface shortwave direct horizontal irradiance',
      id: 'CLRSKY_SFC_SW_DIRH',
    },
    {
      item: 'Clear sky surface shortwave downward direct normal irradiance',
      id: 'CLRSKY_SFC_SW_DNI',
    },
    {
      item: 'Clear sky surface shortwave downward direct normal irradiance',
      id: 'CLRSKY_SFC_SW_DWN',
    },
    {
      item: 'All sky surface shortwave downwward direct normal irradiance',
      id: 'CLRSKY_SRF_ALB',
    },
    {
      item: 'Diffuse illuminance',
      id: 'DIFFUSE_ILLUMINANCE',
    },
    {
      item: 'Global illuminance',
      id: 'GLOBAL_ILLUMINANCE',
    },
    {
      item: 'Snow precipitation land',
      id: 'PRECSNOLAND',
    },
    {
      item: 'Precipitation Corrected',
      id: 'PRECTOTCORR',
    },
    {
      item: 'Surface pressure',
      id: 'PS',
    },
    {
      item: 'Corrected atmospheric pressure',
      id: 'PSC',
    },
    {
      item: 'Precipitable water',
      id: 'PW',
    },
    {
      item: 'Specific humidity at 10 meters',
      id: 'QV10M',
    },
    {
      item: 'Specific humidity at 2 meters',
      id: 'QV2M',
    },
    {
      item: 'Relative humidity at 2 meters',
      id: 'RH2M',
    },
    {
      item: 'Snow depth',
      id: 'SNODP',
    },
    {
      item: 'Solar zenith angle',
      id: 'SZA',
    },
    {
      item: 'Temperature at 2 meters',
      id: 'T2M',
    },
    {
      item: 'Drew/Frost point at 2 meters',
      id: 'T2MDEW',
    },
    {
      item: 'Wet bulb temperature at 2 meters',
      id: 'T2MWET',
    },
    {
      item: 'Top-of-atmosphere shortwave direct normal radiation',
      id: 'TOA_SW_DNI',
    },
    {
      item: 'Top-of-atmosphere shortwave downward irradiance',
      id: 'TOA_SW_DWN',
    },
    {
      item: 'Earth skin temperature',
      id: 'TS',
    },
    {
      item: 'Corrected wind speed',
      id: 'WSC',
    },
    {
      item: 'Zenith luminance',
      id: 'ZENITH_LUMINANCE',
    },
  ]

module.exports = {
    DATAYPES,
    YEARS,
    TIME,
    PARAMETERS,
    PARAMETERS2,
}
