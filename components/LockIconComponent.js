import React from 'react';
import {Icon} from 'react-native-elements';

const IconLock = ({style}) => {
  return (
    <Icon
      name="lock"
      type="font-awesome"
      color="#c6cbd4"
      size={22}
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{borderBottomWidth: 0.9, borderBottomColor: '#e1e3e7'}, style]}
    />
  );
};

export default IconLock;
