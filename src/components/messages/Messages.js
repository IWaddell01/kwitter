import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { messages } from "../../redux/actions/messages";
import { v4 as uuid } from "uuid";

import "./Messages.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Panel, PanelGroup } from "rsuite";

export const Messages = () => {
  const messageFeed = useSelector((state) => state.messages.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(messages());
  }, []);

  console.log(messageFeed);
  return (
    <React.Fragment>
      {messageFeed &&
        messageFeed.messages.map((data) => (
          <PanelGroup>
            <div key={uuid()} className="usersList">
              <Panel header={data.text}>
                User Name: {data.username} <br />
                Date: {data.createdAt} <br />
              </Panel>
            </div>
          </PanelGroup>
        ))}
    </React.Fragment>
  );
};
