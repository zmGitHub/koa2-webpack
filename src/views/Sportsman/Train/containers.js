import { post, query } from 'store/fetch';

const initialState = {
  fetching: false,
  trains: '',
};
export const RECEIVE_TRAIN_INIT = 'RECEIVE_TRAIN_INIT';
export const RECEIVE_TRAIN = 'RECEIVE_TRAIN';
export const RECEIVE_TRAIN_ERROR = 'RECEIVE_TRAIN_ERROR';

export function receiveInit() {
  return {
    type: RECEIVE_TRAIN_INIT,
    payload: {
      fetching: true,
    },
  };
}
export function receiveError() {
  return {
    type: RECEIVE_TRAIN_ERROR,
    payload: {
      fetching: false,
    },
  };
}
export function receiveTrain(trains) {
  return {
    type: RECEIVE_TRAIN,
    payload: {
      fetching: false,
      ...trains,
    },
  };
}
// 获取列表
export function getTrain(params) {
  return (dispatch) => {
    dispatch(receiveInit());
    post(`/api/sportsman/train/${params.id}`, params).then((data) => {
      const res = data.success ? data.result : initialState;
      dispatch(receiveTrain(res));
    }, () => {
      dispatch(receiveError());
    });
  };
}
export function postTrain(params) {
  return (dispatch) => {
    dispatch(receiveInit());
    query(`/api/sportsman/train/${params.id}`).then((data) => {
      const res = data.success ? data.result : initialState;
      dispatch(receiveTrain(res));
    }, () => {
      dispatch(receiveError());
    });
  };
}
export default function ambDetailReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TRAIN_INIT:
      return Object.assign({}, state, action.payload);
    case RECEIVE_TRAIN_ERROR:
      return Object.assign({}, state, action.payload);
    case RECEIVE_TRAIN:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
