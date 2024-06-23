import 'web-animations-js/web-animations-next-lite.min';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import NavBar from './components/NavigationBar.jsx';
import FallbackSpinner from './components/FallbackSpinner.jsx';
import endpoints from './constants/endpoints.js';
import Footer from './components/Footer.jsx';
import { useTheme } from './theme/ThemeContext.jsx';
import { darkTheme } from './theme/theme.js';
import ScrollTop from './components/ScrollTop.jsx';
import InnovativeCursor from './Cursor.jsx';
// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
// import ScrollTimeline from 'scroll-timeline/dist/scroll-timeline.es.js';

const MainApp = () => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.routes, { method: "GET" });
        const res = await response.json();
        setData(res);
      } catch (err) {
        console.error("Routes fetch Error", err);
      }
    };
    fetchData();
  }, []);




  return (
    <div className="MainApp">
      <NavBar />
      <InnovativeCursor />
      <section className="main"
        style={{
          background: theme.background,
          color: theme.color,
          lineColor: theme.lineColor
        }}>
        <div id={theme === darkTheme ? 'stars' : ''} />
        <div id={theme === darkTheme ? 'stars2' : ''} />
        <div id={theme === darkTheme ? 'stars3' : ''} />
        
        {data && data.sections && data.sections.map((section, index) => {
          const Component = lazy(() => import(`./components/${section.component}`));
          return (
            <Suspense key={section.headerTitle} fallback={<FallbackSpinner />}>
              <div className="section_container" id={section.path}>
                <Component header={section.headerTitle} />
              </div>
            </Suspense>
          );
        })}
      </section>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default MainApp;
