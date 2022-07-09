import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity ,Button, StatusBar,Animated,RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function DisplayJob({navigation}) {
  const [data, setData]=useState([]);
  const [loading, setLoading] = useState(true);
 const [refreshing,setrefreshing]=useState(false)

  const fetchData = async () => {
      const resp = await fetch('http://127.0.0.1/Api/DisplayJobs.php');
      const data = await resp.json();
      setrefreshing(true)
      setData(data);
      setLoading(false);
      setrefreshing(false)
     
  };

 
  useEffect(() => {
    fetchData();
  },[data]);


  return (
    <View style={styles.container}>
      {loading && <Text>Loading..</Text>}
      {data && (
        <Animated.FlatList
          data={data}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={fetchData}
            />
          }
          renderItem={({ item }) => {
            return (
              <View style={styles.cell}>
                <Text style={{ fontSize: 22, fontWeight: '700', color: '#0099cc' }}>Job Tittle:{item.Tittle}</Text>
                <Text style={{ fontSize: 18, opacity:.7 }}>Posted Date:{item.Posted_Date}</Text>
               
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => { navigation.navigate('UpdateJob', { item: item }) }}>
                    <Text style={styles.text}>Update</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => { navigation.navigate('MoreInfo', { item: item }) }}>
                    <Text style={styles.text}>More info</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {
                    // navigation.navigate('Login')
                    fetch('http://127.0.0.1/Api/delete.php',
                      {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                          id: item.id,
                        })
                      }).then((response) => response.json())
                      .then((responseJson) => {
                        
                        
                      }).catch((error) => {
                        console.error(error);
                      })
                      
                  }
                  }>
                    <Text style={styles.text}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );

          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            padding: 20,
            paddingTop: StatusBar.currentHeight || 42,
            
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
   
  },
  text: {
    color: 'black',
    margin:20
   
  },
  cell: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 12,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height:10
    },
    shadowOpacity: .3,
    shadowRadius: 20
  }
 
});


