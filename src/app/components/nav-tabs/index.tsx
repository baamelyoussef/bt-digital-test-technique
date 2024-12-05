import React, { useEffect, useState, useRef } from "react";
import { Container, Tabs, TabList, Tab } from "@trilogy-ds/react";
import "./style.css";

const sections = [
  { id: "wefix", label: "WeFix" },
  { id: "expressfix", label: "Réparation express en boutique" },
  { id: "constumer_benefits", label: "Avantages client" },
  { id: "packages", label: "Forfaits" },
  { id: "insurance", label: "L'assurance" },
  { id: "faq", label: "Une question ?" },
];

const NavTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("wefix");
  const tabsRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current && placeholderRef.current) {
        const tabsTop = tabsRef.current.getBoundingClientRect().top;

        if (tabsTop <= 0) {
          placeholderRef.current.style.height = `${tabsRef.current.offsetHeight}px`;
        } else {
          placeholderRef.current.style.height = "0px";
        }
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleTabClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };

  return (
    <>
      <div ref={placeholderRef} className="tabs-placeholder"></div>

      <Container id="tabs-section" className={`tabs sticky`} ref={tabsRef}>
        <Tabs>
          <TabList>
            {sections.map((section) => (
              <Tab
                key={section.id}
                label={section.label}
                href={`#${section.id}`}
                active={activeTab === section.id}
                onClick={(e) => {
                  const event = e as React.MouseEvent<HTMLAnchorElement>;
                  event.preventDefault(); // Prevent default anchor behavior
                  handleTabClick(section.id);
                }}
              />
            ))}
          </TabList>
        </Tabs>
      </Container>
    </>
  );
};

export default NavTabsSection;
