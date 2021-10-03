const DATAYPES = ["Temporal"];
const YEARS = ["1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
const TIME = ["Hourly","Daily", "Monthly", "Climatology"]
const HOURLY = [
    {
      item: 'Precipitation',
      id: 'PRECTOTCORR',
    },
    {
      item: 'Surface pressure',
      id: 'PS',
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
      item: 'All sky insolation clearness index',
      id: 'ALLSKY_KT',
    },
    {
      item: 'All sky surface shortware downward irradiance',
      id: 'ALLSKY_SFC_SW_DWN',
    },
    {
      item: 'All sky surface albedo',
      id: 'ALLSKY_SRF_ALB',
    },
    {
      item: 'Clear sky surface shortwave downward irradiance',
      id: 'CLRSKY_SFC_SW_DWN',
    },
    {
      item: 'Integrated solar zenith angle',
      id: 'SZA',
    },
    {
      item: 'All sky surface UV index',
      id: 'ALLSKY_SFC_UV_INDEX',
    },
    {
      item: 'All sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'ALLSKY_SFC_PAR_TOT',
    },
    {
      item: 'Clear sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'CLRSKY_SFC_PAR_TOT',
    },
]
const Daily = [
    {
      item: 'Precipitation ',
      id: 'PRECTOTCORR',
    },
    {
      item: 'Surface pressure',
      id: 'PS',
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
      item: 'Temperature at 2 meters',
      id: 'T2M',
    },
    {
      item: 'Drew/Frost point at 2 meters',
      id: 'T2MDEW',
    },
    {
      item: 'Earth skin temperature',
      id: 'TS',
    },
    {
      item: 'All sky insolation clearness index',
      id: 'ALLSKY_KT',
    },
    {
      item: 'All sky normalized insolation clearness index',
      id: 'ALLSKY_NKT',
    },
    {
      item: 'All sky surface longwave downward irradiance',
      id: 'ALLSKY_SFC_LW_DWN',
    },
    {
      item: 'All sky surface shortwave downward irradiance',
      id: 'ALLSKY_SFC_SW_DWN',
    },
    {
      item: 'Clear sky surface shortwave downward irradiance',
      id: 'CLRSKY_SFC_SW_DWN',
    },
    {
      item: 'Direct illuminance',
      id: 'DIRECT_ILLUMINANCE',
    },
    {
      item: 'All sky surface UV index',
      id: 'ALLSKY_SFC_UV_INDEX',
    },
    {
      item: 'All sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'ALLSKY_SFC_PAR_TOT',
    },
    {
      item: 'Clear sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'CLRSKY_SFC_PAR_TOT',
    },
    {
      item: 'Temperature at 2 meters range',
      id: 'T2M_RANGE',
    },
    {
      item: 'Temperature at 2 meters range maximun',
      id: 'T2M_MAX',
    },
    {
      item: 'Temperature at 2 meters range minimun',
      id: 'T2M_MIN',
    },
]
const MONTHLY = [
    {
      item: 'Precipitation ',
      id: 'PRECTOTCORR',
    },
    {
      item: 'Surface pressure',
      id: 'PS',
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
      item: 'Earth skin temperature',
      id: 'TS',
    },
    {
      item: 'All sky insolation clearness index',
      id: 'ALLSKY_KT',
    },
    {
      item: 'All sky normalized insolation clearness index',
      id: 'ALLSKY_NKT',
    },
    {
      item: 'All sky surface longwave downward irradiance',
      id: 'ALLSKY_SFC_LW_DWN',
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
      item: 'All sky surface shortwave downward irradiance',
      id: 'ALLSKY_SFC_SW_DWN',
    },
    {
      item: 'All sky surface albedo',
      id: 'ALLSKY_SRF_ALB',
    },
    {
      item: 'Cloud amount',
      id: 'CLOUD_AMT',
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
      item: 'Clear sky surface shortwave downward irradiance',
      id: 'CLRSKY_SFC_SW_DWN',
    },
    {
      item: 'Direct illuminance',
      id: 'DIRECT_ILLUMINANCE',
    },
    {
      item: 'Top-of-atmosphere shortwave downward irradiance',
      id: 'TOA_SW_DWN',
    },
    {
      item: 'All sky surface UV index',
      id: 'ALLSKY_SFC_UV_INDEX',
    },
    {
      item: 'All sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'ALLSKY_SFC_PAR_TOT',
    },
    {
      item: 'Clear sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'CLRSKY_SFC_PAR_TOT',
    },
    {
      item: 'Temperature at 2 meters range',
      id: 'T2M_RANGE',
    },
    {
      item: 'Temperature at 2 meters maximun',
      id: 'T2M_MAX',
    },
    {
      item: 'Temperature at 2 meters minimun',
      id: 'T2M_MIN',
    },
]
const CLIMATOLOGY = [
    {
      item: 'Precipitation ',
      id: 'PRECTOTCORR',
    },
    {
      item: 'Surface pressure',
      id: 'PS',
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
      item: 'All sky insolation clearness index',
      id: 'ALLSKY_KT',
    },
    {
      item: 'All sky normalized insolation clearness index',
      id: 'ALLSKY_NKT',
    },
    {
      item: 'All sky surface longwave downward irradiance',
      id: 'ALLSKY_SFC_LW_DWN',
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
      item: 'All sky surface shortwave downward irradiance',
      id: 'ALLSKY_SFC_SW_DWN',
    },
    {
      item: 'All sky surface albedo',
      id: 'ALLSKY_SRF_ALB',
    },
    {
      item: 'Cloud amount',
      id: 'CLOUD_AMT',
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
      item: 'Direct illuminance',
      id: 'DIRECT_ILLUMINANCE',
    },
    {
      item: 'Top-of-atmosphere shortwave downward irradiance',
      id: 'TOA_SW_DWN',
    },
    {
      item: 'All sky surface UV index',
      id: 'ALLSKY_SFC_UV_INDEX',
    },
    {
      item: 'All sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'ALLSKY_SFC_PAR_TOT',
    },
    {
      item: 'Clear sky surface Photosinthetically Active Radiation (PAR) total',
      id: 'CLRSKY_SFC_PAR_TOT',
    },
    {
      item: 'Temperature at 2 meters range',
      id: 'T2M_RANGE',
    },
    {
      item: 'Temperature at 2 meters maximun',
      id: 'T2M_MAX',
    },
    {
      item: 'Temperature at 2 meters minimun',
      id: 'T2M_MIN',
    },
    {
      item: 'All sky surface shortwave downward irradiance at GMT times',
      id: 'ALLSKY_SFC_SW_DWN_HR',
    },
    {
      item: 'All sky surface shortwave downwward direct normal irradiance maximum',
      id: 'ALLSKY_SFC_SW_DNI_MAX',
    },
    {
      item: 'All sky surface shortwave downwward direct normal irradiance minimum',
      id: 'ALLSKY_SFC_SW_DNI_MIN',
    },
    {
      item: 'All sky surface shortwave diffuse irradiance maximun',
      id: 'ALLSKY_SFC_SW_DIFF_MAX',
    },
    {
      item: 'All sky surface shortwave diffuse irradiance minimum',
      id: 'ALLSKY_SFC_SW_DIFF_MIN',
    },
    {
      item: 'Solar irradiance for equator facing tilted surfaces (set of surfaces)',
      id: 'SI_EF_TILTED_SURFACE',
    },
    {
      item: 'Midday insolation incident',
      id: 'MIDDAY_INSO',
    },
    {
      item: 'Average solar noon time for climatological month',
      id: 'SG_NOON',
    },
    {
      item: 'Average sunset hour angle for climatological month',
      id: 'SG_HR_SET_ANG',
    },
    {
      item: 'Average cosine solar zenith angle at mid-time between sunrise and solar noon for climatological month',
      id: 'SG_MID_COZ_ZEN_ANG',
    },
    {
      item: 'Daylight average of hourly consie solar zenith angles for climatological month',
      id: 'SG_DAY_COZ_ZEN_AVG',
    },
    {
      item: 'Average hourly solar angles relative to the horizon for climatological month',
      id: 'SG_HRZ_HR',
    },
    {
      item: 'Average daylight hours',
      id: 'SG_DAY_HOURS',
    },
    {
      item: 'Average declination for climatological month',
      id: 'SG_DEC',
    },
    {
      item: 'Earth skin temperature maximun',
      id: 'TS_MAX',
    },
    {
      item: 'Earth skin temperature minimum',
      id: 'TS_MIN',
    },
    {
      item: 'Frost days',
      id: 'FROST_DAYS',
    },
    {
      item: 'Cloud amount at GMT times',
      id: 'CLOUD_AMT_HR',
    },
    {
      item: 'Equivalent No-Sun Days Over A Consecutive 1-day Period',
      id: 'EQUIV_NO_SUN_CONSEC_01',
    },
    {
      item: 'Equivalent No-Sun Days Over A Consecutive 3-day Period',
      id: 'EQUIV_NO_SUN_CONSEC_03',
    },
    {
      item: 'Equivalent No-Sun Days Over A Consecutive 7-day Period',
      id: 'EQUIV_NO_SUN_CONSEC_07',
    },
    {
      item: 'Equivalent No-Sun Days Over A Consecutive 14-day Period',
      id: 'EQUIV_NO_SUN_CONSEC_14',
    },
    {
      item: 'Equivalent No-Sun Days Over A Consecutive 21-day Period',
      id: 'EQUIV_NO_SUN_CONSEC_21',
    },
    {
      item: 'Equivalent No-Sun Days Over A Consecutive Month Period',
      id: 'EQUIV_NO_SUN_CONSEC_MONTH',
    },
    {
      item: 'Insolation Over A Consecutive 1-day Period',
      id: 'INSOL_CONSEC_01',
    },
    {
      item: 'Insolation Over A Consecutive 3-day Period',
      id: 'INSOL_CONSEC_03',
    },
    {
      item: 'Insolation Over A Consecutive 7-day Period',
      id: 'INSOL_CONSEC_07',
    },
    {
      item: 'Insolation Over A Consecutive 14-day Period',
      id: 'INSOL_CONSEC_14',
    },
    {
      item: 'Insolation Over A Consecutive 21-day Period',
      id: 'INSOL_CONSEC_21',
    },
    {
      item: 'Insolation Over A Consecutive Month Period',
      id: 'INSOL_CONSEC_MONTH',
    },
    {
      item: 'Minimum Insolation Over A Consecutive 1-day Period',
      id: 'INSOL_CONSEC_01_MIN',
    },
    {
      item: 'Minimum Insolation Over A Consecutive 3-day Period',
      id: 'INSOL_CONSEC_03_MIN',
    },
    {
      item: 'Minimum Insolation Over A Consecutive 7-day Period',
      id: 'INSOL_CONSEC_07_MIN',
    },
    {
      item: 'Minimum Insolation Over A Consecutive 14-day Period',
      id: 'INSOL_CONSEC_14_MIN',
    },
    {
      item: 'Minimum Insolation Over A Consecutive 21-day Period',
      id: 'INSOL_CONSEC_21_MIN',
    },
    {
      item: 'Minimum Insolation Over A Consecutive Month Period',
      id: 'INSOL_CONSEC_MONTH_MIN',
    },
    {
      item: 'Solar Irradiance Deficit Over A Consecutive 1-day Period',
      id: 'SOLAR_DEFICITS_BLW_CONSEC_01',
    },
    {
      item: 'Solar Irradiance Deficit Over A Consecutive 3-day Period',
      id: 'SOLAR_DEFICITS_BLW_CONSEC_03',
    },
    {
      item: 'Solar Irradiance Deficit Over A Consecutive 7-day Period',
      id: 'SOLAR_DEFICITS_BLW_CONSEC_07',
    },
    {
      item: 'Solar Irradiance Deficit Over A Consecutive 14-day Period',
      id: 'SOLAR_DEFICITS_BLW_CONSEC_14',
    },
    {
      item: 'Solar Irradiance Deficit Over A Consecutive 21-day Period',
      id: 'SOLAR_DEFICITS_BLW_CONSEC_21',
    },
    {
      item: 'Solar Irradiance Deficit Over A Consecutive Month Period',
      id: 'SOLAR_DEFICITS_BLW_CONSEC_MONTH',
    },
    {
      item: 'Equivalent No-Sun Days',
      id: 'NO_SUN_BLACKDAYS_MAX',
    },
    {
      item: 'Maximum Equivalent No-Sun Days Deficit',
      id: 'MAX_EQUIV_NO_SUN_DEFICIT',
    },
]
const PARAMETERS = [
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
}
