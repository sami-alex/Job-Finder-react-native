import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-ionicons';
export default function MoreInfo({navigation,route}){
    const {item} = route.params;
    return(
        

               <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',marginTop:'10%'}}>
                <Text style={{ fontSize: 22, fontWeight: '700', color: '#0099cc' }}>Job Tittle:{item.Tittle}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}>Description:{item.Descriptions}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}>Types:{item.Types}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}>Experiance:{item.Experiance}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}>Posted Date:{item.Posted_Date}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}> Location:{item.Locations}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}>Salary:{item.Salary}</Text>
                </View>   
    )
}
