//Array

//const listNilai = ['A' , 'B' , 'C']
//console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'hatta tambunan',
        npm: '19421012',
        prodi: 'Informatika'
    },
    {
        nama: 'paisal perlando',
        npm: ' 19421013',
        prodi: 'informatika'
    }
    
]
//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
}