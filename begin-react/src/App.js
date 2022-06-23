// import logo from './logo.svg';
// import './App.css';

import Hello from './Hello';
//                '.Hello(.js)'
import './App.css';

function App() {
  const name = 'react';
  const style = {
    // background-color = backgroundColor(camelCase)
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem'
  };
  return (
    // ### JSX 규칙 ###
    //  1. 태그는 꼭 닫혀야 한다.
    //    ex)<Hello />, <div> </div>
    //  2. 두개 이상의 태그는 감싸줘야한다.
    //    ex) Fragments : <></>
    //  3. JSX 내부에서 javascript값을 보여줄 땐 {} 감싸야한다.
    //    ex) <div>{name}</div>
    //  4. JSX 내부에서 style을 넣을 땐 문자열이 아닌 객체 형태로 추가
    //    ex) <div style={style}>{name}</div>
    //        <div className='gray-box'>{name}</div>
    //  5. 주석 작성
    //    ex) {/*  */} or //

    <>
      <Hello />
      <div>name</div>
      <div>{name}</div>
      <div style={style}>{name}</div>
      <div className='gray-box'>{name}</div>
    </>

  );
}

export default App;
