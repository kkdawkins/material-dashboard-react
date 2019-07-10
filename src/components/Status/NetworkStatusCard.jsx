import React from "react";
import Icon from "@material-ui/core/Icon";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Danger from "components/Typography/Danger.jsx";
import Warning from "@material-ui/icons/Warning";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class NetworkStatusCard extends React.Component {
    state = {
        success: 0,
        lastStatusCode: 404
    };
    render () {
        const { classes } = this.props;
        return (
            <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>compare_arrows</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Connectivity</p>
              <h3 className={classes.cardTitle}>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                IoT Hub Unreachable (404)
              </div>
            </CardFooter>
          </Card>
        )
    }
}

export default withStyles(dashboardStyle)(NetworkStatusCard);