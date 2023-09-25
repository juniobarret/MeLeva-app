import React from 'react';
import { Image } from 'react-native';

const ImgEstudante = () => {
  return (
    <Image
      source={require('../../assets/estudante.png')}
      style={styles.logo}
    />
  );
}

const styles = {
    logo: {
        marginTop: 20,
        alignSelf: 'flex-end',
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
}


export default ImgEstudante;
