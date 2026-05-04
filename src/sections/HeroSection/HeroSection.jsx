// Первый экран: быстро объясняет ценность продукта и открывает заявку на демо.
import { Button, Space, Tag } from "antd";
import { ArrowRightOutlined, CheckCircleOutlined } from "@ant-design/icons";
import ImagePlaceholder from "../../components/ImagePlaceholder";
import {
  Container,
  Hero,
  Lead,
  MockCard,
  Points,
  Title,
} from "./HeroSection.styles";

function HeroSection({ onDemoClick }) {
  return (
    <Hero id="top">
      <Container>
        <div>
          <Title>
            Управляйте Авито как системой продаж, а не хаосом в чатах
          </Title>

          <Lead>
            Avito Manager помогает команде быстрее обрабатывать объявления,
            заявки и переписки, видеть статус работы и не терять клиентов там,
            где обычно все держится на ручном контроле.
          </Lead>

          <Space size="middle" wrap>
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={onDemoClick}
            >
              Получить демо
            </Button>

            <Button size="large" href="#video">
              Посмотреть как работает
            </Button>
          </Space>

          <Points>
            <Tag icon={<CheckCircleOutlined />} color="success">
              Меньше ручной рутины
            </Tag>
            <Tag icon={<CheckCircleOutlined />} color="success">
              Быстрее реакция на заявки
            </Tag>
            <Tag icon={<CheckCircleOutlined />} color="success">
              Понятнее работа менеджеров
            </Tag>
          </Points>
        </div>

        <MockCard>
          <ImagePlaceholder
            label="Главный скриншот приложения"
            height="460px"
          />
        </MockCard>
      </Container>
    </Hero>
  );
}

export default HeroSection;
