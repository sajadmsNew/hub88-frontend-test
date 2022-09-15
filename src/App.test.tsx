import React from 'react';
import { render, screen } from '@testing-library/react';
import {Index} from './index';
import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "./App";
import { GET_COUNTRIES, SEARCH_COUNTRY } from "./utils/Queries";
import userEvent from '@testing-library/user-event';


test('renders learn react link', () => {
  render(<Index/>);
  const linkElement = screen.getByText(/App powered by React/g);

  expect(linkElement).toBeInTheDocument();
});

test('state data',()=>{

//  render(<App/>);

// expect(app.state().shwonData).toEqual([])


})

const mocks:any = [
  {
    request: {
      query: GET_COUNTRIES,
    },

    // error: new Error("An error occurred")
    // ,
    result: {
      data: {
        countries: [{__typename: "Country", code: "AD",name: "Andorra", phone: "376"}]
      }
    }
  }
]; // We'll fill this in next


it("renders without error", async () => {
   
  render(
    <MockedProvider mocks={mocks} addTypename={true}>
      <App/>
    </MockedProvider>

  );

  // expect(await screen.findByText("Loading...")).toBeInTheDocument();
  // expect(await screen.findByText("there ia issue with internet for all")).toBeInTheDocument();


});