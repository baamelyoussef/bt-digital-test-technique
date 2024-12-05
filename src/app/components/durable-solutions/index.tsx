import React from "react";
import { Section, Title, Text, Link, Card, Columns, Column, Image, Rows, Row } from "@trilogy-ds/react";
import "./style.css";

const DurableSolutionsSection: React.FC = () => {
  return (
    <Section id="constumer_benefits" backgroundColor="MAIN_FADE">
      <Rows>
        <Row>
          <Title
            accessibilityLabel="hero-title"
            typo="has-text-main has-text-weight-bold has-text-centered"
            className="durable-solutions-title"
            level={2}
          >
            Ensemble, faisons durer nos smartphones plus longtemps
          </Title>
        </Row>
        <Row>
          <Columns align='ALIGNED_CENTER' verticalAlign='ALIGNED_CENTER'>
            <Column size={9}>
              <Card fullheight>
                <Columns  className="durable-solutions-container" > 
                  <Column size={4}className="durable-solutions-img" align="ALIGNED_CENTER" verticalAlign="ALIGNED_CENTER" >
                    <Image
                      width={263}
                      height={132}
                      alt="hero-img"
                      src={"/images/durable-solutions.webp"}
                      
                    />
                  </Column>
                  <Column size={8}>
                    <Title level={4}>
                      Nos téléphones ont une place particulière dans notre
                      quotidien, en nous accompagnant partout et tout le temps
                    </Title>
                    <Text level={1}>
                      Alors pour s&apos;en séparer le plus tard possible, on
                      lance les <Text markup="span" typo="has-text-weight-bold">Solutions Smartphone Durable</Text> : 4 façons de
                      prolonger la vie de nos mobiles tout en faisant un geste
                      pour la planète.
                    </Text>
                    <Link className="link-color">Découvrir nos solutions</Link>
                  </Column>
                </Columns>
              </Card>
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  );
};

export default DurableSolutionsSection;
