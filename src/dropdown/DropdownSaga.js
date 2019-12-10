import {
    // eslint-disable-next-line no-unused-vars
    call, put, takeEvery, takeLatest, delay, all,
} from 'redux-saga/effects';
import { FETCH_PRODUCT, FETCH_PRODUCT_SUCCESSFUL, FETCH_PRODUCT_FAILED } from './DropdownActionTypes';
// eslint-disable-next-line no-unused-vars
import Database from '../api/Database';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// eslint-disable-next-line no-unused-vars
function* fetchProduct(action) {
    console.log('fetchProduct');
    try {
        // const database = new Database().init();
        // const product = yield call(database.fetch);
        const product = 'AnotherProduct';
        console.log('product: ', product);
        yield delay(1000);
        yield put({ type: FETCH_PRODUCT_SUCCESSFUL, product });
    } catch (error) {
        console.log('something went wrong! error: ', error);
        yield put({ type: FETCH_PRODUCT_FAILED, message: error.message });
    }
}

function* actionWatcher() {
    yield takeEvery(FETCH_PRODUCT, fetchProduct);
}

export default function* dropdownSaga() {
    yield all([
        actionWatcher(),
    ]);
}
