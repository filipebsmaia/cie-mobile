/* eslint-disable no-console */
import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {signInSucess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    console.log('?');
    const {email} = payload;

    const response = yield call(api.get, `students?email=${email}`);

    const student = response.data;
    yield put(signInSucess(student));
  } catch (err) {
    Alert.alert('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
