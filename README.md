DemoQA Automation Suite
This repository contains an automated end-to-end test suite for the DemoQA practice website.

The project is built using TypeScript, Playwright, and Serenity/JS, following the Screenplay Pattern to ensure high readability, scalability, and maintainability of the test code.

🛠️ Technology Stack
Language: TypeScript

Framework: Serenity/JS

Browser Automation: Playwright

Design Pattern: Screenplay Pattern (Actors, Tasks, Questions)

Test Scenarios Covered
The test suite (DEMOQA suite) covers various sections of the application, validating UI interactions, form handling, and complex user gestures.

1.  Homepage Validation
Goal: Verify the integrity of the landing page.

Checks: Ensures the page title is "DEMOQA" and validates the presence of all main application cards:

Elements

Forms

Alerts, Frame & Windows

Widgets

Interactions

Book Store Application

2. Elements: Text Box
Goal: Validate simple form submission.

Actions: Navigates to the Text Box section, fills in the Full Name and Email, and submits the form.

Assertions: Verifies that the output data is visible and matches the input.

3. Forms: Student Registration
Goal: Test complex form interactions.

Actions: Navigates to the Practice Form, fills in required fields (Name, Last Name, Gender, Mobile Number), and submits.

Assertions: Verifies that the "Thanks for submitting the form" modal appears after successful submission.

4. Alerts, Frame & Windows
Goal: Validate browser alert handling capabilities.

Actions: Triggers a native browser alert.

Assertions: Ensures the actor can successfully dismiss the dialog and validates the dialog state.

5. Widgets: Accordion
Goal: Test dynamic UI components.

Actions: Expands different sections of the Accordion widget sequentially.

Assertions: Verifies that the content within the first, second, and third panels becomes visible upon interaction.

6. Interactions: Drag and Drop
Goal: Validate complex mouse gestures.

Actions: Performs a drag-and-drop operation of an element into a target drop zone.

Assertions: Verifies that the element has been successfully dropped into the target area.

7. Book Store: Search
Goal: Test data filtering and search functionality.

Actions: Navigates to the Book Store and performs a search for "Git".

Assertions: Validates that all displayed book titles in the result grid contain the search keyword.

How to Run
Install dependencies:

Bash
npm install
Run the tests:

Bash
npx serenity-js test
Project Structure
src/web/tasks: Contains the reusable Tasks (e.g., Landing, TextBox, PracticeForm).

src/web/questions: Contains the Questions used for assertions (e.g., TheLandingPage, TheBooksPage).

specs/: Contains the test specifications (as seen in the code snippet).
