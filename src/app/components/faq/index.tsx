import React from "react";
import {
  Section,
  Title,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Column,
  Columns,
  Rows,
  Row,
} from "@trilogy-ds/react";
import "./style.css";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const FAQSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 959px)");

  const faqItems = [
    {
      id: "ONE",
      question: "Comment faire réparer son téléphone chez Bouygues Telecom ?",
      bodyId: "faq-body-one",
    },
    {
      id: "TWO",
      question: "Quels types de réparations propose le service ?",
      bodyId: "faq-body-two",
    },
    {
      id: "THREE",
      question: "Combien de temps prendra la réparation de mon téléphone ?",
      bodyId: "faq-body-three",
    },
    {
      id: "FOUR",
      question: "La réparation est-elle garantie ?",
      bodyId: "faq-body-four",
    },
    {
      id: "FIVE",
      question:
        "Quels sont mes avantages si je fais réparer mon téléphone chez Bouygues Telecom ?",
      bodyId: "faq-body-five",
    },
    {
      id: "SIX",
      question: "Quelles marques de téléphones sont réparables ?",
      bodyId: "faq-body-six",
    },
    {
      id: "SEVEN",
      question:
        "Comment faire réparer mon téléphone tout en préservant la garantie ?",
      bodyId: "faq-body-seven",
    },
  ];

  return (
    <Section id="faq" backgroundColor="WHITE">
      <Rows>
        <Row>
          <Columns className="faq-container" align="ALIGNED_CENTER" gap={10}>
            <Column size={4}>
              <Title
                accessibilityLabel="hero-title"
                typo={
                  isMobile
                    ? "has-text-main has-text-weight-bold has-text-centered"
                    : "has-text-main has-text-weight-bold has-text-left"
                }
                className="faq-title"
                level={2}
              >
                Toutes vos questions sur la réparation de téléphone
              </Title>
            </Column>
            <Column size={5} className="faq-accordions">
              <Accordion id="accordion-1">
                {faqItems.map((item) => (
                  <AccordionItem className="accordion-bg" id={item.id} key={item.id}>
                    <AccordionHeader>
                      <Text className="faq-accordion-text">{item.question}</Text>
                    </AccordionHeader>
                    <AccordionBody data-id={item.bodyId}></AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  );
};

export default FAQSection;
