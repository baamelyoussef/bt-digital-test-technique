import React from "react";
import { Section, Title, Text, Link, Image, Columns, Column, RadiusValues } from "@trilogy-ds/react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import "./style.css";

const WeFixSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");

  return (
    <Section id="wefix" backgroundColor="NEUTRAL_FADE">
      <Title
        accessibilityLabel="hero-title"
        typo="has-text-main has-text-weight-bold has-text-centered"
        level={2}
      >
        Le choix d&apos;un partenaire expert pour votre téléphone
      </Title>
      <Columns align="ALIGNED_CENTER" className="is-fullwidth" gap={6}>
        <Column size={4}>
          <Image
            width={555}
            height={isMobile ? 207 : 340}
            radius={RadiusValues.MEDIUM}
            alt="wefix-img"
            src={"/images/wefix.webp"}
          />
        </Column>
        <Column size={4} align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
          <Title
            accessibilityLabel="hero-desc-1"
            typo="has-text-main has-text-weight-bold"
            level={5}
          >
            WeFix, filiale de Fnac Darty, est le leader français de la
            réparation de smartphones
          </Title>
          <Text accessibilityLabel="hero-desc-2" typo="has-text-main" level={1}>
            Quelle que soit la réparation, WeFix a la solution : écran,
            batterie, WiFi, haut-parleur, écouteurs, appareil photo, connecteur
            de charge, avec des pièces compatibles.
          </Text>
          <Link href="https://www.wefix.net/" blank>
            Visiter WeFix
          </Link>
        </Column>
      </Columns>
    </Section>
  );
};

export default WeFixSection;
