import { Landing } from "../src/web/tasks/Landing";
import { TheLandingPage } from "../src/web/questions/TheLandingPage";
import { Ensure, equals, isTrue } from "@serenity-js/assertions";
import { it } from "@serenity-js/playwright-test";
import { TextBox } from "../src/web/tasks/TextBox";
import { Elements } from "../src/web/tasks/Elements";
import { TheTextBoxPage } from "../src/web/questions/TheTextBoxPage";
import { Forms } from "../src/web/tasks/Forms";
import { PracticeForm } from "../src/web/tasks/PracticeForm";
import { ThePracticeFormPage } from "../src/web/questions/ThePracticeFormPage";
import { Alerts } from "../src/web/tasks/Alerts";
import { AlertsWindows } from "../src/web/tasks/AlertsWindows";
import { ModalDialog } from "@serenity-js/web";

it.describe("DEMOQA suite", () => {
  it.beforeEach(async ({ actor }) => {
    await actor.attemptsTo(Landing.navigateToLandingPage());
  });

  it("Navigate to main page", async ({ actor }) => {
    await actor.attemptsTo(
      Ensure.that(TheLandingPage.currentTitle(), equals("DEMOQA")),
      Ensure.that(TheLandingPage.elementsCardIsPresent(), isTrue()),
      Ensure.that(TheLandingPage.formsCardIsPresent(), isTrue()),
      Ensure.that(
        TheLandingPage.alertsFrameAndWindowsCardIsPresent(),
        isTrue(),
      ),
      Ensure.that(TheLandingPage.widgetsCardIsPresent(), isTrue()),
      Ensure.that(TheLandingPage.interactionsCardIsPresent(), isTrue()),
      Ensure.that(TheLandingPage.bookStoreApplicationCardIsPresent(), isTrue()),
    );
  });

  it("Section Elements – Text Box", async ({ actor }) => {
    await actor.attemptsTo(
      Landing.clickElementsCard(),
      Elements.clickTextBoxMenuItem(),
      TextBox.enterFullName("John Doe"),
      TextBox.enterEmail("john.doe@example.com"),
      TextBox.clickSubmitButton(),
      Ensure.that(TheTextBoxPage.nameOutputIsVisible(), isTrue()),
      Ensure.that(TheTextBoxPage.emailOutputIsVisible(), isTrue()),
    );
  });

  it("Section Forms – Practice Form", async ({ actor }) => {
    await actor.attemptsTo(
      Landing.clickFormsCard(),
      Forms.clickPracticeFormMenuItem(),
      PracticeForm.fillName("John"),
      PracticeForm.fillLastName("Doe"),
      PracticeForm.selectMaleGender(),
      PracticeForm.fillMobileNumber("1234567890"),
      PracticeForm.clickSubmitButton(),
      Ensure.that(
        ThePracticeFormPage.thanksForSubmittingTheFormModalIsVisible(),
        isTrue(),
      ),
    );
  });

  it("Section Alerts, Frame & Windows", async ({actor})=>{
      await actor.attemptsTo(
        Landing.clickAlertsFrameAndWindowsCard(),
        AlertsWindows.clickAlertsMenuItem(),
        Alerts.clickAlertButton(),
        Ensure.that(ModalDialog.lastDialogState(), equals('dismissed')),
      );
    });









});
