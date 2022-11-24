# nextweb

nextweb

## package.json 생성

npm init

## package설치

npm i next react react-dom

- next는 import React from 'react'; 선언이 필요없음(써도그만 안써도그만)

npm i prop-types

## Link 사용방법

`<Link href={"/"}><a>영빈웹</a></Link>`

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

```javascript
switch (action.type) {
  case 'CHANGE_NAME':
    return {
      ...state, // const state = {name:'cha', age:22, password:'biri'}라고 가정
      name: action.data,
    };
}
```

## 리덕스 구현

1. src/store/configureStore 생성.
2. src/reducers/index 생성.
3. store는 state와 reducer를 포함하는 것

```javascript
// src/reducers/index
const initialState = {
  //state
  name: 'youngcha',
  age: 22,
  password: 'biri',
};

// const changeName = {  // 액션 creater
//   type: 'CHANGE_NAME',
//   data: 'bincha',
// }

const changeName = (data) => {
  // 액션 creater
  return {
    type: 'CHANGE_NAME',
    data,
  };
};
changeName('bincha');
store.dispatch(changeName('bincha'));

const rootReducer = (state = initialState, action) => {
  //reducer
  switch (action.type) {
    case 'CHANGE_NAME':
      // state.name = 'bincha' 이런식으로 직접바꾸면 안된다.
      return {
        ...state,
        name: action.data,
      };
      break;
  }
};

// src/store/configureStore
const configureStore = () => {
  //dispatch
  const store = createStore(reducer);
  store.dispatch({
    type: 'CHANGE_NAME',
    data: 'bincha',
  });
  return store;
};
```

4. 위코드에서 src/store/configureStore에서 configureStore를 dispatch하는 순간 reducer로 전달이된다.
5. type: 'CHANGE_NAME', data: 'bincha',가 전달이 된다.
6. rootReducer 함수는 (이전상태, 액션)을 통해서 다음상태를 만든다.

- map을 사용할때 key에 index를 넣으면 안된다.
- 특히 게시글이 지워질 가능성이 있는경우 절대로 쓰면 안된다.
- 순서가 달라지거나 중간에 무언가 추가될때도 키를 index로 쓰면안된다.

## lodash

lodash는 JavaScript의 인기있는 라이브러리
array, collection, date 등 데이터의 필수적인 구조를 쉽게 다룰 수 있게끔 하는데에 사용

- findIndex() : 배열 내에서 원하는 index를 쉽게 구할 수 있습니다.

```js
    let myFriend = [
    {name:'kys',job:'developer',age:27},
    {name:'cys',job:'webtoons man',age:27},
    {name:'yhs',job:'florist',age:26},
    {name:'chj',job:'nonghyup man',age:27},
    {name:'ghh',job:'coffee man',age:27},
    {name:'ldh',job:'kangaroo father',age:27},
    {name:'hsy',job:'monk',age:27},
    ];

    // 콜백함수를 통해 나이가 26인 객체가 처음으로 나오는 index 반환
    _.findIndex(myFriend, function(friend) {
      return friend.age === 26;
    });
    // -> 2

    // 처음 일치하는 object의 index 값을 반환합니다.
    _.findIndex(myFriend, { name: 'cys', job:'webtoons man',age: 27 });
    // -> 1

    // 나이가 26인 객체가 처음으로 나오는 index 반환
    _.findIndex(myFriend, age: 27);
    // → 0
```

- flatten() : 다차원 배열 내의 요소를 출력하는데 편리합니다.

```js
// 배열안의 배열 값을 순서대로 나열합니다.(depth를 명시하지 않을 경우1depth만)

_.flatten([1, [2, 3, [4]]]);
// → [1, 2, 3, [4]]

// 배열안의 배열 값을 깊이와 상관없이 순서대로 나열합니다.
_.flatten([1, [2, 3, [4]]], true);
// → [1, 2, 3, 4]
```

- remove() : 배열 내의 조건에 맞는 요소들을 제거한 후 반환해줍니다.

```js
var array = [1, 2, 3, 4];
var evens = remove(array, function (n) {
  return n % 2 == 0;
});

console.log(array);
//-> [1,3]

console.log(evens);
//-> [2,4]
```

- every() : 배열 안 요소들의 값들을 비교하고 분석하는데 용이합니다.

```js
var myFriend = [
  { name: 'kys', active: false },
  { name: 'cys', active: false },
];

// 값을 비교할 수 있습니다.
_.every(myFriend, { name: 'kys', active: false });
// → true

// key와 value가 있는지 확인할 수 있습니다.
_.every(myFriend, 'active', false);
// → true

// key에 해당하는 value가 모두 true이면 true를 반환합니다.
_.every(myFriend, 'active');
// → false
```

- find() : find()는 조건을 만족하는 컬렉션에서의 첫번째 요소를 찾는 메소드입니다.

```js
var myFriend = [
  { name: 'kys', job: 'developer', age: 27 },
  { name: 'cys', job: 'webtoons man', age: 27 },
  { name: 'yhs', job: 'florist', age: 26 },
  { name: 'chj', job: 'nonghyup man', age: 27 },
  { name: 'ghh', job: 'coffee man', age: 27 },
  { name: 'ldh', job: 'kangaroo', age: 27 },
];

// 콜백함수가 처음으로 참이되는 객체를 반환
_.find(myFriend, function (friend) {
  return friend.age < 28;
});
// → { name: 'kys',job:'developer' ,'age': 27}
```

- filter() : filter()는 특정 조건을 만족하는 모든 요소를 추출하는 메소드입니다.

```js
var myFriend = [
  { name: 'kys', job: 'developer', age: 27 },
  { name: 'cys', job: 'webtoons man', age: 27 },
  { name: 'yhs', job: 'florist', age: 26 },
  { name: 'chj', job: 'nonghyup man', age: 27 },
  { name: 'ghh', job: 'coffee man', age: 27 },
  { name: 'ldh', job: 'kangaroo', age: 27 },
];

// 입력한 object의 key와 value들을 모두 포함하는 객체들을 배열로 반환합니다.
_.filter(myFriend, { age: 26, job: 'florist' });
// → [{ name: 'yhs',job:'florist', age: 26}]

// 입력한 key값이 true인 객체들을 배열로 반환합니다.
_.filter(myFriend, (friend) => friend.age == 26);
// → [{ name: 'yhs',job:'florist', age: 26}]
```

- map() : 계산 결과 배열함수를 실행하고 그 결과를 배열로 반환합니다. key값을 입력할 경우 해당 key값들만 간추려서 반환홥니다.

```js
function timesTwo(n) {
  return n * 3;
}

_.map([1, 2], timesTwo);
//->[3,6]

var myFriend = [{ name: 'kys' }, { name: 'cys' }];

_.map(myFriend, 'name');
//->['kys','cys']
```

- forEach() : 배열의 값마다 함수를 실행시킬 때 용이하게 사용됩니다.

```js
_([1, 2])
  .forEach(function (n) {
    console.log(n);
  })
  .value();
// 1
// 2
```

- includes() : 해당 collection에 target값이 있는지 판별해줍니다.

```js
// 배열에 값이 있는지 찾습니다.
_.includes([1, 2, 3], 1);
// → true

// index에 해당 값이 있는지 찾습니다.
_.includes([1, 2, 3], 1, 2);
// → false

// 일치하는 값이 있는지 찾습니다.
_.includes({ name: 'yhs', age: 26 }, 'yhs');
// → true

// 일치하는 값이 문자열 안에 있는지 찾습니다.
_.includes('dontknow', 'ont');
// → true
```

- reduce()

```js
//첫번째 인자에 대해 배열 내부의 값을 통해 콜백함수를 실행시킨 후 결과값을 반환합니다.
_.reduce([1, 2], function (total, n) {
  return total + n;
});
// → 3
```

## API 체킹

로그인 - o
로그아웃 - o
회원가입 - o
게시글 - o
팔로우 - o
좋아요/취소 - o
리트윗 - o
댓글 - o
해시태그 - o
유저글정보 - o
검색 - o
