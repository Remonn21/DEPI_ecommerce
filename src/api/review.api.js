import { useMutation } from "react-query";
import { protectedClient } from "./axios";
import { toast } from "sonner";

export const createReviewRequest = async (formData) => {
   const response = await protectedClient.post("/reviews", formData);

   return response.data;
};

export const useCreateReview = () => {
   const {
      mutateAsync: createReview,
      isLoading,
      isSuccess,
      data: response,
   } = useMutation(createReviewRequest, {
      onSuccess: () => {
         toast.success("review created successfully");
      },
      onError: () => {
         toast.error("Error while creating review");
      },
   });

   return { createReview, isLoading, isSuccess, response };
};
