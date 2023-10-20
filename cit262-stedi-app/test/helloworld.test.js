import sayHello from '../utils/helloworld.mjs';

it("Should say hello", ()=>{
    const helloString=sayHello();
    console.log(helloString);
    
    expect(helloString).toBe("hello");
});