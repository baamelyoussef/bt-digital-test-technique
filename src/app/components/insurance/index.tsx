// @ts-nocheck

import React from "react";
import {
  Button,
  Section,
  Title,
  Text,
  Card,
  CardContent,
  Columns,
  Column,
  Icon,
  Image,
  Rows,
  Row,
  RadiusValues,
} from "@trilogy-ds/react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const InsuranceSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");

  return (
    <Section
      id="insurance"
      backgroundColor="MAIN_FADE"
      className="insurance-section"
    >
      <Rows>
        <Row>
          <Title
            accessibilityLabel="hero-title"
            typo="has-text-main has-text-weight-bold has-text-centered"
            className="insurance-title"
            level={2}
          >
            L&apos;assurance, la formule tout confort pour votre mobile
          </Title>
        </Row>
        <Row>
          <Columns align="ALIGNED_CENTER" gap={4}>
            {!isMobile && (
              <Column size={5} align="ALIGNED_END">
                <Image
                  width={`${100}%`}
                  height={374}
                  className="hero-img"
                  radius={RadiusValues.MEDIUM}
                  alt="insurance-img"
                  src={"/images/phone-drop.webp"}
                />
              </Column>
            )}
            <Column size={4} mobileSize={12}>
              <Columns multiline={!isMobile} className="is-fullwidth">
                <Column size={12} mobileSize={12}>
                  <Card fullheight className="insurance-card ">
                    <CardContent>
                      <Icon
                        name="tri-sun-euro"
                        size={isMobile ? "medium" : "large"}
                      />

                      <Title level={4}>Aucune dépense</Title>
                      <Text level={1}>à débourser en cas d&apos;incident</Text>
                    </CardContent>
                  </Card>
                </Column>
                <Column size={12} mobileSize={12}>
                  <Card fullheight className="insurance-card">
                    <CardContent>
                      <Icon
                        name="tri-hand-mobile"
                        size={isMobile ? "medium" : "large"}
                      />

                      <Title level={4}>Téléphone assuré</Title>
                      <Text level={1}>
                        en cas de vol, dommages ou oxydation
                      </Text>
                    </CardContent>
                  </Card>
                </Column>
              </Columns>
            </Column>
          </Columns>
        </Row>
        <Row className="insurance-cta">
          <Button className="insurance-cta-btn">
            {" "}
            L&apos;assurance en détail{" "}
          </Button>
        </Row>
      </Rows>
    </Section>
  );
};

export default InsuranceSection;
