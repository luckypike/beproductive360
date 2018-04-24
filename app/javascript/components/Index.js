import React from 'react';
import PropTypes from 'prop-types';

import video from '../images/bg.mp4';

import Logo from '!svg-react-loader!../images/logo_hor.svg';

import {
  Link
} from 'react-router-dom';


function JoinLink(props) {
  return (
    <Link to={props.join_path}>
      Зарегистрироваться
    </Link>
  );
}

function MembersLink(props) {
  return (
    <a href={props.members_path}>
      Зарегистрироваться
    </a>
  );
}

class Index extends React.Component {
  render () {
    return (
      <div className="page page_index">
        <div className="page_index_header_wrapper">
          <div className="page_index_header">
            <div className="logo">
              <Logo />
            </div>

            <div className="slogan">
              Решения для тех, кто хочет добиться успеха
            </div>

            <div className="place">
              16-17 мая 2018
              <br />
              Нижний Новгород, Технопарк Анкудиновка
            </div>

            <div className="join">
              {this.props.auth ? (
                <MembersLink {...this.props} />
              ) : (
                <JoinLink {...this.props} />
              )}
            </div>
          </div>

          <video className="bgvid" playsInline autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="page_index_intro">
          <div className="when">

          </div>

          <div className="who">
            Форум соберет инициативные группы для обмена опытом
            и обсуждения рабочих вопросов в рамках реализации национальной инициативы «Повышение производительности труда и поддержка занятости»
          </div>
        </div>

        {false &&
          <div className="page_index_schedule">
            <div className="title">
              <h1>
                Программа форума
              </h1>
            </div>

            <div className="days">
              <div className="days_item first">
                <div className="date">
                  16 мая, среда
                </div>

                <div className="section">
                  <div className="section_time">
                    10:00 — 15:00
                  </div>
                  <div className="section_content">
                    <div className="section_content_title bld">
                      Прибытие и размещение участников
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                    15:00 — 18:00
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Осмотр образцовых предприятий Нижегородской области
                    </div>

                    <div className="section_content_item">
                      1. Правительство Нижегородской области
                    </div>
                    <div className="section_content_item">
                      2. АО «ОКБМ Африкантов» (образцовое предприятие ГК «Росатом»)
                    </div>
                    <div className="section_content_item">
                      3. ЗАО «Узола» (образцовое предприятие приоритетной программы)
                    </div>
                    <div className="section_content_item">
                      4. АО «Гринатом» (образцы оптимизации офисных процессов)
                    </div>
                    <div className="section_content_item">
                      5. Образцовая гимназия
                    </div>
                    <div className="section_content_item">
                      6. Образцовая поликлиника
                    </div>
                    <div className="section_content_item">
                      7. Инжиниринговая компания АСЭ (образцы процессов проектирования и сооружения объектов)
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                      19:00 — 21:00
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Торжественный ужин
                    </div>
                    <div className="section_content_item">
                      Приветствие Губернатора и открытие Форума
                    </div>
                  </div>
                </div>
              </div>

              <div className="days_item second">
                <div className="date">
                  17 мая, четверг
                </div>

                <div className="section">
                  <div className="section_time">
                     08:30 — 09:30
                  </div>

                  <div className="section_content">
                    <div className="section_content_title sub">
                      Тематические завтраки: успешный опыт
                    </div>

                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item industry">Промышленность</div>
                      </div>
                      <span>
                        Как мы будем делать digital в 2018? Маркетинг и технологии
                      </span>
                    </div>

                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item goverment">Государственное управление</div>
                      </div>
                      <span>
                        Города будущего. Взгляд на ускоренное развитие экономики
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item city">Управление городом</div>
                      </div>
                      <span>
                        Мастер-класс: Как показать силу своего бренда
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item medical">Здравоохранение</div>
                      </div>
                      <span>
                        Агентский digital-рынок. Проблемы, тренды, развитие
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item education">Образование</div>
                      </div>
                      <span>
                        Медицина и технологии
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item social">Социальная защита</div>
                      </div>
                      <span>
                        Новые Digital инструменты
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item building">Строительство</div>
                      </div>
                      <span>
                        ГосDigital. Практика, реальность, перспективы
                      </span>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                    10:15 — 11:15
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Пленарное заседание форума
                    </div>

                    <div className="section_content_item">
                      Приветственное слово ключевых спикеров форума
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                    11:30 — 13:00
                  </div>

                  <div className="section_content">
                    <div className="section_content_title sub">
                      Блок тематических сессий: способы решений
                    </div>

                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item industry">Промышленность</div>
                      </div>
                      <span>
                        Как мы будем делать digital в 2018? Маркетинг и технологии
                      </span>
                    </div>

                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item goverment">Государственное управление</div>
                      </div>
                      <span>
                        Города будущего. Взгляд на ускоренное развитие экономики
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item city">Управление городом</div>
                      </div>
                      <span>
                        Мастер-класс: Как показать силу своего бренда
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item medical">Здравоохранение</div>
                      </div>
                      <span>
                        Агентский digital-рынок. Проблемы, тренды, развитие
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item education">Образование</div>
                      </div>
                      <span>
                        Медицина и технологии
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item social">Социальная защита</div>
                      </div>
                      <span>
                        Новые Digital инструменты
                      </span>
                    </div>
                    <div className="section_content_item wln">
                      <div className="meta">
                        <div className="meta_item building">Строительство</div>
                      </div>
                      <span>
                        ГосDigital. Практика, реальность, перспективы
                      </span>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                    13:00 — 14:00
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Обед
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                    14:00 — 15:30
                  </div>

                  <div className="section_content">
                    <div className="section_content_title sub">
                      Блок тематических сессий: способы решений
                    </div>

                    <div className="section_content_slide">
                      <div className="section_content_item">
                        <div className="meta">
                          <div className="meta_item industry">Промышленность</div>
                        </div>
                        <span>
                          Как построить экологически безвредный завод?
                        </span>
                      </div>

                      <div className="section_content_item">
                        <div className="meta">
                          <div className="meta_item goverment">Государственное управление</div>
                        </div>
                        <span>
                          Города будущего. Взгляд на ускоренное развитие экономики
                        </span>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="section">
                  <div className="section_time">
                    15:30 — 16:00
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Кофе-брейк
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                    16:00 — 18:00
                  </div>

                  <div className="section_content">
                    <div className="section_content_title sub with_col">
                      Блок тематических сессий: план действий
                    </div>
                  </div>

                </div>

                <div className="section">
                  <div className="section_time">
                    18:15 — 18:45
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Подведение итогов дня
                    </div>
                  </div>
                </div>

                <div className="section">
                  <div className="section_time">
                    20:00 — 22:00
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Ужин
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Index;
