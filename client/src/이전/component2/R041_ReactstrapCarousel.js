import React, { Component } from 'react';
import { UncontrolledCarousel } from "reactstrap";

const items = [
    {
        src:'https://drive.google.com/uc?export=view&id=1J38uh31Z9FK5tmodYX64NN6Vj_p_S8bc',
        altText:"슬라이드1 이미지 대체문구",
        caption:"슬라이드1 설명",
        header:"슬라이드1 제목",
    },
    {
        src:'https://drive.google.com/uc?export=view&id=1J38uh31Z9FK5tmodYX64NN6Vj_p_S8bc',
        altText:"슬라이드2 이미지 대체문구",
        caption:"슬라이드2 설명",
        header:"슬라이드2 제목",
    },
    {
        src:'https://drive.google.com/uc?export=view&id=1J38uh31Z9FK5tmodYX64NN6Vj_p_S8bc',
        altText:"슬라이드2 이미지 대체문구",
        caption:"슬라이드2 설명",
        header:"슬라이드2 제목",
    },
]

class R041_ReactstrapCarousel extends Component {
    render() { 
        return (
            <UncontrolledCarousel items={items} />
        );
    }
}
 
export default R041_ReactstrapCarousel;