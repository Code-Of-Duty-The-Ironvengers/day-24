import { Link } from "react-router-dom";
import codeOfDuty from "../data";

function UserDashboard() {
  return (
    <div>
      Hello, from users dashboard
      <div>
        {codeOfDuty.map((student) => (
          <div key={student.name}>
            <Link to={`/user/${student.name.toLowerCase()}`}>
              {student.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
