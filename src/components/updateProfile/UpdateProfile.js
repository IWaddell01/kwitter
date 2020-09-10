import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UpdateProfile.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Button } from "rsuite";

export const UpdateProfile = () => {
  return (
    <>
      <form id="update-profile" onSubmit="">
        <label htmlFor="username">Display Name</label>
        <input
          type="text"
          name="displayName"
          placeholder="John Doe"
        />
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          placeholder="John Lennon"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="p@55w0rd"
        />
        <Button appearance="primary" type="submit" >
          Sign Up
        </Button>
      </form>
    </>
  );
};
