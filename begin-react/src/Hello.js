// 리액트를 불러와서 사용하겠다
import React from 'react';

// 컴포넌트 이름은 대분자로 시작
function Hello(props) {
    console.log(props);
    // html 같지만 'JSX' 라고 부름
    return <div>Hello {props.name}</div>;
    
}

// Hello 라는 컴포넌트를 만들어서 내보내주겠다
export default Hello;