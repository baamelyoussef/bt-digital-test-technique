// @ts-nocheck

import React from "react";
import {
  Section,
  Title,
  Text,
  Box,
  BoxContent,
  Card,
  CardContent,
  Icon,
  Rows,
  Row,
  Column,
  Columns,
  Link,
} from "@trilogy-ds/react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import EcoMobileSolution from "@/app/assets/icons/EcoMobileSolution";

const EcofriendlyFixSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");

  

  const titleStyle = {
    backgroundColor: "#25465f",
    position: "absolute",
    left: 0,
    right: 0,
    marginInline: "auto",
    width: isMobile ? "50%" : "15%",
    paddingInline: "16px",
    top: -20,
  };

  return (
    <Section id="expressfix" backgroundColor="MAIN">
      <Rows>
        <Row className="ecofriendly-fix-svg">
          <EcoMobileSolution />
        </Row>
        <Row>
          <Title
            accessibilityLabel="ecofriendly-fix-title"
            typo="has-text-white  has-text-centered"
            level={2}
          >
            Réparer son téléphone, c&apos;est aussi un geste
            <br />
            pour l&apos;environnement
          </Title>
        </Row>
        <Row>
          <Title
            accessibilityLabel="ecofriendly-fix-title"
            typo="has-text-white has-text-centered"
            className="ecofriendly-fix-title"
            level={5}
          >
            Prolongez la durée de vie
            de votre téléphone :
          </Title>
        </Row>
        <Row>
          <Columns align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER">
            <Column size={9}>
              <Box className="ecofriendly-fix-box">
                <BoxContent backgroundColor="MAIN">
                  <Title
                    typo="has-text-white has-text-centered"
                    level={3}
                    style={titleStyle}
                  >
                    Comment ?
                  </Title>

                  <div className="columns multiline mobile scrollable desktop-layout">
                    
                      <Card fullheight className="desktop-card">
                        <CardContent>
                          <Icon
                            name="tri-mobile-up-down"
                            className="icon-color"
                            size={isMobile ? "medium" : "large"}
                          />
                          <Title level={4} inverted>
                            Environnement
                          </Title>
                          <Text level={1} inverted>
                            En évitant la production d&apos;un nouveau mobile et
                            ses conséquences sur l&apos;environnement.
                          </Text>
                        </CardContent>
                      </Card>
                    
                      <Card fullheight className="desktop-card">
                        <CardContent>
                          <Icon
                            name="tri-recycle"
                            className="icon-color"
                            size={isMobile ? "medium" : "large"}
                          />
                          <Title level={4} inverted>
                            Recyclage
                          </Title>
                          <Text level={1} inverted>
                            En permettant le{" "}
                            <Link
                              inverted
                              blank
                              href="https://www.bouyguestelecom.fr/choisir-bouygues-telecom/recyclage"
                            >
                              recyclage
                            </Link>{" "}
                            des pièces changées suite à la réparation de votre
                            téléphone.
                          </Text>
                        </CardContent>
                      </Card>
                  </div>
                </BoxContent>
              </Box>
            </Column>
          </Columns>
        </Row>
        <Row>
          <Column>
            <Text
              accessibilityLabel="ecofriendly-fix-note"
              typo="has-text-centered"
              className="ecofriendly-fix-note"
              inverted
              level={3}
            >
              *Source : Green Alliance
            </Text>
          </Column>
        </Row>
      </Rows>
    </Section>
  );
};

export default EcofriendlyFixSection;
