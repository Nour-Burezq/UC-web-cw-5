function BMI (weight = 60 ,height = 1.60){
    return weight/(height*height);
}
console.log(BMI())

function status (){
    if (BMI()<18.5){
        console.log("لديك نقص في الوزن");
    } else if (BMI()>=18.5 && BMI()<25){
        console.log("وزنك صحي")
    }else if (BMI()>=25){
        console.log ("لديك زيادة في الوزن")
    }
    }
