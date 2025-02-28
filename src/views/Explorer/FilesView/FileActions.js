import React from "react";
// import { Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from "reactstrap";
import { Button } from "reactstrap";
import * as PropTypes from "prop-types";
import * as RclonePropTypes from "../../../utils/RclonePropTypes";
// import { intl } from "../../../utils/intl";

function FileActions({ downloadHandle, deleteHandle, item, linkShareHandle }) {
    const confirmDelete = (deleteHandle, item) => {
        if (window.confirm(`Are you sure you want to delete ${item.Name}`)) {
            deleteHandle(item);
        }
    }

    const { IsDir } = item;
    // let {ID, Name} = item;
    // // Using fallback as fileName when the ID is not available (for local file system)
    // if (ID === undefined) {
    //     ID = Name;
    // }

    return (
        <div data-test="fileActionsComponent">
            {!IsDir && <Button color="link" onClick={() => downloadHandle(item)} data-test="btn-download">
                <i className={"fa fa-cloud-download fa-lg d-inline"} />
            </Button>}
            {/* <Button color="link">
                <i className="fa fa-info-circle" />
            </Button> */}
           
            <Button onClick={() => confirmDelete(deleteHandle, item)} color="delete" >
                <i className="fa fa-remove fa-lg d-inline text-danger" />
            </Button>

            {/* <UncontrolledButtonDropdown>
                <DropdownToggle color="link">
                    <i className="fa fa-ellipsis-v" />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        {intl.formatMessage({
                            id: "Explorer.FilesView.FileActions.Actions",
                            defaultMessage: "Actions",
                        })}
                    </DropdownItem>
                    <DropdownItem data-test="btn-share-with-link" onClick={() => linkShareHandle(item)}><i
                        className="fa fa-share fa-lg d-inline" />
                        {intl.formatMessage({
                            id: "Explorer.FilesView.FileActions.shareWithLink",
                            defaultMessage: "Share with link",
                        })}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem data-test="btn-delete-item" onClick={() => confirmDelete(deleteHandle, item)}><i
                        className="fa fa-remove fa-lg d-inline text-danger" />
                        {intl.formatMessage({
                            id: "Explorer.FilesView.FileActions.Delete",
                            defaultMessage: "Delete",
                        })}
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown> */}
        </div>
    )
}

FileActions.propTypes = {
    downloadHandle: PropTypes.func.isRequired,
    deleteHandle: PropTypes.func.isRequired,
    item: RclonePropTypes.PROP_ITEM.isRequired,
    linkShareHandle: PropTypes.func.isRequired

}

export default FileActions;