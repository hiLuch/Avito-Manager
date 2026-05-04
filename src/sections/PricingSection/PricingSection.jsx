// Секция тарифов: заготовка коммерческого блока, который можно адаптировать под будущую модель продаж.
import { Button, Col, Tag } from 'antd';
import Section from '../../components/Section';
import { FeaturesList, PlanCard, PlanName, PlanPrice, PlansRow } from './PricingSection.styles';

const plans = [
  {
    name: 'Старт',
    tag: 'Для проверки гипотезы',
    price: 'от 4 900 ₽',
    points: ['Базовая работа с объявлениями', 'Один рабочий процесс', 'Поддержка при запуске'],
  },
  {
    name: 'Команда',
    tag: 'Популярный',
    price: 'от 14 900 ₽',
    points: ['Несколько менеджеров', 'Статусы и контроль заявок', 'Отчеты по работе команды'],
    featured: true,
  },
  {
    name: 'Бизнес',
    tag: 'Под процессы клиента',
    price: 'по договоренности',
    points: ['Кастомные сценарии', 'Приоритетная поддержка', 'Помощь с внедрением'],
  },
];

function PricingSection({ onDemoClick }) {
  return (
    <Section
      id="pricing"
      eyebrow="Тарифы"
      title="Начните с простого пакета и расширяйте систему по мере роста"
      description="Цены здесь примерные, чтобы лендинг уже выглядел продающим. Их можно заменить после финального решения по монетизации."
    >
      <PlansRow gutter={[20, 20]}>
        {plans.map((plan) => (
          <Col xs={24} md={8} key={plan.name}>
            <PlanCard bordered={false} $featured={plan.featured}>
              <Tag color={plan.featured ? 'green' : 'blue'}>{plan.tag}</Tag>
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>{plan.price}</PlanPrice>
              <FeaturesList>
                {plan.points.map((point) => <li key={point}>{point}</li>)}
              </FeaturesList>
              <Button type={plan.featured ? 'primary' : 'default'} onClick={onDemoClick} block>
                Обсудить запуск
              </Button>
            </PlanCard>
          </Col>
        ))}
      </PlansRow>
    </Section>
  );
}

export default PricingSection;
