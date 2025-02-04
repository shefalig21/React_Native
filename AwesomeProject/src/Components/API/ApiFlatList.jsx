import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiFlatList = () => {

    const [data, setData] = useState([]);
    const getApiData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);

    }

    useEffect(() => {
        getApiData();
    }, []);
    return (
        <View>
            <Text style={{ fontSize: 27 }}>Flatlist with API data</Text>
            {
                data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <View style={{ borderBottomColor: 'orange', borderBottomWidth: 1, padding: 5 }}>
                            <Text style={{ fontSize: 14 }}>{item.id}</Text>
                            <Text style={{ fontSize: 14 }}>{item.title}</Text>
                            <Text style={{ fontSize: 14 }}>{item.body}</Text>

                        </View>}

                    /> : null
            }
        </View>
    )
}

export default ApiFlatList