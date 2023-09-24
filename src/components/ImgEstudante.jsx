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
        marginBottom: 10,
        //Alinhe a imagem a direita:
        alignSelf: 'flex-end',
        marginBottom: 80,
        width: 250,
        height: 250,
        resizeMode: 'contain',
    }
}


export default ImgEstudante;
