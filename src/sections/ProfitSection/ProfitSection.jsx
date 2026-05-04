// Секция выгоды: объясняет экономический смысл внедрения приложения для бизнеса.
import { Col, Statistic } from 'antd';
import Section from '../../components/Section';
import { StatCard, StatText, StatsRow } from './ProfitSection.styles';

function ProfitSection() {
  return (
    <Section
      id="profit"
      eyebrow="Почему это выгодно"
      title="Бизнес платит не за программу, а за меньшее количество потерянных денег"
      description="Даже небольшое улучшение скорости ответа и контроля объявлений может окупать сервис, если компания регулярно получает заявки с Авито."
    >
      <StatsRow gutter={[20, 20]}>
        <Col xs={24} md={8}>
          <StatCard bordered={false} $variant="green">
            <Statistic title="Меньше ручной рутины" value="до 30%" suffix="времени" />
            <StatText>Ориентир для презентации: замените на реальные цифры после первых клиентов.</StatText>
          </StatCard>
        </Col>
        <Col xs={24} md={8}>
          <StatCard bordered={false} $variant="blue">
            <Statistic title="Быстрее реакция" value="24/7" suffix="контроль" />
            <StatText>Система помогает не держать весь процесс в голове одного менеджера.</StatText>
          </StatCard>
        </Col>
        <Col xs={24} md={8}>
          <StatCard bordered={false}>
            <Statistic title="Прозрачнее управление" value="1" suffix="окно" />
            <StatText>Объявления, заявки, статусы и действия собраны в одном рабочем пространстве.</StatText>
          </StatCard>
        </Col>
      </StatsRow>
    </Section>
  );
}

export default ProfitSection;
