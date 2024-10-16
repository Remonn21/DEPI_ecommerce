import { login } from "@/api/auth.api";
import { useMutation } from "react-query";
import { toast } from "sonner";

export const useAuth = () => {
   return useMutation(login, {
      onSuccess: (data) => {
         console.log(data);
      },
      onError: (error) => {
         toast.error(error.response.data.message);
      },
   });
};
