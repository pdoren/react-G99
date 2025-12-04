import defaultUser from "../../../public/imgs/user.png";
import { useUser } from "../../context/user/UserProvider";

const Profile = () => {
  const email = "usuario@gmail.com";
  const { logout } = useUser();

  function onLogout() {
    console.log("Logout");
    logout();
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light py-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="card p-4 text-center" style={{ minWidth: "70%" }}>
        {/* Imagen del usuario */}
        <img
          src={defaultUser}
          alt="Usuario"
          className="rounded-circle mb-3"
          width="120"
          height="120"
        />

        {/* Email */}
        <h5 className="mb-3">{email}</h5>

        {/* Botón de cerrar sesión */}
        <button className="btn btn-outline-danger" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
