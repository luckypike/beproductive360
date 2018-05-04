import React from 'react';
import PropTypes from 'prop-types';

import video from '../images/bg.mp4';

import Logo from '!svg-react-loader!../images/logo_hor.svg';

import MinecLogo from '../images/partners/minec.svg';
import RALogo from '../images/partners/rosatom.svg';
import NizLogo from '../images/partners/niz.svg';


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
    // this.updateSliders();
    // window.addEventListener('resize', this.updateSliders);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.updateSliders);
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
            <div className="days_item second">
              <div className="date">
                <span>16</span> мая, среда
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    09:00 — 19:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Программа Форума уточняется
                  </div>

                  <div className="section_content_item">
                    В ближайшее время подробная программа будет размещена, приносим извинения за неудобства.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              {/*
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
              */}

            </div>

            <div className="days_item first">
              <div className="date">
                <span>17</span> мая, четверг
              </div>

              {/*
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
              */}

              <div className="section">
                <div className="section_time">
                  <span>
                    11:00 — 14:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Осмотр образцовых предприятий Нижегородской области
                  </div>

                  <div className="section_content_item with_bl">
                    <b>«Бережливое» правительство</b> (посещение проектного офиса правительства Нижегородской области)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Образец предприятия с развитой производственной системой</b> (посещение АО «ОКБМ им Африкантова» ГК «Росатом»)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Внедрение методов «бережливого» производства на предприятии-участнике приоритетной программы «Повышение производительности труда»</b> (ООО «Узола»)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Оптимизации офисных процессов</b> (посещение ОАО «Гринатом»)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Оптимизация работы поликлиники</b> (посещение Детской  городской поликлиники №39 и Городской поликлиники №7)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Внедрение «бережливых» технологий в образовательном учреждении</b> (посещение Православной гимназии им. Александра Невского)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Оптимизация процессов проектирования и сооружения объектов</b> (посещение АО ИК «Атомстройэкспорт»  ГК «Росатом»)
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
          </div>
        </div>

        <div className="page_index_logistics">
          <div className="in">
            <div className="in_title">
              Как добраться
            </div>
            <div className="in_list">
              <div className="in_list_item">
                <div className="icons air">
                  1 час
                </div>

                <div className="desc">
                  <strong>От аэропорта</strong>
                  <br />
                  На такси время в пути до исторического центра пл. Минина 1 час. Используйте популярные приложения Яндекс Такси, Uber,  Gett. Для более комфортной поездки закажите трансфер заранее в «Новое такси Нижегородец».
                </div>
              </div>

              <div className="in_list_item">
                <div className="icons rr">
                  20 мин.
                </div>

                <div className="desc">
                  <strong>От ж.-д. вокзала</strong>
                  <br />
                  Нижегородский железнодорожный вокзал практически полностью закрыт на реконструкцию. Строительные работы могут создать дискомфорт.  От вокзала до исторического центра можно добраться на такси или метро до станции Горьковская.
                </div>
              </div>
            </div>
          </div>

          <div className="hotels">
            <div className="hotels_title">
              Где разместиться
            </div>
            <div className="hotels_list">
              <div className="hotels_list_item">
                <div className="icons">
                  от 6900 руб.
                </div>

                <div className="desc">
                  <strong>Sheraton 5*</strong>
                  <br />
                  Расположен в центре Нижнего Новгорода, всего в 2 минутах ходьбы от входа в Кремль.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 5300 руб.
                </div>

                <div className="desc">
                  <strong>Кулибин 5*</strong>
                  <br />
                  Парк-отель «Кулибин» расположен в 2,5 км от Нижегородского кремля.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 6000 руб.
                </div>

                <div className="desc">
                  <strong>Courtyard by Mariott 4*</strong>
                  <br />
                  Отель с фитнес-центром находится в 20 минутах ходьбы от Нижегородского кремля.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 4505 руб.
                </div>

                <div className="desc">
                  <strong>Hampton by Hilton 3*</strong>
                  <br />
                  Расположен в культурно-исторической части Нижнего Новгорода, в 1,7 км от Нижегородского Кремля.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 3600 руб.
                </div>

                <div className="desc">
                  <strong>Ibis 3*</strong>
                  <br />
                  Современный отель расположен в Нижнем Новгороде, всего в 5 минутах ходьбы от Покровской улицы, исторического торгового центра города.
                </div>
              </div>
            </div>
          </div>

          <div className="objects">
            <div className="objects_title">
              Экскурсия по образцовым предприятиям Нижегородской области
            </div>
            <div className="objects_list">
              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    1
                  </div>
                  1,6 км
                </div>

                <div className="desc">
                  <strong>Проектный офис правительства Нижегородской области</strong>
                  <br />
                  Минина, 16А
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    2
                  </div>
                  9,6 км
                </div>

                <div className="desc">
                  <strong>АО «ОКБМ им Африкантова» ГК «Росатом»</strong>
                  <br />
                  Бурнаковский проезд, 15
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    3
                  </div>
                  13 км
                </div>

                <div className="desc">
                  <strong>ООО «Узола»</strong>
                  <br />
                  Ларина, 7а
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    4
                  </div>
                  14 км
                </div>

                <div className="desc">
                  <strong>ОАО «Гринатом»</strong>
                  <br />
                  Проспект Ленина, 93Г
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    5
                  </div>
                  3,8 км и 7,6 км
                </div>

                <div className="desc">
                  <strong>Детская городская поликлиника №39 и Городская поликлиника №7</strong>
                  <br />
                  Тимирязева, 5 и Верхне-Печерская, 6
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    6
                  </div>
                  9,7 км
                </div>

                <div className="desc">
                  <strong>Православная гимназия им. Александра Невского</strong>
                  <br />
                  Московское шоссе, 106а
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    7
                  </div>
                  1,7 км
                </div>

                <div className="desc">
                  <strong>АО ИК «Атомстройэкспорт» ГК «Росатом»</strong>
                  <br />
                  Площадь Свободы, 3
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page_index_place_wrapper">
          <div className="page_index_place">
            <div className="image"></div>
            <div className="text">
              <div className="title">
                Пленарное заседание Форума и тематические сессии
              </div>
              <div className="desc">
                <span>
                  Технопарк «Анкудиновка»
                </span>
                <br />
                ул. Академика Сахарова, 4
              </div>
            </div>
          </div>
        </div>

        <div className="page_index_partners">
          <div className="list_partners">
            <div className="list_partners_item">
              <img src={MinecLogo} />
            </div>
            <div className="list_partners_item">
              <img src={RALogo} />
            </div>
            <div className="list_partners_item">
              <img src={NizLogo} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Index;
