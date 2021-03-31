const sum=require("./sum")

test("I want to test if sum 1 and 6 is 7",()=>{
    expect(sum(1,7)).toBe(8)
})
