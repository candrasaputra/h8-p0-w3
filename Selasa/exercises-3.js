/*
* Melakukan Looping Data Array
* Sering kali data yang diterima dari database adalah array yang multidimensi (array di dalam array).
* Sebagai developer, tugas kita adalah mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.
* Objectives
* - Mengenal Array Multidimensi
* - Mengerti Cara Mengakses Nilai Array Multidimensi
* Directions
* Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen.
* Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
*/

function dataHandling(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log('Nomor ID: ', arr[i][0]);
        console.log('Nama Lengkap: ', arr[i][1]);
        console.log('TTL: ', arr[i][2], arr[i][3]);
        console.log('Hobi: ', arr[i][4]);

        console.log('');
    }
}


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input);