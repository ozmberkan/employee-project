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
  { title : "Yaş"},
  { title : "Sigorta Tipi"},
  { title : "Meslek"},
  { title : "Sürücü Ehliyeti"},
  { title : "İşlemler"},
]

export const addInputField = [
  { label: "Tc. No.", type: "text", placeholder: "Tc. No.", name: "tcNo",maxLength: 11 },
  { label: "Ad", type: "text", placeholder: "Ad", name: "name" },
  { label: "Soyad", type: "text", placeholder: "Soyad", name: "surname" },
  { label: "Doğum Tarihi", type: "date", name: "date" },
  { label: "Yaş", type: "number", placeholder: "Yaş", name: "age" },
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
      { value: 'Yazılım Geliştirici', label: 'Yazılım Geliştirici' },
      { value: 'Tasarımcı', label: 'Tasarımcı' },
      { value: 'Öğretmen', label: 'Öğretmen' },
      { value: 'Doktor', label: 'Doktor' },
      { value: 'Avukat', label: 'Avukat' },
      { value: 'Mühendis', label: 'Mühendis' },
      { value: 'Hemşire', label: 'Hemşire' },
      { value: 'Muhasebeci', label: 'Muhasebeci' },
      { value: 'Sanatçı', label: 'Sanatçı' },
      { value: 'Tamirci', label: 'Tamirci' },
    ] 
  },
  {
    label: "Sürücü Ehliyeti",
    type: "select",
    name: "dlicense",
    options: [
      {value : "", label : "Seçiniz"},
      {value : "Var", label : "Var"},
      {value : "Yok", label : "Yok"},
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