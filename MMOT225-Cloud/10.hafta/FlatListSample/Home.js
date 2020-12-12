import React from 'react';

import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryId: 0
        }

    }


    handlePress = id => {
        this.setState({ selectedCategoryId: id })
    }

    getProductListView() {

        const productList = [
            { name: "ayran", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "su", cateId: 2 },
            { name: "tost", cateId: 1 },
            { name: "köfte", cateId: 1 },
        ]

        if (this.state.selectedCategoryId < 1) {
            return <Text>Kategori seçilmediği için ürün listesi alınmadı</Text>
        }


        let renderProductList = [];

        productList.map((v, k) => {

            if (v.cateId === this.state.selectedCategoryId) {

                renderProductList.push(<Text style={{minHeight:100}}>{v.name}</Text>)

            }


        })


        return renderProductList

    }

    render() {

        return (
            <View>
                <Text>Burası Ana ekran.</Text>

                <Text>selected category : {this.state.selectedCategoryId}</Text>

                <FlatList
                    style={{ backgroundColor: 'red' }}
                    data={[{ name: "yiyecek", id: 1 }, { name: "içecek", id: 2 }]}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity onPress={() => this.handlePress(item.id)} style={{ minHeight: 30, backgroundColor: 'blue' }}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )

                    }

                    }
                />

            <ScrollView style={{minHeight:200,backgroundColor:'skyblue'}}>
                {this.getProductListView()}
                </ScrollView>

            </View>
        )

    }


}