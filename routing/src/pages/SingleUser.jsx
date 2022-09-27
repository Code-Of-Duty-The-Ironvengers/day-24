import React from "react";
import { useParams } from "react-router-dom";
import codeOfDuty from "../data";

function SingleUser(props) {
  console.log("props:", props);
  const reqParams = useParams();

  const theStudent = codeOfDuty.find(
    (student) => student.name.toLowerCase() === reqParams.name.toLowerCase()
  );

  return (
    <div>
      What! My name is: {reqParams.name} and I come from {theStudent.from}
    </div>
  );
}

export default SingleUser;
