import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("SHOULD LOAD CONTACT US COMPONENT",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("SHOULD LOAD BUTTON ON CONTACT COMPONENT",()=>{
    render(<Contact/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("SHOULD LOAD INPUT NAME INSIDE CONTACT COMPONENT",()=>{
    render(<Contact/>);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
})

test("SHOULD LOAD 2 INPUT BOXES ON CONTACT COMPONENT",()=>{
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    // when yuou do console log of this input boxes it will give you jsx elements
    //  meaning the a whole big object.
    expect(inputBoxes.length).toBe(2);
})

// generally you write very less test cases on high level saying was this component loaded or not.
// getBy -> expect only one response
//  getAll -> will give all matching items