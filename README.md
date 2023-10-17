# Comment 구현

NodeJS

- 어렵다?
- 개념 모르면 x

브라우저

- 언어적인 깊은 이해도
- js구현이 더어렵지 않았나?

Reac 가기전에
NodeJS 할때

CSR ,SSR
'댓글' CSR

새로고침
비동기통신(AJAX)

## Comment 만들면서 이슈사항

- 이벤트 중복처리
- 리랜더링
- 코드 가독성(재활용)

가독성과 리랜더링 더 엄청 높은 스펙

## comment2

코드 실행 과정

- 브라우저가 HTML 코드를 읽고 DOM 트리를 만듭니다.
- 브라우저가 JavaScript 코드를 읽고 실행합니다.
- App 클래스의 인스턴스가 생성되고 #app 요소에 렌더링됩니다.
- App 클래스의 template() 메서드가 호출되고 댓글 목록이 반환됩니다.
- App 클래스의 render() 메서드가 호출되고 댓글 목록이 #app 요소에 렌더링됩니다.
- #app_btn 버튼이 클릭될 때 App 클래스의 setEvent() 메서드가 호출되고 댓글 목록에 새로운 댓글이 추가됩니다.

App 클래스는 Component 클래스를 상속받습니다. App 클래스는 댓글 목록을 상태로 관리하고 있습니다. template() 메서드는 댓글 목록을 반환하고, setEvent() 메서드는 #app_btn 버튼이 클릭될 때 댓글 목록에 새로운 댓글을 추가하는 이벤트 리스너를 설정합니다.

const app = new App(document.querySelector("#app")); 코드는 App 클래스의 인스턴스를 생성하고 #app 요소에 렌더링합니다.

- Component 클래스의 setup() 메서드는 컴포넌트의 상태를 초기화합니다. App 클래스의 경우, setup() 메서드는 댓글 목록을 초기화합니다.
- Component 클래스의 template() 메서드는 컴포넌트의 HTML을 반환합니다. App 클래스의 경우, template() 메서드는 댓글 목록을 반환합니다.
- Component 클래스의 setState() 메서드는 컴포넌트의 상태를 업데이트합니다. App 클래스의 경우, setState() 메서드는 댓글 목록에 새로운 댓글을 추가합니다.
- Component 클래스의 render() 메서드는 컴포넌트를 DOM에 렌더링합니다. App 클래스의 경우, render() 메서드는 댓글 목록을 #app 요소에 렌더링합니다.
