
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">

        {/* Col 1 */}
        <div className="space-y-2 text-center sm:text-left">
          <Link to="/" className="hover:underline block">Home</Link>
          <Link to="https://github.com/priittam/poxnetbackend" target="_blank" className="hover:underline block">Source Code</Link>
        </div>

        {/* Col 2 */}
        <div className="space-y-2 text-center">
          <Link to="/research" className="hover:underline block">View Research</Link>
          <Link to="/reachus" className="hover:underline block">Reach us</Link>
        </div>

        {/* Col 3 */}
        <div className="space-y-4 text-center sm:text-left md:pl-20">
          <p className="font-semibold">Connect with the team</p>
          <p>Pritam Kumar Sarangi</p>
          <div className="flex justify-center sm:justify-start gap-4 text-xl">
            <Link to="https://www.linkedin.com/in/pritam-kumar-sarangi-7b952a232/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
            <Link to="https://github.com/prrriiitam" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
            <Link to="https://x.com/prrriiitam" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
