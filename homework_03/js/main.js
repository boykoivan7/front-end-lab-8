function Company(object) {
    this.name = object.name;
    this.owner = object.owner;
    this.maxCount = object.maxCompanySize;

    this.createDate = new Date();
    var _employees = [];
    var _logs = `${this.name} was created in ${this.createDate}\n`;

    this.addNewEmployee = function(employee) {
        if (employee instanceof Employee) {
            if (_employees.length === this.maxCount) {
                var smallestSalaryId = 0;
                for (var i = 1; i < _employees.length; i++) {
                    if (_employees[i].salary < _employees[smallestSalaryId].salary) {
                        smallestSalaryId = i;
                    }
                };
                this.removeEmployee(smallestSalaryId);
            }
            _employees.push(employee);
            employee.hire(this);
            _logs += `${employee.name} starts working at ${this.name} in ${new Date()}\n`;
        } else {
            console.log("Please try to add Employee instance");
        }
    }

    this.removeEmployee = function(id) {
        if (id >= 0 && id < _employees.length) {
            _employees[id].fire();
            _logs += `${_employees[id].name} ends working at ${this.name} in ${new Date()}\n`;
            _employees.splice(id, 1);
        } else {
            console.log("Please try to enter number >=0 & <= count of employees");
        }
    }

    this.getAverageSalary = function() {
        if (_employees.length < 1) {
            console.log("You have no employees");
            return;
        } else {
            var sumSalary = 0;
            for (var i = 0; i < _employees.length; i++) {
                sumSalary += _employees[i].salary;
            }
            var averageSalary = sumSalary / _employees.length;
            return averageSalary;
        }
    }

    this.getEmployees = function() {
        return _employees;
    }

    this.getFormattedListOfEmployees = function() {
        if (_employees.length < 1) {
            console.log("You have no employees");
            return;
        } else {
            var list = "";
            for (var i = 0; i < _employees.length; i++) {
                list += `${_employees[i].name} - works in ${_employees[i].company.name} ${(Date.now() - _employees[i].startWorkInCompanyDate)/1000} seconds\n`;
            };
            return list;
        }
    }

    this.getAverageAge = function() {
        if (_employees.length < 1) {
            console.log("You have no employees");
            return;
        } else {
            var sumAge = 0;
            for (var i = 0; i < _employees.length; i++) {
                sumAge += _employees[i].age;
            }
            var averageAge = sumAge / _employees.length;
            return averageAge;
        }
    }

    this.getHistory = function() {
        return _logs;
    };
}

function Employee(object) {
    this.name = object.name;
    this.primarySkill = object.primarySkill;
    this.age = object.age;
    this.salary = object.salary;

    this.company = undefined;
    this.startWorkInCompanyDate = undefined;
    this.totalWorkTime = 0; //miliseconds

    var _logs = "";

    this.setSalary = function(salary) {
        if (isFinite(salary) && salary > 0) {
            if (salary > this.salary) {
                _logs += `change salary from ${this.salary} to ${salary}\n`;
                this.salary = salary;
            } else {
                _logs += `try to change salary from ${this.salary} to ${salary}\n`;
            }
        } else {
            console.log("Please try to enter a number greater than 0");
        }
    }

    this.getSalary = function() {
        return this.salary;
    }

    this.hire = function(company) {
        this.company = company;
        this.startWorkInCompanyDate = new Date();
        _logs += `${this.name} is hired to ${company.name} in ${this.startWorkInCompanyDate}\n`;
    }

    this.fire = function() {
        _logs += `${this.name} is fired from ${this.company.name} in ${new Date()}\n`;
        this.company = undefined;
        this.totalWorkTime += (Date.now() - this.startWorkInCompanyDate);
        this.startWorkInCompanyDate = undefined;
    }

    this.getWorkTimeInSeconds = function() {
        if (this.company === undefined) {
            return this.totalWorkTime / 1000;
        } else {
            return (this.totalWorkTime + (Date.now() - this.startWorkInCompanyDate)) / 1000;
        }
    }

    this.getHistory = function() {
        return _logs;
    };
}

//Test
let artem = new Employee({
    name: "Artem",
    age: 15,
    salary: 1000,
    primarySkill: "UX"
});
let vova = new Employee({
    name: "Vova",
    age: 16,
    salary: 2000,
    primarySkill: "BE"
});
let vasyl = new Employee({
    name: "Vasyl",
    age: 25,
    salary: 1000,
    primarySkill: "FE"
});
let ivan = new Employee({
    name: "Ivan",
    age: 35,
    salary: 5000,
    primarySkill: "FE"
});
let orest = new Employee({
    name: "Orest",
    age: 29,
    salary: 300,
    primarySkill: "AT"
});
let anton = new Employee({
    name: "Anton",
    age: 19,
    salary: 500,
    primarySkill: "Manager"
});

let epam = new Company({
    name: "Epam",
    owner: "Arkadii",
    maxCompanySize: 5
});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());
epam.removeEmployee(2);
console.log(vasyl.getHistory());

console.log(epam.getAverageSalary());
console.log(epam.getAverageAge());
console.log(epam.getEmployees());
console.log(epam.getFormattedListOfEmployees());

epam.addNewEmployee(5, 6, 9, 5);

setTimeout(() => {
    epam.removeEmployee(1);
    console.log(artem.getWorkTimeInSeconds());
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getSalary());
console.log(vova.getHistory());