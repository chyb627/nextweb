# nextweb
nextweb

## package.json 생성
npm init

## package설치

npm i next react react-dom

- next는 import React from 'react'; 선언이 필요없음(써도그만 안써도그만)

npm i prop-types

## Link 사용방법

``<Link href={"/"}><a>영빈웹</a></Link>``

## eslint, prettier

npm i eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D
npm i prettier eslint-plugin-prettier eslint-config-prettier -D

.eslintrc 설정
.prettierrc 설정
.vscode/settings.json 설정

## tailwindcss

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js 설정

## antd, styled-components

npm i antd styled-components @ant-design/icons

## 리랜더링

- 리랜더링이되면 return부분을 무조건 다시그리는건 아니다.
- 리랜더링이되면 함수 처음부터 끝까지 다시실행되는건 맞다.
- return 부분중에서도 바뀌는 부분만 다시그린다.

## 리덕스

npm i next-redux-wrapper react-redux redux redux-devtools-extension

- redux는 중앙 데이터 저장소 역할

1. 데이터 중앙 저장소(state)가 있고, {name:'youngcha', age:22, password:'biri'} 란 데이터가 있다.
2. 데이터를 수정, 추가, 삭제 하기위해서는 action을 필수로 만들어줘야한다.
3. 액션, {type: 'CHANGE_NAME', data:'bincha'}
4. 액션을 dispatch하면 중앙 저장소에 저장된 데이터가 바뀐다.
5. 데이터가 바뀌면 데이터를 가져다 쓰고있는 컴포넌트에서도 모두 변경이 적용된다.
6. reducer, 액션을 dispatch한다고 알아서 바뀌는게 아님. JS는 'CHANGE_NAME'을 이해못함.
7. reducer에서 어떻게 바뀌는지도 일일이 적어줘야함.
8. reducer, switch case 문을 통하여 아래와같이 구현해준다.

``` javascript
switch(action.type){
  case 'CHANGE_NAME': 
    return {
      ...state,   // const state = {name:'cha', age:22, password:'biri'}라고 가정
      name: action.data,
    }
};
```

## 리덕스 구현

1. src/store/configureStore 생성.
2. src/reducers/index 생성.
3. store는 state와 reducer를 포함하는 것

``` javascript

// src/reducers/index
const initialState = {  //state
  name: 'youngcha',
  age: 22,
  password: 'biri',
};

// const changeName = {  // 액션 creater
//   type: 'CHANGE_NAME',
//   data: 'bincha',
// }

const changeName = (data) => {  // 액션 creater
  return {
    type: 'CHANGE_NAME',
    data,
  }
};
changeName('bincha');
store.dispatch(changeName('bincha'))

const rootReducer = (state = initialState, action) => {  //reducer
  switch (action.type) {
    case 'CHANGE_NAME':
      // state.name = 'bincha' 이런식으로 직접바꾸면 안된다.
      return{
        ...state,
        name: action.data,
      }
      break;
  }
}


// src/store/configureStore
const configureStore = () => {    //dispatch
  const store = createStore(reducer);
  store.dispatch({
    type: 'CHANGE_NAME',
    data: 'bincha',
  })
  return store;
}

```

4. 위코드에서 src/store/configureStore에서 configureStore를 dispatch하는 순간 reducer로 전달이된다.
5. type: 'CHANGE_NAME', data: 'bincha',가 전달이 된다.
6. rootReducer 함수는 (이전상태, 액션)을 통해서 다음상태를 만든다.

- map을 사용할때 key에 index를 넣으면 안된다. 
- 특히 게시글이 지워질 가능성이 있는경우 절대로 쓰면 안된다.
- 순서가 달라지거나 중간에 무언가 추가될때도 키를 index로 쓰면안된다.



# 현재 안되는 것

로그아웃
댓글
PostCard -> liked -> post.Likers
로그인