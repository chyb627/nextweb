# nextweb
nextweb

## package.json 생성
npm init
## package 설치

npm i react react-dom typescript @types/react @types/react-dom

- node_modules는 용량이 너무커서 깃허브에 올리지않는다. (.gitignore 설정)
- package-lock.json은 의존하고 있는 패키지의 정확한 버전들이 적혀있다.

## eslint, prettier

- eslint는 코드 검사도구. 코드에서 안쓰고있는 변수 오타를 잡아준다.
- prettier는 코드를 자동정렬 해준다.

npm i -D eslint
npm i -D prettier eslint-plugin-prettier eslint-config-prettier

- eslint-plugin-prettier는 eslint와 prettier를 이어준다. 이것을 사용하면 prettier와 어긋나는 코드를 사용하면 빨간줄이 그어진다.

.prettierrc

{
  "printWidth": 120,// 최대글자수. 한줄에 120자 넘지않게 하겠다.
  "tabWidth": 2,  //띄어쓰기 2칸으로 하겠다.
  "singleQuote": true, //쌍따옴표 안쓰고 홀따옴표 쓰겠다.
  "trailingComma": "all", //항상 콤마를 뒤에 붙이겠다.
  "semi": true // 세미콜론은 항상 붙이겠다.
}

## 타입스크립트 설정

- tsconfig.json 생성 및 설정

{
  "compilerOptions": {
    "esModuleInterop": true,  // import * as React from 'react'를 import React from 'react'로 사용가능하다.
    "sourceMap": true, // 원래 에러난 위치 찾아가기 편함
    "lib": ["DOM", "ES2020"], // 라이브러리.
    "jsx": "react",  //jsx가 리액트에 쓰인다는걸 지정.
    "module": "esnext", // 최신 모듈을 쓰겠다.
    "moduleResolution": "Node", // import export를 node도 인식할수 있도록 하겠다.
    "target": "es5", // 소스코드를 ES2020으로 작성하더라도 얘를 es5로 변환하겠다.
    "strict": true, // 타입체킹을 엄격하게 하겠다.
    "resolveJsonModule": true, // JSON은 import JSON하는것을 허락하겠다.
    "baseUrl": "./",
    "paths": { // paths는 import A from ../../../../hello.js를 path설정을 하면 절대경로처럼 사용가능하다. import A from ~src/hello.js
      "~hooks/*": ["src/hooks/*"],
      "~components/*": ["src/components/*"],
      "~pages/*": ["src/pages/*"],
      "~utils/*": ["src/utils/*"],
      // "~services/*": ["src/services/*"],
      // "~assets/*": ["src/assets/*"],
      // "~shared/*": ["src/shared/*"],
      // "~recoil/*": ["src/recoil/*"],
      // "~api/*": ["api/*"],
      // "~styles/*": ["src/styles/*"],
    },
  }
}

- 타입스크립트를 -> 자바스크립트로 바꿀때는 2가지가있다. 첫째 타입스크립트가 바꿔주는대로 쓰겠다. 둘째 타입스크립트 -> 바벨 -> 자바스크립트
- 바벨로 이어받는 방식 사용.
- 바벨을 쓰는이유는 프론트앤드에서는 css, image파일 ,html등을 사용하는데, 바벨은 css,html ...등을 전부 자바스크립트로 변환해준다.
- 편의를 위해 다른파일도 많이쓰므로 바벨이 자바스크립트로 최종적으로 뽑아주는 개발을 많이한다.

## webpack 설치 및 설정

npm i -D webpack @babel/core babel-loader @babel/preset-env @babel/preset-react
npm i -D @types/webpack @types/node @babel/preset-typescript
npm i style-loader css-loader

## HTML 생성

- index.html 및 App.tsx 생성하여 초기화면 설정을 해준다.

## 핫리로딩

npm i -D webpack-dev-server
npm i -D @types/webpack-dev-server

npm i @pmmmwh/react-refresh-webpack-plugin
npm i react-refresh

npm i -D fork-ts-checker-webpack-plugin (타입스크립트랑 웹팩 동시에 돌아가도록 하는 라이브러리)

## react-router-dom v6

- react-router-dom이 버전 6로 업그레이드되면서, 
- Switch를 더이상 지원을 안하게 됬다.
- Switch -> routes로 바뀜. 
- 또한 component도 element로 바꼈다.

// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}

https://reactrouter.com/en/v6.3.0/upgrading/v5#upgrading-from-v5
https://devalice.tistory.com/112

