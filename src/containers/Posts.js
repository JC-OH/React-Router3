import React from 'react';
import BigText from '../components/BigText';


// 저희는 Post 컴포넌트가 Posts 컴포넌트의 내부에서 보여지게 할 계획입니다.
// 마치, App 컴포넌트 내부에서 헤더를 보여주고 그 하단에 Home, About, Posts 컴포넌트를 보여준 것 처럼 말이죠.

// 그러려면, Posts 컴포넌트에서 Post 컴포넌트가 보여질 부분에 children 을 렌더링 하면 됩니다.
const Posts = ({children}) => {
    return (
        <div>
            <BigText>포스트</BigText>
            {children}
        </div>
    );
};

export default Posts;