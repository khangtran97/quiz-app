import {
  SET_READ_ALL, 
  SET_AGREE, 
  SET_COUNT_DOWN, 
  SET_STOP_COUNT_DOWN 
} from './actions';

import moment from 'moment';

const initialState = {
  User: {
    user_name: '',
    email: '',
    option_1: '',
    option_2: '',
  },
  canNext: false,
  App: {
    is_loading: false,
    current_nav: null,
    is_refresh: false,
    questions: [],
  },

  Nav: [
    {
      state_id: 1,
      text: 'Get Started',
      can_next: false,
    },
    {
      state_id: 2,
      text: 'Question',
      can_next: false,
    },
    {
      state_id: 3,
      text: 'Survey',
      can_next: false,
    }
  ],

  Question: {
    html: '',
    Anwers: [],
    is_handled: false
  },

  Answer: {
    html: '',
    is_selected: false
  },

  Acknowlegde: {
    content: '',
    is_agreed: false,
    is_read_all: false,
  },

  Timer: {
    total_time: '20:00',
    remain_time: '20:00',
    actual_time: ''
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_FORM': {
      console.log(action.payload)
      const {
        username: user_name,
        email,
        sendEmailCheckbox: option_1,
        exportCheckbox: option_2
      } = action.payload;
      return {
        ...state,
        User: {
          user_name,
          email,
          option_1,
          option_2
        }
      };
    }
    case SET_READ_ALL: {
      const { isReadAll } = action.payload;
      return {
        ...state,
        Acknowlegde: {
          ...state.Acknowlegde,
          is_read_all: isReadAll,
        },
      }
    }
    case SET_AGREE: {
      const { isAgree } = action.payload;
      return {
        ...state,
        Acknowlegde: {
          ...state.Acknowlegde,
          is_agreed: isAgree,
        },
      }
    }
    case SET_COUNT_DOWN: {
      const totalTime = moment(state.Timer.total_time, 'mm:ss');
      const remainTime = moment(state.Timer.remain_time, 'mm:ss').subtract(1, "seconds");
      const actualTime = moment(totalTime).subtract(remainTime).format('mm:ss');
      debugger
      return {
        ...state,
        Timer: {
          ...state.Timer,
          actual_time: actualTime,
          remain_time: remainTime.format('mm:ss')
        }
      }
    }
    case SET_STOP_COUNT_DOWN: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default reducer;