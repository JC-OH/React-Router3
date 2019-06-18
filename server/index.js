const express = require('express');
const app = express();
const path = require('path');
// 이제 브라우저로 http://localhost:4000/ 에 들어가서 테스팅을해보세요.
// 작동은 잘 하는데, F5 를 눌르면 오류가 납니다.


// 이렇게 라우팅이 잘 되다가 URL 로 직접 들어가면 오류가 발생하는 이유는, 처음 / 경로로 들어갔을때,
// 서버에서 리액트 프로젝트와 html 파일을 제공해주고 그 내부에서 라우팅을 할 때는 페이지를 새로 불러오지 않고
// 클라이언트 내부에서 자체적으로 라우팅을 하기 때문에 정상적으로 작동하지만 새로고침을 하거나 URL 로 직접 들어가면
// 서버 내에서 해당 라우트를 찾는데, 그것을 위해 우리가 express 에서 따로 준비한게 없어서 이렇게 오류가 나는 것 이랍니다.
// 이를 해결하기 위해선 코드를 다음과 같이 모든 경로로 들어왔을때 리액트 index.html 를 보여주게 하면 됩니다.
// 주의하실 점은, 여기서 리액트 빌드 파일이 /static 경로에 위치해 있기 때문에 static 경로의 경우는 예외로 처리해야합니다.

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});