import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: admin } = useQuery({
    queryKey: [user?.email, "admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [admin];
};

export default useAdmin;
