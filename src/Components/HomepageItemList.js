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

const HomepageItemList = (props) => {



    const TOKEN_URL_ITEM_LIST = 'https://api.extrazone.com/promotions/list?Channel=PWA'
    const Headers = {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR"
    }
    const [data,
        setData] = useState()
    const [index,
        setIndex] = useState(0)
     
    const isCarousel = null

    useEffect(() => {
        {/* get isteği */
        }
        axios
            .get(TOKEN_URL_ITEM_LIST, {headers: Headers})
            .then(response => {
                setData(response.data)

            })
            .catch(err => console.log(err.message))

    }, [])
  
const navigateDetailPage=(itemId)=>{

    
    const Headers = {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR"
    }
   

    axios
        .get(`https://api.extrazone.com/promotions?Id=${itemId}`, {headers: Headers})
        .then(response => {
            props.navigation.navigate('DetailPage',{chosenItemData:response.data})

        })
        .catch(err => console.log(err.message))

        
}

    {/*Carousel Card Item */
    }
    const CarouselCardItem = ({item, index}) => {
       
            {/*Gelen data HTML taglarıyla geldiği için tagları aldırmadan içindeki texti alma algoritması*/}
   
    var titleText = item
    .Title
    .replace(/<[^>]+>/g, '');
        return <TouchableOpacity
        onPress={()=>navigateDetailPage(item.Id)}
            key={index}
            style={{
            borderRadius: 10,
            backgroundColor: 'white',
            borderWidth: 1,
            borderRightWidth: 10,
            borderBottomRight: 35,
            borderBottomRightRadius: 35,
            borderBottomWidth: 25,
            borderColor: item.PromotionCardColor,
            alignItems: 'center',
            justifyContent: 'center',
            width: '90%',
          

            alignSelf: 'center'
        }}>
            {/*Brand */}
            <View style={style.brand}>
                <Image
                    source={{
                    uri: item.BrandIconUrl
                }}
                    style={{
                    width: '100%',
                    height:'100%'
                }}
                    resizeMode={'contain'}/>

            </View>

            {/*Image Item */}

            <View style={style.imageItemView}>

                <Image
                    source={{
                    uri: item.ImageUrl
                }}
                    style={{
                    width: '97%',
                    height: 250
                }}
                    resizeMode={'contain'}/> 
                    
                    {/*Remaining Time*/}
                <View style={style.remainingTimeView}>
                    <Text style={style.remainingTimeText}>{item.RemainingText}</Text>
                </View>

            </View>

            {/*Title */}
            <Text style={style.itemTitleText}>{titleText}</Text>

            {/*Daha Daha */}
            <Text
                style={{
                color: item.PromotionCardColor,
                fontWeight: '700',
                fontSize: 18,
                margin: 10
            }}>
                Daha Daha
            </Text>


        </TouchableOpacity>
    }
    const width = Dimensions
        .get('window')
        .width;
    return (
        <View style={style.container}>
<View style={style.card}>


    {/*Carousel */}
            <Carousel
                width={width}
                height={'100%'}
                data={data}
                scrollAnimationDuration={150}
                onSnapToItem={(index) => {
                setIndex(index)
            }}
                renderItem={CarouselCardItem}/> 
                
                <View style={style.pagination}>
 {/*Paginanation */}
 <Pagination
                dotsLength={3}
                activeDotIndex={index}
                carouselRef={isCarousel}
                tappableDots={false}
                dotStyle={{
                alignSelf: 'center',
                borderRadius: 20,
                width: 15,
                height: 10,
                backgroundColor: 'red',
                justifyContent: 'center'
            }}
                inactiveDotOpacity={1}
                inactiveDotScale={0.8}
                inactiveDotStyle={{
                backgroundColor: '#c3bfbf',
                
                width: 10,
                height: 10
            }}/>
                </View>
     
</View>
            
              

        </View>

    )
}

const style = StyleSheet.create({
    container: {
   
    },
    card:{
        width:'100%',
        height:'79%'
    },
    flatListView: {
        margin: 15,
    },
    flatListItemView: {
        backgroundColor: 'white',
       
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    flatListItemName: {
        color: 'black',
        fontWeight: '600',
        margin: 10
    },
    carouselCardTouchable: {
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    itemTitleText: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        width: '60%',
        margin: 10
    },
    remainingTimeView: {
        position: 'absolute',
        backgroundColor: '#343434',
        right: 0,
        bottom: 30,
        borderRadius: 25
    },
    remainingTimeText: {
        margin: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },

    imageItemView: {
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center'

    },
    brand: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: 50,
        height: 50
    },
    pagination:{
        position:'absolute',
        bottom:-10,
        alignSelf:'center'
    }

})
export default HomepageItemList