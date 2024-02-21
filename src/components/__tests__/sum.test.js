import Sum from "../Sum";

test("Sum function to calculate two numbers",()=>{
    const result = Sum(3,4);

    // assertion.
    expect(result).toBe(7);
})