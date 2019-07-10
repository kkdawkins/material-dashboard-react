import React from "react";
import Icon from "@material-ui/core/Icon";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class DeploymentStatusCard extends React.Component {
    state = {
        lastSuccessfulDeploymentDate: 0,
        lastDeploymentStatusCode: 404
    };
    render () {
        const { classes } = this.props;
        return (
            <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Module Deployment</p>
              <h3 className={classes.cardTitle}>Complete</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        )
    }
}

export default withStyles(dashboardStyle)(DeploymentStatusCard);