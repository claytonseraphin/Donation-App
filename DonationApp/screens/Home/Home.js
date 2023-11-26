import React from 'react';
import style from './style';
import {SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Emmanuel Michel'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('you just pressed me!');
        }}
      />
      <Button title={'Donate'} isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
