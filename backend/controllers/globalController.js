
import dotenv from "dotenv";
dotenv.config();

export const home = async (req, res) => {
  const countryLists = await CountryList.find();
  res.render("home", { title: "Home",countryLists });
};