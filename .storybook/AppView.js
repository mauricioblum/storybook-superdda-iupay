import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default function AppView({ children, bgColor }) {
  const appStyles = bgColor ? {...style.app, backgroundColor: bgColor} : {...style.app};
  return (
    <View style={style.container}>
      <View style={appStyles}>
       {children}
      </View>
    </View>
  );
}

AppView.defaultProps = {
  children: null,
  bgColor: undefined,
};

AppView.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
};

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  app: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fed487',
    width: 420,
    height: '100vh',
    overflow: 'hidden',
  }
}
