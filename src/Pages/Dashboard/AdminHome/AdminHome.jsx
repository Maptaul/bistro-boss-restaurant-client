import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-2xl">
        <span>Hi, Welcome Back </span>
        {user?.displayName ? "displayName" : "Hi, Welcome Back "}
      </h1>
    </div>
  );
};

export default AdminHome;
