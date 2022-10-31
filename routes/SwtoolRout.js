var express = require('express');

var router = express.Router();
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({extented:true}));

router.post("/", (req, res, next) => {
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

            router.use('/', dbconnect_Module);
            next('route');
        } catch(err){
            console.log("Module > dbconnect error : " + err);
        }
    }
})

module.exports = router;