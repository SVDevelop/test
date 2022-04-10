import {takeEvery, put, call } from 'redux-saga/effects'
import {SET_LAUNCH} from '../reducers'

async function getLaunch () {
    const response = await fetch('https://api.spacexdata.com/v5/launches')
    const data = await response.json()
    return data
}

function* workerSaga() {
    const data = yield call(getLaunch)
    yield put({type: SET_LAUNCH, payload: data})
}

function* watch() {
    yield takeEvery('LOAD_DATA', workerSaga)
}


export default function* rootSaga() {

    yield watch()
} 