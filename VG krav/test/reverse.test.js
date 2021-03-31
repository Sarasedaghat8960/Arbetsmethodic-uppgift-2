
const reverse=require("./reverse")
test("I want to test if the reverse of I am sara is aras ma I",()=>{
    expect(reverse("I am sara")).toBe("aras ma I")
})
test("I want to test if the reverse of I am sara is aras ma I",()=>{
    expect(reverse("I am sara")).toBe("saras ma I")
})