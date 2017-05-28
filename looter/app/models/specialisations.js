export const BloodDK = {
  'name': 'Blood DK',
  'label': 'bloodDK',
};
export const FrostDK = {
  'name': 'Frost DK',
  'label': 'frostDK',
};
export const UnholyDK = {
  'name': 'Unholy DK',
  'label': 'unholyDK',
  'types': ['dps', 'melee-dps'],
};
export const Brewmaster = {
  'name': 'Brewmaster Monk',
  'label': 'brewmaster',
  'types': ['tank'],
};
export const Mistweaver = {
  'name': 'Mistweaver Monk',
  'label': 'mistweaver',
  'types': ['healer'],
};
export const Windwalker = {
  'name': 'Windwalker Monk',
  'label': 'windwalker',
  'types': ['dps', 'melee-dps'],
};

export const LeatherUsers = [Brewmaster, Mistweaver, Windwalker];
export const MailUsers = [];
export const PlateUsers = [BloodDK, FrostDK, UnholyDK];

export default [
  BloodDK,
  FrostDK,
  UnholyDK,
  Brewmaster,
  Mistweaver,
  Windwalker
];
