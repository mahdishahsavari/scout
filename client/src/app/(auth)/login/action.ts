import { z } from "zod";
import axios from "axios";

const formSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function handleFormSubmit(formData: FormData) {
  const parsedData = formSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedData.success) {
    return { errors: parsedData.error.flatten().fieldErrors };
  }

  try {
    const response = await axios.post(
      "http://localhost:8000/api/auth/login",
      parsedData.data,
      { withCredentials: true }
    );

    return { success: true, message: "Login Successfully" };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        errors: {
          server: error.response.data.message || "Login Failed!",
        },
      };
    } else {
      return { errors: { server: "An unexpected error occurred." } };
    }
  }
}
