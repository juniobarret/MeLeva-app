import React from 'react';
import { Image } from 'react-native';

const MeuComponente = () => {
  return (
    <Image
      source={require('../../assets/MeLeva.png')}
      style={styles.logo}
    />
  );
}

const styles = {
    logo: {
        marginBottom: 10,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
}


export default MeuComponente;
