import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="/img/top-icon.jpeg" alt="" />
        <p>
          Thank you very much for visiting my blog! <br /> I’m Saya from Japan.
          I’m now studying IT in Adelaide as a postgraduate student.
          <br />
          I also work as a head barista and love bringing smiles to people with
          a single cup of coffee. In my free time, I enjoy yoga, pilates, and
          exploring local cafes!
          <br />
          <br />
          Through this blog, I hope it will help me get into the habit of
          writing in English and encourage me to keep learning and improving.{" "}
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Barista</li>
          <li className="sidebarListItem">Study</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-github"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
