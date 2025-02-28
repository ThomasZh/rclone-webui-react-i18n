import React from "react";
import { Col, Row } from "reactstrap";
import BackendStatusCard from "../Base/BackendStatusCard/BackendStatusCard";
import RunningJobs from "../Base/RunningJobs";
import BandwidthStatusCard from "../Base/BandwidthStatusCard/BandwidthStatusCard";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { IP_ADDRESS_KEY } from "../../utils/Constants";
import { intl } from "../../utils/intl";

class Home extends React.Component {
  render() {
    const { checkStatus } = this.props;
    const ipAddress = localStorage.getItem(IP_ADDRESS_KEY);
    return (
      <div data-test="homeComponent">
        <Row>
          <Col lg={6} sm={12}>
            <BackendStatusCard ipAddress={ipAddress} mode={"card"} />
          </Col>
          <Col lg={6} sm={12}>
            <BandwidthStatusCard />
          </Col>
        </Row>
        <h2>
          {intl.formatMessage({
            id: "Home.Jobs",
            defaultMessage: "Jobs",
          })}
        </h2>
        {checkStatus ? (
          <RunningJobs mode={"full-status"} />
        ) : (
          <p>
            {intl.formatMessage({
              id: "Home.NotMonitoring",
              defaultMessage: "Not Monitoring",
            })}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  checkStatus: state.status.checkStatus,
});

Home.propTypes = {
  checkStatus: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {})(Home);
