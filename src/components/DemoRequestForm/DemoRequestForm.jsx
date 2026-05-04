// Форма заявки на демо: переиспользуется внутри модального окна и может быть подключена в секциях.
import { Button, Form, Input, Select } from 'antd';
import { FormWrapper } from './DemoRequestForm.styles';

const { TextArea } = Input;

function DemoRequestForm({ compact = false, onFinish }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    if (onFinish) {
      onFinish(values);
    }

    form.resetFields();
  };

  return (
    <FormWrapper $compact={compact}>
      <Form form={form} layout="vertical" requiredMark={false} onFinish={handleFinish}>
        <Form.Item name="name" label="Имя" rules={[{ required: true, message: 'Введите имя' }]}>
          <Input placeholder="Например, Денис" />
        </Form.Item>

        <Form.Item name="phone" label="Телефон или Telegram" rules={[{ required: true, message: 'Оставьте контакт для связи' }]}>
          <Input placeholder="+7 или @username" />
        </Form.Item>

        <Form.Item name="business" label="Что продаёте на Авито">
          <Select
            placeholder="Выберите направление"
            options={[
              { value: 'auto', label: 'Авто / запчасти' },
              { value: 'realty', label: 'Недвижимость' },
              { value: 'services', label: 'Услуги' },
              { value: 'goods', label: 'Товары' },
              { value: 'other', label: 'Другое' },
            ]}
          />
        </Form.Item>

        <Form.Item name="comment" label="Комментарий">
          <TextArea rows={compact ? 3 : 4} placeholder="Сколько объявлений, сколько менеджеров, что хотите автоматизировать" />
        </Form.Item>

        <Button type="primary" htmlType="submit" size="large" block>
          Отправить заявку
        </Button>
      </Form>
    </FormWrapper>
  );
}

export default DemoRequestForm;
