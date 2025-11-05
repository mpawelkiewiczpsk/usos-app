export type RootStackParamList = {
  Login: undefined;
  AppTabs: undefined;
  ProfileDetails: { userId: string };
};

export type AppTabsParamList = {
  Home: undefined;
  Settings: { section?: string } | undefined; // optional param
};
