//Test online

import TracNghiem from "./TracNghiem.js";

import ThemBaiTest from "./ThemBaiTest.js";

import TuLuan from "./TuLuan.js";

let boCauHoi=[];
let bool=true;
while(bool)
{
    let nhap=prompt(`
    Ban muon lam gi
    1:Them 
    2:Xoa 
    3.Sua 
    4.Thoat
`)
    if(nhap=="1")
    {
        let hoi1=prompt(`
        1.Trac nghiem
        2.Tu luan
        `)
        if(hoi1=="1")
        {
            let iDTracNghiem=prompt("Nhap id");
            let cauHoiTracNghiem=prompt("Nhap cau hoi");
            let cauTraLoiTracNghiem=prompt("Nhap cau tra loi");
            let cauHoiMoiTracNghiem=new TracNghiem(iDTracNghiem,cauHoiTracNghiem,cauTraLoiTracNghiem); 
            boCauHoi.push(cauHoiMoiTracNghiem);
            console.log(cauHoiMoiTracNghiem);   
        }
        if(hoi1=="2")
        {
            let iDTuLuan=prompt("Nhap id");
            let cauHoiTuLuan=prompt("Nhap cau hoi");
            let cauTraLoiTuLuan=prompt("Nhap cau tra loi");
            let cauHoiMoiTuLuan=new TuLuan(iDTuLuan,cauHoiTuLuan,cauTraLoiTuLuan); 
            boCauHoi.push(cauHoiMoiTuLuan)
            console.log(cauHoiMoiTuLuan); 
            
        }
    }
    if(nhap=="2")
    {
            let hoiiD=prompt("Nhap id can xoa");
            for(let i=0;i<boCauHoi.length;i++)
            {
                if(boCauHoi[i].id==hoiiD)
                {
                    boCauHoi.splice(i,1);
                }
            }
            console.log(boCauHoi);
    }
    if(nhap=="3")
    {
        let hoiiD2=prompt("Nhap id can sua");
        let suaCauHoi=prompt("Cau hoi moi");
        let suaCauTraLoi=prompt("Cau tra loi moi")
            for(let j=0;j<boCauHoi.length;j++)
            {
                if(boCauHoi[j].id==hoiiD2)
                    {
                        boCauHoi[j].noidung=suaCauHoi;
                        boCauHoi[j].dapan=suaCauTraLoi;
                    }
            }
            console.log(boCauHoi);
    }
    if(nhap=="4")
    {
        bool=false;
    }
}

let bool2=true;

while(bool2)
{
    let nhap2=prompt(`
        1.Tao bai test moi
        2.Thoat
    `)
    if(nhap2=="1")
    {   
        let cacCauHoi=[];
        let idBaiTest=prompt("Nhap id cho bai test");
        let thoiLuong=prompt("Thoi luong cua bai test");
        let tenBaiTest=prompt("Ten cua bai test");
        let themBaiTest= new ThemBaiTest(idBaiTest,tenBaiTest,thoiLuong,cacCauHoi,new Date().toISOString())
        while(bool2)
        {
            let luaChon=prompt(`
                1.Them cau hoi
                2.Khong them nua
            `)
            if(luaChon=="1")
            {
                let themCauHoiBaiTest=prompt("Them cau hoi moi");
                cacCauHoi.push(themCauHoiBaiTest);
            }
            if(luaChon=="2")
            {
                bool2=false;
            }
            
        }
        console.log(themBaiTest);
        
    }
}

