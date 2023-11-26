import React from 'react';
import style from './style';
import {SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Emmanuel Michel'} type={1} />
    </SafeAreaView>
  );
};

export default Home;
