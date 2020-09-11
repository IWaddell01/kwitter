import React from "react";
import { Button } from "rsuite";
import "./Loader.css"

/*
https://lmgtfy.com/?q=react+loading+spinner+components
There are many more on the web use one of these or create your own!
*/

export const Loader = () => (
  <>
    <Button className="loaderButton" appearance="ghost" loading>
      Loading
    </Button>
  </>
);
