// @ts-nocheck
import React, { useState, useRef } from "react";
import {
  Button,
  Container,
  Section,
  Title,
  Text,
  Box,
  BoxContent,
  Card,
  CardContent,
  Icon,
  Columns,
  Column,
  Rows,
  Row,
} from "@trilogy-ds/react";
import PhoneFixSVG from "@/app/assets/icons/PhoneFix";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const ExpressFixSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 959px)");

  const cardData = [
    {
      icon: "tri-users",
      title: "Ouvert à tous",
      description: "Que vous soyez client Bouygues Telecom ou non !",
      footnote: "*2 fois par an !",
    },
    {
      icon: "tri-france",
      title: "Partout en France",
      description: "Le service est accessible dans toutes nos boutiques",
    },
    {
      icon: "tri-calendar",
      title: "Express",
      description:
        "Entre 1 et 5 jours, et pour près d'un client sur 2, la réparation est réalisée en 24h !",
    },
    {
      icon: "tri-mobile-tools",
      title: "Garantie de qualité",
      description:
        "Réparation réalisée par notre partenaire WiFix et garantie 1 an (i)",
    },
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50 && currentSlide < cardData.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (diff < -50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    touchStartX.current = null;
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };
  const titleStyle = {
    backgroundColor: "#25465f", 
    position: "absolute",       
    left: 0,
    right: 0,
    marginInline: "auto",
    width: isMobile ? "80%" : "50%",
    paddingInline: "16px",
    top: -20, 
  };
  
  const MobileView = () => (
    <div
      className="mobile-slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="expressfix-slider-container"
        style={{
          display: "flex",
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="slider-item"
            style={{
              width: "100%",
              flexShrink: 0,
              padding: "0 16px",
              userSelect: "none",
              textAlign: "center",
            }}
          >
            <Container  className="mobile-card">
              <CardContent>
                <Icon name={card.icon}  size="medium" className="icon-color"/>
                <Title level={4} inverted>
                  {card.title}
                </Title>
                <Text level={1} inverted>
                  {card.description}
                </Text>
                {card.footnote && <Text level={3}>{card.footnote}</Text>}
              </CardContent>
            </Container>
          </div>
        ))}
      </div>

      
      <div className="dots-container">
        {cardData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`dot ${currentSlide === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="columns multiline scrollable desktop-layout">
      {cardData.map((card, index) => (
        <div key={index} className="column size-4">
          <Card fullheight className="desktop-card">
            <CardContent>
              <Icon
                name={card.icon}
                className="icon-color"
                size={isMobile ? "small" : "large"}
              />
              <Title level={4} inverted>
                {card.title}
              </Title>
              <Text level={1} inverted>
                {card.description}
              </Text>
              {card.footnote && <Text level={3}>{card.footnote}</Text>}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <Section id="expressfix" backgroundColor="MAIN">
      <Rows className="express-fix-container">
        <Row>
          <Column size={4} align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
            <PhoneFixSVG />
          </Column>
        </Row>
        <Row>
          <Title
            accessibilityLabel="express-fix-title"
            typo="has-text-white express-fix-title has-text-centered"
            level={2}
          >
            Bénéficiez du service <br /> de réparation express en boutique*
          </Title>
        </Row>
        <Row>
          <Column size={4} align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
            <Button className="express-fix-cta-btn">Trouver ma boutique</Button>
          </Column>
        </Row>
        <Row>
          <Columns
            mobile
            multiline
            align="ALIGNED_CENTER"
            className="is-fullwidth"
            gap={10}
          >
            <Column
              size={9}
              mobileSize={12}
              className="express-fix-space"
            >
              <Box >
                <BoxContent className="express-fix-box" backgroundColor="MAIN">
                  <Title
                    typo="has-text-white has-text-centered"
                    level={3}
                    style={titleStyle}
                  >
                    Avec Bouygues Telecom, la réparation c&apos;est…
                  </Title>

                  {isMobile ? <MobileView /> : <DesktopView />}
                </BoxContent>
              </Box>
            </Column>
          </Columns>
        </Row>
        <Row>
          <Text
            accessibilityLabel="express-fix-note"
            typo="has-text-white"
            className="express-fix-note"
            level={3}
          >
            * Retrouvez les conditions et informations détaillées du service de
            réparation dans la FAQ accessible en bas de page.
          </Text>
        </Row>
      </Rows>
    </Section>
  );
};

export default ExpressFixSection;
