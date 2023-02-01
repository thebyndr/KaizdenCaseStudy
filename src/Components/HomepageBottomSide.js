import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    Dimensions

} from 'react-native'
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import {Pagination} from 'react-native-snap-carousel'
import { act } from 'react-test-renderer';

const HomepageBottomSide = (props) => {
const[active,setActive]=useState(0)
    return (
        <View style={style.container}>

            {/*Keşfet */}
            <TouchableOpacity style={style.kesfetCuzdanView} onPress={()=>setActive(0)}>
                {/*IMAGE */}
                <Image
                    style={active==0? style.kesfetCuzdanImgActive:style.kesfetCuzdanImgPassive}
                    resizeMode="contain"
                    source={require('../assets/Image/Kesfet.png')}/>
                    
                     {/*TEXT */}
                     <Text style={active==0? style.textActive:style.textPassive}>
                    Keşfet
                </Text>

            </TouchableOpacity>

            {/*Ortadaki Logo */}
            <TouchableOpacity style={style.midLogo}>
                {/*IMAGE */}
                <Image
                    style={style.midLogoImg}
                    resizeMode="contain"
                    source={require('../assets/Image/portal.png')}/>
            </TouchableOpacity>

            {/*Daha Cüzdan*/}
            <TouchableOpacity style={style.kesfetCuzdanView} onPress={()=>setActive(1)}>

                {/*IMAGE */}
                <Image
                    style={active==1? style.kesfetCuzdanImgActive:style.kesfetCuzdanImgPassive}
                    resizeMode="contain"
                    source={require('../assets/Image/star.png')}/>
                    
                     {/*TEXT */}
                <Text style={active==1? style.textActive:style.textPassive}>
                    Daha Cüzdan
                </Text>
            </TouchableOpacity>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'white',
        height: 80,
        width: '100%'
    },
    kesfetCuzdanView: {
        width: 105,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    midLogo: {
        width: 100,
        height: 120,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    kesfetCuzdanImgActive: {
        width: 40,
        height: 40,
        
    },
    kesfetCuzdanImgPassive: {
        width: 40,
        height: 40,
        opacity:0.5
    },
    midLogoImg:{
width:90
    },
    textActive: {
        textTransform: 'uppercase',
        fontSize: 12,
        margin: 3,
        fontWeight: '700',
        color:'black'
    },
    textPassive: {
        textTransform: 'uppercase',
        fontSize: 12,
        margin: 3,
        fontWeight: '700',
        color:'gray'
    }

})
export default HomepageBottomSide