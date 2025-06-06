// mapping.js

const sankeyMapping = [
  { system: "Chilled Water Systems",    source: "electric", dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-chws-electric-demand.virtual" },
  { system: "Compressed Air Systems",    source: "electric", dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-cps-electric-demand.virtual" },
  { system: "Air Dryer",                 source: "electric", dataSourceName: "WLG-EM5-MCC2-ELM2-2",              metricName: "MCC2_ELM2-2_Airdryer1_Ps6_kW" },
  { system: "Air Compressor",            source: "electric", dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-ac-electric-demand.virtual" },
  { system: "Main Electric",             source: "electric", dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-mes-electricity-demand.virtual" },
  { system: "Main Gas",                  source: "gas",      dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-mgs-gas-demand.virtual" },
  { system: "Other",                     source: "electric", dataSourceName: "WLG-EM5-BusDuct3-ELM52",         metricName: "BusDuct3_ELM52_BusDuct3_Real_Power" },
  { system: "Steam",                     source: "electric", dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-ss-electric-demand.virtual" },
  { system: "steam",                     source: "gas",      dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-ss-gas-demand.virtual" },
  { system: "DWR L12",                   source: "electric", dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-dwrl12-electric-demand.virtual" },
  { system: "DWR L13",                   source: "gas",      dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-dwrl12-gas-demand.virtual" },
  { system: "Other Process Energy Use",  source: "electric", dataSourceName: "WLG-EM5-Calculated_Fields", metricName: "total-opes-electricity-demand.virtual" }
];
