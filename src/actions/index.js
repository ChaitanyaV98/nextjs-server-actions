"use server";
import { connectToDB } from "@/database";
import User from "@/models/user";
export async function fetchListOfProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const jsonData = await res.json();
  return jsonData?.products;
}

//what and all server actions we can do

//1. Add new user action

export async function addNewUserAction(formData) {
  await connectToDB();
  try {
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      return {
        success: true, // Correct
        message: "User data is added successfully",
      };
    }
  } catch (e) {
    console.log("Error in add action", e);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
}
//2. fetch user action
//3. update user action
//4. delete user action
