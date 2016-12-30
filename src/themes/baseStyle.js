import { Platform,StyleSheet } from 'react-native';
import * as _ from 'lodash';

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
      if(!_.isObject(oStyle)){
        return StyleSheet.create(Object.assign({}, baseStyle));
      }
      return StyleSheet.create(Object.assign({}, baseStyle, oStyle));
  }