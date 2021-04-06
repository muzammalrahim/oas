import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { UserStatusCssClasses } from "../UsersUIHelpers";
import * as actions from "../../../_redux/users/usersActions";
import { useUsersUIContext } from "../UsersUIContext";

const selectedUsers = (entities, ids) => {
  const _users = [];
  ids.forEach((id) => {
    const user = entities.find((el) => el.id === id);
    if (user) {
      _users.push(user);
    }
  });
  return _users;
};

export function UsersUpdateStatusDialog({ show, onHide }) {
  // Users UI Context
  const usersUIContext = useUsersUIContext();
  const usersUIProps = useMemo(() => {
    return {
      ids: usersUIContext.ids,
      setIds: usersUIContext.setIds,
      queryParams: usersUIContext.queryParams,
    };
  }, [usersUIContext]);

  // Users Redux state
  const { users, isLoading } = useSelector(
    (state) => ({
      users: selectedUsers(state.users.entities, usersUIProps.ids),
      isLoading: state.users.actionsLoading,
    }),
    shallowEqual
  );

  // if there weren't selected users we should close modal
  useEffect(() => {
    if (usersUIProps.ids || usersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for updateing user by ids
    dispatch(actions.updateUsersStatus(usersUIProps.ids, status)).then(
      () => {
        // refresh list after deletion
        dispatch(actions.fetchUsers(usersUIProps.queryParams)).then(
          () => {
            // clear selections list
            usersUIProps.setIds([]);
            // closing delete modal
            onHide();
          }
        );
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status has been updated for selected users
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block cursor-default">
        {isLoading && (
          <div className="overlay-layer bg-transparent">
            <div className="spinner spinner-lg spinner-warning" />
          </div>
        )}
        <div className="list-timeline list-timeline-skin-light padding-30">
          <div className="list-timeline-items">
            {users.map((user) => (
              <div className="list-timeline-item mb-3" key={user.id}>
                <span className="list-timeline-text">
                  <span
                    className={`label label-lg label-light-${
                      UserStatusCssClasses[user.status]
                    } label-inline`}
                    style={{ width: "60px" }}
                  >
                    ID: {user.id}
                  </span>{" "}
                  <span className="ml-5">
                    {user.manufacture}, {user.model}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className={`form-control ${UserStatusCssClasses[status]}`}
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Selling</option>
            <option value="1">Sold</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-info btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
