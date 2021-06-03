import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


type PropsType = {
  customText: string;
}

const TutorFilterSidebarStudent = ({ customText }: PropsType) => {
  return (
    <DrawerContentScrollView>
      <Text>{customText}</Text>
    </DrawerContentScrollView>
  )
}

export default TutorFilterSidebarStudent;

const styles = StyleSheet.create({})
