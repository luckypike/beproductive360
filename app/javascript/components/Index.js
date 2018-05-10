import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

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

    this.state = {
      lections: null
    }

    this.swipers = undefined;
  }

  componentDidMount() {
    this.fetchLections();
  }

  componentWillUnmount() {
  }

  fetchLections() {
    axios.get(this.props.list_lections_path + '.json')
      .then(res => {
        let lections = {};
        res.data.map((l) =>  {
          lections[l.id] = l;
        });


        this.setState({
          lections: lections
        }, function() {
          const swipers = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });

          this.swipers = swipers;
        });
      });
  }

  render () {
    const lections = this.state.lections;

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
                    08:00 – 11:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Прибытие, размещение и регистрация участников
                  </div>

                  <div className="section_content_place">
                    Отели Нижнего Новгорода
                  </div>

                  <div className="section_content_item">
                    <p>
                      В зоне ресепшн аккредитованных отелей присутствуют волонтеры в футболках с логотипом форума, которые координируют делегатов по времени и месту отправления шаттлов до площадки Форума.
                    </p>
                    <p>
                      Время отправления шаттлов: с 10:30 до  10:50 от аккредитованных отелей до технопарка «Анкудиновка»
                    </p>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    11:00 – 12:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Регистрация участников Форума, приветственный кофе
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    12:00 – 12:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Торжественное открытие форума
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>

                  <div className="section_content_item with_bl">
                    Горьков С.Н., Председатель правления Внешэкономбанк
                  </div>

                  <div className="section_content_item with_bl">
                    Никитин Г.С., Врио Губернатора Нижегородской области
                  </div>

                  <div className="section_content_item with_bl">
                    Орешкин М.С., и. о. Министра экономического развития Российской Федерации
                  </div>
                </div>
              </div>

              {lections &&
                <div className="section">
                  <div className="section_time">
                    <span>
                      12:45 – 14:30
                    </span>
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Сессия 1: Истории успеха и цели
                    </div>

                    <div className="section_content_place">
                      Технопарк «Анкудиновка»
                    </div>

                    <div className="section_content_slider">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item goverment">Государственное управление</div>
                            </div>

                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[1].text_md}} />
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item industry">Промышленность</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[3].text_md}} />
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item building">Строительство</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[5].text_md}} />
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item medical">Здравоохранение</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[7].text_md}} />
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item education">Образование</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[9].text_md}} />
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item social">Социальная защита</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[12].text_md}} />
                          </div>
                        </div>

                        <div className="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                </div>
              }

              <div className="section">
                <div className="section_time">
                  <span>
                    14:30 – 15:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title">
                    Обед
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    16:00 – 17:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Пленарное заседание Форума
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>

                  <div className="section_content_item with_bl">
                    Модератор: определяется
                  </div>

                  <div className="section_content_item with_bl">
                    Спикеры:
                    <ul>
                      <li>
                        Андреев А.Г., генеральный директор ОАО ПНППК;
                      </li>
                      <li>
                        Горьков С.Н., председатель Внешэкономбанка;
                      </li>
                      <li>
                        Когогин C.А., генеральный директор ПАО «КамАз»;
                      </li>
                      <li>
                        Когогин C.А., генеральный директор ПАО «КамАз»;
                      </li>
                      <li>
                        Никитин Г.С., Врио Губернатора Нижегородской области;
                      </li>
                      <li>
                        Орешкин М.С., и. о. Министра экономического развития Российской Федерации;
                      </li>
                      <li>
                        Чупшева С.В., генеральный директор Агентства стратегических инициатив;
                      </li>
                      <li>
                        Шмелева Е.В., руководитель Фонда «Талант и успех».
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    17:30 – 18:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title">
                    Кофе-брейк
                  </div>
                </div>
              </div>

              {lections &&
                <div className="section">
                  <div className="section_time">
                    <span>
                      18:00 – 19:00
                    </span>
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Сессия 2: Барьеры и направления действий
                    </div>

                    <div className="section_content_place">
                      Технопарк «Анкудиновка»
                    </div>

                    <div className="section_content_slider">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item goverment">Государственное управление</div>
                            </div>

                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[2].text_md}} />
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item industry">Промышленность</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[4].text_md}} />
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item building">Строительство</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[6].text_md}} />
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item medical">Здравоохранение</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[8].text_md}} />
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item education">Образование</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[10].text_md}} />
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[11].text_md}} />
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item social">Социальная защита</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[13].text_md}} />
                          </div>
                        </div>

                        <div className="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                </div>
              }

              <div className="section">
                <div className="section_time">
                  <span>
                    19:15 – 20:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Подведение итогов дня
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    20:30 – 22:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Торжественный ужин
                  </div>

                  <div className="section_content_place">
                    Концертный зал Премио
                  </div>

                  <div className="section_content_item">
                    Приветствие Губернатора и подведение итогов Форума
                  </div>
                </div>
              </div>
            </div>

            <div className="days_item first">
              <div className="date">
                <span>17</span> мая, четверг
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    09:30 – 10:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Деловой завтрак
                  </div>

                  <div className="section_content_place">
                    Отель Sheraton
                  </div>

                  <div className="section_content_item">
                    <p>
                      Обсуждение итогов Форума (по направлениям: Государственное управление; Промышленность; Строительство; Здравоохранение; Образование; Социальная защита)
                    </p>

                    <p>
                      В зоне ресепшн аккредитованных отелей присутствуют волонтеры в футболках с логотипом форума, которые координируют делегатов по времени и месту отправления шаттлов до площадки Форума.
                    </p>

                    <p>
                      Время отправления шаттлов: с 09:00 до 09:20 от отелей Кулибин, Courtyard by Mariott, Hampton by Hilton, Ibis до отеля Sheraton
                    </p>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    11:00 — 14:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Осмотр и обсуждение образцов Нижегородской области
                    <br />
                    «Бережливая губерния»
                  </div>

                  <div className="section_content_item">
                    Время отправления шаттлов: с 10:30 до 10:50 от отеля Sheraton 5* до организаций–образцов Нижегородской области «Бережливая губерния»
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливое Правительство</b> (проектный офис правительства Нижегородской области)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливое предприятие ГК «Росатом»</b> (АО «ОКБМ Африкантов»;)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливое предприятие приоритетной программы</b> (ЗАО «Узола»)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливый офис</b> (АО «Гринатом»)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливая школа</b> (Православная гимназия им. Александра Невского)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливые поликлиники</b> (Детская городская поликлиника №39, Городская поликлиника №7)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливое строительство</b> (Инжиниринговая компания Атомстройэкспорт)
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    15:00 – 17:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Совещание по результатам исполнения стратегических инициатив Губернатора Нижегородской области, проект «Бережливая губерния»
                  </div>

                  <div className="section_content_item">
                    (участие по приглашениям)
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    с 17:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title">
                    Отъезд участников Форума
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
