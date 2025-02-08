import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2E2E2E] text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-500">404</h1>
        <p className="mt-4 text-2xl font-semibold">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <h1 className="text-4xl font-semibold mt-4">
          We are updating soon, stay with us... thank you 😊
        </h1>
      </div>
      <div className="mt-8">
        <div className="items-center justify-center text-center">
          <button
            className="btn btn-primary mt-6 px-6 py-2"
            onClick={() => navigate("/")}
          >
            Return to the homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
