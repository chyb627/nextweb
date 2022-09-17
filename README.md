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