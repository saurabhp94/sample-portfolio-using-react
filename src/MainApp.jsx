import React, { useState, useEffect, lazy, Suspense} from 'react';
import NavBar from './components/NavigationBar';
import FallbackSpinner from './components/FallbackSpinner';
import endpoints from './constants/endpoints';
import Footer from './components/Footer';
import { ThemeProvider } from './theme/ThemeContext.jsx';
import ScrollTop from './components/ScrollTop.jsx';

const MainApp = () => {
  const [data, setData] = useState(null);
  

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
    <ThemeProvider>
    <div className="MainApp">
      <NavBar />
      <section className="main">
        {data &&
          data.sections &&
          data.sections.map((section, index) => {
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
      <Footer/>
    </div>
    </ThemeProvider>
  );
};

export default MainApp;