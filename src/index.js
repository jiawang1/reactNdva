import dva, { connect } from 'dva/mobile';
import Router from './router.js';
import React from 'react'; 
import * as models from './models';

const app = dva();

Object.keys(models).forEach(key=>app.model(models[key]));

app.router(()=><Router />);

export default app;