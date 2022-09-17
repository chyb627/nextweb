const dummyUser = {
  id: 1,
  nickname: '영빈차',
  Posts: [],
  Followings: [],
  Followers: [],
};

// 데이터 중앙 저장소(state)
export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// action creater
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
};

export const loginAction = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};
export const logoutAction = {
  type: LOG_OUT,
};
export const signUp = (data) => {
  return {
    type: SIGN_UP,
    data,
  };
};

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
