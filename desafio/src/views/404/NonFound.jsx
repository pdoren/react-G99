import { Link } from "react-router-dom";

const NonFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <h1 className="display-1 fw-bold text-danger">404 🍕</h1>
      <h2 className="mb-3">Página No Encontrada</h2>
      <p className="text-muted text-center w-75">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>

      <Link to="/" className="btn btn-primary py-1 px-2">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NonFound;
