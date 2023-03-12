import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle, } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyles";
import { Skills } from './Skills'

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with multiple technologies as a developer to develop & maintain my projects.
    </SectionText>
    <div className="skill-container">
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
          </ListContainer>
        </ListItem>
      ))}
    </div>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
