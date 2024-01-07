
const prompt = require('prompt-sync')();
let dogrular=0
let yanlis=0


function Soru(sorumeni,cevaplar,dogrucevap){
  this.sorumeni= sorumeni
  this.cevaplar=cevaplar
this.dogrucevap=dogrucevap
   this.cevapkontrol = function(cevap){
    var cevap = prompt("lütfen cevap giriniz")
    if(cevap === dogrucevap){
      return console.log("cevap doğru"),dogrular ++
      
     }
     else {
       return  console.log("cevap yanlış"),yanlis ++
        
    
      }
     
    }
}


let sorular =[
    new Soru("Türkiyenin en yüksek dağı neresidir","A)Ağrı B)Bolu C)Himalayalar","a"),
    new Soru("Hangisi matematiksel sembol değildir","A)+ B)- C)x","c"),
    new Soru("Hangisi Yemek değildir","A)Börek B)Kahve C)Hamburger","b"),
    new Soru("Hangisi telefon markasıdır","A)Samsung B)Ledolet C)Obsesso","a"),
    new Soru("Hangisi fizik formülüdür","A)æ B)CH4 C)Fnet=m.a","c"),
    new Soru("Hangisi CS:GO da farklı animasyonları olan bıçaktır","A)Kelebek B)Survival Knife C)Karambit","a"),
    new Soru("Hangisi ekonomisttir","A)Özgür Demirtaş B)Ali Babacan C)Umut","c"),
    new Soru("hangisi asya kıasındadır","A)TÜrkiye B) Yunanistan C)Amerika","a"),
    new Soru("Hangisi ampulu icat etmiştir","A)Tesla B)Edison C)Newton","b"),
    new Soru("Sir Arhur Cannon Doyleun ünlü serisi hangisidir","A)Apotemi B)Yüzüklerin Efendisi C)Sherlock Holmes","a"),
    new Soru("Ekonomik kalkınma açısından en hızlı büyüyen ülkeler hangileridir","A)Hindistan  B)Çin C)Brezilya","b"),
    
    
    
    
]
var baslangicZamani = new Date();
for(i=sorular.length-1; i<sorular.length; i=0){
  
  i=  Math.floor(Math.random() * sorular.length) 
  console.log(sorular[i].sorumeni)
  console.log(sorular[i].cevaplar)
  console.log(sorular[i].dogrucevap)
  sorular[i].cevapkontrol()
sorular.splice(i,1)

}


let net=dogrular-yanlis*1.25
var bitisZamani = new Date();


var gecenSure = (bitisZamani - baslangicZamani)/1000;

console.log("geçen süre :",gecenSure)
console.log("Netiniz:",net,"Dogru Sayiniz",dogrular,"Yanlis Sayiniz",yanlis)


