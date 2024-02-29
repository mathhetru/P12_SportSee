import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarPerformance(props) {
  const translateValues = (value) => {
    if (value === "1") return "Intensité";
    if (value === "2") return "Vitesse";
    if (value === "3") return "Force";
    if (value === "4") return "Endurance";
    if (value === "5") return "Énergie";
    if (value === "6") return "Cardio";
  };

  const performanceNames = () =>
    props.data.map((data) => ({
      value: data.value,
      kind: translateValues(data.kind.toString()),
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
