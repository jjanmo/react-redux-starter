const SELECT_BOOK = 'book/SELECT_BOOK';

export const selectBook = (selectedBook) => ({ type: SELECT_BOOK, payload: selectedBook });

const initialState = {
  list: [
    {
      title: '메타버스 FOR 에듀테크',
      author: ['변문경', '박찬', '김병석', '이정훈'],
      publisher: '다빈치books',
      release: '2021.09',
      image: 'http://image.yes24.com/goods/103412179/S', // 166*220
      description:
        '게더타운(gathertown), 이프랜드(ifland), 제페토(ZEPETO), 가상현실 코스페이시스(CoSpaces)를 교육현장에서 활용하며 혁신교육과 에듀테크를 실현할 수 있는 가장 실용적인 지침서 가상현실, 증강현실, 거울세계, 라이프로깅, 인공지능 미래인재를 위한 교육?행사 기획과 활용 가이드 요즘 메타버스인 게더타운,...',
    },
    {
      title: 'Do it! 점프 투 파이썬',
      author: ['박응용'],
      publisher: '이지스퍼블리싱',
      release: '2019.06',
      image: 'http://image.yes24.com/goods/74419916/S',
      description:
        '파이썬 4년 연속 베스트셀러 1위! 『Do it! 점프 투 파이썬』 전면 개정판 출시! 문과생도 중고등학생도 직장인도 프로그래밍에 눈뜨게 만든 바로 그 책이 전면 개정판으로 새로 태어났다! 2016년 《Do it! 점프 투 파이썬》으로 출간되었던 이 책은 약 4년 동안의 피드백을 반영하여 초보자가 더 빠르게 입문하고, 더...',
    },
    {
      title: '혼자 공부하는 머신러닝+딥러닝',
      author: ['박해선'],
      publisher: '한빛미디어',
      release: '2020.12',
      image: 'http://image.yes24.com/goods/96024871/S',
      description:
        '혼자 해도 충분하다! 1:1 과외하듯 배우는 인공지능 자습서 이 책은 수식과 이론으로 중무장한 머신러닝, 딥러닝 책에 지친 ‘독학하는 입문자’가 ‘꼭 필요한 내용을 제대로’ 학습할 수 있도록 구성했다. 구글 머신러닝 전문가(Google ML expert)로 활동하고 있는 저자는 여러 차례의 입문자들과 함께한 머신러닝&딥...',
    },
    {
      title: '비전공자를 위한 이해할 수 있는 IT 지식 ',
      author: ['최원영'],
      publisher: '티더블유아이지',
      release: '2020.07',
      image: 'http://image.yes24.com/goods/91165789/S',
      description:
        '우리는 매일 스마트폰으로 메시지를 보내고, 컴퓨터로 일을 한다. 또 음식점에서 키오스크로 주문하고, 가상현실에서 게임을 즐긴다. IT는 더 이상 전문가들만의 이야기가 아니다. 우리의 삶 곳곳을 IT가 점령하고 있고, 그 속도는 계속해서 빨라지고 있다. 이제 IT를 모르고선 세상을 이해하기 어려운 시대가 되었다.',
    },
    {
      title: 'Clean Code 클린 코드',
      author: ['로버트 C. 마틴'],
      publisher: '인사이트',
      release: '2013.12',
      image: 'http://image.yes24.com/goods/11681152/S',
      description:
        '애자일 소프트웨어의 혁명적인 패러다임을 제시하는 책이다. 저자 로버트 마틴은 오브젝트 멘토(Object Mentor)의 동료들과 힘을 모아 ‘개발하며’ 클린 코드를 만드는 최상의 애자일 기법을 정제하여『Clean Code 클린 코드』에 담았다. 아주 많은 코드를 읽고 그 코드의 무엇이 옳은지, 그른지 생각하며 전문가로서 자신...',
    },
    {
      title: '코어 자바스크립트',
      author: ['정재남'],
      publisher: '위키북스',
      release: '2019.09',
      image: 'https://image.yes24.com/Goods/78586788/S',
      description:
        '최근 웹 개발 진영은 빠르게 발전하고 있으며, 그 중심에는 자바스크립트가 있다고 해도 결코 과언이 아니다. ECMAScript2015 시대인 현재에 이르러서도 ES5에서 통용되던 자바스크립트의 핵심 이론은 여전히 유효하며 매우 중요하다. 『코어 자바스크립트』는 자바스크립트의 근간을 이루는 핵심 이론들을 정확하게 이해하는 것을 목표로 한다. 기본 이론들 중 ES6에서도 중요성이 높은 핵심 개념을 위주로 다루며, 테크닉이나 요령보다는 원리를 이해하는 데 목적을 두고 있다.',
    },
  ],
  selectedBook: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_BOOK: {
      return {
        ...state,
        selectedBook: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
