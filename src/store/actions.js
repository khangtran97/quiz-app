// constants
export const SET_READ_ALL = 'SET_READ_ALL';
export const SET_AGREE = 'SET_AGREE';
export const SET_COUNT_DOWN = 'SET_COUNT_DOWN';
export const SET_STOP_COUNT_DOWN = 'SET_STOP_COUNT_DOWN';

// actions
export const setReadAll = payload => ({
  type: SET_READ_ALL,
  payload
});

export const setAgree = payload => ({
  type: SET_AGREE,
  payload
});

export const setCountDown = () => ({
  type: SET_COUNT_DOWN,
});

export const setStopCountDown = () => ({
  type: SET_STOP_COUNT_DOWN
})