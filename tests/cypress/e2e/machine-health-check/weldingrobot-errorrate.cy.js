/// <reference types="cypress" />

// "errorRate": {
//     "normalRange": [0.1, 1.0],
//   },
// "vibrationLevel": {
//     "normalRange": [1.0, 5.0],
//  },

describe("Welding Robot", () => {
  it("Welding Robot - errorRate normal range", () => {
    let URL = "http://localhost:3001/machine-health";

    let payload0 = {
      machines: {
        weldingRobot: { errorRate: "0.09" },
      },
    };
    let payload1 = {
      machines: {
        weldingRobot: { errorRate: "0.1" },
      },
    };
    let payload2 = {
      machines: {
        weldingRobot: { errorRate: "0.5" },
      },
    };
    let payload3 = {
      machines: {
        weldingRobot: { errorRate: "0.9" },
      },
    };
    let payload4 = {
      machines: {
        weldingRobot: { errorRate: "1.0" },
      },
    };
    let payload5 = {
      machines: {
        weldingRobot: { errorRate: "1.1" },
      },
    };

    cy.request("POST", URL, payload0).then((response) => {
      expect(response.body).to.have.property("factory", "100.00"); // true
      expect(response.body.machineScores.weldingRobot).to.be.eq("100.00"); // true
    });

    cy.request("POST", URL, payload1).then((response) => {
      expect(response.body).to.have.property("factory", "50.00"); // true
      expect(response.body.machineScores.weldingRobot).to.be.eq("50.00"); // true
    });

    cy.request("POST", URL, payload2).then((response) => {
      expect(response.body).to.have.property("factory", "72.22"); // true
      expect(response.body.machineScores.weldingRobot).to.be.eq("72.22"); // true
    });

    cy.request("POST", URL, payload3).then((response) => {
      expect(response.body).to.have.property("factory", "94.44"); // true
      expect(response.body.machineScores.weldingRobot).to.be.eq("94.44"); // true
    });

    cy.request("POST", URL, payload4).then((response) => {
      expect(response.body).to.have.property("factory", "100.00"); // true
      expect(response.body.machineScores.weldingRobot).to.be.eq("100.00"); // true
    });

    cy.request("POST", URL, payload5).then((response) => {
      expect(response.body).to.have.property("factory", "0.00"); // true
      expect(response.body.machineScores.weldingRobot).to.be.eq("0.00"); // true
    });
  });
});
