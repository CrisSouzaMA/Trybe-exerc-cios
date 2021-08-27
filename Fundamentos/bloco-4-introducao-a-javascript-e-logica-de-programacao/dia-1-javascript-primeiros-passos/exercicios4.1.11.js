const grossSalary = 2000.00;
let netSalary;
let salaryInss;
let IR;

if(grossSalary <= 1556.94){
    console.log("Desconto do INSS:" + (salaryInss = (grossSalary * 8) / 100) ,"Salario liquido:" + (grossSalary - salaryInss));
}else if(grossSalary >= 1556.95 && grossSalary <= 2594.92){
    console.log("Desconto do INSS:" + (salaryInss = (grossSalary * 8) / 100) ,"Salario liquido:" + (grossSalary - salaryInss))
}else if(IR = (grossSalary > 1903.98 && grossSalary <= 2826.65)){
    console.log("Salario líquido:" + ((salaryInss * 7.5) / 100) - 142.80);
    }else if(grossSalary >= 2594.93 && grossSalary <= 5189.82){
    console.log((grossSalary * 11) / 100 ," Salario menos INSS:");
}else{
    console.log((grossSalary - 570.88) ," Salario menos INSS:");
}
