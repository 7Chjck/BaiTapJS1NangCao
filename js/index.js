// bài 1 : nhập vào ngày tháng năm 
// tìm ngày tháng năm ngày tiếp theo và ngày tháng năm ngày trước đó 
function btnShow() {
    var day = +document.getElementById('day').value;
    var nextDay;
    var beforeDay;
    var month = +document.getElementById('month').value;
    var nextMonth;
    var beforeMonth;
    var year = +document.getElementById('year').value;
    var nextYear;
    var beforeYear;
    if(day >= 1 && day <= 31){
        switch(day){
            case 1:
                nextDay = day + 1;
                beforeDay = 31;
                break;
            case 31:
                nextDay = 1;
                beforeDay = day -1;
                break;
            default:
                nextDay = day + 1;
                beforeDay = day -1;
        }
    }else{
        alert("vui lòng nhập ngày từ 1 đến 31");
    }

    if(month >= 1 && month <= 12){
        switch(month){
            case 1:
                nextMonth = month + 1;
                beforeMonth = 12;
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11: 
                nextMonth = month + 1;
                beforeMonth = month - 1;
                break;
            case 12:
                nextMonth = 1;
                beforeMonth = month - 1;
                break;
            default:
                alert("vui lòng nhập tháng từ 1 đến 12");
        }
        if(year > 0 ){
            nextYear = year + 1;
            beforeYear = year - 1;
        }else{
            alert('vui lòng nhập năm');
        }
    }
    
    document.getElementById('result').innerHTML = `
        <p>Ngày - Tháng - Năm tiếp theo : ${nextDay}  ${nextMonth}  ${nextYear}</p>
        <p>Ngày - Tháng - Năm trước đó : ${beforeDay}  ${beforeMonth}  ${beforeYear}</p>
    `;
}


// bài 2 : nhập tháng , năm . Cho biết tháng đó có bao nhiều ngày  ( bao gồm tháng của năm nhuận )

function btnShoww() {
    var month1 = +document.getElementById('month1').value;
    var year1 = +document.getElementById('year1').value;
    var html;
    if(month1 >= 1 && month1 <= 12 && year1 > 0){
        switch(month1){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 12:
                html = "tháng này có 31 ngày";
                break;
            case 2:
                html = "tháng này có 28 ngày nếu năm không nhuận và 29 ngày nếu năm nhuận";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                html = "tháng này có 30 ngày";
                break;
            default:
                alert('vui lòng nhập tháng từ 1 đến 12') ;
        }
    }
    document.getElementById('result1').innerHTML = html;
}

// bài 3 : nhập vào số nguyên có 3 chữ số , in ra cách đọc 
function btnRead() {
    var n = +document.getElementById('n').value;
    var hangDonVi = n % 10;
    var hangChuc = Math.floor((n % 100) / 10);
    var hangTram = Math.floor(n / 100);
    var html1 ;
    var html2 ;
    var html3 ;

    if(hangDonVi >= 0){
        switch(hangDonVi){
            case 0:
                html1 = "chục";
                break;
            case 1:
                html1 = "Một";
                break;
            case 2:
                html1 = "Hai";
                break;
            case 3:
                html1 = "Ba";
                break;
            case 4:
                html1 = "Bốn";
                break;
            case 5:
                html1 = "Năm";
                break;
            case 6:
                html1 = "Sáu";
                break;
            case 7:
                html1 = "Bảy";
                break;
            case 8:
                html1 = "Tám";
                break;
            case 9:
                html1 = "Chín";
                break;
        }   
    }else{
        html1 = " vui lòng nhập số lớn hơn 0";
    }
    if(hangChuc >= 0){
        switch(hangChuc){
            case 0:
                html2 = "lẻ";
                break;
            case 1:
                html2 = "Mười";
                break;
            case 2:
                html2 = "Hai ";
                break;
            case 3:
                html2 = "Ba ";
                break;
            case 4:
                html2 = "Bốn ";
                break;
            case 5:
                html2 = "Năm ";
                break;
            case 6:
                html2 = "Sáu ";
                break;
            case 7:
                html2 = "Bảy ";
                break;
            case 8:
                html2 = "Tám ";
                break;
            case 9:
                html2 = "Chín ";
                break;
            
        }   
    }
    if(hangTram >= 0){
        switch(hangTram){
            case 1:
                html3 = "Một trăm";
                break;
            case 2:
                html3 = "Hai trăm";
                break;
            case 3:
                html3 = "Ba trăm";
                break;
            case 4:
                html3 = "Bốn trăm";
                break;
            case 5:
                html3 = "Năm trăm";
                break;
            case 6:
                html3 = "Sáu trăm";
                break;
            case 7:
                html3 = "Bảy trăm";
                break;
            case 8:
                html3 = "Tám trăm";
                break;
            case 9:
                html3 = "Chín trăm";
                break;
            default:
                html3 = " vui lòng nhập số ";
        } 
        document.getElementById('result2').innerHTML = `
        <p>${html3} ${html2} ${html1} </p>
    `;   
    }
    if(hangDonVi == 0){
        document.getElementById('result2').innerHTML = `
        <p>${html3} ${html2}  </p>
    `; 
    }
    if(hangChuc == 0 && hangDonVi == 0){
        document.getElementById('result2').innerHTML = `
        <p>${html3} </p>
    `;
    }
    
}

// bài 4 :Viết chương trình tìm khoảng cách xa nhất theo tọa độ 
var xSchool = 6;
var ySchool = 8;

function btnTinh() {
    var xSV1 = +document.getElementById('xSV1').value;
    var ySV1 = +document.getElementById('ySV1').value;

    var xSV2 = +document.getElementById('xSV2').value;
    var ySV2 = +document.getElementById('ySV2').value;

    var xSV3 = +document.getElementById('xSV3').value;
    var ySV3 = +document.getElementById('ySV3').value;

    var khoangCachSV1 = Math.sqrt((xSV1 - xSchool) * (xSV1 - xSchool)  + (ySV1 - ySchool) * (ySV1 - ySchool)  );

    var khoangCachSV2 = Math.sqrt((xSV2 - xSchool) * (xSV2 - xSchool)  + (ySV2 - ySchool) * (ySV2 - ySchool)  );

    var khoangCachSV3 = Math.sqrt((xSV3 - xSchool) * (xSV3 - xSchool)  + (ySV3 - ySchool) * (ySV3 - ySchool)  );

    var sinhVienXaNhat;

    if(khoangCachSV1 === khoangCachSV2 && khoangCachSV2 === khoangCachSV3 ){
        sinhVienXaNhat ="Khoảng cách 3 sinh viên bằng nhau";
    }else{
        if(khoangCachSV1 > khoangCachSV2 && khoangCachSV1 > khoangCachSV3){
            sinhVienXaNhat = " Sinh viên 1 xa nhất trường";
        }else if(khoangCachSV2 > khoangCachSV3 && khoangCachSV2 > khoangCachSV1){
            sinhVienXaNhat = " Sinh viên 2 xa nhất trường";
        }else{
            sinhVienXaNhat = " Sinh viên 3 xa nhất trường ";
        }
    }
    document.getElementById('result3').innerHTML = sinhVienXaNhat;
}
