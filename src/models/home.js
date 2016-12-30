import * as oService from '../services/homeService';

export default {
  namespace: 'home',
  state: {
    home: {},
  },
 // subscriptions: {
    // setup({ dispatch, history }) {
    //   history.listen(({ pathname }) => {
    //     const match = pathToRegexp('/user/:userId').exec(pathname);
    //     if (match) {
    //       const userId = match[1];
    //       dispatch({ type: 'fetchUser', payload: userId });
    //     }
    //   });
    // },
 // },
 effects: {
    * fetchUser({ payload: id }, { call, put }) {
      console.log(`fetch user effect got info from view ${id}`);
      const data = yield call(oService.fetchRandom, id + 1);
      yield put({ type: 'fetchPassword', payload: data.number });
    },
    * fetchPassword({ payload: id }, { call, put }) {
      console.log(`fetch password effect got info from last effect ${id}`);
      const data = yield call(oService.fetchRandom, id + 1);
      yield put({ type: 'saveUser', payload: data.number });
    },
  },
  reducers: {
    saveUser(state, { payload: number }) {
      console.log(`save user reducer got number ${number}`);
      return { ...state, number };
    },
  },
}