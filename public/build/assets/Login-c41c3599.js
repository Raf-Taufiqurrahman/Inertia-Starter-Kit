import{W as o,j as a,a as d,d as m}from"./app-a8716644.js";import{A as c,I as l,a as x,b as u,c as h}from"./AuthLayout-742a99a0.js";import{B as p}from"./Button-fdc24431.js";import{I as j}from"./IconCheck-577b1e33.js";import"./createReactComponent-762429e4.js";function g(){const{data:e,setData:t,post:i,errors:r}=o({email:"",password:""}),n=async s=>{s.preventDefault(),i(route("login"))};return a.jsxs(a.Fragment,{children:[a.jsx(d,{title:"Login"}),a.jsxs(c,{children:[a.jsx("h1",{className:"text-xl font-bold mb-2 text-black",children:"Login"}),a.jsx("p",{className:"text-gray-500 text-xs mb-5",children:"Selamat datang, masukan email dan kata sandi anda untuk melanjutkan."}),a.jsxs("form",{onSubmit:n,children:[a.jsx("div",{className:"mb-4",children:a.jsx(l,{label:"Email",type:"email",placeholder:"Masukan email",icon:a.jsx(x,{size:"20",strokeWidth:"1.5",className:"text-gray-400"}),value:e.email,onChange:s=>t("email",s.target.value),errors:r.email})}),a.jsx("div",{className:"mb-4",children:a.jsx(l,{label:"Kata Sandi",type:"password",placeholder:"Masukan kata sandi",icon:a.jsx(u,{size:"20",strokeWidth:"1.5",className:"text-gray-400"}),value:e.password,onChange:s=>t("password",s.target.value),errors:r.password})}),a.jsx("div",{className:"flex flex-wrap items-center gap-2",children:a.jsx(p,{className:"bg-sky-600 shadow shadow-sky-500 text-white",icon:a.jsx(j,{size:"20",strokeWidth:"1.5"}),label:"Login"})})]})]}),a.jsx("div",{className:"mt-5",children:a.jsxs("div",{className:"text-gray-500",children:["Belum punya akun ? ",a.jsx(m,{href:"/register",className:"text-rose-400 underline",children:"Daftar disini"})]})})]})}g.layout=e=>a.jsx(h,{children:e});export{g as default};