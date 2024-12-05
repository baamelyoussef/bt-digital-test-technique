import {
  Section,
  Title,
  Text,
  Image,
  Columns,
  Column,
  RadiusValues,
} from "@trilogy-ds/react";
import React from "react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";
const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");

  return (
    <Section backgroundColor="MAIN">
      <Columns align="ALIGNED_CENTER" className="is-fullwidth" gap={10}>
        <Column size={4} align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
          <Title
            accessibilityLabel="hero-title"
            typo={
              isMobile
                ? "has-text-white has-text-centered"
                : "has-text-white has-text-left"
            }
            level={1}
          >
            {" "}
            Réparation de votre téléphone
          </Title>

          <Text
            accessibilityLabel="hero-desc-1"
            className="hero-desc"
            typo={isMobile ? "has-text-centered" : "has-text-left"}
            inverted
            level={1}
          >
            Un smartphone cassé ou en panne, ça arrive à tout le monde.{" "}
          </Text>
          <Text
            accessibilityLabel="hero-desc-2"
            className="hero-desc"
            typo={isMobile ? "has-text-centered" : "has-text-left"}
            inverted
            level={1}
          >
            {" "}
            Heureusement, que vous soyez sous garantie ou non,{" "}
            {!isMobile && <br />}on a des{" "}
            <Text markup="span" typo="has-text-weight-bold" level={1}>
              solutions de réparation
            </Text>{" "}
            pour vous!
          </Text>
        </Column>
        <Column size={4} align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
          <Image
            width={548}
            height={isMobile ? 206 : 340}
            className="hero-img"
            radius={RadiusValues.MEDIUM}
            alt="hero-img"
            src={"/images/phone-fix.webp"}
          />
        </Column>
      </Columns>
    </Section>
  );
};

export default HeroSection;
