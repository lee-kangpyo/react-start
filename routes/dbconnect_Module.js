var express = require("express");
var router = express.Router();
const mysql = require("mysql");                                               //mysql 패키지 require
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//mysql 서버 접속 정보
// mysql 패키지를 이용해 서버에 접속 및 커넥션 풀을 생성
const pool  = mysql.createPool({                      
  connectionLimit: 66,                                                         // 최대로 저장할 수 있는 커넥션의 수
  waitForConnections: true,                                                    // 커넥션이 모두 사용중일때 커넥션이 여유가 생길때까지 대기
  host: "database-1.ciussf3lvdmo.ap-northeast-2.rds.amazonaws.com",
  port: "3306",
  database: 'react',
  user: "admin",
  password: "Admindba1!",
});

router.post("/", (req, res) => {
  const mybatisMapper = require("mybatis-mapper");                                                      // mybatis 패키지 require
  var param = req.body;                                                                                 // req.body에 할당된 json 데이터 가져오기
  console.log(param)
  //mybatis mapper경로 설정
  mybatisMapper.createMapper(['./models/'+param.mapper+'.xml']);                                        // mapper 경로로 맵퍼 가져오기
  
  var time = new Date();                                                                                // 쿼리 실행 시각과 맵퍼 이름을 로그로 출력
  console.log('## '+time+ ' ##');
  console.log("\n Called Mapper Name  = "+param.mapper);

  var format = { language: 'sql', indent: '  ' };                                                       // format 언어는 sql로 설정
  //mysql 쿼리 정보 세팅
  // getStatement( [맵퍼이름], [맵퍼안에 실행될 쿼리 id], [req.body로 전달될 파라미터], [format 변수] )
  var query = mybatisMapper.getStatement(param.mapper, param.mapper_id, param, format);                 //쿼리 생성
  console.log("\n========= Node Mybatis Query Log Start =========");
  console.log("* mapper namespce : "+param.mapper+"."+param.mapper_id+" *\n");
  console.log(query+"\n");

  pool.getConnection(function(err,connection){                                                // 커넥션 풀을 이용해 커넥션을 얻어온다.
    connection.query(query, function (error, results) {                                       // 커넥션을
      if (error) {
        console.log("db error************* : "+error);
      }
      var time2 = new Date();
      console.log('## '+time2+ ' ##');
      console.log('## RESULT DATA LIST ## : \n', results);
      if(results != undefined){
        // 이 작업을 하는 이유는 리턴된 json을 리액트에서 사용하는 json으로 변환하는 작업
        string = JSON.stringify(results);                                                      // json을 String으로 변환
        var json = JSON.parse(string);                                                         // 다시 json으로 변환
        if (req.body.crud == "select") {                                                       // select이면 결과 리턴
          res.send({ json });
        }else{                                                                                 // update, delete insert 면 'succ' 리턴
          res.send("succ");
        }
      }else{
        res.send("error");                                                                      // 에러 발생시 'error' 리턴
      }

      connection.release();
      console.log("========= Node Mybatis Query Log End =========\n");
    });
  })
});

module.exports = router;


