import React from "react";
import{View, Text, Image, StyleSheet} from "react-native";

import Line from "../components/Line";

export default class PeopleDetailPage extends React.Component{
    render(){
        const {people} = this.props.navigation.state.params;
        
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.avatar} 
                    source={{uri: people.picture.large}} />
                <View style={styles.detailContainer}>
                    <Line label="Email:" content={people.email} />
                    <Line label="Cidade:" content={people.location.city} />
                    <Line label="Estado:" content={people.location.state} />
                    <Line label="Tel:" content={people.phone} />
                    <Line label="Cel:" content={people.cell} />
                    <Line label="Nacionalidade:" content={people.nat} />
                </View>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    },
    detailContainer: {
        backgroundColor: "#e2f9ff",
        marginTop: 20,
        elevation: 1,
    },
});