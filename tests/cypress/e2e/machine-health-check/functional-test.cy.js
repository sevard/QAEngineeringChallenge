/// <reference types="cypress" />

import { header } from "../../pageobjects/header";
import { footer } from "../../pageobjects/footer";
import { indexPage } from "../../pageobjects/index-page";
import { twoPage } from "../../pageobjects/two-page";

describe('Welding Robots', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('verifies page title change', () => {
    header.assertHeaderTitle('Machine State');
    indexPage.clickPleaseLogPartLink();
    header.assertHeaderTitle('Log Part');
  });
  it('logs a part with "Please log a part to check machine health" link', () => {    
    indexPage.clickPleaseLogPartLink();

    twoPage.selectMachineName('weldingRobot');
    twoPage.selectPartName('errorRate');
    twoPage.clearPartValueInput();
    twoPage.enterToPartValueInput('0.1');
    twoPage.clickSaveButton();
    footer.clickMachineStateIcon();
    header.assertHeaderTitle('Machine State');
    
    indexPage.clickCalculateHealthButton();
    indexPage.assertPartNameInfo('errorRate: 0.1');
    indexPage.assertFactoryHealthScores('50.00');
    indexPage.assertMachineHealthScores('Welding Robot: 50.00'); 
  });
  it('logs a part with "Log Part" icon in the footer', () => {    
    indexPage.clickPleaseLogPartLink();

    twoPage.selectMachineName('weldingRobot');
    twoPage.selectPartName('errorRate');
    twoPage.clearPartValueInput();
    twoPage.enterToPartValueInput('0.1');
    twoPage.clickSaveButton();
    footer.clickMachineStateIcon();
    header.assertHeaderTitle('Machine State');
    indexPage.clickCalculateHealthButton();

    indexPage.assertPartNameInfo('errorRate: 0.1');
    indexPage.assertFactoryHealthScores('50.00');
    indexPage.assertMachineHealthScores('Welding Robot: 50.00'); 
  });
  it('resets data using "Reset Machine Data" button', () => {
    header.assertHeaderTitle('Machine State');
    footer.clickLogPartIcon();
    header.assertHeaderTitle('Log Part');
    
    twoPage.selectMachineName('weldingRobot');
    twoPage.selectPartName('errorRate');
    twoPage.clearPartValueInput();
    twoPage.enterToPartValueInput('0.1');
    twoPage.clickSaveButton();

    footer.clickMachineStateIcon();
    
    header.assertHeaderTitle('Machine State');
    
    indexPage.clickCalculateHealthButton();
    indexPage.assertPartNameInfo('errorRate: 0.1');
    indexPage.assertFactoryHealthScores('50.00');
    indexPage.assertMachineHealthScores('Welding Robot: 50.00'); 

    // Verify data is wiped out from the index page
    indexPage.clickResetMachineDataButton();
    indexPage.elements.getPartNameInfo().should('be.empty');
    indexPage.elements.getFactoryHealthScoresInfo().should('not.exist');
    indexPage.elements.getMachineHealthScoresInfo().should('not.exist');
  });
});
