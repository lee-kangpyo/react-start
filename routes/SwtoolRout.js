var express = require('express');

var router = express.Router();
// body-parser 패키지를 사용할수 있도록 require
const bodyParser = require("body-parser")               

// body-parser 패키지의 urlencoded 함수는 쿼리스트링을 전달되는 데이터를 추출해서 req.query 에 담아줌
router.use(bodyParser.urlencoded({extented:true}));

router.use(bodyParser.json());

router.post("/", (req, res, next) => {
    // http://localhost:5000/api/swtool?type=list 호출시 type:list 를 키:밸류쌍으로 추출된 데이터를 얻을수 있다.
    var type = req.query.type;
    if(type == 'list'){
        //swtool 리스트 조회
        try{
            //Mysql api 모듈
            var dbconnect_Module = require("./dbconnect_Module");

            // Mysql 쿼리 호출 정보 입력
            req.body.mapper = 'SwToolsMapper';
            req.body.crud = 'select';
            req.body.mapper_id = 'selectSwToolsList';

            router.use('/', dbconnect_Module);                  // dbconnect_Module로 다시 라우팅 하는데 이때 호출정보도 같이 전송됨.
            next('route');                                      // 여기서 응답을 하지 않고 다음 라우터가 응답 한다고 위임.
        } catch(err){
            console.log("Module > dbconnect error : " + err);
        }
    }else if (type == "save"){
        //Swtool 관리자 저장
        try{
            // Mysql api 모듈
            var dbconnect_Module = require('./dbconnect_Module');
            // Mysql 쿼리 호출 정보 입력
            req.body.mapper = 'SwToolsMapper';
            req.body.crud = 'insert';
            req.body.mapper_id = 'insertSwToolsInfo';

            router.use('/', dbconnect_Module);
            next('route');

        } catch(err){
            console.log("Module > dbconnect error : " + err);
        }
    }
})

module.exports = router;