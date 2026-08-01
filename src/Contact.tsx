import type { Language } from "./App";
const text = {
  pt: {
    contact:"Contacte-me",
},
  en: {
    contact:"Contact me"},
};
interface AboutProps {
  language: Language;
}
function Contact({ language }: AboutProps) {
  return (
    <>
      <div className="text-center p-2 text-white" id="contact">
        <h2 className="block text-xl font-bold my-1 mx-0">{text[language].contact}</h2>
        <a href="mailto:rodrigues.n.andre46@gmail.com" className="mx-1 cursor-pointer underline underline-offset-2 transition duration-300 hover:scale-110 hover:text-blue-500">Email</a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/andre-rodrigues-b45009359/" target="_blank" className="mx-1 cursor-pointer underline underline-offset-2 transition duration-300 hover:scale-110 hover:text-blue-500">LinkedIn</a>
        
      </div>
    </>
  );
}
export default Contact;
