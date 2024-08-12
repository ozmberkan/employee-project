// data.js
import { AiFillHome } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { signOut } from "firebase/auth";
import { auth } from "~/firebase";


export const defaultUser = {
  fullName : "Muhammed Berkan Özmen"
}

export const icons = [
  { Icon: AiFillHome,
    link : "/"
   },
  { Icon: IoMdPersonAdd,
    link : "/add"
   },
  { Icon: FaListUl,
    link : "/list"
   },
   { 
    Icon: PiSignOutBold,
    onClick: async () => {
      try {
        await signOut(auth);
        console.log("User signed out");
      } catch (error) {
        console.log(error.message);
      }
    }
  }
]

export const iTypeTitle = [
  { title : "4A"},
  { title : "4B"},
  { title : "4C"},
]

export const tableTitle = [
  { title : "Tc. No."},
  { title : "Ad"},
  { title : "Soyad"},
  { title : "Doğum Tarihi"},
  { title : "Sigorta Tipi"},
  { title : "Meslek"},
  { title : "Sürücü Belgesi"},
]


export const listTitle = [
  { title : "Tc. No."},
  { title : "Ad"},
  { title : "Soyad"},
  { title : "Doğum Tarihi"},
  { title : "Sigorta Tipi"},
  { title : "Meslek"},
  { title : "Sürücü Belgesi"},
  { title : "İşlemler"},
]

export const addInputField = [
  { label: "Ad", type: "text", placeholder: "Ad", name: "name" },
  { label: "Soyad", type: "text", placeholder: "Soyad", name: "surname" },
  { label: "Yaş", type: "number", placeholder: "Yaş", name: "age" },
  { label: "Doğum Tarihi", type: "date", name: "date" },
  { label: "Tc. No.", type: "text", placeholder: "Tc. No.", name: "tcNo" },
  {
    label: "Sigorta Tipi",
    type: "select",
    name: "iType",
    options: [
      {value : "" , label : "Seçiniz"},
      {value : "4A" , label : "4A"},
      {value : "4B" , label : "4B"},
      {value : "4C" , label : "4C"},
    ]
  },
  {
    label: "Meslek",
    type: "select",
    name: "job",
    options: [
      { value: '', label: 'Seçiniz' },
      { value: 'yazilim-gelistirici', label: 'Yazılım Geliştirici' },
      { value: 'tasarimci', label: 'Tasarımcı' },
      { value: 'ogretmen', label: 'Öğretmen' },
      { value: 'doktor', label: 'Doktor' },
      { value: 'avukat', label: 'Avukat' },
      { value: 'muhendis', label: 'Mühendis' },
      { value: 'hemsire', label: 'Hemşire' },
      { value: 'muhasebeci', label: 'Muhasebeci' },
      { value: 'sanatci', label: 'Sanatçı' },
      { value: 'tamirci', label: 'Tamirci' },
    ] 
  },
  {
    label: "Sürücü Ehliyeti",
    type: "select",
    name: "dlicense",
    options: [
      {value : "", label : "Seçiniz"},
      {value : "yes", label : "Var"},
      {value : "no", label : "Yok"},
    ] 
  }
];

export const exampleData = [
  {
    tcNo: "18713175014",
    name:"Berkan",
    surname:"Özmen",
    bdate: "25.04.2001",
    itype: "4A",
    job: "Yazılımcı",
    dlicense:  "Var"
  }
]