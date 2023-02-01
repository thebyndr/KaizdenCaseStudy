import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    View,
    Image
} from 'react-native';

import { CommonActions, useNavigation } from '@react-navigation/native' // <-- import useNavigation hook

const DetailPage = (props) => {
    const navigation = useNavigation() // <-- add this line

    const {chosenItemData} = props.route.params;

    {/*Gelen data HTML taglarıyla geldiği için tagları aldırmadan içindeki texti alma algoritması*/}
    var descriptionText = chosenItemData
        .Description
        .replace(/<[^>]+>/g, '');
        var titleText = chosenItemData
        .Title
        .replace(/<[^>]+>/g, '');
    return (
        <SafeAreaView
            style={{
            backgroundColor: '#eeeeee',
            flex: 1
        }}>
            <ScrollView style={{
                flex: 1
            }}>

                {/*Image */}
                <View style={styles.imageView}>
                    <Image
                        source={{
                        uri: chosenItemData.ImageUrl
                    }}
                        resizeMode="contain"
                        style={styles.image}/>


                        {/*Geri Butonu*/}
            <TouchableOpacity style={styles.backBtnTouchable} onPress={()=>navigation.goBack()}>
            <Image
                        source={require('../assets/Image/Back_Button.png')}
                        resizeMode="contain"
                        style={styles.backBtn}/>
            </TouchableOpacity>
                        
                         {/*Remaining Time*/}
                    <View style={styles.remainingTimeView}>
                        <Text style={styles.remainingTimeText}>{chosenItemData.RemainingText}</Text>
                    </View>

                </View>

                {/*Başlık */}
                <Text style={styles.title}>{titleText}</Text>

                {/*Açıklama */}
                <Text style={styles.description}>{descriptionText}</Text>

            </ScrollView>

            {/*Hemen Katıl Btn */}
            <TouchableOpacity style={styles.hemenKatilBtn} onPress={()=>alert('Hemen Katıl')}>
                <Text style={styles.hemenKatilText}>Hemen Katıl</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 20
    },
    imageView: {
        width: '100%',
    maxHeight:325,

  },
    image: {
        width: '100%',
        height: '100%',
      
        borderBottomStartRadius:70,
        borderBottomEndRadius:50
    },
    description: {
        textAlign: 'left',
        margin: 15,
        fontSize: 14,
        color: 'gray',
        fontWeight: '500'
    },
    hemenKatilBtn: {
        height: 60,
        backgroundColor: 'red',
        marginBottom: 20,
        borderRadius: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    hemenKatilText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    },
    remainingTimeView: {
        position: 'absolute',
        backgroundColor: '#343434',
        right: 20,
        bottom: 20,
        borderRadius: 25
    },
    remainingTimeText: {
        margin: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },
    backBtnTouchable:{
        position:'absolute',
        top:50,
        left:10
    },
    backBtn:{
        width:50,
        height:50
    }
});

export default DetailPage;
