import React from "react";
import axiosInstance from "../../../utils/API/API";
import { Button } from "reactstrap";
import * as  PropTypes from "prop-types";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import urls from "../../../utils/API/endpoint";
import { intl } from "../../../utils/intl";

class ConfigRow extends React.Component {
    constructor(props, context) {
        super(props, context);
        let { remote, remoteName } = this.props;
        remote["name"] = remoteName;
        this.state = {
            remote: remote
        };
        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onUpdateClicked = this.onUpdateClicked.bind(this);

    }


    onUpdateClicked = () => {
        const { name } = this.state.remote;
        this.props.history.push("/newdrive/edit/" + name);
    };

    // TODO: Delete config functionality
    onDeleteClicked() {
        const { name } = this.state.remote;
        let { refreshHandle } = this.props;

        // Delete http request
        if (window.confirm(`${intl.formatMessage({
            id: "RemoteManagement.ShowConfig.ConfigRow.areYouSure",
            defaultMessage: "Are you sure you wish to delete",
        })} ${name}${intl.formatMessage({
            id: "RemoteManagement.ShowConfig.ConfigRow.cannotRestore",
            defaultMessage: "? You cannot restore it once it is deleted.",
        })}`)) {
            axiosInstance.post(urls.deleteConfig, { name: name }).then(
                (res) => {
                    // console.log(res);
                    // Refresh the parent component
                    refreshHandle();
                    toast.info(`${intl.formatMessage({
                        id: "RemoteManagement.ShowConfig.ConfigRow.configDelete",
                        defaultMessage: "Config delete",
                    })}`);
                }, (err) => {
                    // console.log(`Error occurred: ${err}`);
                    toast.error(`${intl.formatMessage({
                        id: "RemoteManagement.ShowConfig.ConfigRow.errorConfigDelete",
                        defaultMessage: "Error deleting config",
                    })}`)
                }
            )
        }
    }


    render() {
        const { name, type } = this.state.remote;
        const { sequenceNumber } = this.props;
        return (
            <tr data-test="configRowComponent">
                <th scope="row">{sequenceNumber}</th>
                <td>{name}</td>
                <td>{type}</td>
                <td>
                    <Button className={"bg-info mr-2"} onClick={this.onUpdateClicked}>
                        {intl.formatMessage({
                            id: "RemoteManagement.ShowConfig.ConfigRow.Update",
                            defaultMessage: "Update",
                        })}
                    </Button>
                    <Button className={"bg-danger"} onClick={this.onDeleteClicked}>
                        {intl.formatMessage({
                            id: "RemoteManagement.ShowConfig.ConfigRow.Delete",
                            defaultMessage: "Delete",
                        })}
                    </Button>
                </td>
            </tr>
        );
    }
}

const propTypes = {
    remote: PropTypes.object.isRequired, // Name of the remote to perform operations
    refreshHandle: PropTypes.func.isRequired, // Used to refresh the parent component upon change
    sequenceNumber: PropTypes.number.isRequired,
    remoteName: PropTypes.string.isRequired,

};

ConfigRow.propTypes = propTypes;

export default withRouter(ConfigRow);