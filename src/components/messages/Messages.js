import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { actions } from "../../redux/actions/";
import "./Messages.css";

export const Messages = () => {
    const { loading, error } = useSelector((state) => ({
      loading: state.auth.loading,
      error: state.auth.error,
    }));
  
    const [state, setState] = useState({
      username: "",
      displayName: "",
      password: "",
    });
  

  
    return (
      <React.Fragment>
        Test
      </React.Fragment>
    );
  };