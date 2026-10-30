import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("shows project source links and accurate run modes", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    /AI.*developer/i,
  );
  for (const [title, repository] of [
    ["AI TaskHub", "ai-taskhub"],
    ["GridQuest", "gridquest-python"],
    ["RetrievalBench", "retrievalbench"],
  ]) {
    const card = screen
      .getByRole("heading", { name: title })
      .closest("article");
    expect(within(card).getByRole("link", { name: /source/i })).toHaveAttribute(
      "href",
      `https://github.com/BhuvanM17/${repository}`,
    );
    expect(
      within(card).queryByRole("link", { name: /live demo/i }),
    ).not.toBeInTheDocument();
  }
  expect(screen.getByText("Desktop game")).toBeInTheDocument();
  expect(screen.getByText("Offline CLI")).toBeInTheDocument();
});

test("filters projects accessibly and can restore the complete collection", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Python & algorithms" }));
  expect(
    screen.getByRole("button", { name: "Python & algorithms" }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    screen.getByRole("heading", { name: "GridQuest" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "AI TaskHub" }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "All projects" }));
  expect(
    screen.getByRole("heading", { name: "AI TaskHub" }),
  ).toBeInTheDocument();
});

test("provides working section navigation and direct contact links", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
    "href",
    "#main",
  );
  expect(screen.getByRole("link", { name: "Email Bhuvan" })).toHaveAttribute(
    "href",
    "mailto:bhuvanshetty317@gmail.com",
  );
  const nav = screen.getByRole("navigation", { name: "Main navigation" });
  for (const label of ["Projects", "About", "Contact"]) {
    const href = within(nav)
      .getByRole("link", { name: label })
      .getAttribute("href");
    expect(document.querySelector(href)).toBeInTheDocument();
  }
});

test("menu supports navigation and escape dismissal", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
  expect(screen.getByRole("dialog", { name: "Site menu" })).toBeInTheDocument();
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("expertise details expand with accessible state", () => {
  render(<App />);
  const trigger = screen.getByRole("button", { name: /Python backends/i });
  expect(trigger).toHaveAttribute("aria-expanded", "false");
  fireEvent.click(trigger);
  expect(trigger).toHaveAttribute("aria-expanded", "true");
  expect(
    screen.getByText(
      /Request validation, authentication, and background processing/i,
    ),
  ).toBeVisible();
});
