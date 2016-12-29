
import Dimensions from 'Dimensions';
import createStyle from './../../themes/baseStyle';


export default createStyle({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        marginTop: 20,
    },

    carousel: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'white',
    },
    itemText: {
        height: 200,
        lineHeight: 200,
    },
    image: {
        width: Dimensions.get('window').width,
    },
    imageContainer: {
        height: 180,
    },
    leftItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginRight: 2,
        marginBottom: 4,
        height: 200,
        padding: 5,
        width: (Dimensions.get('window').width - 4) / 2,
    },
    rightItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: 2,
        marginBottom: 4,
        height: 200,
        padding: 5,
        width: (Dimensions.get('window').width - 4) / 2,
    }
});