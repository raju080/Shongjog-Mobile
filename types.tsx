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

export type DrawerParamList = {
	Home: undefined;
	AboutUs: undefined;
	Settings: undefined;
	LoginLogout: undefined;
};

export type BottomTabParamList = {
	Home: undefined;
	'Find Tutor': undefined;
};

export type HomeTabParamList = {
	HomeScreen: undefined;
};

export type FindTutorTabParamList = {
	FindTutorScreen: undefined;
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

/**
 * Custom Data Types
 */

export type Tutor = {
	name: string;
	imageUri: string;
	university: string;
	department: string;
	location: string;
	tuitionFees: {
		college: number;
		school: number;
	};
};
