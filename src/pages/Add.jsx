import React from "react";

const Add = () => {
  return (
    <div className=" p-7 w-full flex flex-col gap-y-12 px-12">
      <h1 className="text-4xl font-bold text-zinc-800 flex justify-start  flex-col items-start px-1 gap-y-2">
        Personel Kayıt
        <span className="text-base font-normal text-zinc-400">
          Lütfen bilgileri eksiksiz doldurunuz.
        </span>
      </h1>

      <form className="w-2/3 border bg-white grid grid-cols-2 gap-10 p-12 rounded">
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">İsim</label>
          <input
            type="text"
            placeholder="İsim Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Soy isim</label>
          <input
            type="text"
            placeholder="Soy isim Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Doğum Tarihi</label>
          <input
            type="date"
            placeholder="Yaş Giriniz..."
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Sigorta Türü</label>
          <select
            type="text"
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          >
            <option value="">Sigorta Türü Seçiniz...</option>
            <option value="4A">4A</option>
            <option value="4B">4B</option>
            <option value="4C">4C</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Meslek</label>
          <select
            type="text"
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          >
            <option value="">Meslek Seçiniz...</option>
            <option value="doktor">Doktor</option>
            <option value="muhendis">Mühendis</option>
            <option value="ogretmen">Öğretmen</option>
            <option value="avukat">Avukat</option>
            <option value="polis">Polis</option>
            <option value="asker">Asker</option>
            <option value="mimar">Mimar</option>
            <option value="eczaci">Eczacı</option>
            <option value="hemsire">Hemşire</option>
            <option value="diş_hekimi">Diş Hekimi</option>
            <option value="pilot">Pilot</option>
            <option value="itfaiyeci">İtfaiyeci</option>
            <option value="gazeteci">Gazeteci</option>
            <option value="yazilimci">Yazılımcı</option>
            <option value="şoför">Şoför</option>
            <option value="çiftçi">Çiftçi</option>
            <option value="kuaför">Kuaför</option>
            <option value="tezgahtar">Tezgahtar</option>
            <option value="resepsiyonist">Resepsiyonist</option>
            <option value="sanatci">Sanatçı</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-semibold">Sürücü Ehliyeti</label>
          <select
            type="text"
            className="px-4 py-3 border rounded outline-none focus:ring-1 transition-all focus:ring-offset-1 duration-500 ring-[#a3a3a3] "
          >
            <option value="">Sürücü Belgesi Seçiniz...</option>
            <option value="Var">Var</option>
            <option value="Yok">Yok</option>
          </select>
        </div>
        <button className="row-span-2  w-[100px] bg-[#424242] text-white h-[50px] rounded">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default Add;
