import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import { PATH } from "../../App";

class Confirmation extends Component {
  render() {
    return (
      <div>
        <p>{LOCALIZE.emibTest.confirmationPage.submissionConfirmed}</p>
        <form method="get" action={PATH.prototype}>
          <button type="submit" className="btn btn-primary">
            {LOCALIZE.commons.exitTest}
          </button>
        </form>
      </div>
    );
  }
}

export default Confirmation;
