import React from "react";

import "./style.css";
import { Card, Section, Title } from "@trilogy-ds/react";

const ReminderSection: React.FC = () => {

  return (
      <Section id="reminder" backgroundColor="MAIN_FADE" className="reminder-section">
        <Card  className="reminder-container">
            <Title typo="has-text-centered">À retenir</Title>
        </Card>
      </Section>
  );
};

export default ReminderSection;
