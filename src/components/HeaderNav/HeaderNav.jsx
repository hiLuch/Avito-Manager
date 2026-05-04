// Верхнее меню лендинга: быстрые якоря по секциям и кнопка открытия заявки.
import { Button } from 'antd';
import { Header, Inner, Logo, Mark, Nav } from './HeaderNav.styles';

function HeaderNav({ onDemoClick }) {
  return (
    <Header>
      <Inner>
        <Logo href="#top" aria-label="Avito Manager">
          <Mark>AM</Mark>
          Avito Manager
        </Logo>

        <Nav>
          <a href="#examples">Примеры</a>
          <a href="#benefits">Польза</a>
          <a href="#profit">Почему выгодно</a>
          <a href="#workflow">Как работает</a>
          <a href="#pricing">Тарифы</a>
        </Nav>

        <Button type="primary" onClick={onDemoClick}>
          Оставить заявку
        </Button>
      </Inner>
    </Header>
  );
}

export default HeaderNav;
