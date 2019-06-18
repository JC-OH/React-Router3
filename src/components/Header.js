import React from 'react';
import PropTypes from 'prop-types';


// 리액트 프로젝트의 경우 모든 프로젝트의 클라이언트 정보를 코드를 번들링 할 때 한 파일에 담기 때문에, 주소가 변한다고해서 페이지를 새로 로딩 할 필요가 없죠.
// Link 라는 컴포넌트를 사용해야합니다. 이 컴포넌트는 브라우저의 주소만 바꿔주고 페이지를 새로 로딩하진 않습니다.
// 그렇게 브라우저의 주소가 바뀌고 나면, Router 컴포넌트가 이를 인식하여 우리가 정한 컴포넌트를 보여주겠죠.
import { Link } from 'react-router-3';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
        {children}
    </Link>
)


// MenuItem 컴포넌트에서 기존에 div 태그를 사용 하던 것을 Link 로 변환 하였습니다.
// 이 컴포넌트에 className 을 설정하면 그대로 전달이 돼서 해당 클래스를 가진 a 태그로 이뤄진 컴포넌트로 변환해줍니다.
// 이 컴포넌트는 링크가 클릭 되었을 때, 페이지가 전환 되는 것을 막고, Router 에서 정한 history 를 사용하여 브라우저의 주소를 변경합니다.
// Link 컴포넌트가 눌렸을 때, 설정 될 라우트 경로는 to 값을 통해 설정합니다.
// 위 코드에서는 MenuItem 에서 to 값을 설정하고 이 props 가 Link 컴포넌트의 값으로 설정되게끔 전달되었습니다.

// router 객체 내부의 isActive 함수는 현재 브라우저의 경로가 주어진 경로와 매칭이 되는지 확인을 합니다.
// 첫번째 파라미터로는 경로가 들어가고 두번째 파라미터는 주어진 경로가 IndexRoute 인지 설정을 합니다.
// 예를들어서. 만약에 현재 경로가 /about 일 때, isActive('/') 가 실행 되면 현재 경로가 / 의 자식 경로이기 때문에 true 를 반환합니다.
// 두번째 파라미터를 설정하여 isActive('/', true) 를 실행하면 현재 경로가 정확히 / 일 때만 true 를 반환하고 그 외엔 false 를 반환합니다.
//
// 이를 함수를 사용하여 사용하여 MenuItem 의 active 값을 설정해주고, MenuItem 컴포넌트에서는 active 값이 true 라면 active 라는 클래스를 적용하도록 설정했습니다
const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                velopert
            </div>
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>홈</MenuItem>
                <MenuItem to={'/about'} active={router.isActive('/about')}>소개</MenuItem>
                <MenuItem to={'/post'} active={router.isActive('/post')}>포스트</MenuItem>
            </div>
        </div>
    );
};

// 현재 주소에 따라서 메뉴 아이템을 파란색으로 설정을 하려면, 컴포넌트의 context 객체의 router 에 접근을 해야 하는데요.
// context 는 React 프로젝트에서 전역적으로 사용 될 수 있는 객체입니다. 컴포넌트마다 props 로 전달하기 힘든 경우에 이 기능이 사용됩니다.
// class 형태의 컴포넌트의 경우엔 this.context.router 라고 사용을 하면 되고, 위 처럼 함수형 컴포넌트의 경우엔, 두번째 파라미터로 context 를 전달받아서 사용하면 됩니다.

// Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html
// 이를 사용하려면, contextType 을 지정해주어야합니다.
Header.contextTypes = {
    router: PropTypes.object
}

export default Header;