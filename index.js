document.getElementById('Expression').addEventListener('change', validateExpression);

function validateExpression() {
    let expressionName = this.value
    let output = null
    if (expressionName === null || expressionName === ""){
        document.getElementById("output").innerHTML = `<h1 id="output">Select expression</h1>`

    } else {
        let expression = prompt(`Enter your ${expressionName} :`)
        switch (expressionName) {
            case "number":
                let number = /^(\+)?(88)?01[\d]{9}$/;
                if (number.test(expression)){
                    output = `${expressionName} is correct`
                } else{
                    output = `${expressionName} is not correct`
                }
                break;
            case "email":
                let email = /^([\D].?)+[^.]@[\D]+\.[^.][\D]+$/
                if (email.test(expression)){
                    output = `${expressionName} is correct`
                } else{
                    output = `${expressionName} is not correct`
                }
                break;
            case "post code":
                let pCode = /^[\d]{4}$/;
                if (pCode.test(expression)){
                    output = `${expressionName} is correct`
                } else{
                    output = `${expressionName} is not correct`
                }
                break;
            default:
                output = "not in option"
        }
        document.getElementById("output").innerHTML = `<h1 id="output"><strong>${expression}</strong> ${output}</h1>`
    }
}

