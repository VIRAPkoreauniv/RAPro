interface IChemicalData {
  Henry: number | null
  logKoclogKd: number | null
  'Koc/Kd': 'Koc' | 'Kd' | null
  Sfo: number | null
  RfDo: number | null
  RfDd: number | null
  SFd: number | null
  URF: number | null
  Rfc: number | null
  Dair: number | null
  Dwat: number | null
  BCF: number | null
  IUR: number | null
}

export const CHEMICAL_DATABASE: Record<string, IChemicalData> = {
  Acenaphthene: {
    Henry: 0.00644335,
    logKoclogKd: 3.6,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: 0,
    Rfc: null,
    Dair: 0.0421,
    Dwat: 0.00000769,
    BCF: 387,
    IUR: null,
  },
  Acenaphthylene: {
    Henry: 0.00473898,
    logKoclogKd: 3.84,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0439,
    Dwat: 0.000007065,
    BCF: 580,
    IUR: null,
  },
  Acetaldehyde: {
    Henry: 0.002747777,
    logKoclogKd: 0.418917,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.1,
    RfDd: 0.1,
    SFd: null,
    URF: 0.0000022,
    Rfc: 0.009,
    Dair: 0.124,
    Dwat: 0.0000123,
    BCF: 1.2,
    IUR: 0.0000022,
  },
  'Acetate, 2-1ethoxyethanol': {
    Henry: 0.000136551,
    logKoclogKd: 0.81712199,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.1,
    RfDd: 0.1,
    SFd: null,
    URF: null,
    Rfc: 0.06,
    Dair: 0.06128454355,
    Dwat: 0.000006703091212,
    BCF: null,
    IUR: null,
  },
  'Acetate, isoamyl': {
    Henry: 0.02044992,
    logKoclogKd: 1.873446353,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.072,
    RfDd: 0.072,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0600987727,
    Dwat: 0.000006396760875,
    BCF: null,
    IUR: null,
  },
  'Acetate, isobutyl': {
    Henry: 0.019754245,
    logKoclogKd: 1.462233315,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.048,
    RfDd: 0.048,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.06620689366,
    Dwat: 0.000006876277419,
    BCF: null,
    IUR: null,
  },
  'Acetate, sec-1butyl': {
    Henry: 0.030245475,
    logKoclogKd: 1.542448439,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.048,
    RfDd: 0.048,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.06685826848,
    Dwat: 0.000006908112423,
    BCF: null,
    IUR: null,
  },
  Acetone: {
    Henry: 0.001612916,
    logKoclogKd: -10.24412514,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.9,
    RfDd: 0.9,
    SFd: null,
    URF: null,
    Rfc: 0.31,
    Dair: 0.124,
    Dwat: 0.0000114,
    BCF: 0.39,
    IUR: null,
  },
  'Acetone cyanohydrin': {
    Henry: 0.000134271,
    logKoclogKd: -10.2155005,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.003,
    RfDd: 0.003,
    SFd: null,
    URF: null,
    Rfc: 0.06,
    Dair: 0.0812,
    Dwat: 0.00000909,
    BCF: 0.55,
    IUR: null,
  },
  Acetonitrile: {
    Henry: 0.00120553,
    logKoclogKd: -10.33,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.032,
    RfDd: 0.032,
    SFd: null,
    URF: null,
    Rfc: 0.06,
    Dair: 0.128,
    Dwat: 0.00001445,
    BCF: 0.32,
    IUR: null,
  },
  Acetophenone: {
    Henry: 0.000444799,
    logKoclogKd: 1.56,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.1,
    RfDd: 0.1,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.06,
    Dwat: 0.00000873,
    BCF: 11,
    IUR: null,
  },
  'Acetylaminofluorene, 2-1': {
    Henry: 7.0e-4,
    logKoclogKd: 2.626487859,
    'Koc/Kd': 'Koc',
    Sfo: 3.8,
    RfDo: null,
    RfDd: null,
    SFd: 3.8,
    URF: 0.0013,
    Rfc: null,
    Dair: 0.04251376983,
    Dwat: 0.000006082280751,
    BCF: 80,
    IUR: 0.0013,
  },
  'Acifluorfen, sodium': {
    Henry: 8.31e-13,
    logKoclogKd: 2.053078443,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.013,
    RfDd: 0.013,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0145,
    Dwat: 0.00000044,
    BCF: 1.1,
    IUR: null,
  },
  Acridine: {
    Henry: 3.93e-6,
    logKoclogKd: 3.402389325,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.003,
    RfDd: 0.003,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.05113611165,
    Dwat: 6.66e-106,
    BCF: 250,
    IUR: null,
  },
  Acrolein: {
    Henry: 0.000182908,
    logKoclogKd: -10.28,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.0005,
    RfDd: 0.0005,
    SFd: null,
    URF: null,
    Rfc: 0.0005,
    Dair: 0.105,
    Dwat: 0.00000112,
    BCF: 344,
    IUR: null,
  },
  Acrylamide: {
    Henry: 1.33e-8,
    logKoclogKd: -10.66,
    'Koc/Kd': 'Koc',
    Sfo: 0.5,
    RfDo: 0.002,
    RfDd: 0.002,
    SFd: 0.5,
    URF: 0.0001,
    Rfc: 0.006,
    Dair: 0.097,
    Dwat: 0.00001275,
    BCF: 0.14,
    IUR: 0.0001,
  },
  'Acrylic acid': {
    Henry: 1.32e-5,
    logKoclogKd: 0.054283857,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.5,
    RfDd: 0.5,
    SFd: null,
    URF: null,
    Rfc: 0.001,
    Dair: 0.0908,
    Dwat: 0.0000106,
    BCF: 1.3,
    IUR: null,
  },
  Acrylonitrile: {
    Henry: 0.0045727,
    logKoclogKd: 0.04,
    'Koc/Kd': 'Koc',
    Sfo: 0.54,
    RfDo: 0.001,
    RfDd: 0.001,
    SFd: 0.54,
    URF: 0.000068,
    Rfc: 0.002,
    Dair: 0.122,
    Dwat: 0.0000134,
    BCF: 48,
    IUR: 0.000068,
  },
  'Adipic acid (hexanedioic acid)': {
    Henry: 1.8e-11,
    logKoclogKd: -16.55885895,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 2,
    RfDd: 2,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.06126445335,
    Dwat: 7.9e-106,
    BCF: 0.73,
    IUR: null,
  },
  Alachlor: {
    Henry: 8.62e-7,
    logKoclogKd: 2.278753601,
    'Koc/Kd': 'Koc',
    Sfo: 0.08,
    RfDo: 0.01,
    RfDd: 0.01,
    SFd: 0.08,
    URF: null,
    Rfc: null,
    Dair: 0.0194,
    Dwat: 0.00000583,
    BCF: 210,
    IUR: null,
  },
  Aldicarb: {
    Henry: 5.82e-8,
    logKoclogKd: 1.198367654,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.001,
    RfDd: 0.001,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0305,
    Dwat: 0.0000072,
    BCF: 6.4,
    IUR: null,
  },
  'Aldicarb sulfone': {
    Henry: 1.1e-7,
    logKoclogKd: 0.230448921,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.001,
    RfDd: 0.001,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.05547229185,
    Dwat: 0.00005739385489,
    BCF: 0.18,
    IUR: null,
  },
  Aldrin: {
    Henry: 0.0070669,
    logKoclogKd: 4.68,
    'Koc/Kd': 'Koc',
    Sfo: 17,
    RfDo: 0.00003,
    RfDd: 0.00003,
    SFd: 17,
    URF: 0.0049,
    Rfc: null,
    Dair: 0.0132,
    Dwat: 0.00000486,
    BCF: 79000,
    IUR: 0.0049,
  },
  'Allyl alcohol': {
    Henry: 0.00020785,
    logKoclogKd: 0.51,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.005,
    RfDd: 0.005,
    SFd: null,
    URF: null,
    Rfc: 0.0001,
    Dair: 0.114,
    Dwat: 0.000011,
    BCF: 0.79,
    IUR: null,
  },
  'Allyl chloride': {
    Henry: 0.45727,
    logKoclogKd: 1.43,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.01,
    RfDd: 0.01,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.098,
    Dwat: 0.0000108,
    BCF: 17,
    IUR: null,
  },
  Aluminum: {
    Henry: 0,
    logKoclogKd: 2.547774705,
    'Koc/Kd': 'Kd',
    Sfo: null,
    RfDo: 1,
    RfDd: 1,
    SFd: null,
    URF: null,
    Rfc: 0.005,
    Dair: 0,
    Dwat: 0,
    BCF: null,
    IUR: null,
  },
  Ametryn: {
    Henry: 7.33e-8,
    logKoclogKd: 2.885140467,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: null,
    RfDd: null,
    SFd: 0.009,
    URF: null,
    Rfc: null,
    Dair: 0.0424,
    Dwat: 5.7e-106,
    BCF: 92,
    IUR: null,
  },
  'Amino-12,6-1dinitrotoluene, 4-1': {
    Henry: 0.0000000174,
    logKoclogKd: 2.56,
    'Koc/Kd': 'Koc',
    Sfo: 0.01,
    RfDo: 0.000166667,
    RfDd: 0.000166666667,
    SFd: 0.01,
    URF: null,
    Rfc: null,
    Dair: 0.056,
    Dwat: 0.0000731,
    BCF: 58,
    IUR: null,
  },
  'Amino-14,6-1dinitrotoluene, 2-1': {
    Henry: 0.0000000119,
    logKoclogKd: 2.75,
    'Koc/Kd': 'Koc',
    Sfo: 0.01,
    RfDo: 0.000166667,
    RfDd: 0.000166666667,
    SFd: 0.01,
    URF: null,
    Rfc: null,
    Dair: 0.056,
    Dwat: 0.0000073,
    BCF: 79,
    IUR: null,
  },
  "Aminobiphenyl, 4-1 (1,1'-biphenyl-14-1a)": {
    Henry: 1.84e-6,
    logKoclogKd: 3.244159079,
    'Koc/Kd': 'Koc',
    Sfo: 6.1,
    RfDo: null,
    RfDd: null,
    SFd: 6.1,
    URF: null,
    Rfc: null,
    Dair: 0.05248092738,
    Dwat: 6.82e-106,
    BCF: 170,
    IUR: null,
  },
  'Aminopyridine, 4-1': {
    Henry: 2.44e-7,
    logKoclogKd: -10.3225,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.00002,
    RfDd: 0.00002,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0802,
    Dwat: 0.0000108,
    BCF: 0.48,
    IUR: null,
  },
  Ammonia: {
    Henry: 0.01363496,
    logKoclogKd: 0.49,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: null,
    RfDd: null,
    SFd: null,
    URF: null,
    Rfc: 0.1,
    Dair: 0.259,
    Dwat: 0.0000693,
    BCF: null,
    IUR: null,
  },
  Aniline: {
    Henry: 0.000058198,
    logKoclogKd: 0.96,
    'Koc/Kd': 'Koc',
    Sfo: 0.0057,
    RfDo: 0.007,
    RfDd: 0.007,
    SFd: 0.0057,
    URF: null,
    Rfc: 0.001,
    Dair: 0.07,
    Dwat: 0.0000083,
    BCF: 3.9,
    IUR: null,
  },
  Anthracene: {
    Henry: 0.00461427,
    logKoclogKd: 4.37,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.3,
    RfDd: 0.3,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0324,
    Dwat: 0.00000774,
    BCF: 1200,
    IUR: null,
  },
  'Anthraquinone, 9,10-1': {
    Henry: 3.58e-6,
    logKoclogKd: 3.066768406,
    'Koc/Kd': 'Koc',
    Sfo: 0.039,
    RfDo: 0.02,
    RfDd: 0.02,
    SFd: 0.039,
    URF: null,
    Rfc: null,
    Dair: 0.04805052759,
    Dwat: 6.26e-106,
    BCF: 140,
    IUR: null,
  },
  Antimony: {
    Henry: 0,
    logKoclogKd: 1.653212514,
    'Koc/Kd': 'Kd',
    Sfo: null,
    RfDo: 0.0004,
    RfDd: 0.0004,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0,
    Dwat: 0,
    BCF: null,
    IUR: null,
  },
  Aramite: {
    Henry: null,
    logKoclogKd: 3.9964144,
    'Koc/Kd': 'Koc',
    Sfo: 0.025,
    RfDo: 0.05,
    RfDd: 0.05,
    SFd: null,
    URF: null,
    Rfc: 0.000071,
    Dair: null,
    Dwat: 0.000004450846132,
    BCF: 2700,
    IUR: 0.000071,
  },
  Arsenic: {
    Henry: 0,
    logKoclogKd: null,
    'Koc/Kd': 'Kd',
    Sfo: 1.5,
    RfDo: 0.0003,
    RfDd: 0.0003,
    SFd: null,
    URF: 0.0043,
    Rfc: null,
    Dair: 0,
    Dwat: 0,
    BCF: null,
    IUR: 0.0043,
  },
  Arsine: {
    Henry: 0.241394238,
    logKoclogKd: null,
    'Koc/Kd': 'Kd',
    Sfo: null,
    RfDo: null,
    RfDd: null,
    SFd: null,
    URF: 0.00005,
    Rfc: null,
    Dair: 0,
    Dwat: 0,
    BCF: null,
    IUR: null,
  },
  Asbestos: {
    Henry: 0,
    logKoclogKd: 5,
    'Koc/Kd': 'Kd',
    Sfo: null,
    RfDo: null,
    RfDd: null,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0,
    Dwat: 0,
    BCF: null,
    IUR: null,
  },
  Atrazine: {
    Henry: 1.09e-7,
    logKoclogKd: 2.204119983,
    'Koc/Kd': 'Koc',
    Sfo: 0.222,
    RfDo: 0.035,
    RfDd: 0.035,
    SFd: 0.222,
    URF: null,
    Rfc: null,
    Dair: 0.05637406834,
    Dwat: 0.00000557882258,
    BCF: 82,
    IUR: null,
  },
  'Azinphos-1methyl (guthion)': {
    Henry: 8.8e-11,
    logKoclogKd: 2.4,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.0015,
    RfDd: 0.0015,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.04107829221,
    Dwat: 5.34e-106,
    BCF: 47,
    IUR: null,
  },
  Azobenzene: {
    Henry: 0.001888748,
    logKoclogKd: 4.725894957,
    'Koc/Kd': 'Koc',
    Sfo: 0.11,
    RfDo: null,
    RfDd: null,
    SFd: 0.11,
    URF: 0.000031,
    Rfc: null,
    Dair: 0.049451249,
    Dwat: 6.36e-106,
    BCF: 2500,
    IUR: 0.000031,
  },
  Barium: {
    Henry: 0,
    logKoclogKd: null,
    'Koc/Kd': 'Kd',
    Sfo: null,
    RfDo: 0.2,
    RfDd: 0.2,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0,
    Dwat: 0,
    BCF: null,
    IUR: null,
  },
  Bayleton: {
    Henry: 2.76e-8,
    logKoclogKd: 2.31379,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.03,
    RfDd: 0.03,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: null,
    Dwat: 5.25e-106,
    BCF: 44,
    IUR: null,
  },
  'Benefin (benfluralin)': {
    Henry: 7.77e-6,
    logKoclogKd: 5.22225,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.3,
    RfDd: 0.3,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.00004924323773,
    Dwat: 0.000004924323773,
    BCF: 5800,
    IUR: null,
  },
  Benomyl: {
    Henry: 2.08e-7,
    logKoclogKd: 1.163303,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.05,
    RfDd: 0.05,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.04494294579,
    Dwat: 4.46e-106,
    BCF: 6.5,
    IUR: null,
  },
  'Benz-1a-anthracene': {
    Henry: 0.00013926,
    logKoclogKd: 5.55,
    'Koc/Kd': 'Koc',
    Sfo: 0.73,
    RfDo: null,
    RfDd: null,
    SFd: 0.73,
    URF: 0.000088,
    Rfc: null,
    Dair: 0.051,
    Dwat: 0.0000009,
    BCF: 9200,
    IUR: 0.000088,
  },
  Benzaldehyde: {
    Henry: 0.002036099,
    logKoclogKd: 1.773780507,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.1,
    RfDd: 0.1,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0728237361,
    Dwat: 0.00000867278546,
    BCF: 16,
    IUR: null,
  },
  Benzene: {
    Henry: 0.2273879,
    logKoclogKd: 1.82,
    'Koc/Kd': 'Koc',
    Sfo: 0.015,
    RfDo: 0.004,
    RfDd: 0.004,
    SFd: 0.015,
    URF: 0.000022,
    Rfc: 0.28,
    Dair: 0.088,
    Dwat: 0.0000098,
    BCF: 12.6,
    IUR: 0.000022,
  },
  'Benzene dicarbonitrile, 1,3-1': {
    Henry: 1.88e-6,
    logKoclogKd: 0.879099431,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.006,
    RfDd: 0.006,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.067373896,
    Dwat: 0.00007621669483,
    BCF: 3.6,
    IUR: null,
  },
  'Benzene dicarboxylic acid, 1,2-1disodecyl': {
    Henry: 6.07e-5,
    logKoclogKd: 10.39059,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.04,
    RfDd: 0.04,
    SFd: null,
    URF: null,
    Rfc: 0.005,
    Dair: 0.0252,
    Dwat: 0.00000324,
    BCF: null,
    IUR: null,
  },
  'Benzene thiol': {
    Henry: 0.0182908,
    logKoclogKd: 1.32,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.00001,
    RfDd: 0.00001,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.076,
    Dwat: 8.68e-106,
    BCF: 65,
    IUR: null,
  },
  Benzidine: {
    Henry: 1.62e-9,
    logKoclogKd: 1.32,
    'Koc/Kd': 'Koc',
    Sfo: 230,
    RfDo: 0.003,
    RfDd: 0.003,
    SFd: 230,
    URF: 0.067,
    Rfc: null,
    Dair: 0.034,
    Dwat: 0.000015,
    BCF: 6.1,
    IUR: 0.067,
  },
  'Benzo-1a-pyrene': {
    Henry: 4.7e-5,
    logKoclogKd: 5.98,
    'Koc/Kd': 'Koc',
    Sfo: 7.3,
    RfDo: null,
    RfDd: null,
    SFd: 7.3,
    URF: 0.00088,
    Rfc: null,
    Dair: 0.043,
    Dwat: 0.000009,
    BCF: 26000,
    IUR: 0.00088,
  },
  'Benzo-1b-fluoranthene': {
    Henry: 0.00049884,
    logKoclogKd: 6.08,
    'Koc/Kd': 'Koc',
    Sfo: 0.73,
    RfDo: null,
    RfDd: null,
    SFd: 0.73,
    URF: 0.00088,
    Rfc: null,
    Dair: 0.0226,
    Dwat: 0.00000556,
    BCF: 26000,
    IUR: 0.00088,
  },
  'Benzo-1e-pyrene': {
    Henry: 2.38e-5,
    logKoclogKd: 6.58638,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.03,
    RfDd: 0.03,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0405,
    Dwat: 5.49e-106,
    BCF: 73000,
    IUR: null,
  },
  'Benzo-1g,h,i-perylene': {
    Henry: 5.82e-6,
    logKoclogKd: 6.2,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.03,
    RfDd: 0.03,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.049,
    Dwat: 0.00000565,
    BCF: 72000,
    IUR: null,
  },
  'Benzoic acid': {
    Henry: 1.39e-5,
    logKoclogKd: -10.30103,
    'Koc/Kd': 'Koc',
    Sfo: 4,
    RfDo: null,
    RfDd: null,
    SFd: 4,
    URF: null,
    Rfc: null,
    Dair: 0.0536,
    Dwat: 0.00000797,
    BCF: 16,
    IUR: null,
  },
  'Benzo-1j-fluoranthene': {
    Henry: 0.000463,
    logKoclogKd: 5.72,
    'Koc/Kd': 'Koc',
    Sfo: 0.73,
    RfDo: null,
    RfDd: null,
    SFd: 0.73,
    URF: 0.000088,
    Rfc: null,
    Dair: 0.0415,
    Dwat: 0.00000548,
    BCF: null,
    IUR: 0.000088,
  },
  'Benzo-1k-fluoranthene': {
    Henry: 4.45e-7,
    logKoclogKd: 6.09,
    'Koc/Kd': 'Koc',
    Sfo: 0.073,
    RfDo: null,
    RfDd: null,
    SFd: 0.073,
    URF: 0.000088,
    Rfc: null,
    Dair: 0.0226,
    Dwat: 0.00000556,
    BCF: 26000,
    IUR: 0.000088,
  },
  Benzophenone: {
    Henry: 0.0001044882,
    logKoclogKd: 3.404758288,
    'Koc/Kd': 'Koc',
    Sfo: 0.0067,
    RfDo: null,
    RfDd: null,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.05639245,
    Dwat: 0.00000631990014,
    BCF: 250,
    IUR: null,
  },
  Benzotrichloride: {
    Henry: 0.0020314812,
    logKoclogKd: 3.163563621,
    'Koc/Kd': 'Koc',
    Sfo: 13,
    RfDo: null,
    RfDd: null,
    SFd: 13,
    URF: null,
    Rfc: null,
    Dair: 0.0700591,
    Dwat: 0.00000702,
    BCF: 540,
    IUR: null,
  },
  'Benzoyl peroxide': {
    Henry: 8.12e-6,
    logKoclogKd: 3.024778387,
    'Koc/Kd': 'Koc',
    Sfo: 0.05,
    RfDo: null,
    RfDd: null,
    SFd: 0.05,
    URF: null,
    Rfc: null,
    Dair: 0.0448352317,
    Dwat: 0.00005479342668,
    BCF: null,
    IUR: null,
  },
  'Benzyl alcohol': {
    Henry: 1.62e-5,
    logKoclogKd: 1.08,
    'Koc/Kd': 'Koc',
    Sfo: 0.1,
    RfDo: null,
    RfDd: null,
    SFd: 0.1,
    URF: null,
    Rfc: null,
    Dair: 0.08,
    Dwat: 0.000008,
    BCF: 3.9,
    IUR: null,
  },
  'Benzyl chloride': {
    Henry: 0.016628,
    logKoclogKd: 2.26,
    'Koc/Kd': 'Koc',
    Sfo: 0.17,
    RfDo: 0.002,
    RfDd: 0.002,
    SFd: 0.17,
    URF: null,
    Rfc: 0.001,
    Dair: 0.075,
    Dwat: 0.0000078,
    BCF: 78,
    IUR: null,
  },
  'Benzyl dichloride': {
    Henry: 0.008278381,
    logKoclogKd: 2.392473936,
    'Koc/Kd': 'Koc',
    Sfo: 0.17,
    RfDo: 0.002,
    RfDd: 0.002,
    SFd: 0.17,
    URF: null,
    Rfc: 0.001,
    Dair: 0.0614747511,
    Dwat: 7.62e-106,
    BCF: null,
    IUR: null,
  },
  Beryllium: {
    Henry: 0,
    logKoclogKd: null,
    'Koc/Kd': 'Kd',
    Sfo: 0.002,
    RfDo: null,
    RfDd: null,
    SFd: null,
    URF: 0.0024,
    Rfc: null,
    Dair: 0,
    Dwat: 0,
    BCF: null,
    IUR: 0.0024,
  },
  'Biphenyl, 1,1-1': {
    Henry: 0.012471,
    logKoclogKd: 3.71,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.05,
    RfDd: 0.05,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0573,
    Dwat: 0.00000671,
    BCF: 437,
    IUR: null,
  },
  "Biphenyl, 1,1'-1, 2-1phenoxy-1": {
    Henry: 0.0028222603,
    logKoclogKd: 6.18335,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.05,
    RfDd: 0.05,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0408,
    Dwat: 0.00000509,
    BCF: null,
    IUR: null,
  },
  "Biquinoline, 2,2'-1": {
    Henry: 2.85e-9,
    logKoclogKd: 3.956111488,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.003,
    RfDd: 0.003,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0418,
    Dwat: 5.65e-106,
    BCF: 670,
    IUR: null,
  },
  'Bis (2-1chloroethoxy) methane': {
    Henry: 0.0012476765,
    logKoclogKd: 2.486675265,
    'Koc/Kd': 'Koc',
    Sfo: 1.1,
    RfDo: null,
    RfDd: null,
    SFd: 1.1,
    URF: 0.000033,
    Rfc: null,
    Dair: 0.0169,
    Dwat: 7.11e-106,
    BCF: 49,
    IUR: 0.000033,
  },
  'Bis (2-1chloro-1ethyl) ether': {
    Henry: 0.000889598,
    logKoclogKd: 1.19,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.07,
    RfDd: 0.04,
    SFd: null,
    URF: 0.000001,
    Rfc: null,
    Dair: 0.0692,
    Dwat: 0.00000753,
    BCF: 11,
    IUR: 0.000001,
  },
  'Bis (2-1chloroisopropyl) ether': {
    Henry: 0.004157,
    logKoclogKd: 2.5,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.04,
    RfDd: 0.07,
    SFd: null,
    URF: 0.00001,
    Rfc: null,
    Dair: 0.06,
    Dwat: 0.0000064,
    BCF: 54,
    IUR: 0.00001,
  },
  'Bis (2-1chloromethyl) ether': {
    Henry: 0.0049884,
    logKoclogKd: 0.08,
    'Koc/Kd': 'Koc',
    Sfo: 220,
    RfDo: null,
    RfDd: null,
    SFd: 220,
    URF: 0.062,
    Rfc: null,
    Dair: 0.0832,
    Dwat: 9.59e-106,
    BCF: 1.6,
    IUR: 0.062,
  },
  'Bis (2-1ethyl-1hexyl) phthalate': {
    Henry: 0.00045727,
    logKoclogKd: 5.833333333,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.014,
    RfDd: 0.02,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0351,
    Dwat: 0.00000366,
    BCF: 850,
    IUR: null,
  },
  Bismuth: {
    Henry: 0,
    logKoclogKd: 0.73,
    'Koc/Kd': 'Kd',
    Sfo: null,
    RfDo: 0.05,
    RfDd: 0.05,
    SFd: null,
    URF: 0.0024,
    Rfc: null,
    Dair: 0.0508,
    Dwat: 0.00000324,
    BCF: 200,
    IUR: 0.0024,
  },
  'Bisphenol A': {
    Henry: 2.18e-10,
    logKoclogKd: 2.74,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.05,
    RfDd: 0.05,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.05083616654,
    Dwat: 0.000005889766653,
    BCF: 200,
    IUR: null,
  },
  Boron: {
    Henry: 0,
    logKoclogKd: null,
    'Koc/Kd': 'Kd',
    Sfo: null,
    RfDo: 0.2,
    RfDd: 0.2,
    SFd: null,
    URF: null,
    Rfc: 0.02,
    Dair: null,
    Dwat: null,
    BCF: null,
    IUR: null,
  },
  Bromacil: {
    Henry: 9.94e-9,
    logKoclogKd: 2.105616461,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.1,
    RfDd: 0.1,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.04577615024,
    Dwat: 0.000005830677994,
    BCF: 30,
    IUR: null,
  },
  'Bromo-12-chloroethane, 1-1': {
    Henry: 0.037948818,
    logKoclogKd: 1.579801452,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.04,
    RfDd: 0.04,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0838508834,
    Dwat: 9.83e-106,
    BCF: 16,
    IUR: null,
  },
  Bromobenzene: {
    Henry: 0.083816344,
    logKoclogKd: 2.384120209,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.008,
    RfDd: 0.008,
    SFd: null,
    URF: null,
    Rfc: 0.06,
    Dair: 0.0704265657,
    Dwat: 8.54e-106,
    BCF: 96,
    IUR: null,
  },
  Bromodichloromethane: {
    Henry: 0.1317769,
    logKoclogKd: 1.74,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.062,
    RfDd: 0.02,
    SFd: null,
    URF: 0.000033,
    Rfc: null,
    Dair: 0.0702928,
    Dwat: 0.00000106,
    BCF: 9.9,
    IUR: 0.000033,
  },
  Bromoform: {
    Henry: 0.02556555,
    logKoclogKd: 1.94,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.0079,
    RfDd: 0.02,
    SFd: null,
    URF: 0.000011,
    Rfc: null,
    Dair: 0.0149,
    Dwat: 0.0000103,
    BCF: 13,
    IUR: 0.000011,
  },
  Bromomethane: {
    Henry: 0.590294,
    logKoclogKd: 1.02,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.0014,
    RfDd: 0.0014,
    SFd: null,
    URF: null,
    Rfc: 0.005,
    Dair: 0.0728,
    Dwat: 0.0000121,
    BCF: 4.6,
    IUR: null,
  },
  'Bromophenyl phenylether, 4-1': {
    Henry: 0.009662198,
    logKoclogKd: 5.161775436,
    'Koc/Kd': 'Koc',
    Sfo: 15,
    RfDo: null,
    RfDd: null,
    SFd: 15,
    URF: 0.0033,
    Rfc: null,
    Dair: 0.0477698399,
    Dwat: 0.000006278763966,
    BCF: 5800,
    IUR: 0.0033,
  },
  'Butadiene, 1,3-1': {
    Henry: 2.614753,
    logKoclogKd: 2.11,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: null,
    RfDd: null,
    SFd: null,
    URF: 0.000005,
    Rfc: 0.033,
    Dair: 0.1788,
    Dwat: 0.0000102,
    BCF: 21,
    IUR: 0.000005,
  },
  'Butadiene, 2-1methyl-1,3-1 (isoprene)': {
    Henry: 1.199245941,
    logKoclogKd: 1.818750009,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: null,
    Rfc: 0.018,
    Dair: 0.8779285031,
    Dwat: 0.000008100780763,
    BCF: 28,
    IUR: null,
  },
  'Butanal (butyraldehyde)': {
    Henry: 0.0054041,
    logKoclogKd: 0.743596,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.089,
    Dwat: 9.48e-106,
    BCF: 2.6,
    IUR: null,
  },
  'Butane, 2,3-1dimethyl-1': {
    Henry: 54.46774956,
    logKoclogKd: 3.136796628,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: null,
    Rfc: 0.018,
    Dair: 0.07396578634,
    Dwat: 0.0000069440463,
    BCF: 510,
    IUR: null,
  },
  'Butanoic acid (butyric acid)': {
    Henry: 7.86e-6,
    logKoclogKd: -12.26247489,
    'Koc/Kd': 'Koc',
    Sfo: 0.5,
    RfDo: null,
    RfDd: null,
    SFd: 0.5,
    URF: null,
    Rfc: 0.001,
    Dair: 0.078,
    Dwat: 9.25e-106,
    BCF: 3.5,
    IUR: null,
  },
  'Butanol, 1-1, 2-1Me-1': {
    Henry: 0.000569509,
    logKoclogKd: 1.115789,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.01,
    RfDd: 0.01,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.074,
    Dwat: 0.0000078,
    BCF: 1.6,
    IUR: null,
  },
  'Butanol, 2-1': {
    Henry: 0.00052897,
    logKoclogKd: 0.734844902,
    'Koc/Kd': 'Koc',
    Sfo: 2,
    RfDo: null,
    RfDd: null,
    SFd: 2,
    URF: null,
    Rfc: 0.03,
    Dair: 0.0846,
    Dwat: 0.00008595671182,
    BCF: null,
    IUR: null,
  },
  'Butanol, 2-1methyl-12-1': {
    Henry: 0.001636772,
    logKoclogKd: 1.089057561,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.01,
    RfDd: 0.01,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.0769,
    Dwat: 0.00007721648317,
    BCF: 1,
    IUR: null,
  },
  'Butanol, n-1': {
    Henry: 0.000355008,
    logKoclogKd: 0.77,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.1,
    RfDd: 0.1,
    SFd: null,
    URF: null,
    Rfc: null,
    Dair: 0.08,
    Dwat: 0.00000093,
    BCF: 2.6,
    IUR: null,
  },
  'Butene, 1-1': {
    Henry: 9.528750401,
    logKoclogKd: 2.018384952,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: null,
    Rfc: 0.018,
    Dair: 0.0988174604,
    Dwat: 0.000008422038294,
    BCF: 43,
    IUR: null,
  },
  'Butene, cis-12-1': {
    Henry: 6.564851814,
    logKoclogKd: 1.951795257,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: null,
    Rfc: 0.018,
    Dair: 0.0992169063,
    Dwat: 0.000008504247559,
    BCF: 37,
    IUR: null,
  },
  'Butene, trans-12-1': {
    Henry: 6.564851814,
    logKoclogKd: 1.951795257,
    'Koc/Kd': 'Koc',
    Sfo: null,
    RfDo: 0.06,
    RfDd: 0.06,
    SFd: null,
    URF: null,
    Rfc: 0.018,
    Dair: 0.0992169063,
    Dwat: 0.000008504247559,
    BCF: 37,
    IUR: null,
  },
}
