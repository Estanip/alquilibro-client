/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Register: undefined;
  Login:  undefined;
  Modal: undefined;
  NotFound: undefined;
  Main: NavigatorScreenParams<RootTabParamList> | undefined;
  Upload: NavigatorScreenParams<RootTabParamList> | undefined;
  SearchResults: NavigatorScreenParams<RootTabParamList> | undefined;
  AdvancedFilter: NavigatorScreenParams<RootTabParamList> | undefined;
  BookDetail: NavigatorScreenParams<RootTabParamList> | undefined;
  Recommended: NavigatorScreenParams<RootTabParamList> | undefined;
  UploadedBook: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Home: undefined;
  Upload: undefined;  
  Recommended: undefined;
  Profile: undefined;
};


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
