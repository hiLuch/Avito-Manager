// Модальное окно заявки: открывает форму демо поверх лендинга без перехода по якорю.
import { Modal, message } from 'antd';
import DemoRequestForm from '../DemoRequestForm';
import { ModalIntro } from './DemoRequestModal.styles';

function DemoRequestModal({ open, onClose }) {
  const handleFinish = (values) => {
    console.log('Demo request:', values); // Здесь позже можно подключить backend, CRM или Telegram-уведомление.

    message.success('Заявка отправлена. Скоро с вами свяжемся.');
    onClose();
  };

  return (
    <Modal
      title="Получить демо Avito Manager"
      open={open}
      onCancel={onClose}
      footer={null}
      width={560}
      destroyOnClose
    >
      <ModalIntro>
        Оставьте контакт — покажем, как приложение помогает контролировать объявления,
        заявки и работу менеджеров без ручного хаоса.
      </ModalIntro>

      <DemoRequestForm compact onFinish={handleFinish} />
    </Modal>
  );
}

export default DemoRequestModal;
