import React from "react";

type Props = {
  children: React.ReactNode;
};

const Badge = ({ children }: Props) => {
  return (
    <>
      {children === "완료" ? (
        <div className="badge">{children}</div>
      ) : (
        <div className="badge inactive">{children}</div>
      )}
    </>
  );
};

export default Badge;
