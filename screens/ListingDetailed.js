import React from 'react';
import {View,Text,Image} from 'react-native';

const ListingDetailed = (props) => {
    const {title,image,price} = props.navigation.getParam('listing');
    return (
        <View style={{flex: 1,margin: 10}}>
            <Image source={{uri: image}} style={{width: '90%',height: 400}}/>
            <Text>{title}</Text>
        </View>
    )
}

export default ListingDetailed;