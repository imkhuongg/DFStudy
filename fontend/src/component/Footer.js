import React from "react";
import logo from '../assets/logo.jpg'
function footer(){
    return(
        <div class = 'footer-ctn'>
            <div class = 'footer-header-ctn'>
                <button class = 'btn-header-footer'>VỀ DFSTUDY</button>
                <button class = 'btn-header-footer'>HỖ TRỢ</button>
            </div>
            <div >
                <img src = {logo} class = 'img-footer' />
                <p class = 'footer-text'>DFSTUDY và mọi logo liên quan đều là nhãn hiệu, nhãn hiệu dịch vụ</p>
            </div>
            <div class = 'group-btn-footer'>
                <button class = 'btn-header-footer-1'>CHÍNH SÁCH BẢO MẬT</button>
                <button class = 'btn-header-footer-1'>ĐIỀU KHOẢN SỬ DỤNG</button>
            </div>
        </div>
    )
}
export default footer;