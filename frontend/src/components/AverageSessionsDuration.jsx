import PropTypes from "prop-types";
import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  Rectangle,
  Tooltip,
  Line,
} from "recharts";

function AverageSessionsDuration(props) {
  const sessionsForAreaChart = () =>
    props.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }));

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  const xAxisValue = () =>
    props.sessions.map((session) => days[session.day - 1]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip2-container">
          <p className="tooltip2-text">{payload[0].value} min</p>
        </div>
      );
    }
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
      })
    ),
  };

  const CustomCursor = (props) => {
    const points = props.points[0];
    const width = props.width;
    const height = props.height;
    const x = points.x;
    const y = points.y;
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={x}
        y={y - 10}
        width={width}
        height={height + 50}
      />
    );
  };

  CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })
    ),
    width: PropTypes.number,
    height: PropTypes.number,
  };

  return (
    <div className="average-sessions-duration">
      <ResponsiveContainer width="100%" height="100%">
        <p className="average-sessions-duration__text">
          Durée moyenne des <br />
          sessions
        </p>
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
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
            </linearGradient>
          </defs>
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
            style={{ transform: "translateX(3px) scaleX(0.98)" }}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeOpacity={0.7}
            strokeWidth={2}
            dot={false}
            activeDot={{ fill: "#ffffff", r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessionsDuration.propTypes = {
  sessions: PropTypes.array.isRequired,
};

export default AverageSessionsDuration;
