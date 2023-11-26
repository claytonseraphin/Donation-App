import React from 'react';
import style from './style';
import {SafeAreaView} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Emmanuel Michel'} type={1} />
      <Tab title={'Highlits'} />
      <Tab title={'Highlits'} isInactive={true} />
    </SafeAreaView>
  );
};

export default Home;
