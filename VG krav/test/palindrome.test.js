const palindrome=require("./palindrome")
test("I want to test if tenet is palindrome",()=>{
    expect(palindrome("tenet")).toBe("True")
})

test("I want to test if sara is palindrome",()=>{
    expect(palindrome("sara")).toBe("True")
})