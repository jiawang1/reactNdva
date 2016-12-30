import createStyle from './../../themes/baseStyle';
import Dimensions from 'Dimensions';
export default createStyle({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      marginTop: 60
  },
  image:{
    width: Dimensions.get('window').width-40,
    height: Dimensions.get('window').width-40
  },
  image1:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  carousel: {

  },
  imageContainer:{
    height: Dimensions.get('window').width,
    padding:20,
  },
  tag:{
    // marginTop:20
  }
});