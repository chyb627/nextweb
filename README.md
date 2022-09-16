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
