// http 모듈 불러오기
const http=require("http");

const server=http.createServer((req, res)=>{
    console.log("요청 발생");
    console.log(req.method);
    // 응답 헤더
    res.setHeader("Content-Type", "text/plain");
    // 응답 본문
    res.write("Hello, Node!!");
    res.end();  // 응답 종료
});

server.listen(3000, ()=>{
    console.log("3000번 포트로 서버 실행");
});

//빠져나올 땐 Ctrl+c누르면 됨