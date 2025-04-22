import React from "react";

function Plan() {
  return (
    <div className="py-20">
      <div className="container max-w-[1320px] mx-auto p-10">
        <h2 className="text-4xl font-semibold">Choose Your Plan</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde itaque,
          debitis tenetur numquam consectetur mollitia?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
                <h4>Free</h4>
                <h2>$0</h2>
                <p>Capture ideas and find them quickly</p>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
