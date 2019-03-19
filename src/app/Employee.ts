export class Employee
{
    id : number;
    name : string;
    age : number;
    salary : number;
    designation : string;


    constructor(id, name, age, salary, designation)
    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
}