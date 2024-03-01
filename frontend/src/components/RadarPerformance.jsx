import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarPerformance(props) {
  const translateValues = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Énergie",
    6: "Cardio",
  };

  const performanceNames = () =>
    props.data.map((data) => ({
      value: data.value,
      kind: translateValues[data.kind],
    }));

  return (
    <div className="radar-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={80} innerRadius={10} data={performanceNames()}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis stroke="#fff" tickLine={false} dataKey="kind" />
          <Radar dataKey="value" fill="#e60000" fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarPerformance.propTypes = {
  kinds: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default RadarPerformance;
