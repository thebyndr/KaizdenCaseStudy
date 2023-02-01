import React, {useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';
import HomepageBottomSide from '../Components/HomepageBottomSide';
import HomepageTopList from '../Components/HomepageTopList';
import HomepageItemList from '../Components/HomepageItemList';
import HomepageTopSide from '../Components/HomepageTopSide';
const Homepage = (props) => {
    return (
        <SafeAreaView
            style={{
            backgroundColor: '#eeeeee',
            flex: 1
        }}>

            <HomepageTopSide/>
            <HomepageTopList/>
            <HomepageItemList navigation={props.navigation}/>
            <HomepageBottomSide/>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
});

export default Homepage