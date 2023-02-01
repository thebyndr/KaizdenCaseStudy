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

const HomepageTopList = (props) => {
    const TOKEN_URL = 'https://api.extrazone.com/tags/list'
    const Headers = {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR"
    }
    const [data,
        setData] = useState()

        const[activeItem,setActiveItem]=useState(0)
    useEffect(() => {
        {/* get isteği */ }
        axios
            .get(TOKEN_URL, {headers: Headers})
            .then(response => {
                setData(response.data)
               
            })
            .catch(err => console.log(err.message))

    }, [])

    {/*Flatlist Render item */
    }
    const renderItems = ({item}) => {
        return <View style={style.flatListView}>
            <TouchableOpacity style={item.Id==activeItem ?style.flatListItemViewActive:style.flatListItemViewPassive} onPress={()=>setActiveItem(item.Id)}>

                <Image
                    source={{
                    uri: item.IconUrl
                }}
                    style={{
                    width: 30,
                    height: 30,
                    margin: 5
                }}
                    resizeMode="contain"/>

                <Text style={style.flatListItemName}>{item.Name}</Text>
            </TouchableOpacity>
        </View>

    }

    return (
        <View style={style.container}>

            <FlatList horizontal={true} data={data} renderItem={renderItems}/>

        </View>

    )
}

const style = StyleSheet.create({
    container: {},
    flatListView: {
        margin: 15
    },
    flatListItemViewActive: {
        backgroundColor: 'white',
        margin: 9,
        borderRadius: 10,
        borderWidth:3,
        borderColor:'red',
        flexDirection: 'row',
        alignItems: 'center'

    },
    flatListItemViewPassive: {
        backgroundColor: 'white',
        margin: 10,
        borderWidth:2,
        borderColor:'#bbb0b0',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    flatListItemName: {
        color: 'black',
        fontWeight: '600',
        margin: 10
    }

})
export default HomepageTopList