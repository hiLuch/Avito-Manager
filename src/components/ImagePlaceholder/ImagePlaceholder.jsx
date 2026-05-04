// Плейсхолдер для будущих скриншотов и иллюстраций: замените блок на img с вашим src.
import { PictureOutlined } from '@ant-design/icons';
import { Content, IconWrap, Placeholder } from './ImagePlaceholder.styles';

function ImagePlaceholder({ label = 'Место для изображения', height }) {
  return (
    <Placeholder $height={height}>
      <Content>
        <IconWrap>
          <PictureOutlined />
        </IconWrap>
        <strong>{label}</strong>
        <span>Позже вставьте сюда скриншот интерфейса, баннер или иллюстрацию.</span>
      </Content>
    </Placeholder>
  );
}

export default ImagePlaceholder;
