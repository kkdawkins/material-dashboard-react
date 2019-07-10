import React from "react";
import Icon from "@material-ui/core/Icon";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Danger from "components/Typography/Danger.jsx";
import Warning from "@material-ui/icons/Warning";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Table from "components/Table/Table.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class DeployedModuleStatus extends React.Component {
    state = {
        moduleCount: 4,
        lastStatusCode: 404,
        tableStatusColor: "warning"
    };
    render () {
        const { classes } = this.props;
        return (
            <Card>
            <CardHeader color={this.state.tableStatusColor}>
              <h4 className={classes.cardTitleWhite}>Deployed Modules</h4>
              <p className={classes.cardCategoryWhite}>
                You currently have {this.state.moduleCount} modules deployed.
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor={this.state.tableStatusColor}
                tableHead={["ID", "Name", "Author", "Version", "Deployment Date", "Status"]}
                tableData={[
                  ["1", "Edge Hub", "Microsoft", "1.0.6", "Sep 4, 2019", "Healthy"],
                  ["2", "Edge Agent", "Microsoft", "1.0.6", "Sep 4, 2019", "Healthy"],
                  ["3", "Simulated Temp Sensor", "Microsoft", "1.0.3", "Sep 5, 2019", "Healthy"],
                  ["4", "Machine Learning Module", "Fabrikam", "0.5.1", "July 4, 2019", "Healthy"]
                ]}
              />
            </CardBody>
          </Card>
        )
    }
}

export default withStyles(dashboardStyle)(DeployedModuleStatus);