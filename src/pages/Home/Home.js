import "./Home.css";
import Landing from "./Landing";
import ShowcaseCategories from './ShowcaseCategories';

export default function Home() {
  // window.onscroll = (e) => console.log(e)

  return (
    <div className='home' id="home">
        <ShowcaseCategories/>
        <footer className="footer">
          <p>© 2022 Ayn Laquindanum, All Rights Reserved.</p>
        </footer>
    </div>
  )
}
