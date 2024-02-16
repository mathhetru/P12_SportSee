import PropTypes from "prop-types";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
} from "recharts";

function AverageSessionsDuration(props) {
  const sessionsForAreaChart = () => {
    const sessionsToDisplay = props.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));
    return sessionsToDisplay;
  };

  const days = ["L", "M", "M", "J", "V", "S", "D"];
  const xAxisValue = () =>
    props.sessions.map((session) => days[session.day - 1]);

  return (
    <div className="average-sessions-duration">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={sessionsForAreaChart()}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey={xAxisValue}
            tick={{
              fill: "white",
              fontSize: "12px",
              fontWeight: 400,
              opacity: 0.7,
            }}
            tickLine={false}
            axisLine={false}
            style={{ transform: "translateX(10px) scaleX(0.9)" }}
          />
          <Tooltip />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeOpacity={0.7}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessionsDuration.propTypes = {
  sessions: PropTypes.object.isRequired,
};

export default AverageSessionsDuration;
