import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/actions/countAction';

export default function Home() {
  const dispatch = useDispatch();

  const count = useSelector(store => store.count.count);

  const handleIncreament = () => {
    dispatch(increment());
  };

  const handleDecreament = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Counter App</Text>
      <Text style={styles.counter_text}>{count}</Text>

      <TouchableOpacity 
      onPress={handleIncreament} 
      style={styles.btn}>
        <Text style={styles.btn_text}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDecreament}
        style={{...styles.btn, backgroundColor: '#6e3b3b'}}>
        <Text style={styles.btn_text}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
    color: 'black',
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '50%',
  },
  btn_text: {
    fontSize: 23,
    color: '#ffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
