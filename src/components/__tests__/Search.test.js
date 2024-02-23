import { render } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mock-restaurant-data.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
        }
    })
})

it("Should render the body component with Serach",async ()=>{
    await act(async ()=>(
        render(
        <BrowserRouter><Body/></BrowserRouter>
        )
    ))
    
})

//  this render is jest wala browser like thing but not browser so it won't understand 
// about fetch and all. so you'll have o write it/ make a fake fetch like funciton

// if you have state updates it should be wrapped into act() which is async function.
