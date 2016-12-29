import { Router, Scene } from 'react-native-router-flux';
import React, {Component} from 'react';
import HomeView from './routes/home/HomeView';
import ProductDetailView from './routes/productDetail/ProductDetailView';

export default class AppRouter extends Component{
  render() {
    return (
      <Router>
        <Scene key="root">
            <Scene key="homeContainer" tabs={true} initial={true} tabBarStyle={{backgroundColor:'whitesmoke'}}>
                <Scene key="home" hideNavBar={true} component={HomeView} initial={true} title="首页"/>
            </Scene>
            <Scene key="productDetail" component={ProductDetailView}  title="商品详情"/>
        </Scene>
      </Router>
   );
  }

}
