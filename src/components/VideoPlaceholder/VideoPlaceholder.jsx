// Плейсхолдер для промо-видео: замените блок на iframe, video или embed-код.
import { PlayCircleOutlined } from '@ant-design/icons';
import { Frame, Play, PlayIcon, Text } from './VideoPlaceholder.styles';

function VideoPlaceholder() {
  return (
    <Frame>
      <Play>
        <PlayIcon>
          <PlayCircleOutlined />
        </PlayIcon>
        <h3>Место для видео-демонстрации</h3>
        <Text>Покажите, как Avito Manager помогает вести объявления, заявки и продажи в одном окне.</Text>
      </Play>
    </Frame>
  );
}

export default VideoPlaceholder;
