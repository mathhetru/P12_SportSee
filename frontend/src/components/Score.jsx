import PropTypes from "prop-types";
// import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

function Score(props) {
  const scoreName = () => {
    return [{ name: "score", value: props.score * 100, fill: "#e60000" }];
  };

  return (
    <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <p className="score__title">Score</p>
        <div className="score-text">
          <p className="score-text__percentage">{props.score * 100}%</p>
          <p className="score-text__objectif">
            de votre
            <br />
            objectif
          </p>
        </div>
        <RadialBarChart
          startAngle={135}
          endAngle={-225}
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={scoreName()}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <circle cx="50%" cy="50%" fill="#FFFFFF" r="34%"></circle>
          <RadialBar
            minAngle={15}
            clockWise
            cornerRadius={20}
            background={{ fill: "#FBFBFB" }}
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
