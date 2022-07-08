function BMI (weight = 60 ,height = 1.60){
    return weight/(height*height);
}
console.log(BMI())

function Status (num){
    if (num<18.5){
        return"لديك نقص في الوزن";
    
    } else if (num>=18.5 && num<25){
        return"وزنك صحي";
    }else if (num>=25){
        return "لديك زيادة في الوزن";
        
    }
    }

function calculate (weight, height){
        let bmi = BMI(weight, height);
        let desc = Status(bmi);
         document.getElementById("result").innerHTML=bmi;
         document.getElementById("result").innerHTML+= desc;
    }


