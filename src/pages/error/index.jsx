import "./style.scss";
import {Container} from "@layouts";

const index = () => {
  return (
    <Container>
      <div className="p-4 bg-red-300 text-center text-white text-bold text-3xl font-mono">
        <h1>404 NOT FOUND</h1>
      </div>
    </Container>
  );
};

export default index;
