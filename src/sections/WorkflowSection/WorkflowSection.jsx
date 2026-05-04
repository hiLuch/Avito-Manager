// Секция процесса: показывает будущему клиенту простую схему внедрения и работы.
import { Steps } from 'antd';
import Section from '../../components/Section';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { ScreenshotBox, StepsBox } from './WorkflowSection.styles';

function WorkflowSection() {
  return (
    <Section
      id="workflow"
      eyebrow="Как работает"
      title="От хаоса в операционке к понятному рабочему циклу"
      description="Эта секция нужна, чтобы клиент быстро понял: внедрение не выглядит страшно, а процесс работы логичный."
    >
      <StepsBox>
        <Steps
          direction="vertical"
          items={[
            {
              title: 'Подключаете рабочие процессы',
              description: 'Добавляете объявления, менеджеров и нужные статусы под вашу схему продаж.',
            },
            {
              title: 'Менеджеры ведут заявки в системе',
              description: 'Каждое обращение получает понятный статус и следующее действие.',
            },
            {
              title: 'Руководитель видит картину',
              description: 'Можно быстрее понять, где узкое место: объявления, скорость ответа или обработка клиентов.',
            },
          ]}
        />
      </StepsBox>
      <ScreenshotBox>
        <ImagePlaceholder label="Скриншот схемы процесса или Kanban/таблицы" height="360px" />
      </ScreenshotBox>
    </Section>
  );
}

export default WorkflowSection;
