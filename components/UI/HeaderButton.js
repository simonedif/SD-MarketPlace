import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors'

//REMIND : HeaderButton NO HeaderButtons defines how all icons rendered in children will look. 

const CustomHeaderButton = props => {
    return (
      <HeaderButton 
        {...props}
        IconComponent={Ionicons}
        iconSize={28}
        color={Platform.OS === 'android' ? 'White' : Colors.primary}
     />
  );
};

export default CustomHeaderButton;