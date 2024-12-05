// @ts-nocheck

import React from "react";
import {
  Section,
  Title,
  Text,
  Link,
  Card,
  CardContent,
  Columns,
  Column,
  Icon,
  Rows,
  Row,
} from "@trilogy-ds/react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const CustomerProblemsSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");

  return (
    <Section
      id="forfaits"
      backgroundColor="INFO"
      className="customer-problems-section"
    >
      <Rows>
        <Row>
        <Title
          accessibilityLabel="hero-title"
          typo="has-text-weight-bold has-text-centered"
          level={2}
          className="customer-problems-title"
          inverted
        >
          Quel que soit le problème, nous avons la solution
        </Title>
        </Row>
        <Row>
         <Columns  multiline align="ALIGNED_CENTER" className="customer-problems-container">
          <Column  size={5} mobileSize={12}>
            <Card fullheight className="customer-problems-card">
              <CardContent className="customer-problems-card-content">
                <Icon
                  name="tri-mobile-broken"
                  size={"large"}
                />

                <Title level={4}>
                  {" "}
                  Mon téléphone n&apos;est plus sous garantie
                </Title>
                <Text level={1}>
                  Si le téléphone que nous vous avons vendu n&apos;est plus
                  garanti et n&apos;est pas assuré ou si vous n&apos;avez pas
                  acheté votre téléphone chez nous, vous pouvez bénéficier
                  d&apos;une{" "}
                  <Text markup="span" typo="has-text-weight-bold" level={1}>
                    réparation en boutique{" "}
                  </Text>
                  , et{" "}
                  <Text markup="span" typo="has-text-weight-bold" level={1}>
                    à prix réduit{" "}
                  </Text>{" "}
                  si vous détenez un forfait Bouygues Telecom.
                </Text>
                {!isMobile &&<Link className="customer-problems-link" >
                  {" "}
                  Trouver ma boutique{" "}
                </Link>}
              </CardContent>
            </Card>
          </Column>
          <Column    size={5} mobileSize={12}>
            <Card fullheight className="customer-problems-card">
              <CardContent className="customer-problems-card-content">
                <Icon
                  name="tri-hand-mobile"
                  
                  size={"large"}
                />

                <Title level={4}>Mon téléphone est sous garantie</Title>
                <Text level={1}>
                  <Link>Tous nos téléphones</Link> sont  <Text markup="span" typo="has-text-weight-bold" level={1}>
                  garantis 2 ans
                  </Text> . Si vos
                  téléphone tombe en panne pendant ce délais et qu&apos;il
                  s&apos;agit d&apos;un défaut couvert par les garanties légales
                  (par exemple, un défaut de fabrication), <Text markup="span" typo="has-text-weight-bold" level={1}>
                  sa réparation est
                  prise en charge gratuitement
                  </Text> par Bouygues Telecom.
                </Text>
              </CardContent>
            </Card>
          </Column>
        </Columns> 
        </Row>
      </Rows>
        
    </Section>
  );
};

export default CustomerProblemsSection;
