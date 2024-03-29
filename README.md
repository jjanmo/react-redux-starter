# React-Redux-Starter

<details>
<summary style='font-size:20px'>Log 📖 </summary>

2020 5월 스터디 시작 <br />

> ~~기존의 강의에서 제공되는 기본적인 설정(웹팩, 바벨 등)이 되어있는 프로젝트를 클론하여 사용하였다. [[기존 프로젝트](_README.md)]~~

스터디 잠시 중지...PAUSE 😭 <br />

2021 11월 다시 시작!<br />

> 해당 프로젝트가 너무 오래되어서(2017년) 버전이 안맞는 것들이 많은 관계로 나름 웹팩과 바벨 설정을 다시 하여 진행하였다. 🤪 설정은 어렵다...

> 기존 프로젝트에서의 설정 문제와 API 관련 문제로 인해서 CRA를 통해서 프로젝트 새롭게 셋팅.

</details>

---

<br />

> [모던 리액트(React)와 리덕스(Redux)](https://www.udemy.com/react-redux/) 강의를 위한 실습 기록 저장소.

> 맨 처음 리액트와 리덕스를 배울 때, 해당 강의를 시작하였으나, 마무리 하지 못하여서 이번 기회에 지금까지 내가 알아왔던 리액트와 리덕스의 내용들에 대해서 복습하며 다시 '레알' 끝을 보고자 한다.

<br />

---

<br />

## Section 1/2 : Fundamental React

> Preview : 섹션 1/2에서 구현할 내용

![Preview](screenshots/section2.png)

### Self Feedback

> 실제 구현

![Demo](screenshots/gSection2.gif)

위 내용을 구현할 때, YouTube API를 할당량 때문에 지속적으로 사용할 수 없었다. 그래서 `Vimeo API`를 사용하여 구현하였다. 또한 `MUI(Material UI)` 연습삼아 사용해보았다. 이로 인해 강의와는 다르게 여러가지 문제가 발생하였다. 우선, API가 달라서 응답받은 데이터의 구조와 데이터의 내용이 달라서 위와 같은 기능을 가진 화면을 구현하기 위해선 추가적인 처리(데이터 파싱, 예외처리 등등)가 필요하였다. 또한 MUI에 대한 이해도, 익숙도가 떨어져서 깔끔한 UI를 만드는 것이 쉽지않았다.

추가적으로 보완해야할 부분

- [ ] 초기화면과 로딩화면의 분리 + 검색 초기화시 화면도 초기화될 수 있도록
- [ ] 검색 예외처리 ex.검색이 오류나는 경우
- [ ] 좀 더 깔끔한 UI

<br />

## Section 3/4 : Fundamental Redux

> Preview : 섹션 3/4에서 구현할 내용

![Preview](screenshots/section4.png)

> 실제 구현

![Demo](screenshots/gSection4.gif)

<br />

## Section 5 : Intermediate Redux

> Preview : 섹션 5에서 구현할 내용

![Preview](screenshots/section5.png)

- 검색시 해당 도시의 5일간의 기온/기압/습도 정보를 가져와서 랜더링한다.
- 기온/기압/습도 정보를 차트 라이브러리를 사용하여 구현해본다.(아주 심플하게 할 예정)
- 위에서 구현한 것보다는 좀 더 동적인 스테이트의 변화를 리덕스에서 어떻게 구현할 것인가에 초점을 맞춘다.

<br />

## Section 6 : React Router & React Final Form

> 리액트 라우터와 리덕스 폼이 해당 강의 시점(2017년)에는 낮은 버전이여서 지금 사용할 수 없다.(리액트 라우터 : v4/v3, 리덕스 폼은 리액트 파이널 폼을 사용하길 권장) 그래서 리액트 라우터는 버전업을 하고 리덕스 폼 대신 리액트 파이널 폼을 사용한다.

<br />

## Section 7 : Redux Thunk
