// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

export const handler = [
  rest.get(
    "https://prevision-meteo.ch/services/json/aix-en-provence",
    (req, res, ctx) => {
      return res(
        ctx.json({
          current_condition: {
            icon_big:
              "https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png",
          },
        })
        );
      }
    ),
    rest.get(
    "https://randomuser.me/api",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [{
            picture: {
              thumbnail:
              "https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png",
          },
          "name": {
            "title": "Mr",
            "first": "Brad",
            "last": "Gibson"
          },
        }]
      })
      );
    }
  )
]

const server = setupServer(...handler)
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load meteo mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Météo actuel/i));
  expect(container.getElementsByTagName("img").length).toBe(1);
});

test("load name randomUser", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Utilisateur/i));
  expect(container.getElementsByTagName("p")[1].textContent).toContain("Mr Brad Gibson");
}); 