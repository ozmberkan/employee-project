import React, { useState } from "react";
import { nanoid } from "nanoid";

const IdNo = () => {
  const [id, setId] = useState("");

  const createId = () => {
    setId(nanoid());
  };

  return (
    <div className="w-1/2 h-32 rounded-xl bg-black flex justify-center items-center">
      <button
        className="px-4 py-2 border border-[#ccc] rounded-l-xl text-[#ccc] font-medium hover:bg-[#181818]"
        onClick={createId}
      >
        Sicil No Oluştur
      </button>
      <div className="px-4 py-2 min-w-[250px] border rounded-r-xl bg-[#3a3a3a] text-white">
        {id ? id.slice(0, 10) : "Henüz oluşturulmadı!"}
      </div>
    </div>
  );
};

export default IdNo;
