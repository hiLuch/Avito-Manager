// Секция видео: место для короткой демонстрации продукта или записи экрана.
import Section from '../../components/Section';
import VideoPlaceholder from '../../components/VideoPlaceholder';
import { VideoBox } from './VideoSection.styles';

function VideoSection() {
  return (
    <Section
      id="video"
      eyebrow="Видео"
      title="Покажите продукт вживую за 60–90 секунд"
      description="Лучший формат для продаж: короткое видео, где видно проблему, интерфейс и результат для бизнеса."
    >
      <VideoBox>
        <VideoPlaceholder />
      </VideoBox>
    </Section>
  );
}

export default VideoSection;
