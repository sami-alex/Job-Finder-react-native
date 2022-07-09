import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity ,Button,refreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function Jobs({navigation}) {
  const [data, setData]=useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
      const resp = await fetch('http://127.0.0.1/Api/DisplayJobs.php');
      const data = await resp.json();
      setData(data);
      setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading..</Text>}
      {data && (
        <FlatList
          data={data}
         
          renderItem={({ item }) => {
            return (
              <View style={styles.cell}>
                <Text style={{ fontSize: 22, fontWeight: '700', color: '#0099cc' }}>Job Tittle:{item.Tittle}</Text>
                <Text style={{ fontSize: 18, opacity: .7 }}>Posted Date:{item.Posted_Date}</Text>
                
                <TouchableOpacity onPress={() => { navigation.navigate('MoreInfo', { item: item }) }}>
                  <View style={styles.btn}>
                    <Text style={styles.text}>More info</Text>
                  </View>
                </TouchableOpacity>  
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            padding: 20,
            paddingTop:42
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
    fontSize: 20,
  },
  cell: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
    
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 12,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height:10
    },
    shadowOpacity: .3,
    shadowRadius: 20
  },
  btn:{
    width: 500,
    height: 100,
    padding: 5,
    color: 'orange'
  }
});



