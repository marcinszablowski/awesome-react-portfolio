import React from 'react';

import Header from "../shared/Header";

const BaseLayout = props => {
  return (
    <div className="base-wrapper">
      <Header/>
      {props.children}
    </div>
  );
};

export default BaseLayout;