
// 1.	1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.



// let cem=0,hasil=1
// for(let eded=1 ; eded<10; eded++){
//     cem+=eded;
//     hasil*=eded
// }
// console.log(cem,"cem"); 
// console.log(hasil,"hasil");



// 2.	1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın



// let cem=0, hasil=1;
//   for (let eded = 1; eded < 100 ; eded++) {
//     if (eded%2==0) {
//         console.log(eded);
//         cem+=eded
//         hasil*=eded
//     }
// }
// console.log(cem,"cem");
// console.log(hasil, "hasil");



// 3.	3 rəqəmli ədədlərin ədədi ortasını tapın



// let cem=0, say=0
// for (let eded = 100; eded < 1000; eded++) {
//     cem+=eded;
//     say+=1
// }
// console.log(cem/say);



// 4.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın



// for (let eded = 100; eded < 999; eded++) {
//     if (eded%7==0 && eded%8==0) {
//         console.log(eded);
//     }
// }



// 5.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın



// let cem=0;
//     for (let eded = 100; eded <= 999; eded++) {
//         if (eded%7==0 && eded%8==0) {
//             cem+=eded;
//         }
//     }
//     console.log(cem); 



// 6.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın



// for (let eded = 100; eded <= 999; eded++) {
//     if (eded%7==0 && eded%8==0) {
//         console.log(eded);
//         break;
//     }
// }



// 7.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.



// for (let eded = 999; eded >= 100; eded--) {
//     if (eded%7==0 && eded%8==0) {
//         console.log(eded);
//         break
//     }
// }



// 8.	1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın



// let sayim;
// for (let eded = 1; eded <= 100; eded++) {
//     if (eded== 1) {
//         console.log(eded + " ne sade nede murekkeb deyil");
//     }
//     else{ sayim=0;
//         for (let bolen = 1; bolen <= eded; bolen++) {
//             if (eded%bolen==0) {
//                 sayim++
//             } 
//         }
//             if (sayim>2) {
//         console.log(eded + " murekkebdir");        
//         }
//         else{
//             console.log(eded + " sadedir");
//         }
//     }
// }



// 9.	Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın



// let a= 250; b= 445; c= 760;

// let boyuk;
// let kicik;

// if (a>= b && a>= c) {
//     boyuk= a;
// }else if (b>= a && b>= c) {
//     boyuk= b;
// }else{
//     boyuk= c;
// }

// if (a<= b && a<= c) {
//     kicik= a;
// }else if (b<= a && b<= c) {
//     kicik= b;
// }

// console.log(boyuk);
// console.log(kicik);



// 10.	İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)



// let eded=+prompt("ededi daxil edin: ")
// switch (true) {
//     case eded%2==0:
//         console.log("cutdur");
//         break;

//     default:
//         console.log("tek eded");
//         break;
// }



// 11.	İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın. 



// let eded1=+prompt("eded 1: ")
// let eded2=+prompt("eded 2: ")
// let op=prompt("operation")

// if (op=="+") {
//     console.log(eded1+eded2);
// }else if(op=="-"){
//     console.log(eded1-eded2);
// }else{
//     console.log("yalnis emel!");
// }



// 12.	 Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.



// let num=prompt("ededi daxil edin");

// if (num>= 100 && num<= 999) {
//     console.log(num);

//     for (let i= 100; i <= 999; i++) {
//         if (i%num===0) {
//             console.log(i);
//         }
//     }
// }else{
//     console.log("sef eded");
// }



// 13.	Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.



// let num=+prompt("eded daxil edin")

// for (let i= 100; i< 1000; i++) {
//     if (i%num==0) {
//         console.log(i);
//     } 
// }



// 14.	12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)



// for (let i= 1; i<= 12; i++) {
//     for (let j= 1; j<= 12; j++) {
//        if (i+j===12) {
//         console.log(i + "+" + j + "=12");
//        }
//     }
// }



// 15.	İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5)



// let x = 5;
// let y = 6;

// console.log(`Evvel: x = ${x}, y = ${y}`);

// [x, y] = [y, x];

// console.log(`Sonra: x = ${x}, y = ${y}`);



// 16.	Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.



// let eded=+prompt("ededi daxil edin")
// Math.floor(eded)
// Math.floor(5)
// if (Math.floor(eded)==eded) {
//     console.log("tam eded");
// }else{
//     console.log("tam eded deyil");
// }



// 17.	 number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin 
// - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);
// -   3-ə bölünmədən qalan qalığını (tapın);



// console.log(5**5);
// console.log(Math.pow(5,5));

// let number=71
// console.log(number%3);



// 18.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.
// 0 >   🡺 cox soyuq
// 0-15  derece 🡺 soyuq 
// 15-30 derece 🡺 isti
// 30<  🡺 cox isti 
// Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.



// let derece = prompt("Temperaturu daxil edin:");

// if (derece < 0) {
//     console.log("Cox soyuq");
// } else if (derece >= 0 && derece <= 15) {
//     console.log("Soyuq");
// } else if (derece > 15 && derece <= 30) {
//     console.log("İsti");
// } else if (derece > 30) {
//     console.log("Cox isti");
// } else {
//     alert("Temperatur yanlişdir.");
// }



// 19.Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 => bazarertesi,  3=> cersenbe  (heftenin 7 gunu ucun)



// let gun=+prompt("gunu daxiledin: (1-7arasi reqem)")

// switch(gun){
//     case 1:
//     console.log("bazar ertesi");
//     break;
//     case 2:
//     console.log("cersenbe axsami");
//     break;
//     case 3:
//     console.log("cersenbe");
//     break;
//     case 4:
//     console.log("cume axsami");
//     break;
//     case 5:
//     console.log("cume");
//     break;
//     case 6:
//     console.log("senbe");
//     break;
//     case 7:
//     console.log("bazar");
//     break;
//     default:
//         console.log("yanlis deyer");
// }



// 20. Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz fesli alertə çıxarın



// let ay=+prompt("Ayi daxiledin: (1-12 arasi reqem)")

// switch(ay){
//     case 1:
//     case 2:
//     case 12:
//     console.log("qis fesli");
//     break;
//     case 3:
//     case 4:
//     case 5:
//     console.log("yaz fesli");
//     break;
//     case 6:
//     case 7:
//     case 8:
//     console.log("yay fesli");
//     break;
//     case 9:
//     case 10:
//     case 11:
//     console.log("payiz fesli");
//     break;
//     default:
//         console.log("yanlis deyer");

// }

