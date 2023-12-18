//Bai 1
function calcBMI(weight, height) {
    return weight / (height * height);
}

const person1 = {
    fullName: "Người 1",
    height: 1.75,  
    weight: 70    
};

person1.bmi = calcBMI(person1.weight, person1.height);

const person2 = {
    fullName: "Người 2",
    height: 1.80,  
    weight: 80     
};

person2.bmi = calcBMI(person2.weight, person2.height);

if (person1.bmi > person2.bmi) {
    console.log(`${person1.fullName} có chỉ số BMI cao hơn (${person1.bmi}) so với ${person2.fullName} (${person2.bmi})`);
} else if (person1.bmi < person2.bmi) {
    console.log(`${person1.fullName} có chỉ số BMI thấp hơn (${person1.bmi}) so với ${person2.fullName} (${person2.bmi})`);
} else {
    console.log(`${person1.fullName} và ${person2.fullName} có cùng chỉ số BMI (${person1.bmi})`);
}

//Bai 2
function plusOne(digits) {
    const n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        digits[i]++;

        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
}

console.log(plusOne([1, 2, 3, 4])); 
console.log(plusOne([9, 9, 9, 9])); 

//Bai 3
function twoSum(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numMap) {
            return [numMap[complement], i];
        }

        numMap[nums[i]] = i;
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6)); 

//Bai 4
function generatePascalTriangle(n) {
    if (n <= 0) {
        return [];
    }

    const result = [[1]];

    for (let i = 1; i < n; i++) {
        const prevRow = result[i - 1];
        const currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow[j] = prevRow[j - 1] + prevRow[j];
        }

        currentRow.push(1);
        result.push(currentRow);
    }

    return result;
}

console.log(generatePascalTriangle(5));

console.log(generatePascalTriangle(1));


//Bai 5
function moveZerosToEnd(nums) {
    const result = [];

    for (const num of nums) {
        if (num !== 0) {
            result.push(num);
        }
    }

    for (const num of nums) {
        if (num === 0) {
            result.push(num);
        }
    }

    return result;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); 
console.log(moveZerosToEnd([0])); 
