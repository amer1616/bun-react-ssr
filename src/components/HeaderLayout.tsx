import React from "react";

const HeeaderLayout = (props: { title: string; children: React.ReactNode }) => {
  return (
    <div className="header-layout">
      <div>{props.children}</div>
      <h1 className="text-4xl text-center text-rose-500 font-bold underline">
        {props.title}
      </h1>
    </div>
  );
};

export default HeeaderLayout;
