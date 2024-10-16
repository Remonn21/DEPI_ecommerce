import { useMutation } from "react-query";
import { publicClient } from "./axios";

export const createOrderRequest = async (formData) => {
   const response = await publicClient.post("/products/statistics", formData);

   return response.data;
};

export const useCreateOrder = () => {
   const { mutateAsync: createOrder, isLoading } =
      useMutation(createOrderRequest);

   return { createOrder, isLoading };
};
