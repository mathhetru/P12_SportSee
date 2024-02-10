import { getUserSessions } from "../services/mockDataServices.js";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";

function AverageSessionsDuration() {
  const { id } = useParams();
  const sessionsData = getUserSessions(id);

  const sessionsForAreaChart = () => {
    const sessionsToDisplay = sessionsData.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
    return sessionsToDisplay;
  };

  return (
    <div className="average-sessions-duration">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={300}
          data={sessionsForAreaChart()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis dataKey="sessionLength" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessionsDuration;
