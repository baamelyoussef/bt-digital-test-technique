// @ts-nocheck

import React from "react";
import { Section, Title, Text, Card, CardContent, Columns, Column, Icon, Rows, Row } from "@trilogy-ds/react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const CustomerBenefitsSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 959px)');

  const benefits = [
    {
      title: "-30% de remise* valables sur toutes les réparations",
      description: "et -20% de remise sur les autres réparations effectuées lors de la même prise en charge",
      extra: "*2 fois par an !",
      highlited:false,
      icon: "tri-sun-euro",
    },
    {
      title: "On vous prête un smartphone",
      description: "le temps de la réparation (i)",
      extra: "",
      highlited:false,
      icon: "tri-mobile",
    },
    {
      title: "Faites profiter de la remise de 30% à un proche",
      description: "que le téléphone ait été acheté chez Bouygues Telecom ou ailleurs !",
      extra: "",
      highlited:true,
      icon: "tri-users",
    },
  ];

  return (
    <Section id="constumer_benefits" backgroundColor="NEUTRAL_FADE">
      <Rows>

        <Row>
        <Title
          accessibilityLabel="hero-title"
          typo="has-text-main has-text-weight-bold has-text-centered"
          className="customer-benefits-title"
          level={2}
        >
          Et encore plus d&apos;avantages si vous êtes client {!isMobile&&<br/>}
          Bouygues Telecom !
        </Title>
        </Row>
        <Row>
        <Columns multiline align="ALIGNED_CENTER" className="customer-benefits-cards">
        
          {benefits.map((benefit, index) => (
            <Column key={index} size={isMobile?undefined:3} align="ALIGNED_CENTER">
              <Card fullheight className={benefit.highlited?"customer-benefits-card customer-benefits-highlighted-card":"customer-benefits-card"} > 
                <CardContent >
                  <Icon name={benefit.icon} size="large" className="customer-benefits-card-icon"/>

                  <Title level={4}>{benefit.title}</Title>
                  <Text level={1}>{benefit.description}</Text>
                  {benefit.extra && <Text level={3}> {benefit.extra}</Text>}
                </CardContent>
              </Card>
            </Column>
          ))}
        </Columns>
        </Row>
      </Rows>
        
      
    </Section>
  );
};

export default CustomerBenefitsSection;
