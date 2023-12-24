import React from "react";
import Button from "../../Components/Button"

const Home = () => {
  const buttonNames = ["Blog", "Account", "Edit-Account", "Blog-Page", "Discussion", "Discussion-Page", "Featured", "Feedback", "Thank-You", "Events-Calender"];

  return (
    <>
      <div className="p-8 flex flex-col">
        <h1 className="text-5xl text-blue-500 font-bold">Landing Page</h1>
        <div className="flex mt-10 flex-wrap justify-start gap-4 items-center">
          {buttonNames.map((name) => (
            <Button key={name} name={name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
