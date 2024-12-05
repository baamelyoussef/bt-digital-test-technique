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
  Row,
  Rows,
} from "@trilogy-ds/react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const PackagesSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");

  return (
    <Section
      id="packages"
      backgroundColor="MAIN_FADE"
      className="packages-section"
    >
      <Rows>
        <Row>
          <Title
            accessibilityLabel="hero-title"
            typo="has-text-main has-text-weight-bold has-text-centered"
            className="packages-title"
            level={2}
          >
            {" "}
            Nos forfaits, pour vous
          </Title>
        </Row>
        <Row>
          <Columns
            multiline
            mobile
            className="packages-container"
            align="ALIGNED_CENTER"
          >
            <Column size={ 4} mobileSize={12}>
              <Card fullheight className="packages-card">
                <CardContent className="packages-card-content">
                  <div className="packages-card-icons">
                    {" "}
                    <Icon
                      name="tri-sim-card"
                      size={isMobile ? "medium" : "large"}
                    />
                    <Icon
                      name="tri-mobile"
                      size={isMobile ? "medium" : "large"}
                    />
                  </div>
                  <Title level={4}>
                    {" "}
                    Découvrir nos forfaits Bouygues Telecom
                  </Title>
                  <Text level={1}>
                    {" "}
                    Bénéficiez d&apos;un réseau mobile de qualité,
                    d&apos;avantages et de services exclusifs et d&apos;un
                    nouveau smartphone.
                  </Text>
                  <Button variant="CONVERSION"> En profiter </Button>
                </CardContent>
              </Card>
            </Column>
            <Column size={4} mobileSize={12}>
              <Card fullheight className="packages-card">
                <CardContent className="packages-card-content">
                  <Icon
                    name="tri-sim-card"
                    size={isMobile ? "medium" : "large"}
                  />

                  <Title level={4}>
                    Découvrir nos forfaits B&YOU sans engagement
                  </Title>
                  <Text level={1}>
                    {" "}
                    Profitez de la qualité de notre réseau avec nos forfaits
                    B&YOU sans engagement.
                  </Text>
                  <Button variant="CONVERSION"> En profiter </Button>
                </CardContent>
              </Card>
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  );
};

export default PackagesSection;
