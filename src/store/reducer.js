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
    remain_time: '00:00',
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
    default: {
      return state;
    }
  }
}

export default reducer;