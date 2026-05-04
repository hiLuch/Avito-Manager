// Универсальная обертка секций: задает одинаковую ширину, отступы и заголовочный блок.
import { Container, Description, Eyebrow, SectionWrap, Title } from './Section.styles';

function Section({ id, eyebrow, title, description, compact = false, children }) {
  return (
    <SectionWrap id={id} $compact={compact}>
      <Container>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {children}
      </Container>
    </SectionWrap>
  );
}

export default Section;
