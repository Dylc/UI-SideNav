/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SideNavLayout.css';

const SideNavLayout = function () {
  return (
    <div className="grid-container">
      <aside id="sidenav-open">
        <nav>
          <h4>My</h4>
          <a href="#">Dashboard</a>
          <a href="#">Engines</a>
          <a href="#">Profile</a>
          <a href="#">Preferences</a>
          <a href="#">Archive</a>

          <h4>Settings</h4>
          <a href="#">Accessibility</a>
          <a href="#">Theme</a>
          <a href="#">Admin</a>
        </nav>
        <a href="#" id="sidenav-close" title="Close Menu" aria-label="Close Menu" onChange={() => window.history.go(-1)} />
      </aside>
      <main>
        <header>
          <a href="#sidenav-open" id="sidenav-button" className="hamburger" title="Open Menu" aria-label="Open Menu">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20" />
              <rect y="30" width="100" height="20" />
              <rect y="60" width="100" height="20" />
            </svg>
          </a>
          <h1>Site Title</h1>
        </header>
        <article>
          <h2>Totam Header</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consectetur, necessitatibus velit officia ut impedit veritatis temporibus soluta? Totam odit cupiditate facilis nisi sunt hic necessitatibus voluptatem nihil doloribus! Enim.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>

          <h3>Subhead Totam Odit</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>

          <h3>Subhead</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum, amet odio explicabo voluptas eos cum libero, ex esse quasi optio incidunt soluta eligendi labore error corrupti! Dolore, cupiditate porro.</p>
        </article>
      </main>
    </div>
  );
};

export default SideNavLayout;
