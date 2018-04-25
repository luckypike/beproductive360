import React from 'react';
import PropTypes from 'prop-types';

import video from '../images/bg.mp4';

import Logo from '!svg-react-loader!../images/logo_hor.svg';


import {
  Link
} from 'react-router-dom';

import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper';

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
  constructor(props) {
    super(props);

    this.swRef = React.createRef();
    this.swipers = undefined;
  }

  componentDidMount() {
    this.updateSliders();
    window.addEventListener('resize', this.updateSliders);


  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSliders);
  }

  updateSliders = (e) =>  {
    let s = getComputedStyle(this.swRef.current);

    if(s.flexWrap == 'wrap') {
      if(this.swipers != undefined) {
        this.swipers.map(s => s.destroy(true, true));
        this.swipers = undefined;
      }
    } else {
      if(this.swipers == undefined) {
        const swipers = new Swiper('.swiper-container', {
          slidesPerView: 'auto',
        });

        this.swipers = swipers;
      }
    }
  }

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
          <div className="who">
            Форум соберет инициативные группы для обмена опытом
            и обсуждения рабочих вопросов в рамках реализации национальной инициативы «Повышение производительности труда и поддержка занятости»
          </div>
        </div>

        <div className="page_index_schedule">
          <div className="title">
            <h1>
              Программа форума
            </h1>
          </div>

          <div className="days">
            <div className="days_item first">
              <div className="date">
                <span>16</span> мая, среда
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    10:00 — 15:00
                  </span>
                </div>
                <div className="section_content">
                  <div className="section_content_title bld">
                    Прибытие и размещение участников
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    15:00 — 18:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Осмотр образцовых предприятий Нижегородской области
                  </div>

                  <div className="section_content_item">
                    <b>1. «Бережливое» правительство</b> (посещение проектного офиса правительства Нижегородской области)
                  </div>
                  <div className="section_content_item">
                    <b>2. Образец предприятия с развитой производственной системой</b> (посещение АО «ОКБМ им Африкантова» ГК «Росатом»)
                  </div>
                  <div className="section_content_item">
                    <b>3. Внедрение методов «бережливого» производства на предприятии-участнике приоритетной программы «Повышение производительности труда»</b> (ООО «Узола»)
                  </div>
                  <div className="section_content_item">
                    <b>4. Оптимизации офисных процессов</b> (посещение ОАО «Гринатом»)
                  </div>
                  <div className="section_content_item">
                    <b>5. Оптимизация работы поликлиники</b> (посещение Детской  городской поликлиники №39 и Городской поликлиники №7)
                  </div>
                  <div className="section_content_item">
                    <b>6. Внедрение «бережливых» технологий в образовательном учреждении</b> (посещение Православной гимназии им. Александра Невского)
                  </div>
                  <div className="section_content_item">
                    <b>7. Оптимизация процессов проектирования и сооружения объектов</b> (посещение АО ИК «Атомстройэкспорт»  ГК «Росатом»)
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    19:00 — 21:00
                  </span>
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
                <span>17</span> мая, четверг
              </div>

              <div className="section">
                <div className="section_time">
                   <span>
                     08:30 — 09:30
                   </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title sub">
                    Деловой завтрак: истории успеха
                  </div>

                  <div className="section_content_desc">
                    Темы уточняются
                  </div>

                  <div className="section_content_slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item industry">Промышленность</div>
                          </div>
                          <span>
                          </span>
                        </div>

                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item goverment">Государственное управление</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item medical">Здравоохранение</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item education">Образование</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item social">Социальная защита</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item building">Строительство</div>
                          </div>
                          <span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    10:15 — 11:15
                  </span>
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
                  <span>
                    11:30 — 13:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title sub">
                    Сессия 1: цели и барьеры
                  </div>

                  <div className="section_content_desc">
                    Темы уточняются
                  </div>

                  <div className="section_content_slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper" ref={this.swRef}>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item industry">Промышленность</div>
                          </div>
                          <span>
                          </span>
                        </div>

                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item goverment">Государственное управление</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item medical">Здравоохранение</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item education">Образование</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item social">Социальная защита</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item building">Строительство</div>
                          </div>
                          <span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    13:00 — 14:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Обед
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    14:00 — 15:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title sub">
                    Сессия 2: направление ударов
                  </div>

                  <div className="section_content_desc">
                    Темы уточняются
                  </div>

                  <div className="section_content_slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item industry">Промышленность</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item goverment">Государственное управление</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item medical">Здравоохранение</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item education">Образование</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item social">Социальная защита</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item building">Строительство</div>
                          </div>
                          <span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    15:30 — 16:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Кофе-брейк
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    16:00 — 17:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title sub">
                    Сессия 3: план действий
                  </div>

                  <div className="section_content_desc">
                    Темы уточняются
                  </div>

                  <div className="section_content_slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item industry">Промышленность</div>
                          </div>
                          <span>
                          </span>
                        </div>

                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item goverment">Государственное управление</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item medical">Здравоохранение</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item education">Образование</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item social">Социальная защита</div>
                          </div>
                          <span>
                          </span>
                        </div>
                        <div className="section_content_item swiper-slide">
                          <div className="meta">
                            <div className="meta_item building">Строительство</div>
                          </div>
                          <span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    17:00 — 18:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Общая сессия: интервью с лидерами направлений
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    18:00 — 19:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Подведение итогов дня
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
