import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import Experience from "../Experience/Experience";
import ContactForm from "../ContactForm/ContactForm";
import Education from "../Education/Education";

export default function Homepage() {
	return (
		<>
		  <Home />
		  <Portfolio />
		  <About />
		  <Experience />
		  <ContactForm />
		  <Education />
		</>
	);
}
