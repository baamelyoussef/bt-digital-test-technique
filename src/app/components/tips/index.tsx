import React, { useState, useRef } from "react";
import {
  Container,
  Section,
  Title,
  Card,
  CardContent,
  CardImage,
  Link,
  Rows,
  Row,
} from "@trilogy-ds/react";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import "./style.css";

const tipsData = [
  {
    id: 1,
    image: "/images/phone-charging.webp",
    title: "Comment prolonger la vie de son smartphone ?",
  },
  {
    id: 2,
    image: "/images/phone-pool.webp",
    title: "Comment protéger son smartphone de l’oxydation ?",
  },
  {
    id: 3,
    image: "/images/phone-cracked.webp",
    title:
      "Les conseils à suivre avant d’envoyer votre téléphone en réparation",
  },
];

const TipsSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50 && currentIndex < tipsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (diff < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    touchStartX.current = null;
  };

  return (
    <Section id="tips" backgroundColor="MAIN_FADE" className="tips-section">
      <Rows>
        <Row>
          <Title
            accessibilityLabel="hero-title"
            typo="has-text-main has-text-weight-bold has-text-centered"
            className="tips-title"
            level={2}
          >
            Nos astuces pour prendre soin de votre mobile
          </Title>
        </Row>
      </Rows>

      <Container
        className={`tips-container ${isMobile ? "mobile" : "desktop"}`}
      >
        <div
          className="slider-container"
          onTouchStart={isMobile ? handleTouchStart : undefined}
          onTouchEnd={isMobile ? handleTouchEnd : undefined}
        >
          <div
            className="cards-wrapper"
            style={{
              display: "flex",
              transition: "transform 0.3s ease",
              gap: 12,
              transform: `translateX(-${currentIndex * 103}%)`,
            }}
          >
            {tipsData.map((tip, index) => (
              <div
                key={tip.id}
                className={`card-wrapper ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <Card>
                  <CardImage src={tip.image} />
                  <CardContent className="tips-card-content">
                    <Title level={isMobile ? 6 : 5}>{tip.title}</Title>
                    <Link href="https://www.wefix.net/" blank>
                      Visiter WeFix
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {isMobile && (
          <div className="dots-container">
            {tipsData.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default TipsSection;
