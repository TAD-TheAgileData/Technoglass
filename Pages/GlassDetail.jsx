import { useParams, useNavigate } from "react-router-dom";

const GlassDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>{type.toUpperCase()} Glass</h1>
      <p>Detailed information about {type} glass.</p>
    </div>
  );
};

export default GlassDetail;
