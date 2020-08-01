import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default function AppView({ children }) {
  return (
    <View style={style.container}>
      <View style={style.app}>
       {children}
      </View>
    </View>
  );
}

AppView.defaultProps = {
  children: null,
};

AppView.propTypes = {
  children: PropTypes.node,
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
