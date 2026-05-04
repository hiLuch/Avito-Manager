// Секция примеров: показывает типовые сценарии использования приложения.
import { Col } from 'antd';
import { MessageOutlined, ProfileOutlined, SyncOutlined } from '@ant-design/icons';
import Section from '../../components/Section';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { CardsRow, CardText, IconBox, ScenarioCard, ScreenshotBox } from './ExamplesSection.styles';

const examples = [
  {
    icon: <ProfileOutlined />,
    title: 'Контроль объявлений',
    text: 'Видно, какие объявления активны, где нужен апдейт, что просело и что требует внимания.',
  },
  {
    icon: <MessageOutlined />,
    title: 'Работа с заявками',
    text: 'Менеджер быстрее понимает, кому ответить, где горячий клиент и какие диалоги нельзя потерять.',
  },
  {
    icon: <SyncOutlined />,
    title: 'Единый процесс',
    text: 'Команда работает не по памяти и заметкам, а по понятному потоку: заявка, статус, действие, результат.',
  },
];

function ExamplesSection() {
  return (
    <Section
      id="examples"
      eyebrow="Примеры"
      title="Где Avito Manager сразу дает пользу"
      description="Секция сделана так, чтобы вы могли вставить реальные скриншоты MVP и показать клиенту не абстрактную идею, а рабочие сценарии."
    >
      <CardsRow gutter={[20, 20]}>
        {examples.map((item) => (
          <Col xs={24} md={8} key={item.title}>
            <ScenarioCard bordered={false}>
              <IconBox>{item.icon}</IconBox>
              <h3>{item.title}</h3>
              <CardText>{item.text}</CardText>
            </ScenarioCard>
          </Col>
        ))}
      </CardsRow>
      <ScreenshotBox>
        <ImagePlaceholder label="Коллаж из 2–3 скриншотов: объявления, заявки, статусы" height="380px" />
      </ScreenshotBox>
    </Section>
  );
}

export default ExamplesSection;
