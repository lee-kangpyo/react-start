import React, { Component } from 'react';
import Swal from "sweetalert2";

class R058_Sweetalert2Confirm extends Component {
    delAlert = (e) => {
        Swal.fire({
            title:"정말 삭제하시겠습니까?",
            icon:"question",
            showCancelButton:true,
            confirmButtonColor:"#4b088a",
            confirmButtonText:"예",
            cancelButtonText:"아니요",
        }).then((result) => {
            if(result.value){
                document.getElementById("deleteId").remove();
                Swal.fire("Deleted", "sweetalert2 삭제 완료", "success")
            }
        })
    }

    render() { 
        return (
            <>
                <h1 id="deleteId">sadfasdf</h1>
                <button onClick={e => this.delAlert()}>삭제</button>
            </>
        );
    }
}
 
export default R058_Sweetalert2Confirm;