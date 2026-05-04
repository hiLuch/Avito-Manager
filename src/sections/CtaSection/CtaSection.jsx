// Финальный CTA-блок: подталкивает пользователя открыть заявку на демонстрацию.
import { Button } from 'antd';
import Section from '../../components/Section';
import { CtaBox, CtaText, CtaTitle, FormBox, FormStack } from './CtaSection.styles';

function CtaSection({ onDemoClick }) {
  return (
    <Section id="cta" compact>
      <CtaBox>
        <div>
          <CtaTitle>Покажите клиенту не идею, а готовую систему для роста продаж</CtaTitle>
          <CtaText>
            Замените контакты, вставьте скриншоты и видео — лендинг можно использовать как основу для первых продаж Avito Manager.
          </CtaText>
        </div>

        <FormBox>
          <FormStack direction="vertical" size="middle">
            <CtaText>
              Откройте форму заявки в модальном окне — так клиент не уходит вниз по странице и быстрее оставляет контакт.
            </CtaText>

            <Button type="primary" size="large" block onClick={onDemoClick}>
              Оставить заявку
            </Button>
          </FormStack>
        </FormBox>
      </CtaBox>
    </Section>
  );
}

export default CtaSection;
