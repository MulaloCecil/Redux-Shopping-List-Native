import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShoppingList = ({ items, addItem, removeItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = () => {
    const newItem = item;
    addItem(newItem);
    setItem('');
  };

  return (
    <View style={styles.container}>
    <View>
     <Text style={styles.title}>Shopping List <Icon name="check" color='red' size={25} /> </Text>
     
    </View>
     
      
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeItem(item)}
            >
              <Icon name="trash-o" size={18} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Icon name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center',
    color:'#12486B',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color:'#12486B',
    fontWeight:'medium'
  },
  removeButton: {
    padding: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    padding: 8,
    marginRight: 10,
  },
  addButton: {
    padding: 8,
    backgroundColor: '#12486B',
    borderRadius: 4,
  },
});

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
  removeItem: (item) => dispatch({ type: 'REMOVE_ITEM', payload: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);