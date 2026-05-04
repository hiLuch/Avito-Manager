// Секция пользы: переводит функции продукта в понятный бизнес-результат.
import { Col } from 'antd';
import { ClockCircleOutlined, EyeOutlined, TeamOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Section from '../../components/Section';
import { BenefitCard, CardsRow, CardText, IconBox } from './BenefitsSection.styles';

const benefits = [
  ['Быстрее обработка', 'Меньше времени уходит на поиск нужной заявки, объявления или переписки.', <ClockCircleOutlined />],
  ['Видимость процессов', 'Руководитель понимает, что происходит в продажах, без постоянных вопросов менеджерам.', <EyeOutlined />],
  ['Командная работа', 'Новые сотрудники быстрее входят в процесс, потому что логика работы уже собрана в системе.', <TeamOutlined />],
  ['Меньше потерь', 'Снижается шанс забыть клиента, пропустить ответ или вовремя не обновить объявление.', <ThunderboltOutlined />],
];

function BenefitsSection() {
  return (
    <Section
      id="benefits"
      eyebrow="Польза"
      title="Не просто удобный интерфейс, а порядок в продажах с Авито"
      description="Главная идея лендинга: продавать не набор кнопок, а экономию времени, контроль и рост конверсии из входящих обращений."
    >
      <CardsRow gutter={[20, 20]}>
        {benefits.map(([title, text, icon]) => (
          <Col xs={24} sm={12} key={title}>
            <BenefitCard bordered={false}>
              <IconBox>{icon}</IconBox>
              <h3>{title}</h3>
              <CardText>{text}</CardText>
            </BenefitCard>
          </Col>
        ))}
      </CardsRow>
    </Section>
  );
}

export default BenefitsSection;
