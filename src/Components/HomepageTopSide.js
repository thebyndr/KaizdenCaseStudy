import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image

} from 'react-native'
import axios from 'axios';

const HomepageTopSide = (props) => {

    return (
        <View style={style.container}>

            <View style={style.topSideView}>
                {/*Daha Daha Img */}

                <Image
                    source={require('../assets/Image/dahaDaha.png')}
                    style={style.dahaDahaImage}
                    resizeMode="contain"/>

                <View style={style.topRightSide}>

                    {/*Giriş Yap BTN  */}
                    <TouchableOpacity style={style.girisBtnView} onPress={()=>alert('Giriş Yap')}>
                        <Text style={style.girisYapBtnText}>Giriş Yap</Text>
                    </TouchableOpacity>
                    
                    {/*Human ICON */}
                    <TouchableOpacity style={style.humanIconView} onPress={()=>alert('Profil')}>

                    <Image
                        source={require('../assets/Image/humanIcon.png')}
                        style={style.humanIcon}
                        resizeMode="contain"/>
                    </TouchableOpacity>

                </View>

            </View>
        </View>

    )
}

const style = StyleSheet.create({
    topSideView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dahaDahaImage: {
        width: 100,
        height: 50
    },
    topRightSide: {
        flexDirection: 'row'
    },
    girisBtnView: {
        backgroundColor: 'red',
        borderRadius: 25,
        height: 50,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    girisYapBtnText: {
        marginVertical: 10,
        marginHorizontal: 17,
        color: 'white',
        fontWeight: '700',
        fontSize: 15
    },
    humanIcon:{
        width:40,
        height:50,
        margin:10
    }

})
export default HomepageTopSide