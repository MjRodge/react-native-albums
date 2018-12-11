//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//component styling
const styles = {
  viewStyle: {
    backgroundColor: '#00ffcc',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { height: 20, width: 0 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

//construct component
const Header = props => {
  //destructuring styles object for use
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerTitle}</Text>
    </View>
  );
};

//export component for app
export default Header;
