import React from "react";
import {
  Section,
  Text,
  Breadcrumb,
  BreadcrumbItem,
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

const LegalNoticeSection: React.FC = () => {
  return (
    <Section id="constumer_benefits" backgroundColor="WHITE">
      <Rows>
        
        <Row>
          <Columns multiline className="is-fullwidth" align="ALIGNED_CENTER">
            <Column size={9}>
              <Breadcrumb>
                <BreadcrumbItem className="link-color" active>Accueil</BreadcrumbItem>
                <BreadcrumbItem className="link-color" active>Choisir Bouygues Telecom</BreadcrumbItem>
                <BreadcrumbItem active>Recyclage</BreadcrumbItem>
              </Breadcrumb>
            </Column>
          </Columns>
        </Row>

        
        <Row>
          <Columns multiline className="is-fullwidth" align="ALIGNED_CENTER">
            <Column size={9}>
              <Accordion id="accordion-1">
                <AccordionItem id="ONE" className="legal-notice-item">
                  <AccordionHeader className="accordion-bg accordion-responsive">
                    <Text className="legal-text">Mentions légales</Text>
                  </AccordionHeader>
                  <AccordionBody data-id="toto-test-id"></AccordionBody>
                </AccordionItem>
              </Accordion>
            </Column>
          </Columns>
        </Row>
      </Rows>
    </Section>
  );
};

export default LegalNoticeSection;
