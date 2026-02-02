# DemoQA Automation Suite 

This repository contains an automated end-to-end test suite for the [DemoQA](https://demoqa.com) practice website, built using **Serenity/JS**, **Playwright**, and **TypeScript**.

The project implements the **Screenplay Pattern** to ensure scalable, readable, and maintainable test code.

## 🛠️ Tech Stack

* **Language:** TypeScript
* **Framework:** [Serenity/JS](https://serenity-js.org/)
* **Browser Automation:** Playwright
* **Assertions:** Serenity/JS Assertions (`Ensure`, `equals`, `isTrue`)

##  Test Scenarios Covered

The suite validates various sections of the application, including Form handling, Widgets, Alerts, and Drag & Drop interactions.

### 1.  Homepage Validation
* **Objective:** Verify the integrity of the landing page.
* **Checks:** Ensures the main title is "DEMOQA" and verifies the presence of all navigation cards (Elements, Forms, Alerts, Widgets, Interactions, Book Store).

### 2.  Elements: Text Box
* **Objective:** Verify simple form submission.
* **Actions:** Navigates to the Text Box section, enters full name and email, and submits.
* **Validation:** Verifies that the output data is visible after submission.

### 3.  Forms: Practice Form
* **Objective:** Verify complex form interactions.
* **Actions:** Fills out the Student Registration Form (Name, Gender, Mobile) and submits.
* **Validation:** Ensures the "Thanks for submitting the form" modal appears.

### 4.  Alerts, Frame & Windows
* **Objective:** Verify native browser alert handling.
* **Actions:** Triggers a JS Alert and interacts with it using the Actor's abilities.
* **Validation:** Checks if the dialog was successfully dismissed.

### 5.  Widgets: Accordion
* **Objective:** Verify dynamic UI state changes.
* **Actions:** Sequentially expands the First, Second, and Third accordion sections.
* **Validation:** Ensures the content of each panel becomes visible upon interaction.

### 6.  Interactions: Drag and Drop
* **Objective:** Verify complex mouse gestures.
* **Actions:** Performs a drag-and-drop operation from a source element to a target zone.
* **Validation:** Checks if the element is successfully dropped.

### 7.  Book Store: Search
* **Objective:** Verify data grid filtering.
* **Actions:** Searches for the keyword "Git".
* **Validation:** Iterates through the result grid to ensure all displayed book titles contain the search term.

##  How to Run

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the tests:**
    ```bash
    npx serenity-js test
    ```
