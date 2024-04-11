var tanya = true;

while(tanya){

        //deklarasi 
        var p = prompt('pilih : gajah, semut, orang');
        var comp = Math.random();


        //membuat objext
        if (comp < 0.34){
            comp = 'gajah';
        }

        else if(comp => 0.34 && comp < 0.67){
            comp = 'orang';
        }

        else {
            comp = 'semut';
        }


        //membuat dslfhsk
        var hasil = '';


        if(p == comp){
            hasil = "SERI";
        }

        else if (p == 'gajah') {
            hasil = (comp == 'orang') ? 'Menang' : 'Kalah';
        }
        //     if(comp == 'orang'){
        //         hasil = 'ANDA MENANG';
        //     }
        //     else { 
        //         hasil = 'KALAH'
        //     }
        // }

        else if (p == 'orang'){
            hasil = (comp == 'gajah')? 'Kalah' : 'Menang'; 
            // if(comp == 'gajah'){
            //     hasil = 'KALAH';
            // }
            // else {
            //     hasil = 'ANDA MENANG';
            // }
        }

        else if (p =='semut'){
            hasil =(comp == 'orang') ? 'Kalah' : 'Menang';
            // if (comp == 'gajah'){
            //     hasil = 'ANDA MENANG';
            // }
            // else{
            //     hasil = "KALAH";
            // }
        }

        else {
            hasil = 'Input tidak valid';
        }



        alert('kamu memilih : ' + p + ' dan komputer memiliih ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);
        tanya = confirm('lagi?');
    
        
    }
 

    alert('terimakasih sudah bermain')