const sub=require("./subtract")

test("I want to test if subtract  of 15 and 6 is 9",()=>{
    expect(sub(15, 6)).toBe(9)
})

test("I want to test if subtract  of 15 and 5 is 11",()=>{
    expect(sub(15, 5)).not.toBe(11)
})