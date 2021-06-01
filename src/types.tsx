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
};

export type FindTutorTabParamListStudent = {
	FindTutorScreenStudent: undefined;
	TutorDetailsScreenStudent: undefined;
};

export type ProfileTabParamListStudent = {
	ProfileScreenStudent: undefined;
};

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

