import React from 'react'

class R009_Es6 extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    var jsString1 = "자바스크립트";
    var jsString2 = "입니다.\n다음줄 입니다.";
    console.log(jsString1+" 문자열"+jsString2+"~");

    var es6String1 = "ES6";
    var es6String2 = "입니다.";
    console.log(`${es6String1} 문자열${es6String2}!!
___다음 줄입니다.`);

    var LongString = 'ES6에 추가된 String 함수들입니다.'
    console.log("startsWith : " + LongString.startsWith("ES6에 추가"));
    console.log("endsWith : "+ LongString.endsWith("함수들입니다."));
    console.log("includes : "+ LongString.includes("추가된 String"));

  }

  render () {
    return(
      <h2>[이것은 ES6 문법 입니다.]</h2>
    )
  }
}

export default R009_Es6;
