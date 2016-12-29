import { Platform,StyleSheet } from 'react-native';

const baseStyle = {
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        marginTop: 20
    },
    carousel: {
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default function createStyle(oStyle){
      if(typeof oStyle !== "object"){
        return StyleSheet.create(Object.assign({}, baseStyle));
      }
      return StyleSheet.create(Object.assign({}, baseStyle, oStyle));
  }