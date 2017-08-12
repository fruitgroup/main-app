import React, {PropTypes,Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class ProfileListCell extends Component {
    static propTypes = {
        image: PropTypes.any,
        title:  PropTypes.string
    }

    static defaultProps = {
        image: null,
        title: "Cell Text"
    }
    
    render() {
        return (
            <TouchableOpacity activeOpacity = {0.75} style = {styles.cellContainer} onPress = {this.props.onPress}>
                <View style={styles.leftContainer}>
                <Image style={styles.iconContainer} source={this.props.image } />
                <Text>{this.props.title}</Text>
                </View>

                <Image style={styles.iconContainer} source={require('../../../assets/icons/ic_my_right.png')} /> 
            </TouchableOpacity >

        )
    }

}

var styles =  StyleSheet.create({
    cellContainer: {
        height: 40,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },

    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5, 
    },

    iconContainer: {
        width: 30, 
        height: 30,
        marginLeft: 5,
        marginRight: 5
    }

})