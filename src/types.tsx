/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

/**
 * React Navigation Types
 */

export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
};

export type MainStackParamList = {
	Main: undefined;
	Student: undefined;
	Tutor: undefined;
};

// student

export type DrawerParamListStudent = {
	Home: undefined;
	AboutUs: undefined;
	Settings: undefined;
	LoginLogout: undefined;
};

export type BottomTabParamListStudent = {
	HomeStudent: undefined;
	FindTutorStudent: undefined;
	ProfileStudent: undefined;
};

export type HomeTabParamListStudent = {
	HomeScreenStudent: undefined;
	TutorDetailsScreenStudent: undefined;
};

export type FindTutorDrawerParamListStudent = {
	FindTutorScreenStudent: undefined;
};

export type FindTutorScreenParamListStudent = {
	FindTutorBasicScreenStudent: undefined;
	FindTutorScreenStudent: undefined;
	TutorDetailsScreenStudent: undefined;
};

export type TutorDetailsParamListStudent = {
	TutorDetailsScreenStudent: undefined;
};

export type ProfileTabParamListStudent = {
	ProfileScreenStudent: undefined;
};

// tutor


export type DrawerParamListTutor = {
	Login: undefined;
	Register: undefined;
	Home: undefined;
	AboutUs: undefined;
	Settings: undefined;
};

export type RegisterParamListTutor = {
	FormAccountInfo: undefined;
	FormPersonalInfo: undefined;
	FormPreferenceInfo: undefined;
};

export type BottomTabParamListTutor = {
	HomeTutor: undefined;
	LeaderBoardTutor: undefined;
	ProfileTutor: undefined;
};

export type HomeTabParamListTutor = {
	HomeScreenTutor: undefined;
};

export type LeaderBoardTabParamListTutor = {
	LeaderBoardScreenTutor: undefined;
};

export type ProfileTabParamListTutor = {
	ProfileScreenTutor: undefined;
};

// common

export type AboutUsParamList = {
	AboutUsScreen: undefined;
};

export type NavigationProp = {
	navigate: any;
	goBack: any;
	setParams: any;
	setOptions: any;
	isFocused: any;
	push: any;
	pop: any;
	jumpTo: any;
	openDrawer: any;
	closeDrawer: any;
	toggleDrawer: any;
};

export type RouteProp = {
	key: any;
	name: any;
	params: any;
};

export type ReactNavigationProps = {
	route: RouteProp;
	navigation: NavigationProp;
};

/**
 * React Components Types
 */

// Header

export type HeaderProp = {
	title: string;
	navigation: NavigationProp;
};

