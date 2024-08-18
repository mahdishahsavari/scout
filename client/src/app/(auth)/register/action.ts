import { z } from "zod";
import axios from "axios";

const formSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export async function handleFormSubmit(formData: FormData) {
  const parsedData = formSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  });

  if (!parsedData.success) {
    return { errors: parsedData.error.flatten().fieldErrors };
  }

  try {
    await axios.post(
      "http://localhost:8000/api/auth/register",
      parsedData.data
    );
    return { success: true, message: "Registered Successfully" };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        errors: {
          server: error.response.data.message || "Registration Failed!",
        },
      };
    } else {
      return { errors: { server: "An unexpected error occurred." } };
    }
  }
}
