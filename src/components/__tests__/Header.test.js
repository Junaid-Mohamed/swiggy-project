import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

describe("test cases for header component",()=>{

    it("Should load Header component with a login button",()=>{
        render(
        <BrowserRouter><Provider store={ appStore }>
        <Header/>
        </Provider>
        </BrowserRouter>)
        // if multiple buttons were present.
        // you can get them by name
        const loginButton = screen.getByRole("button",{name:"Login"});
     
        expect(loginButton).toBeInTheDocument();
     })

     it("Should load Header component with a cart items 0",()=>{
        render(
        <BrowserRouter><Provider store={ appStore }>
        <Header/>
        </Provider>
        </BrowserRouter>)
        // if multiple buttons were present.
        // you can get them by name

      //   const cartItems = screen.getByText("Cart 0");
        // or regex as well

        const cart = screen.getByText(/Cart/);
     
        expect(cartItems).toBeInTheDocument();
     })

     it("Should change login button to logout in header",()=>{
        render(
        <BrowserRouter><Provider store={ appStore }>
        <Header/>
        </Provider>
        </BrowserRouter>)
        
        const loginButton = screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton)
        const logoutButton = screen.getByRole("button",{name:"Logout"});
     
        expect(logoutButton).toBeInTheDocument();
     })
})
